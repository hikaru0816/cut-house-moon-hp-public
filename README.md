# Cut House Moon HP

このプロジェクトは [Next.js](https://nextjs.org) で構築された Cut House Moon のホームページです。

> このリポジトリはソースコード公開用です。運用中のリポジトリから、運用・デプロイ用の設定の一部を除いています。

## セットアップ手順

開発環境を構築するために、以下の手順に従ってください。

### 1. リポジトリのクローン

```bash
git clone https://github.com/hikaru0816/cut-house-moon-hp-public.git
```

### 2. プロジェクトディレクトリに移動

```bash
cd cut-house-moon-hp-public
```

### 3. 依存関係のインストール

```bash
npm install
```

### 4. 環境変数の設定

`.env.example` をコピーして `.env` ファイルを作成してください。

```bash
cp .env.example .env
```

ローカル開発では `.env` のデフォルト値（Docker PostgreSQL への接続URL）をそのまま使用します。

> **本番デプロイ時の注意**: Cloudflare の環境変数 `DATABASE_URL` に NeonDB の接続文字列を設定してください。アプリケーションは `NODE_ENV` を見て自動的にドライバーを切り替えます（ローカル: node-postgres、本番: Neon serverless）。

### 5. データベースの起動

Docker Compose を使用して PostgreSQL データベースを起動します。

```bash
docker compose up -d
```

### 6. データベースの初期化

マイグレーション（スキーマの適用）を行います。

```bash
npx drizzle-kit push
```

初期データ（サンプルのお知らせ・メニュー）の投入を行います。

```bash
npm run seed
```

### 7. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 技術スタック

- **Frontend**: Next.js (App Router), React, Material UI
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (Docker / Neon)
- **Styling**: Tailwind CSS

## ライセンス

ソースコードの閲覧は自由ですが、`public/img/` および `src/app/icon.png` に含まれる店舗写真・ロゴ等の画像素材、ならびに店舗情報の無断転用・再利用はご遠慮ください。
