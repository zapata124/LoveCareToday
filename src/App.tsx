import React from 'react';
import { AppBar, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SearchBar from './components/searchbar/SearchBar';
import { Scrollbars } from 'react-custom-scrollbars';
const App: React.FC = () => {
  return (
    <>
      <AppBar
        sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <SearchBar />
      </AppBar>
      <Container maxWidth='lg' sx={{ height: '86vh', mt: 15 }}>
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
