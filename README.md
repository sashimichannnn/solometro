# Web Share Target 実装ファイル

このフォルダの中身をリポジトリのルートに配置して push してください。

## 内容

- manifest.json（新規）
- sw.js（新規）
- share.html（新規）
- icons/icon-192.png（新規）
- icons/icon-512.png（新規）
- index.html（修正版・上書き）

## git コマンド

```bash
git add manifest.json sw.js share.html icons/ index.html
git commit -m "feat: Web Share Target対応"
git push
```

## 動作確認

GitHub Pages デプロイ後：

1. Android Chrome で https://sashimichannnn.github.io/solometro/ を開く
2. メニューから「アプリをインストール」
3. Yahoo!乗換などで共有 → 共有先に solometro が表示
4. solometro をタップ → 自動でバリアフリー情報を表示

## URL パラメータでの直接呼び出し

`https://sashimichannnn.github.io/solometro/?from=池袋&to=銀座`

このような URL でも自動でルート検索が走ります。
