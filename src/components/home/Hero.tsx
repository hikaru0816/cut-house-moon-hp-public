'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import { SECTION_IDS } from '@/constants/navigation';

import { HERO_CONTENT } from '@/constants/hero';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = React.useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_CONTENT.images.length);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, HERO_CONTENT.interval);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <Box
      id={SECTION_IDS.HERO}
      onClick={nextImage}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: 'text.secondary',
      }}
    >
      {/* Background Images */}
      {HERO_CONTENT.images.map((image, index) => (
        <Fade key={image} in={index === currentImageIndex} timeout={{ enter: 1500, exit: 1500 }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(62,39,35,0.3), rgba(62,39,35,0.6)), url("${image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'text.secondary', // Fallback
            }}
          />
        </Fade>
      ))}

      <Container
        maxWidth="md"
        sx={{ textAlign: 'center', color: 'background.paper', zIndex: 1, pointerEvents: 'none' }}
      >
        <Box sx={{ display: 'inline-block' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.8rem', md: '4.0rem' },
              textShadow: '2px 2px 8px rgba(62,39,35,0.7)',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              position: 'relative',
              display: 'inline-block',
              pb: 1.5,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% + 56px)',
                height: '4px',
                backgroundColor: 'secondary.main',
                borderRadius: '2px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              },
            }}
          >
            {HERO_CONTENT.title.line1}
            <br />
            {HERO_CONTENT.title.line2}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 300,
            letterSpacing: '0.2rem',
            opacity: 0.9,
            textShadow: '1px 1px 4px rgba(62,39,35,0.6)',
          }}
        >
          {HERO_CONTENT.subtitle}
        </Typography>
      </Container>

      {/* Scroll Down Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          height: '100px',
          width: '1px',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
            animation: 'scroll-down 2s ease-in-out infinite',
          },
          '@keyframes scroll-down': {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' },
          },
        }}
      />

      {/* Progress Dots */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 1,
        }}
      >
        {HERO_CONTENT.images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: index === currentImageIndex ? 'secondary.main' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
