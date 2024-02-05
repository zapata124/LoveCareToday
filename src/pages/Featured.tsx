import React, { useEffect } from 'react';
import { getNonProfitByCause } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useUpdatePage } from '../providers/PageProvider';
import OrganizationCard from '../components/organizationCard';
import { RenderSearchSkeleton } from '../components/skeletons';
import { Typography } from '@mui/material';
import { causes } from '../components/drawers/causes';

const date = new Date().getDate();
const featuredCause = causes[date].cause;

const FeatureTypography: React.FC<Children> = ({ children }) => {
  return (
    <>
      <Typography variant='h4' fontFamily={'initial'} fontStyle={'oblique'} textAlign={'center'}>
        {`Today's Featured Cause: ${' '}${featuredCause}`}
      </Typography>
      {children}
    </>
  );
};

const Featured: React.FC = () => {
  const { id } = useParams();
  const { page, handleUpdatePage, handleTotalPages } = useUpdatePage();

  const { loading, error, data } = useQuery(getNonProfitByCause, {
    variables: { browse: featuredCause.toLowerCase(), take: 20, page: page },
  });
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
      {loading ? (
        <RenderSearchSkeleton />
      ) : (
        <FeatureTypography>
          <OrganizationCard data={data.cause.nonprofits} />
        </FeatureTypography>
      )}
    </>
  );
};

export default Featured;
