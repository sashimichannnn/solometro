#!/usr/bin/env python3
"""
東京メトロ「エレベーター運転停止のご案内」スクレイパー

メインページから9路線のサブページを巡回し、
駅ごとのエレベーター休止・点検情報を data/elevator_outages.json に出力する。

実行: python scripts/scrape_elevator_outages.py
依存: scripts/requirements.txt 参照
"""
import json
import re
import sys
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

ROOT_URL = "https://www.tokyometro.jp/safety/barrierfree/facilities/elevator_oos/index.html"
BASE = "https://www.tokyometro.jp"
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (compatible; barrier-free-app/1.0; "
        "+https://github.com/) elevator-outage-scraper"
    ),
    "Accept-Language": "ja,en;q=0.8",
}
TIMEOUT = 20
SLEEP = 0.8  # 礼儀的な遅延（サーバー負荷軽減）

# 路線スラッグ → 表示名
LINE_SLUGS = {
    "ginza": "銀座線",
    "marunouchi": "丸ノ内線",
    "hibiya": "日比谷線",
    "tozai": "東西線",
    "chiyoda": "千代田線",
    "yurakucho": "有楽町線",
    "hanzomon": "半蔵門線",
    "namboku": "南北線",
    "fukutoshin": "副都心線",
}


def fetch(url: str) -> str:
    """HTML を取得（リトライ付き）。"""
    last_exc = None
    for attempt in range(3):
        try:
            r = requests.get(url, headers=HEADERS, timeout=TIMEOUT)
            r.raise_for_status()
            r.encoding = r.apparent_encoding or "utf-8"
            return r.text
        except Exception as exc:
            last_exc = exc
            time.sleep(2 ** attempt)
    raise RuntimeError(f"failed to fetch {url}: {last_exc}")


def normalize_text(s: str) -> str:
    """空白を正規化。改行・タブ・連続空白を 1 つの半角空白に。"""
    if s is None:
        return ""
    s = s.replace("\u3000", " ").replace("\xa0", " ")
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def parse_index_date(html: str) -> str | None:
    """メインページから「YYYY年M月D日現在」を抽出。"""
    soup = BeautifulSoup(html, "html.parser")
    text = soup.get_text(" ", strip=True)
    m = re.search(r"(\d{4}年\d{1,2}月\d{1,2}日)現在", text)
    return m.group(1) if m else None


