import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SHOP_INFO } from '@/constants/shopInfo';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'secondary.light',
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <Typography
          variant="h6"
          color="primary.dark"
          gutterBottom
          sx={{ fontWeight: 700, letterSpacing: '0.1rem' }}
        >
          {SHOP_INFO.englishName}
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.5 }}>
          © {new Date().getFullYear()} {SHOP_INFO.englishName}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
