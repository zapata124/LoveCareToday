import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
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
    <List>
      {loading ? (
        'Loading...'
      ) : (
        <>
          {data?.nonprofit?.map((item: any) => (
            <ListItem key={item.id}>
              <Card sx={{ maxWidth: 345, minWidth: 300 }}>
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
            </ListItem>
          ))}
        </>
      )}
    </List>
  );
};

export default MainCard;
