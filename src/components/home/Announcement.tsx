import Stack from '@mui/material/Stack';
import { SECTION_IDS } from '@/constants/navigation';
import SectionTitle from '@/components/common/SectionTitle';
import SectionContainer from '@/components/common/SectionContainer';
import AnnouncementItem from '@/components/common/AnnouncementItem';
import NavigateButton from '@/components/common/NavigateButton';
import EmptyState from '@/components/common/EmptyState';
import { db } from '@/lib/db';
import { announcement } from '@/db/schema';
import type { Announcement as AnnouncementType } from '@/types/announcement';
import { desc } from 'drizzle-orm';

export default async function Announcement() {
  const announcements = await db
    .select()
    .from(announcement)
    .orderBy(desc(announcement.date))
    .limit(3);

  return (
    <SectionContainer id={SECTION_IDS.ANNOUNCEMENT} bgcolor="background.paper">
      <SectionTitle>お知らせ</SectionTitle>
      {announcements.length === 0 ? (
        <EmptyState>現在お知らせはありません。</EmptyState>
      ) : (
        <Stack spacing={3} sx={{ minWidth: 0 }}>
          <Stack spacing={0}>
            {announcements.map((item: AnnouncementType) => (
              <AnnouncementItem key={item.id} item={item} />
            ))}
          </Stack>
          <NavigateButton text="もっと見る" href="/announcement" />
        </Stack>
      )}
    </SectionContainer>
  );
}
