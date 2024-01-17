import React from 'react';
import { Avatar, Box, Grid, Skeleton } from '@mui/material';
const SkeletonCard: React.FC = () => {
  return (
    <Box width={1} height={400} sx={{ position: 'relative' }}>
      <Skeleton width={'100%'} height={170} sx={{ position: 'absolute', top: -42 }} />
      <Skeleton sx={{ position: 'absolute', top: 130, left: 15 }} variant='circular'>
        <Avatar />
      </Skeleton>
      <Skeleton sx={{ position: 'absolute', top: 130, left: 60 }} width={'50%'} />
      <Skeleton sx={{ position: 'absolute', top: 148, left: 60 }} width={'50%'} />
      <Skeleton sx={{ position: 'absolute', top: 210, left: 16 }} width={'90%'} />
      <Skeleton sx={{ position: 'absolute', top: 230, left: 16 }} width={'80%'} />
      <Skeleton sx={{ position: 'absolute', top: 250, left: 16 }} width={'60%'} />
      <Skeleton sx={{ position: 'absolute', top: 270, left: 16 }} width={'60%'} />
    </Box>
  );
};
const RenderSearchSkeleton: React.FC = () => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <SkeletonCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <SkeletonCard />
      </Grid>
    </>
  );
};

export default RenderSearchSkeleton;
