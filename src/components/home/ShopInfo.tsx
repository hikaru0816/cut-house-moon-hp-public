import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { SECTION_IDS } from '@/constants/navigation';
import SectionTitle from '@/components/common/SectionTitle';
import SectionContainer from '@/components/common/SectionContainer';
import { SHOP_INFO, SHOP_DETAILS } from '@/constants/shopInfo';

export default function ShopInfo() {
  return (
    <SectionContainer id={SECTION_IDS.ABOUT} maxWidth="lg">
      <SectionTitle>店舗情報</SectionTitle>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/img/about01.jpg"
            alt="店舗外観"
            sx={{
              width: '100%',
              height: 'auto',
              border: '2px solid',
              borderColor: 'secondary.main',
              borderRadius: 4,
              display: 'block',
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            <TableContainer component={Box} sx={{ boxShadow: 'none' }}>
              <Table>
                <TableBody>
                  {SHOP_DETAILS.map((item) => (
                    <TableRow key={item.label}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          borderBottom: '1px solid',
                          borderColor: 'secondary.light',
                          width: '120px',
                          py: 1,
                        }}
                      >
                        {item.label}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: '1rem',
                          borderBottom: '1px solid',
                          borderColor: 'secondary.light',
                          py: 1,
                        }}
                      >
                        {item.label === '電話番号' ? (
                          <Link href={`tel:${item.value}`} underline="hover" color="inherit">
                            {item.value}
                          </Link>
                        ) : (
                          item.value
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Typography variant="body1" sx={{ lineHeight: 1.5, color: 'text.secondary' }}>
                {SHOP_INFO.description.line1}
                <br />
                {SHOP_INFO.description.line2}
                <br />
                {SHOP_INFO.description.line3}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, display: 'block', color: 'error.main' }}>
                {SHOP_INFO.notice}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
