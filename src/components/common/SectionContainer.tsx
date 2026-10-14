import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

interface SectionContainerProps {
  id?: string;
  bgcolor?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export default function SectionContainer({
  id,
  bgcolor,
  maxWidth = 'md',
  children,
}: SectionContainerProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor: bgcolor,
        scrollMarginTop: 'var(--header-height, 80px)',
      }}
    >
      <Container maxWidth={maxWidth} sx={{ position: 'relative', overflowX: 'hidden' }}>
        <Stack spacing={1}>{children}</Stack>
      </Container>
    </Box>
  );
}
