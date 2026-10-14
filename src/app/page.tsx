export const dynamic = 'force-dynamic';

import Hero from '@/components/home/Hero';
import Announcement from '@/components/home/Announcement';
import ShopInfo from '@/components/home/ShopInfo';
import MenuTable from '@/components/home/MenuTable';
import Access from '@/components/home/Access';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Announcement />
      <ShopInfo />
      <MenuTable />
      <Access />
    </main>
  );
}
