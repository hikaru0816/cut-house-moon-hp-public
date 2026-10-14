/**
 * DBに保存された "\n"（リテラル文字列）を実際の改行に変換する
 */
export function formatAnnouncementContent(content: string): string {
  return content.replace(/\\n/g, '\n');
}

export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  return new Date(date).toLocaleDateString('ja-JP', options);
}
