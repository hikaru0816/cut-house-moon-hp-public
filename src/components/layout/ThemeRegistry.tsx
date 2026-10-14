'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8D6E63', // globals.css: --color-soft-brown eq
      light: '#A1887F', // globals.css: --color-light-brown eq
      dark: '#4E342E', // globals.css: --color-dark-brown eq
    },
    secondary: {
      main: '#D7CCC8', // globals.css: --color-accent-beige eq
      light: '#EFEBE9', // globals.css: --color-border-light eq
    },
    background: {
      default: '#FAF9F6', // globals.css: --color-bg-ivory eq
      paper: '#FFFFFF', // globals.css: --color-white eq
    },
    text: {
      primary: '#3E2723', // globals.css: --color-dark-text eq
      secondary: '#795548', // globals.css: --color-gray-brown eq
    },
  },
  typography: {
    fontFamily: 'var(--font-sans)', // globals.css: --font-sans eq
    h1: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
    h2: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
    h3: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
    h4: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
    h5: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
    h6: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
    subtitle1: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
    subtitle2: { fontFamily: 'var(--font-serif)' }, // globals.css: --font-serif eq
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
