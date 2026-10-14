import * as React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface NavigateButtonProps {
  text: string;
  href: string;
}

/**
 * 「もっと見る」などのリンクボタンの共通コンポーネント
 */
export default function NavigateButton({ text, href }: NavigateButtonProps) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Link href={href} passHref style={{ textDecoration: 'none' }}>
        <Typography
          component="span"
          sx={{
            color: 'primary.dark',
            fontWeight: 700,
            fontSize: '0.95rem',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            padding: '4px 0',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: 'secondary.main',
              transform: 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            },
            '&:hover': {
              color: 'secondary.main',
              '&::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'left',
              },
              '& .arrow': {
                transform: 'translateX(6px)',
              },
            },
          }}
        >
          {text}
          <Box
            className="arrow"
            component="span"
            sx={{
              ml: 1,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block',
              fontWeight: 400,
            }}
          >
            →
          </Box>
        </Typography>
      </Link>
    </Box>
  );
}
