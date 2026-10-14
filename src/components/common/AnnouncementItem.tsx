import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import type { Announcement } from '@/types/announcement';
import { formatAnnouncementContent, formatDate } from '@/lib/format';

interface AnnouncementItemProps {
  item: Announcement;
}

export default function AnnouncementItem({ item }: AnnouncementItemProps) {
  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'secondary.light',
        '&:nth-of-type(even)': {
          bgcolor: 'action.hover', // 偶数行の背景色を設定
        },
      }}
    >
      <Link
        href={`/announcement/${item.id}`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        <Stack
          sx={{
            transition: 'all 0.2s ease-in-out',
            cursor: 'pointer',
            borderRadius: 1,
            p: 1,
            mx: -1,
            borderLeft: '4px solid transparent',
            '&:hover': {
              bgcolor: 'action.selected',
              transform: 'translateX(4px)',
              borderColor: 'secondary.main',
              borderLeftColor: 'secondary.main',
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ minWidth: 0, maxWidth: '100%' }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                width: 60,
                flexShrink: 0,
              }}
            >
              {formatDate(item.date)}
            </Typography>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                lineHeight: 1.4,
                flexGrow: 1,
                minWidth: 0,
              }}
            >
              {item.title}
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              whiteSpace: 'pre-wrap',
              overflowWrap: 'break-word',
              wordBreak: 'break-all',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {formatAnnouncementContent(item.content)}
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
}
