import React from 'react';
import { AppBar, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SearchBar from './components/searchbar/SearchBar';
import { LeftDrawer } from './components/drawers';
// import { ReactComponent as AdoptionSVG } from './assets/adoption_symbol.svg';

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
        sx={{
          height: '82vh',
          mt: 15,
          bgcolor: '#f5f5f5',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default App;
