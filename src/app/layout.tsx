import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from '@/components/layout/ThemeRegistry';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cut-house-moon.com'),
  title: 'カットハウスムーン | 佐世保の理容室',
  description:
    '長崎県佐世保市小野町にある理容室「カットハウスムーン」の公式サイトです。夫婦で元気に営業中。理容師歴30年以上の確かな技術でお好みのヘアスタイルに仕上げます。',
  keywords: '佐世保, 床屋, 理容室, カットハウスムーン',
  openGraph: {
    title: 'カットハウスムーン | 佐世保の理容室',
    description: '長崎県佐世保市小野町にある理容室「カットハウスムーン」の公式サイトです。',
    url: 'https://www.cut-house-moon.com', // 仮のURLを設定
    siteName: 'カットハウスムーン',
    images: [
      {
        url: '/img/about01.jpg',
        width: 1200,
        height: 630,
        alt: 'カットハウスムーン 店舗外観',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'カットハウスムーン | 佐世保の理容室',
    description: '長崎県佐世保市小野町にある理容室「カットハウスムーン」の公式サイトです。',
    images: ['/img/about01.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'カットハウスムーン',
  image: 'https://www.cut-house-moon.com/img/about01.jpg', // 仮のURL
  telephone: '0956-47-8861',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '小野町55-36',
    addressLocality: '佐世保市',
    addressRegion: '長崎県',
    addressCountry: 'JP',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Header />
            {children}
            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
