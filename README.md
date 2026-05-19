# Tokyo Barrier Free App

東京メトロのバリアフリー情報を表示するWebアプリです。
GitHub Pages で公開、東京メトロ公式の「エレベーター運転停止情報」を毎日自動取得して反映します。

## ファイル構成

```
.
├── index.html                                    # アプリ本体（HTML+JS）
├── data/
│   └── elevator_outages.json                     # スクレイパー出力（自動更新）
├── scripts/
│   ├── scrape_elevator_outages.py                # スクレイパー本体
│   └── requirements.txt                          # Python依存
├── .github/
│   └── workflows/
│       └── scrape-elevator-outages.yml           # 毎日4:00 JST 自動実行
└── README.md
```

## デプロイ（初回）

1. このリポジトリを GitHub にプッシュ
2. **Settings → Pages**：Source を `main` ブランチ／`/` (root) に設定
3. **Settings → Actions → General**：「Workflow permissions」を **Read and write** に設定（Actions が JSON をコミットするため）
4. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

## 自動更新の仕組み

- `.github/workflows/scrape-elevator-outages.yml` が **毎日 04:00 JST** に起動
- `scripts/scrape_elevator_outages.py` を実行
- 東京メトロのエレベーター停止情報ページから9路線分のサブページを巡回しデータを抽出
- `data/elevator_outages.json` に差分があれば自動コミット → GitHub Pages へ反映

手動で更新したい場合は **Actions タブ → Scrape Elevator Outages → Run workflow**。

## ローカル実行

```bash
pip install -r scripts/requirements.txt
python scripts/scrape_elevator_outages.py
```

## データソース

- バリアフリー設備データ：[スムーズメトロ](https://www.smoothmetro.jp/)（2025年11月時点）
- エレベーター停止情報：[東京メトロ公式](https://www.tokyometro.jp/safety/barrierfree/facilities/elevator_oos/index.html)（毎日自動取得）

## 注意

- 都営地下鉄の駅は対応外（東京メトロのデータのみ）
- スクレイピング先のHTML構造が変わるとパース失敗の可能性あり。その場合は `scripts/scrape_elevator_outages.py` の `parse_line_page()` を要調整。
