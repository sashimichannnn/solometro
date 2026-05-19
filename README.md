# 🛗 solometro — 単独乗降できる東京メトロ駅案内

東京メトロのバリアフリー情報を「**ひとりで乗れるか／駅員さんに頼むか**」が一目でわかるように再構成したWebアプリ。
スクリーンリーダーや電動車いす利用者など、ホームと電車の段差・隙間に敏感な利用者を想定。

## ✨ 主な機能

- 🚦 **3段階のステータス表示**（信号機メタファー）
  - 🟢 ひとりで乗れる ／ 🟡 路線・方面による ／ 🔴 駅員さんへ
- 🚪 **ドア単位の段差・隙間判定**を視覚化
  - 「1号車3番扉が基準クリア」のように、車両×ドアの図で確認
  - 基準：段差 3cm 以下／隙間 7cm 以下
- 🛗 **エレベーター近接車両**を黄丸でマーク
- 🗺 **地上エレベーターの場所＋Googleマップ連携**
  - 「徒歩ルート」「地図で見る」「検索語をコピー」3段フォールバック
- 🔍 **検索＋フィルター**（ひとりで乗れる駅／要確認／車いすトイレあり）
- 📱 **モバイル最適化**（フローティングボタン・大きなタップエリア）

## 🗂 データソース

| データ | 出典 | 取得方法 |
| --- | --- | --- |
| ドア単位の段差・隙間情報 | 東京メトロ「スムーズメトロ」PDF（2025年11月版） | 手動で照合・転記 |
| 地上エレベーター位置 | 駅構内図＋Googleマップ | 手動 |
| 多機能トイレの有無 | 各駅情報ページ | 手動 |

> ⚠️ 現状、ドア単位データが**PDF照合済**なのは銀座線（渋谷／表参道／赤坂見附／溜池山王）のみです。他路線は説明文ベース（バッジなし）。

## 📁 ファイル構成

```
solometro/
├── index.html                        # アプリ本体（HTML+JSのみ・依存なし）
├── data/
│   └── elevator_outages.json         # エレベーター停止情報（現状ダミー）
├── scripts/
│   ├── scrape_elevator_outages.py    # 停止情報スクレイパー（現在403で停止中）
│   └── requirements.txt              # Python依存
├── .github/
│   └── workflows/
│       └── scrape-elevator-outages.yml  # 毎日04:00 JST自動実行（現状エラー）
└── README.md
```

## 🚀 公開URL

[https://sashimichannnn.github.io/solometro/](https://sashimichannnn.github.io/solometro/)

## 🛠 ローカルで動かす

`index.html` は完全に単独動作します。ダブルクリックでブラウザ表示OK。

```bash
# もしくは簡易サーバー起動（推奨：data/JSONのfetchが動くため）
python -m http.server 8000
# → http://localhost:8000/index.html
```

## ⚙️ GitHub Pages デプロイ手順

1. リポジトリをパブリックでフォーク／クローン
2. **Settings → Pages**：Source を `main` ブランチ／`/ (root)` に設定
3. **Settings → Actions → General**：「Workflow permissions」を **Read and write** に
4. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開

## 🔄 エレベーター停止情報の自動更新（実装済・現在停止中）

`scripts/scrape_elevator_outages.py` が東京メトロ公式から毎日データを取得し、`data/elevator_outages.json` を更新する設計。

**現在の課題**: 東京メトロのサーバーが GitHub Actions の IP アドレスをブロックしており（403 Forbidden）、CI上でのスクレイピングは動作していません。

**今後の選択肢**:
- 📍 自宅PCからローカル実行 → 結果のみ手動コミット
- 🌐 プロキシサービス経由（ScraperAPI など）
- 🤖 Playwright で実ブラウザ駆動

詳細は [scripts/scrape_elevator_outages.py](scripts/scrape_elevator_outages.py) のコメントを参照。

## 🎨 UI設計の方針

- **直感性優先**：専門用語を避け「ひとりで乗れる」「駅員さんへ」の言葉に統一
- **基準の明示**：凡例カードに「段差3cm／隙間7cm」を常時表示
- **訂正の透明性**：PDFと照合済データは「PDF照合済」バッジで明示
- **モバイルファースト**：680px幅で最適化・タップ範囲 44px 以上を確保

## 📝 ライセンス・出典

- バリアフリー設備情報：[スムーズメトロ](https://www.smoothmetro.jp/)（東京メトロ公式）
- エレベーター停止情報：[東京メトロ公式](https://www.tokyometro.jp/safety/barrierfree/facilities/elevator_oos/index.html)

データは公式ソースを参照しています。最新情報は必ず公式サイトをご確認ください。

## 🤝 貢献

東京メトロ以外の路線（都営地下鉄など）への拡張や、他駅のPDF照合データ追加など、Pull Request 歓迎です。
