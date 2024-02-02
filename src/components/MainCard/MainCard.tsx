import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getNonProfit } from '../../query';
import { RenderSearchSkeleton } from '../skeletons';

const replaceSpace = (str: string) => {
  return str.replace(/\s/g, '-');
};
const MainCard: React.FC = () => {
  const { loading, error, data } = useQuery(getNonProfit);
  return (
    <>
      {loading ? (
        <RenderSearchSkeleton />
      ) : (
        <Grid container spacing={2} sx={{ pt: 2, pb: 2, pr: 1 }}>
          {data?.nonprofit?.map((item: any) => (
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={item.id}>
              <Card sx={{ height: 1 }}>
                <CardHeader
                  title={item.title}
                  subheader={item.tagName}
                  avatar={<img src={item.tagImageUrl} />}
                />
                <CardActionArea>
                  <CardContent>
                    <Link component={RouterLink} to={`/${replaceSpace(item.title)}`}>
                      {item.tagUrl}
                    </Link>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <button>Donate</button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default MainCard;
