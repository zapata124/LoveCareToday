import React, { ReactNode, useEffect, useState } from 'react';
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
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { useLazyQuery, useQuery } from '@apollo/client';
import { getOrgHunterCharityBasic, getOrganization } from '../../query';
import NoDataSVG from '../svgs/NoDataSVG';
import { SkeletonCard } from '../skeletons/RenderSearchSkeleton';
import { createWidget } from '../organizationCard/OrganizationCard';

const FallBackState: React.FC<Children> = ({ children }) => {
  return (
    <Box width={500} height={500} overflow={'hidden'}>
      {children}
    </Box>
  );
};

interface SeeMoreCardProps {
  logoUrl: string;
  avatarSize: number;
  name: string;
  coverImageUrl: string;
  shortDescription: string;
  longDescription: string;
  address: string;
  url: string;
  slug: string;
}

const SeeMoreCard: React.FC<SeeMoreCardProps> = ({
  logoUrl,
  avatarSize,
  name,
  coverImageUrl,
  shortDescription,
  longDescription,
  address,
  url,
  slug,
}) => {
  setTimeout(() => {
    createWidget(slug);
  }, 0);
  return (
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
        }}
        title={
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={1}>
            <Avatar
              src={logoUrl}
              sx={{ width: avatarSize, height: avatarSize }}
              variant='rounded'
              alt='nonprofit-logo'
            />
            <Typography variant='h6'>{name}</Typography>
          </Stack>
        }
      />
      <CardMedia image={coverImageUrl} sx={{ height: 273 }} />
      <CardContent>
        <Grid container sx={{ width: 1, height: 1 }}>
          <Grid item xs={7} width={1} height={1} pr={2}>
            <Typography sx={{ fontSize: '24px', fontWeight: 600, mb: 2 }}>Description</Typography>
            <Box
              width={1}
              height={250}
              overflow={'auto'}
              sx={{
                '&::-webkit-scrollbar': {
                  width: '0.4em',
                },
                '&::-webkit-scrollbar-track': {
                  WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0,0,0,.1)',
                  borderRadius: '8px',
                },
              }}
            >
              <Typography>{shortDescription}</Typography>
              <Typography>{longDescription}</Typography>
            </Box>
          </Grid>
          <Grid item xs={5} pr={4}>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Typography sx={{ fontWeight: 600 }}>Location</Typography>
              <LocationOnIcon />
            </Stack>
            <Typography sx={{ mb: 2 }}>{address}</Typography>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Typography sx={{ fontWeight: 600 }}>URL</Typography>
              <LinkIcon />
            </Stack>
            <Link component={RouterLink} to={url} target='_blank'>
              {url}
            </Link>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ position: 'absolute', bottom: '2%', right: '2%' }}>
        <Button id={`every-donate-${slug}`} href={`https://www.every.org/${slug}#/donate`}>
          Donate
        </Button>
      </CardActions>
    </Card>
  );
};

const addDash = (str: string) => {
  return str.replace(/\s+/g, '-');
};
interface SeeMoreProp {
  nonPropfit: string;
  slug: string;
}

const SeeMore: React.FC<SeeMoreProp> = ({ nonPropfit, slug }) => {
  const { loading, error, data } = useQuery(getOrganization, {
    variables: { name: addDash(nonPropfit) },
  });

  const [getHunterData, { data: hunterData }] = useLazyQuery(getOrgHunterCharityBasic);

  const parsedData = data ? JSON.parse(data?.organization?.organization) : undefined;

  useEffect(() => {
    if (!loading && parsedData && parsedData.nonprofit && parsedData.nonprofit.ein) {
      getHunterData({
        variables: { ein: Number(parsedData.nonprofit.ein) },
      });
    }
  }, [loading]);

  // we need error handlers here
  return (
    <>
      {!loading ? (
        parsedData ? (
          <SeeMoreCard
            logoUrl={parsedData.nonprofit.logoUrl}
            avatarSize={70}
            name={parsedData.nonprofit.name}
            coverImageUrl={parsedData?.nonprofit?.coverImageUrl}
            shortDescription={parsedData.nonprofit.description}
            longDescription={parsedData.nonprofit.descriptionLong}
            address={parsedData.nonprofit.locationAddress}
            url={parsedData.nonprofit.websiteUrl}
            slug={slug}
          />
        ) : (
          <FallBackState>
            <NoDataSVG />
          </FallBackState>
        )
      ) : (
        <FallBackState>
          <SkeletonCard />
        </FallBackState>
      )}
    </>
  );
};

export default SeeMore;
