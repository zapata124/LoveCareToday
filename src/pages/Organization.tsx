import React from 'react';
import { getNonProfitByTitle, getNonProfitByCause } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import OrganizationCard from '../components/organizationCard';
import { RenderSearchSkeleton } from '../components/skeletons';
import { replaceDash } from '../util/replaceDash';
const removeDash = (str: string) => {
  return str.replace(/-/g, ' ');
};

const Organization: React.FC = () => {
  const { id } = useParams();
  // adding to lower case to fix api error
  const parsedId = removeDash(id || '').toLowerCase();
  console.log({ parsedId });
  const { loading, error, data } = useQuery(getNonProfitByCause, {
    variables: { browse: parsedId, take: 20 },
  });
  console.log(data, loading, error, id, parsedId, 'ddddddddd');
  return <>{loading ? <RenderSearchSkeleton /> : <OrganizationCard data={data.cause} />}</>;
};

export default Organization;
