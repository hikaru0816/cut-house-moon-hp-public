import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ボット/スキャナーによる不審なリクエストを早期ブロックし、
// Cloudflare Workers の CPU 時間超過エラー (HTTP 503) を防ぐ
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // デコードされたパスで判定（%2f エンコードにも対応）
  const decoded = decodeURIComponent(pathname);

  // .php, .asp, .aspx, .jsp などのサーバーサイドスクリプト拡張子をブロック
  if (/\.(php|asp|aspx|jsp|cgi|pl|py|rb|sh|env)$/i.test(decoded)) {
    return new NextResponse(null, { status: 404 });
  }

  // secrets / config などの機密パスをブロック
  if (/\/(config|secrets|\.env|\.git|wp-admin|wp-login)\//i.test(decoded)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  // 静的アセット・画像・Next.js 内部パスは除外
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|css|js)).*)',
  ],
};