def parse_line_page(html: str, line_name: str) -> list[dict]:
    """
    路線サブページから停止情報を抽出。
    テーブル構造のバリエーションに対応するため、複数のヘッダーパターンを試す。
    """
    soup = BeautifulSoup(html, "html.parser")
    outages: list[dict] = []

    # 全テーブルを走査
    for table in soup.find_all("table"):
        # ヘッダー行を取得
        header_cells = []
        thead = table.find("thead")
        if thead:
            row = thead.find("tr")
            if row:
                header_cells = [normalize_text(c.get_text()) for c in row.find_all(["th", "td"])]
        if not header_cells:
            first_row = table.find("tr")
            if first_row:
                header_cells = [normalize_text(c.get_text()) for c in first_row.find_all(["th", "td"])]

        if not header_cells:
            continue

        # 列インデックスをマップ
        col_idx = {}
        for i, h in enumerate(header_cells):
            if "駅" in h and "name" not in col_idx:
                col_idx["station"] = i
            if "エレベーター" in h or "号機" in h or "場所" in h or "番号" in h or "施設" in h:
                col_idx.setdefault("facility", i)
            if "期間" in h or "日" in h or "時間" in h:
                col_idx.setdefault("period", i)
            if "種別" in h or "区分" in h or "休止" in h or "点検" in h:
                col_idx.setdefault("type", i)
            if "理由" in h or "内容" in h or "原因" in h:
                col_idx.setdefault("reason", i)

        if "station" not in col_idx:
            continue  # 駅名カラムがなければスキップ

        # データ行
        tbody = table.find("tbody")
        rows = tbody.find_all("tr") if tbody else table.find_all("tr")[1:]
        # 行をまたがる rowspan セル値を保持
        last_values: dict[int, str] = {}

        for tr in rows:
            cells = tr.find_all(["td", "th"])
            if not cells:
                continue
            # セルを「論理的な列位置」にマップ（rowspan 考慮）
            values = []
            ci = 0
            cell_iter = iter(cells)
            for logical_i in range(len(header_cells)):
                if logical_i in last_values:
                    values.append(last_values[logical_i])
                    # rowspan が残っていれば消費
                    last_values[logical_i + 100] = last_values.pop(logical_i)  # 一旦退避
                    continue
                try:
                    cell = next(cell_iter)
                except StopIteration:
                    values.append("")
                    continue
                text = normalize_text(cell.get_text(" ", strip=True))
                values.append(text)
                rs = cell.get("rowspan")
                if rs:
                    try:
                        rs_n = int(rs)
                        if rs_n > 1:
                            # 残り (rs_n - 1) 行で再利用
                            last_values[logical_i] = text
                            # マーカーをカウンタ化（簡易）
                    except ValueError:
                        pass

            station = values[col_idx["station"]] if col_idx["station"] < len(values) else ""
            facility = values[col_idx["facility"]] if "facility" in col_idx and col_idx["facility"] < len(values) else ""
            period = values[col_idx["period"]] if "period" in col_idx and col_idx["period"] < len(values) else ""
            kind = values[col_idx["type"]] if "type" in col_idx and col_idx["type"] < len(values) else ""
            reason = values[col_idx["reason"]] if "reason" in col_idx and col_idx["reason"] < len(values) else ""

            if not station or len(station) > 30:
                continue

            # 種別を「休止」「点検」「その他」に正規化
            t = ""
            if "休止" in (kind + facility + reason):
                t = "休止"
            elif "点検" in (kind + facility + reason):
                t = "点検"

            outages.append({
                "line": line_name,
                "stationName": station.replace("駅", ""),
                "facility": facility,
                "period": period,
                "type": t or kind,
                "reason": reason,
            })

    return outages


def main() -> int:
    out_path = Path("data/elevator_outages.json")
    out_path.parent.mkdir(parents=True, exist_ok=True)

    # メインページ
    try:
        index_html = fetch(ROOT_URL)
    except Exception as exc:
        print(f"[ERROR] index fetch failed: {exc}", file=sys.stderr)
        return 1
    data_as_of = parse_index_date(index_html)
    print(f"[INFO] index date: {data_as_of}")

    all_outages: list[dict] = []
    for slug, line_name in LINE_SLUGS.items():
        # 当月
        for sub in ("index.html", "nextmonth.html"):
            url = urljoin(
                BASE,
                f"/safety/barrierfree/facilities/elevator_oos/line_{slug}/{sub}",
            )
            try:
                html = fetch(url)
            except Exception as exc:
                print(f"[WARN] skip {url}: {exc}", file=sys.stderr)
                continue
            rows = parse_line_page(html, line_name)
            month_tag = "今月" if sub == "index.html" else "来月"
            for r in rows:
                r["month"] = month_tag
            print(f"[INFO] {line_name} / {month_tag}: {len(rows)} rows")
            all_outages.extend(rows)
            time.sleep(SLEEP)

    # 重複除去（同じ路線・駅・施設・期間）
    seen = set()
    deduped = []
    for o in all_outages:
        key = (o["line"], o["stationName"], o["facility"], o["period"], o.get("type", ""))
        if key in seen:
            continue
        seen.add(key)
        deduped.append(o)

    # JST 現在時刻
    jst = timezone(timedelta(hours=9))
    now = datetime.now(jst)

    payload = {
        "updatedAt": now.isoformat(),
        "updatedAtJst": now.strftime("%Y-%m-%d %H:%M JST"),
        "source": ROOT_URL,
        "dataAsOf": data_as_of,
        "count": len(deduped),
        "outages": deduped,
    }

    out_path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"[OK] wrote {out_path} ({len(deduped)} outages)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
