'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_ITEMS } from '@/constants/navigation';
import { SectionId } from '@/types/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = React.useRef<HTMLElement>(null);

  // ヘッダーの高さをCSS変数として保存（ナビゲーションメニュー押下時のスクロール量考慮のため）
  React.useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const handleNavClick = (id: SectionId) => {
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <AppBar
      ref={headerRef}
      position="fixed"
      sx={{
        backgroundColor: 'background.paper',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
        color: 'primary.dark',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        <Stack
          direction="row"
          alignItems="center"
          onClick={handleLogoClick}
          sx={{
            cursor: 'pointer',
            transition: 'filter 0.3s ease',
          }}
        >
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={80}
            height={32}
            priority
            style={{ objectFit: 'contain', height: 'auto' }}
          />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              sx={{
                color: 'primary.dark',
                '&:hover': {
                  color: 'secondary.main',
                  bgcolor: 'transparent',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
