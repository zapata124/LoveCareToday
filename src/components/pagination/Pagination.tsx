import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useUpdatePage } from '../../providers/PageProvider';

const PaginationApp = () => {
  const { page, totalPages, handleUpdatePage } = useUpdatePage();
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '5rem',
        width: 1,
        alignItems: 'flex-end',
      }}
    >
      <Pagination
        onChange={(event: any, page: number) => {
          console.log('this is data', page);
          handleUpdatePage(page);
        }}
        count={totalPages}
        page={page}
      />
    </Stack>
  );
};

export default PaginationApp;
