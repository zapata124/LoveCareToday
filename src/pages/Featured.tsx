import React, { useEffect } from 'react';
import { getNonProfitByCause } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useUpdatePage } from '../providers/PageProvider';
import OrganizationCard from '../components/organizationCard';
import { RenderSearchSkeleton } from '../components/skeletons';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { causes } from '../components/drawers/causes';
import { client } from '../client';
import NoDataSVG from '../components/svgs/NoDataSVG';
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
  // the code in this component is duplicated in Organization component !!!!!
  const { id } = useParams();

  const { page, handleUpdatePage, handleTotalPages } = useUpdatePage();

  const { loading, error, data } = useQuery(getNonProfitByCause, {
    variables: { browse: featuredCause.toLowerCase(), take: 20, page: page },
  });
  // we need to write why this is here same for the other useEffects
  // allows render of MemoFeatured component

  // pre fetch for the next page
  // we can do this loggig with apollo suspence and pre fetch feature !!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    if (page) {
      client.query({
        query: getNonProfitByCause,
        variables: { browse: featuredCause.toLowerCase(), take: 20, page: page + 1 },
      });
    }
  }, [page]);
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
        <>
          {data ? (
            <OrganizationCard data={data.cause.nonprofits} Featured={<MemoFeatured />} />
          ) : (
            <NoDataSVG />
          )}
        </>
      )}
    </>
  );
};

export default Featured;
