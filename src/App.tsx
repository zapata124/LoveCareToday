import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Box, Button, Container, Popover, Stack, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import SearchBar from './components/searchbar/SearchBar';
import { BottomDrawer, LeftDrawer } from './components/drawers';
import PaginationApp from './components/pagination';
import PageProvider from './providers/PageProvider';
import ChangeZIndex from './providers/ChangeZIndexProvider';
import SignUpButton from './components/button/SignUpButton';
import SignInButton from './components/button/SignInButton';
import { useAuthenticatedUser } from './providers/AuthenticatedUserProvider';
import CryptoJS from 'crypto-js';
import SingOutButton from './components/button/SignOutButton';
type AppBarUserAppsType = {
  type?: 'userIsloggedIn';
};

const UserAvatar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      {/* { we need to add functionality here} */}
      <Avatar src='/broken-image.jpg' onClick={(e) => handleClick(e)} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        <SingOutButton />
      </Popover>
    </>
  );
};
const AppBarUserApps: React.FC<AppBarUserAppsType> = ({ type }: any) => {
  const { cookie } = useAuthenticatedUser();
  const [ip, setIp] = useState<any>();
  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then((data) => data.json())
      .then((data) => setIp(data))
      .catch((err) => console.log(err));
  }, []);
  const hash = CryptoJS.SHA1('Message');
  console.log(ip, cookie, 'this', hash);
  // const { cookie } = useCookies(['user']);
  if (cookie?.user) {
    return <UserAvatar />;
  }
  return (
    <>
      <SignUpButton />
      <SignInButton />
    </>
  );
};
const App: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/featured');
  }, []);
  return (
    <>
      <Box sx={{ height: '100vh' }}>
        {/* <Box sx={{ position: 'fixed', left: 146, top: 16, zIndex: -111111111111 }}>
                <img
                  src={LoveCareTodayLogo.toString()}
                  alt='lovecaretoday-logo'
                  width={'200rem'}
                  style={{ borderRadius: '20rem', zIndex: -111111111 }}
                />
              </Box> */}
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
            <Stack direction={'row'} sx={{ width: 1 }} justifyContent={'space-between'}>
              <Typography
                variant='h6'
                color={'blue'}
                fontFamily={'Courgette-Regular'}
                // fontWeight={800}
                ml={4}
              >
                Love Care Today
              </Typography>
              <SearchBar />
              <Stack direction={'row'} sx={{ mr: 8 }}>
                <AppBarUserApps />
              </Stack>
            </Stack>
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
    </>
  );
};

export default App;
