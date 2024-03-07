import React from 'react';
import { Box, Skeleton, Stack } from '@mui/material';

export const SeeMoreTabsSkeleton: React.FC = () => {
  return (
    <Box width={1} sx={{ position: 'relative' }}>
      <Stack direction={'row'} spacing={3}>
        <Skeleton width={'20%'} height={40} />
        <Skeleton width={'20%'} height={40} />
        <Skeleton width={'20%'} height={40} />
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Stack>
          <Skeleton width={200} />
          <Skeleton width={150} />
          <Skeleton width={200} />
          <Skeleton width={150} />
          <Skeleton width={200} />
          <Skeleton width={150} />
        </Stack>
        <Stack>
          <Skeleton width={200} />
          <Skeleton width={150} />
          <Skeleton width={200} />
          <Skeleton width={150} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SeeMoreTabsSkeleton;
