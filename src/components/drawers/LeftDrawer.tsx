import React from 'react';
import { Drawer, Box, Button } from '@mui/material';

const LeftDrawer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  // should change to use styled components here for drawer
  return (
    <Drawer variant='permanent' open={open}>
      <Button onClick={() => handleDrawer()} sx={{ pt: 10 }}>
        Open
      </Button>
      <Box sx={{ width: open ? 200 : 100, height: '100vh', bgcolor: 'primary.main' }}></Box>
    </Drawer>
  );
};

export default LeftDrawer;
