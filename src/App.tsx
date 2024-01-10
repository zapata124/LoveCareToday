import React from 'react';
import { Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Container maxWidth='lg' sx={{ height: '86vh', mt: 15, overflowY: 'scroll' }}>
      <Grid container spacing={2} sx={{ pt: 2, pb: 2 }}>
        <Outlet />
      </Grid>
    </Container>
  );
};

export default App;
