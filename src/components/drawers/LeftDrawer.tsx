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
  Slide,
  Dialog,
} from '@mui/material';
import { causes as Causes } from './causes';
import InboxIcon from '@mui/icons-material/Inbox';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Scrollbars from 'react-custom-scrollbars';

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
  return (
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
        <Slide direction='right' in={open} mountOnEnter unmountOnExit>
          <Typography variant='h6'>Causes</Typography>
        </Slide>
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleDrawer}
        aria-describedby='causes-list-modal'
        hideBackdrop
      >
        <Slide direction='right' in={open} mountOnEnter unmountOnExit>
          <Box
            width={236}
            height={'80%'}
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
            <Scrollbars style={{ width: '100%', height: '100%' }}>
              <CausesList open={open} causes={Causes} />
            </Scrollbars>
          </Box>
        </Slide>
      </Dialog>
    </>
  );
};

export default LeftDrawer;
