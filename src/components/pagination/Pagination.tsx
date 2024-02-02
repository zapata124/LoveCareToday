import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useUpdatePage } from '../../providers/PageProvider';
import { useParams, useLocation } from 'react-router-dom';
const PaginationApp = () => {
  const { page, totalPages, handleUpdatePage } = useUpdatePage();
  const param = useParams();
  const location = useLocation().pathname;
  const findSearch = location.search('search');

  console.log(param, 'useParams', location, findSearch);
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '5rem',
        width: 1,
        alignItems: 'flex-end',
      }}
    >
      {findSearch < 0 && location !== '/' ? (
        <Pagination
          onChange={(event: any, page: number) => {
            handleUpdatePage(page);
          }}
          count={totalPages}
          page={page}
        />
      ) : null}
    </Stack>
  );
};

export default PaginationApp;