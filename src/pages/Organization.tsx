import React, { useEffect } from 'react';
import { getNonProfitByTitle, getNonProfitByCause } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useUpdatePage } from '../providers/PageProvider';
import OrganizationCard from '../components/organizationCard';
import { RenderSearchSkeleton } from '../components/skeletons';
const removeDash = (str: string) => {
  return str.replace(/-/g, ' ');
};

const Organization: React.FC = () => {
  const { id } = useParams();
  const { page, handleUpdatePage, handleTotalPages } = useUpdatePage();
  // adding to lower case to fix api error
  const parsedId = removeDash(id || '').toLowerCase();
  const { loading, error, data } = useQuery(getNonProfitByCause, {
    variables: { browse: parsedId, take: 20, page: page },
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
    <>{loading ? <RenderSearchSkeleton /> : <OrganizationCard data={data.cause.nonprofits} />}</>
  );
};

export default Organization;
