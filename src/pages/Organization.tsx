import React, { useEffect, useRef } from 'react';
import { getNonProfitByTitle, getNonProfitByCause } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useUpdatePage } from '../providers/PageProvider';
import OrganizationCard from '../components/organizationCard';
import { RenderSearchSkeleton } from '../components/skeletons';
import { replaceDash } from '../util/replaceDash';
const removeDash = (str: string) => {
  return str.replace(/-/g, ' ');
};

const Organization: React.FC = () => {
  const { id } = useParams();
  const { page, handleUpdatePage, handleTotalPages } = useUpdatePage();
  // adding to lower case to fix api error
  const parsedId = removeDash(id || '').toLowerCase();
  console.log({ parsedId });
  const { loading, error, data } = useQuery(getNonProfitByCause, {
    variables: { browse: parsedId, take: 20, page: page },
  });
  // const pageRef = useRef<number>();
  console.log(data, loading, error, id, parsedId, 'ddddddddd');
  useEffect(() => {
    // pageRef.current = page;
  }, [page]);
  useEffect(() => {
    if (data?.cause?.pagination?.pages) {
      handleTotalPages(data.cause.pagination.pages);
    }
  }, [data]);
  useEffect(() => {
    handleUpdatePage(1);
  }, [id]);
  return (
    <>{loading ? <RenderSearchSkeleton /> : <OrganizationCard data={data.cause.nonprofits} />}</>
  );
};

export default Organization;
