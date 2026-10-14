'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/navigation';

export default function AnnouncementPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const router = useRouter();

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/announcement?page=${value}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </Box>
  );
}
