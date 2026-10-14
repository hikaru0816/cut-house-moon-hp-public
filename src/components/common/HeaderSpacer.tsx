import * as React from 'react';
import Box from '@mui/material/Box';

/**
 * 固定ヘッダーの高さ分の余白を確保するためのスペーサーコンポーネント
 * CSS変数 --header-height（Header.tsxで定義）を使用します。
 * home以外のページで使用します。
 */
export default function HeaderSpacer() {
  return (
    <Box
      sx={{
        height: 'var(--header-height, 80px)',
        width: '100%',
        flexShrink: 0,
      }}
    />
  );
}
