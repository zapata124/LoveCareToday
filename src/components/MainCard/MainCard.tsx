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
// interface CharityCardProps {

// }
const replaceSpace = (str: string) => {
  return str.replace(/\s/g, '-');
};
const MainCard: React.FC = () => {
  const { loading, error, data } = useQuery(getNonProfit);
  console.log(data, loading, error);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <>
          {data?.nonprofit?.map((item: any) => (
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={item.id}>
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
        </>
      )}
    </>
  );
};

export default MainCard;
