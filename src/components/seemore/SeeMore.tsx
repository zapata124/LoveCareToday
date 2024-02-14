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
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { useQuery } from '@apollo/client';
import { getOrganization } from '../../query';
import NoDataSVG from '../svgs/NoDataSVG';
import { RenderSearchSkeleton } from '../skeletons';
import { SkeletonCard } from '../skeletons/RenderSearchSkeleton';

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
  const { loading, error, data } = useQuery(getOrganization, {
    variables: { name: addDash(nonPropfit) },
  });
  let parsedData = undefined;
  if (data) {
    parsedData = JSON.parse(data?.organization?.organization);
  }
  // we need error handlers here
  const avatarSize = 70;
  return (
    <>
      {!loading ? (
        parsedData ? (
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
                <Stack
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  spacing={1}
                >
                  <Avatar
                    src={parsedData.nonprofit.logoUrl}
                    sx={{ width: avatarSize, height: avatarSize }}
                    variant='rounded'
                    alt='nonprofit-logo'
                  />
                  <Typography variant='h6'>{parsedData.nonprofit.name}</Typography>
                </Stack>
              }
            />
            <CardMedia image={parsedData?.nonprofit?.coverImageUrl} sx={{ height: 273 }} />
            <CardContent sx={{ width: 1, height: 300 }}>
              <Grid container sx={{ width: 1, height: 1 }}>
                <Grid item xs={7} width={1} height={1}>
                  <Typography sx={{ fontSize: '24px', fontWeight: 600, mb: 2 }}>
                    Description
                  </Typography>
                  <Box width={1} height={300} overflow={'auto'}>
                    <Typography>{parsedData.nonprofit.description}</Typography>
                    <Typography>{parsedData.nonprofit.descriptionLong}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography sx={{ fontWeight: 600 }}>Location</Typography>
                    <LocationOnIcon />
                  </Stack>
                  <Typography sx={{ mb: 2 }}>{parsedData.nonprofit.locationAddress}</Typography>
                  {/* {parsedData.nonprofit.name} */}
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography sx={{ fontWeight: 600 }}>URL</Typography>
                    <LinkIcon />
                  </Stack>
                  <Link component={RouterLink} to={parsedData.nonprofit.websiteUrl}>
                    {parsedData.nonprofit.websiteUrl}
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ) : (
          <Box width={500} height={500} overflow={'hidden'}>
            <NoDataSVG />
          </Box>
        )
      ) : (
        <Box width={500} height={500} overflow={'hidden'}>
          <SkeletonCard />
        </Box>
      )}
    </>
  );
};

export default SeeMore;
