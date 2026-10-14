import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          pb: 1,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% + 56px)',
            height: '4px',
            backgroundColor: 'primary.main',
            borderRadius: '2px',
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
