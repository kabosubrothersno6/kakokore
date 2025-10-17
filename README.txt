# 縄文土器 クイズラリー（静的HTML版）

- `index.html` … 図鑑ページ（進捗表示・各資料へのリンク）
- `pages/explain.html?id=<id>` … 各資料の説明ページ
- `pages/quiz.html?id=<id>` … クイズページ
- `pages/reward.html?id=<id>` … ごほうび（色がつく）ページ
- 進捗は `localStorage` に `jomon:solved:<id>` として保存

## 資料の追加方法
1. `assets/js/state.js` の `ARTIFACTS` 配列に、以下の形式で要素を追加してください。

```js
{
  id: "newid",          // URL パラメータに使う英数字
  name: "○○土器",      // 表示名
  site: "（サンプル）展示場所など",
  potColor: "#C0763A",  // 色がついた時のテラコッタ色
  description: "説明文（自由）",
  question: {
    text: "問題文",
    choices: ["選択肢1","選択肢2","選択肢3"],
    correctIndex: 0      // 正解のインデックス
  }
}
```

2. ファイルの追加は不要です。`index.html` と各ページは `?id=<id>` で動的に表示します。

## デプロイ（GitHub Pages）
- リポジトリのルートにこのフォルダの中身を配置し、Pages で **ルート** を公開すれば動作します。
- サブディレクトリ配信の場合でも相対パスで構成しているためそのまま動きます。

## 進捗の初期化
- 図鑑ページの「進捗リセット」ボタンを押すと `localStorage` が消去されます。
