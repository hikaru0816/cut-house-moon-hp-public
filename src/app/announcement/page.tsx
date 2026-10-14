import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import HeaderSpacer from '@/components/common/HeaderSpacer';
import SectionContainer from '@/components/common/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle';
import AnnouncementItem from '@/components/common/AnnouncementItem';
import BackButton from '@/components/common/BackButton';
import AnnouncementPagination from '@/components/common/AnnouncementPagination';
import EmptyState from '@/components/common/EmptyState';
import { db } from '@/lib/db';
import { announcement } from '@/db/schema';
import type { Announcement } from '@/types/announcement';
import { SECTION_IDS } from '@/constants/navigation';
import { desc, count } from 'drizzle-orm';

const ITEMS_PER_PAGE = 10;

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || '1', 10));

  const [totalCountResult, announcements] = await Promise.all([
    db.select({ value: count() }).from(announcement),
    db
      .select()
      .from(announcement)
      .orderBy(desc(announcement.date))
      .limit(ITEMS_PER_PAGE)
      .offset((page - 1) * ITEMS_PER_PAGE),
  ]);

  const totalCount = Number(totalCountResult[0].value);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const startCount = announcements.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1;
  const endCount =
    announcements.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + announcements.length;

  return (
    <main className="flex flex-col">
      <HeaderSpacer />
      <SectionContainer bgcolor="background.default" maxWidth="md">
        <Box sx={{ position: 'relative', mb: 8 }}>
          <BackButton href={`/#${SECTION_IDS.ANNOUNCEMENT}`} />
          <SectionTitle>お知らせ一覧</SectionTitle>
        </Box>

        {announcements.length === 0 ? (
          <EmptyState>現在お知らせはありません。</EmptyState>
        ) : (
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: -2 }}>
              <Typography variant="body2" color="text.secondary">
                全 {totalCount} 件中 {startCount}〜{endCount} 件を表示
              </Typography>
            </Box>
            <Stack spacing={0}>
              {announcements.map((item: Announcement) => (
                <AnnouncementItem key={item.id} item={item} />
              ))}
            </Stack>
            <AnnouncementPagination totalPages={totalPages} currentPage={page} />
          </Stack>
        )}
      </SectionContainer>
    </main>
  );
}
