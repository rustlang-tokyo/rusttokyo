# Rust.Tokyo

Rust.Tokyo の公式サイトです。
[Netlify](https://www.netlify.com/) を利用して https://rust.tokyo/ にホスティングしています。

## 貢献の仕方

### 前提条件

Pull Request を作成する前に以下の準備が必要です。

- Node.js v20.10.0 以上
- npm v10.2.3 以上

### 事前準備

- 本リポジトリをクローン
- `npm i` を実行

### ローカルでの実行

`npm run dev` でローカル実行ができます。
http://localhost:3000 で動作確認ができます。

### その他

GitHub Actions を利用して、 Push 毎に CI を回しています。
CI 上では以下のコマンドを実行しています。

- npm run build
- npm run lint

> [!TIP]
> ローカルで `npm run fix` を実行することでフォーマットや lint エラーを自動修正できます。
