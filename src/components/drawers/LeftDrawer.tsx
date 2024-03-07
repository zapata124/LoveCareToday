import React from 'react';
import {
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
import { causes as Causes, TypeCauses } from './causes';
import InboxIcon from '@mui/icons-material/Inbox';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Scrollbars from 'react-custom-scrollbars';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { SwipeCallback } from 'react-swipeable/es/types';
import { useChangeZIndex } from '../../providers/ChangeZIndexProvider';
interface CausesListProps {
  open: boolean;
  causes: TypeCauses[];
  onClose?: () => void;
}

const CausesList: React.FC<CausesListProps> = ({ open, causes, onClose }) => {
  const navigate = useNavigate();

  return (
    <List>
      {causes.map((cause) => {
        return (
          <ListItem
            disablePadding
            key={cause.cause}
            onClick={() => {
              if (onClose) {
                onClose();
                navigate(`/cause/${cause.cause}`);
              }
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center', marginRight: 1 }}>
                {cause.image ? (
                  <Box width={'2rem'}>
                    <img src={cause.image} alt='adoptionImage' />
                  </Box>
                ) : (
                  <InboxIcon />
                )}
              </ListItemIcon>
              {open && <ListItemText primary={cause.cause} />}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const LeftDrawer: React.FC = () => {
  const { change } = useChangeZIndex();
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => setOpen(false) as SwipeCallback | undefined,
  });

  return (
    <>
      <Button
        onClick={() => handleDrawer()}
        sx={{
          position: 'fixed',
          top: 69,
          left: 22,
          ':hover': { bgcolor: 'transparent' },
          bgcolor: 'transparent',
          zIndex: change ? 0 : 1,
        }}
      >
        <VolunteerActivismIcon fontSize='large' />
        <Slide direction='right' in={open} mountOnEnter unmountOnExit>
          <Typography variant='h6'>Causes</Typography>
        </Slide>
      </Button>
      <Dialog open={open} onClose={handleDrawer} aria-describedby='causes-list-modal' hideBackdrop>
        <Box {...handlers}>
          <Slide direction='right' in={open} mountOnEnter unmountOnExit>
            <Box
              width={236}
              height={'80%'}
              overflow={'hidden'}
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
                <CausesList open={open} causes={Causes} onClose={handleDrawer} />
              </Scrollbars>
            </Box>
          </Slide>
        </Box>
      </Dialog>
    </>
  );
};

export default LeftDrawer;
