import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
  Stack,
  CardMedia,
  Grid,
  Box,
} from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';

const apiKey = import.meta.env.VITE_APIkey;
const URL = import.meta.env.VITE_URL;

export const DialogComponent: React.FC<Children> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleOpen}>See more</Button>
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        maxWidth='lg'
        // hideBackdrop
      >
        <DialogContent sx={{ padding: 0 }}>{children}</DialogContent>
      </Dialog>
    </>
  );
};

interface SeeMoreProp {
  nonPropfit: string;
}
const addDash = (str: string) => {
  return str.replace(/\s+/g, '-');
};
const SeeMore: React.FC<SeeMoreProp> = ({ nonPropfit }) => {
  const [newData, setNewData] = useState<any>(1);
  const [data, setData] = useState<any>('');
  // we need to change this to use the lambda function and graphql
  useEffect(() => {
    fetch(`https://${URL}/nonprofit/${addDash(nonPropfit)}?apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((data: any) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  // we need error handlers here
  const avatarSize = 70;
  return (
    <>
      {data ? (
        <Card sx={{ position: 'relative' }}>
          <CardHeader
            sx={{
              position: 'absolute',
              bgcolor: 'white',
              padding: 0,
              borderRadius: 10,
              top: 30,
              left: 30,
              px: 4,
              py: 1,
              // pr: 1,
              // pl: 0,
            }}
            title={
              <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={1}>
                <Avatar
                  src={data.data.nonprofit.logoUrl}
                  sx={{ width: avatarSize, height: avatarSize }}
                  variant='rounded'
                  alt='nonprofit-logo'
                />
                <Typography variant='h6'>{data.data.nonprofit.name}</Typography>
              </Stack>
            }
          />
          <CardMedia image={data.data?.nonprofit?.coverImageUrl} sx={{ height: 273 }} />
          <CardContent sx={{ width: 1, height: 300 }}>
            <Grid container sx={{ width: 1, height: 1 }}>
              <Grid item xs={7} width={1} height={1}>
                <Typography sx={{ fontSize: '24px', fontWeight: 600, mb: 2 }}>
                  Description
                </Typography>
                <Box width={1} height={300} overflow={'auto'}>
                  <Typography>{data.data.nonprofit.description}</Typography>
                  <Typography>{data.data.nonprofit.descriptionLong}</Typography>
                </Box>
              </Grid>
              <Grid xs={5}>
                <Typography sx={{ fontWeight: 500 }}>Location</Typography>
                <Typography sx={{ mb: 2 }}>{data.data.nonprofit.locationAddress}</Typography>
                {/* {data.data.nonprofit.name} */}
                <Typography sx={{ fontWeight: 500 }}>URL</Typography>
                {data.data.nonprofit.websiteUrl}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <div>Loading ....</div>
      )}
    </>
  );
};

export default SeeMore;
