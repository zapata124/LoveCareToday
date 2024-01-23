import React from 'react';
import { AppBar, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SearchBar from './components/searchbar/SearchBar';
import { Scrollbars } from 'react-custom-scrollbars';
import { LeftDrawer } from './components/drawers';
const App: React.FC = () => {
  return (
    <>
      <AppBar
        sx={{
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: 71,
          boxShadow: 'none',
        }}
      >
        <SearchBar />
      </AppBar>
      <LeftDrawer />
      <Container
        maxWidth='lg'
        sx={{ height: '82vh', mt: 15, bgcolor: '#f5f5f5', borderRadius: '24px' }}
      >
        <Scrollbars style={{ width: '100%', height: '100%' }}>
          <Grid container spacing={2} sx={{ pt: 2, pb: 2, pr: 2 }}>
            <Outlet />
          </Grid>
        </Scrollbars>
      </Container>
    </>
  );
};

export default App;
