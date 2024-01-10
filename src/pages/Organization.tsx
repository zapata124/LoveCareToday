import React from 'react';
import { getNonProfitByTitle } from '../query';
import { useQuery } from '@apollo/client';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';

interface OrganizationCardProps {
  data: unknown[];
}
const removeDash = (str: string) => {
  return str.replace(/-/g, ' ');
};

const OrganizationCard: React.FC<OrganizationCardProps> = ({ data }) => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={item.name}>
            <Card sx={{ height: 1 }}>
              <CardMedia component={'img'} height={'140'} image={item.coverImageUrl} />
              <CardHeader
                title={item.name}
                subheader={item.slug}
                avatar={<img src={item.logoUrl} />}
              />
              <CardContent>
                <Typography>{item.description}</Typography>
              </CardContent>
              <CardActions>
                <button>Donate</button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};
const Organization: React.FC = () => {
  const { id } = useParams();
  const parsedId = removeDash(id || '');
  const { loading, error, data } = useQuery(getNonProfitByTitle, {
    variables: { search: parsedId, take: 20 },
  });
  console.log(data, loading, error, id, parsedId);
  return <>{loading ? <div>Loading....</div> : <OrganizationCard data={data.search} />}</>;
};

export default Organization;
