'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import type { SxProps, Theme } from '@mui/material/styles';

interface BackButtonProps {
  text?: string;
  /**
   * 指定した場合、ブラウザ履歴を戻る代わりにこのパスへ遷移する
   */
  href?: string;
  /**
   * 追加のスタイル
   */
  sx?: SxProps<Theme>;
}

/**
 * 前のページに戻るための共通コンポーネント
 */
export default function BackButton({ text = '戻る', href, sx }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (href) {
      router.push(href);
      return;
    }
    router.back();
  };

  return (
    <Box sx={{ ...sx }}>
      <ButtonBase
        onClick={handleBack}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          color: 'text.secondary',
          padding: '8px 12px',
          borderRadius: 1,
          ml: -1.5,
          '&:hover': {
            color: 'primary.main',
            bgcolor: 'action.hover',
            '& .arrow': {
              transform: 'translateX(-6px)',
            },
          },
        }}
      >
        <Box
          className="arrow"
          component="span"
          sx={{
            mr: 1,
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'inline-block',
            fontSize: '1.2rem',
            lineHeight: 1,
          }}
        >
          ←
        </Box>
        <Typography
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.05em',
          }}
        >
          {text}
        </Typography>
      </ButtonBase>
    </Box>
  );
}
