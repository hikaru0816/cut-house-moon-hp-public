---
name: lint
description: このNext.js/Cloudflare Workersプロジェクトで ESLint（npm run lint）を実行し、見つかったエラーを修正する。コミット・プッシュ前や、ユーザーがlint・ESLint・コードスタイル/品質ルールの確認を求めたときに使う。
---

# Lint

ESLintを実行し、指摘された内容を修正する。[[type-check]] とは別物であることに注意 —
ここでのESLintは `eslint-config-next` が提供するネイティブflat config
（`eslint-config-next/core-web-vitals`, `eslint-config-next/typescript`）に
`eslint-config-prettier`（フォーマットルールとの競合防止）を加えた構成で、型チェックは行わない。

## 手順

1. チェックを実行する。

   ```
   npm run lint
   ```

2. エラーがなければ、成功を報告して終了する。

3. エラー・警告がある場合は、それぞれについて以下を行う。
   - 該当行付近のファイルをReadで読む。
   - 違反しているルールの内容を理解する（`react-hooks/*` など新しめのルールはエラーメッセージにドキュメントへのリンクがあるので、推測せずそれを読む）。
   - 最小限の修正を加える。ルールを `eslint-disable` で無効化するより、根本のコードを直すことを優先する。無効化するのは最後の手段とし、その場合は理由をコメントで残す。
   - `eslint.config.mjs` のルールを緩めたり削除したりして直すのは、ユーザーが明示的に求めない限り行わない。

4. `npm run lint` を再実行し、すべて解消したことを確認する。解消するまで繰り返す。

5. `npm run type-check` と `npm run format:check` も実行する。lintの修正が型エラーやフォーマットの崩れを引き起こすことがあるため、3つとも問題ないことを確認してから完了とする。

6. 修正内容（file:lineと修正の内容）を要約する。ユーザーがこのタスクの中で既にコミット・プッシュを依頼していない限り、実行前に確認を取る。
