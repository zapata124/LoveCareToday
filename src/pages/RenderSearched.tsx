import React from 'react';
import { getNonProfitByTitle } from '../query';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import OrganizationCard from '../components/organizationCard';

const removeDash = (str: string) => {
  return str.replace(/-/g, ' ');
};

const RenderSearch: React.FC = () => {
  const { id } = useParams();
  const parsedId = removeDash(id || '');
  const { loading, error, data } = useQuery(getNonProfitByTitle, {
    variables: { search: parsedId, take: 20 },
  });
  console.log(data, loading, error, id, parsedId);
  return <>{loading ? <div>Loading....</div> : <OrganizationCard data={data.search} />}</>;
};

export default RenderSearch;
