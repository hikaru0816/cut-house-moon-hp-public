import * as React from 'react';
import Typography from '@mui/material/Typography';

interface EmptyStateProps {
  children: React.ReactNode;
}

/**
 * 一覧が空の場合に表示する共通メッセージコンポーネント
 */
export default function EmptyState({ children }: EmptyStateProps) {
  return (
    <Typography align="center" variant="body1" sx={{ color: 'text.secondary' }}>
      {children}
    </Typography>
  );
}
