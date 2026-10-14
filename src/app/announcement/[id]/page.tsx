import * as React from 'react';
import { notFound } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderSpacer from '@/components/common/HeaderSpacer';
import SectionContainer from '@/components/common/SectionContainer';
import BackButton from '@/components/common/BackButton';
import { db } from '@/lib/db';
import { announcement } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { formatAnnouncementContent, formatDate } from '@/lib/format';

export default async function AnnouncementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) notFound();

  const results = await db.select().from(announcement).where(eq(announcement.id, numericId));
  const item = results[0];

  if (!item) notFound();

  return (
    <main className="flex flex-col">
      <HeaderSpacer />
      <SectionContainer bgcolor="background.default" maxWidth="md">
        <Box sx={{ position: 'relative', mb: { xs: 4, md: 6 } }}>
          <BackButton />
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              fontWeight: 700,
              display: 'block',
              letterSpacing: '0.05em',
            }}
          >
            {formatDate(item.date, { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              wordBreak: 'break-word',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            {item.title}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: { xs: 2, md: 2 },
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(78,52,46,0.05)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              whiteSpace: 'pre-wrap',
              lineHeight: 1.8,
              color: 'text.primary',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {formatAnnouncementContent(item.content)}
          </Typography>
        </Box>
      </SectionContainer>
    </main>
  );
}
