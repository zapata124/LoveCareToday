import React, { useEffect } from 'react';
import { getNonProfitByCause } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useUpdatePage } from '../providers/PageProvider';
import OrganizationCard from '../components/organizationCard';
import { RenderSearchSkeleton } from '../components/skeletons';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { causes } from '../components/drawers/causes';

const date = new Date().getDate();
const featuredCause = causes[date].cause;

const useResponsiveValue = () => {
  const theme = useTheme();
  const mobile1 = useMediaQuery(theme.breakpoints.down('lg'));
  const mobile2 = useMediaQuery(theme.breakpoints.down('md'));
  if (mobile1) return 'h6';
  if (mobile2) return 'h5';
  return 'h4';
};
const FeatureTypography: React.FC = () => {
  const value = useResponsiveValue();
  return (
    <Typography
      variant={value}
      fontFamily={'initial'}
      fontStyle={'oblique'}
      textAlign={'center'}
      pb={1.5}
      pt={1.5}
    >
      {`Today's Featured Cause: ${featuredCause}`}
    </Typography>
  );
};

const MemoFeatured = React.memo(FeatureTypography);

const Featured: React.FC = () => {
  const { id } = useParams();
  const { handleShow } = useUpdatePage();
  const { page, handleUpdatePage, handleTotalPages } = useUpdatePage();

  const { loading, error, data } = useQuery(getNonProfitByCause, {
    variables: { browse: featuredCause.toLowerCase(), take: 20, page: page },
  });
  useEffect(() => {
    handleShow();
  }, []);
  useEffect(() => {
    if (data?.cause?.pagination?.pages) {
      handleTotalPages(data.cause.pagination.pages);
    }
  }, [data?.cause?.pagination?.pages]);
  useEffect(() => {
    handleUpdatePage(1);
  }, [id]);
  return (
    <>
      <MemoFeatured />
      {loading ? (
        <RenderSearchSkeleton />
      ) : (
        <>
          <OrganizationCard data={data.cause.nonprofits} />
        </>
      )}
    </>
  );
};

export default Featured;
