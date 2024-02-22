import React, { Children, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
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
  Tabs,
  Tab,
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

const SeemoreTabs: React.FC<Children> = ({ children }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label='secondary tabs example'>
        <Tab value={0} label='Location' />
        <Tab value={1} label='Finance' />
        <Tab value={2} label='IRS' />
      </Tabs>
      {Children.toArray(children)[value]}
    </Box>
  );
};

interface PartialLocationProp {
  address: string | undefined;
}
const PartialLocation: React.FC<PartialLocationProp> = ({ address }) => {
  return (
    <Stack direction={'column'}>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <Typography sx={{ fontWeight: 600 }}>Location</Typography>
        <LocationOnIcon />
      </Stack>
      <Typography sx={{ mb: 2 }}>{address}</Typography>
    </Stack>
  );
};
interface FullLocationProps {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  assetAmount: string;
  form990: string;
}
const FullLocation: React.FC<Omit<FullLocationProps, 'assetAmount' | 'form990'>> = ({
  street,
  city,
  state,
  zipCode,
  country,
}) => {
  return (
    <Grid container>
      <Grid container item xs={12} sm={6}>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Street</Typography>
          <Typography>{street}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>City</Typography>
          <Typography>{city}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>State</Typography>
          <Typography>{state}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>ZipCode</Typography>
          <Typography>{zipCode}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Country</Typography>
          <Typography>{country}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface SeeMoreCardProps {
  logoUrl: string;
  avatarSize: number;
  name: string;
  coverImageUrl: string;
  shortDescription: string;
  longDescription: string;
  address: string | undefined;
  url: string;
  slug: string;
  ein: string;
}
const defaultData = {
  street: undefined,
  city: undefined,
  state: undefined,
  zipCode: undefined,
  country: undefined,
};

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
  ein,
}) => {
  const [getHunterData, { data, loading }] = useLazyQuery(getOrgHunterCharityBasic);
  const { street, city, state, zipCode, country } = data ? data.charityBasic : defaultData;

  useEffect(() => {
    if (ein) {
      getHunterData({
        variables: { ein: Number(ein) },
      });
    }
  }, []);

  // const { street, city, state, zipCode, country, assetAmount, form990 } = hunterData;

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
          <Grid item xs={12} md={7} width={1} height={1} pr={2}>
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
          <Grid item xs={12} md={5} pr={4}>
            <SeemoreTabs>
              {loading ? (
                <div>Loading</div>
              ) : data ? (
                <>
                  <FullLocation
                    street={street}
                    city={city}
                    state={state}
                    zipCode={zipCode}
                    country={country}
                  />
                </>
              ) : (
                <PartialLocation address={'No Data'} />
              )}
            </SeemoreTabs>
            {/* <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Typography sx={{ fontWeight: 600 }}>URL</Typography>
              <LinkIcon />
            </Stack>
            <Link component={RouterLink} to={url} target='_blank'>
              {url}
            </Link> */}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          bottom: 0,
          right: 0,
          justifyContent: 'flex-end',
        }}
      >
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

  const parsedData = data ? JSON.parse(data?.organization?.organization) : undefined;

  // we need error handlers here
  return (
    <>
      {!loading ? (
        parsedData ? (
          <SeeMoreCard
            logoUrl={parsedData.nonprofit.logoUrl}
            avatarSize={50}
            name={parsedData.nonprofit.name}
            coverImageUrl={parsedData?.nonprofit?.coverImageUrl}
            shortDescription={parsedData.nonprofit.description}
            longDescription={parsedData.nonprofit.descriptionLong}
            address={parsedData.nonprofit.locationAddress}
            url={parsedData.nonprofit.websiteUrl}
            slug={slug}
            ein={parsedData?.nonprofit?.ein}
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
