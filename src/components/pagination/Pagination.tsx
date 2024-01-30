import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationApp = () => {
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '5rem',
        width: 1,
        alignItems: 'flex-end',
      }}
    >
      <Pagination count={10} />
    </Stack>
  );
};

export default PaginationApp;
