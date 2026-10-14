---
name: type-check
description: このNext.js/Cloudflare Workersプロジェクトで型チェック（tsc --noEmit）を実行し、見つかったエラーを修正する。コミット・プッシュ前や、ユーザーが型チェック・型エラーの確認・ビルドが型エラーで落ちないかの確認を求めたときに使う（Cloudflare Workers Buildsは`next build`の型チェックを実行し、同じエラーでデプロイを失敗させる）。
---

# 型チェック

Cloudflare Workers Buildでのデプロイ失敗（`npm run build` は `next build` を実行し、型チェックでエラーがあるとデプロイが失敗する）を未然に防ぐため、ローカルでTypeScriptのエラーを検出する。

## 手順

1. チェックを実行する。

   ```
   npm run type-check
   ```

   （このリポジトリの `tsconfig.json` を使った `tsc --noEmit` と同等）

2. エラーがなければ、成功を報告して終了する。

3. エラーがある場合は、それぞれについて以下を行う。
   - 該当行付近のファイルをReadで読む。
   - 根本原因を特定する（型注釈の不足・誤り、importミス、propsの型不一致など）。新しい型を作ったり `any` に逃げたりする前に、`@/types/*` や `@/db/schema`（`InferSelectModel`/`InferInsertModel`経由）にある既存の型を再利用できないか優先的に検討する。
   - Editで最小限の修正を加える。

4. `npm run type-check` を再実行し、すべてのエラーが解消したことを確認する。解消するまで繰り返す。

5. 修正内容（file:lineと修正の内容）を要約する。ユーザーがこのタスクの中で既にコミット・プッシュを依頼していない限り、実行前に確認を取る。
