import React from 'react';
import {
  Drawer,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { causes as Causes } from './causes';
import InboxIcon from '@mui/icons-material/Inbox';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

interface CausesListProps {
  open: boolean;
  causes: string[];
}

const CausesList: React.FC<CausesListProps> = ({ open, causes }) => {
  return (
    <List>
      {causes.map((cause) => {
        return (
          <ListItem disablePadding key={cause}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {open && <ListItemText primary={cause} />}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const LeftDrawer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  // should change to use styled components here for drawer
  return (
    // <Drawer
    //   variant='permanent'
    //   open={open}
    //   PaperProps={{ height: 100, width: 100, bgcolor: 'red' }}
    //   ModalProps={{ sx: { height: 100 } }}
    // >
    //   {/* <Button onClick={() => handleDrawer()} sx={{ pt: 10, position: 'fixed' }}>
    //     <VolunteerActivismIcon fontSize='large' />
    //     {open && <Typography variant='h6'>Causes</Typography>}
    //   </Button> */}
    //   <Box sx={{ width: open ? 200 : 0, height: '100px' }}>
    //     {/* <CausesList open={false} causes={Causes} /> */}
    //   </Box>
    // </Drawer>
    <>
      <Button
        onClick={() => handleDrawer()}
        sx={{
          pt: 10,
          position: 'fixed',
          top: -5,
          left: 22,
          ':hover': { bgcolor: 'transparent' },
          bgcolor: 'transparent',
        }}
      >
        <VolunteerActivismIcon fontSize='large' />
        {open && <Typography variant='h6'>Causes</Typography>}
      </Button>
      <Box
        width={open ? 236 : '0%'}
        height={'80%'}
        bgcolor={'red'}
        overflow={'auto'}
        sx={{
          position: 'fixed',
          zIndex: 1000,
          top: 116,
          left: '1%',
          borderRadius: '25px 25px 25px 25px',
          bgcolor: '#F0F8FF',
        }}
      >
        <CausesList open={open} causes={Causes} />
      </Box>
    </>
  );
};

export default LeftDrawer;
