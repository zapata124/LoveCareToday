import React, { useEffect } from 'react';
import { getNonProfitByTitle, getNonProfitByCause } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useUpdatePage } from '../providers/PageProvider';
import OrganizationCard from '../components/organizationCard';
import { RenderSearchSkeleton } from '../components/skeletons';
import { client } from '../client';
const removeDash = (str: string) => {
  return str.replace(/-/g, ' ');
};

const Organization: React.FC = () => {
  const { id } = useParams();
  const { page, totalPages, handleUpdatePage, handleTotalPages } = useUpdatePage();
  // adding to lower case to fix api error
  const parsedId = removeDash(id || '').toLowerCase();
  const { loading, error, data } = useQuery(getNonProfitByCause, {
    variables: { browse: parsedId, take: 20, page: page },
  });
  // pre fetch for the next page
  useEffect(() => {
    if (page && page !== totalPages) {
      client.query({
        query: getNonProfitByCause,
        variables: { browse: parsedId, take: 20, page: page + 1 },
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
        <>{data && <OrganizationCard data={data.cause.nonprofits} />} </>
      )}
    </>
  );
};

export default Organization;
