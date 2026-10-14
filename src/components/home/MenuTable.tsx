import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { SECTION_IDS } from '@/constants/navigation';
import SectionTitle from '@/components/common/SectionTitle';
import SectionContainer from '@/components/common/SectionContainer';
import { db } from '@/lib/db';
import { menu } from '@/db/schema';
import type { Menu } from '@/types/menu';
import { asc, eq } from 'drizzle-orm';

export default async function MenuTable() {
  const menus = await db
    .select()
    .from(menu)
    .where(eq(menu.isActive, true))
    .orderBy(asc(menu.displayOrder), asc(menu.id));

  return (
    <SectionContainer id={SECTION_IDS.MENU} bgcolor="background.paper">
      <SectionTitle>メニュー</SectionTitle>
      <Typography variant="body2" align="center" color="text.secondary">
        全て税込み価格です
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={3}>
        {menus.map((item: Menu) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 0,
                borderBottom: '2px solid',
                borderColor: 'secondary.main',
                bgcolor: 'transparent',
              }}
            >
              <CardContent sx={{ px: 0, py: 1, '&:last-child': { pb: 0.5 } }}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                  <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: 'text.secondary', fontWeight: 700, lineHeight: 1 }}
                  >
                    ¥{item.price.toLocaleString()}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
