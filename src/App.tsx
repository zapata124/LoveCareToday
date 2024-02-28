import React, { useEffect } from 'react';
import { AppBar, Box, Container, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import SearchBar from './components/searchbar/SearchBar';
import { BottomDrawer, LeftDrawer } from './components/drawers';
import PaginationApp from './components/pagination';
import PageProvider from './providers/PageProvider';
import ChangeZIndex from './providers/ChangeZIndexProvider';

const App: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/featured');
  }, []);
  return (
    <Box sx={{ height: '100vh', psotion: 'relative' }}>
      <ChangeZIndex>
        <AppBar
          sx={{
            bgcolor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // zIndex: (theme) => theme.zIndex.drawer + 1,
            height: 71,
            boxShadow: 'none',
            zIndex: 1,
          }}
        >
          <SearchBar />
        </AppBar>
        <LeftDrawer />
      </ChangeZIndex>
      {/* <BottomDrawer /> */}
      <Container
        maxWidth='lg'
        sx={{
          height: '100vh',
          position: 'relative',
        }}
        disableGutters
      >
        <PageProvider>
          <PaginationApp />
          <Container
            maxWidth='lg'
            sx={{
              height: '82vh',
              bgcolor: '#f5f5f5',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              top: 127,
            }}
          >
            <Outlet />
          </Container>
        </PageProvider>
        <Typography
          sx={{
            color: 'black',
            fontSize: '10px',
            fontFamily: 'monospace',
            position: 'fixed',
            left: 0,
            bottom: 0,
          }}
        >
          site under development
        </Typography>
      </Container>
    </Box>
  );
};

export default App;
