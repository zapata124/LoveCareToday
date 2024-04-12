import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Stack,
  Typography,
  Collapse,
  IconButton,
  Input,
} from '@mui/material';
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
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUpdateBookmarks, useAddUserImage, useUpload } from './hooks';
import { customScrollBar } from './style';
import { DialogComponent } from './components/organizationCard/OrganizationCard';
import SeeMore from './components/seemore';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
type AppBarUserAppsType = {
  type?: 'userIsloggedIn';
};

const Bookmarks: React.FC = () => {
  const { handleAddBookmark, handleDeleteBookmark } = useUpdateBookmarks();
  const { cookie } = useAuthenticatedUser();
  const arrBookmarks = Object.entries(cookie?.user.bookmarks).sort();
  const [open, setOpen] = useState(false);
  const handleCollapse = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleCollapse} sx={{ padding: 0 }}>
        <ListItemText sx={{ padding: 0 }}>Saved Charities</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout='auto'
        unmountOnExit
        sx={{
          maxHeight: 600,
          bgcolor: '#f0f0f0',
          overflowY: 'scroll',
          ...customScrollBar,
          borderRadius: '12px',
          mb: 2,
        }}
      >
        {arrBookmarks.map(([bookmark, slug]) => {
          return (
            <List disablePadding key={bookmark}>
              <Stack direction={'row'} alignItems={'center'}>
                <DialogComponent
                  contentComponent={<SeeMore nonProfit={bookmark} slug={slug as string} />}
                  actionComponent={
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={bookmark} />
                    </ListItemButton>
                  }
                />

                <ListItemIcon sx={{ ':hover': { cursor: 'pointer' } }}>
                  <BookmarkIcon
                    sx={{ ml: 2, ':hover': { color: '#c70000' }, color: '#FFA500' }}
                    onClick={() => handleDeleteBookmark(bookmark)}
                  />
                </ListItemIcon>
              </Stack>
            </List>
          );
        })}
      </Collapse>
    </>
  );
};

const UserAvatar: React.FC = () => {
  const { uploadFile, uploading, response, handleFileChange } = useUpload();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { cookie } = useAuthenticatedUser();
  const { user } = cookie;
  const { name, lastname: lastName } = user;
  const { handleAddUserImage } = useAddUserImage();
  console.log(cookie);

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (response) {
      handleAddUserImage(response?.url);
    }
  }, [response]);
  const open = Boolean(anchorEl);
  console.log(open, 'open');
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mr: { sx: 2, sm: 4, lg: 8 },
      }}
    >
      {/* { we need to add functionality here} */}
      <Avatar
        src={cookie?.user?.avatar || '/broken-image.jpg'}
        onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLButtonElement>)}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ zIndex: 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            style: {
              width: 400,
              padding: 20,
              borderRadius: '12px',
            },
          },
        }}
      >
        <Stack direction={'row'} spacing={5} alignItems={'center'} sx={{ ml: 4 }}>
          <Button
            sx={{
              bgcolor: 'transparent',
              ':hover': { bgcolor: 'transparent' },
              width: 0,
              padding: 0,
              margin: 0,
              minWidth: 0,
            }}
            component='label'
            role={undefined}
            variant='contained'
            tabIndex={-1}
            startIcon={
              <Avatar
                src={cookie?.user?.avatar || '/broken-image.jpg'}
                sx={{ width: 56, height: 56 }}
              />
            }
          >
            <Input
              type='file'
              sx={{
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: 1,
                overflow: 'hidden',
                position: 'absolute',
                bottom: 0,
                left: 0,
                whiteSpace: 'nowrap',
                width: 1,
              }}
              onChange={(e: any) => handleFileChange(e)}
            />
          </Button>

          <Typography fontWeight={600} fontSize={20}>{`${name} ${lastName}`}</Typography>
          {/* <Chunked /> */}
        </Stack>
        <Stack padding={2}>
          <Typography>Total Donations</Typography>
          <Typography>All Donations</Typography>
          <Bookmarks />
          <Typography>Registered Date</Typography>
        </Stack>
        <Box width={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SingOutButton />
        </Box>
      </Popover>
    </Box>
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
    <Box sx={{ mr: 4 }}>
      <SignUpButton />
      <SignInButton />
    </Box>
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
              <Stack direction={'row'}>
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
