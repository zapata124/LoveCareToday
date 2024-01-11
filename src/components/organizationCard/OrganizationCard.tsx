import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';

interface OrganizationCardProps {
  data: unknown[];
}

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

export default OrganizationCard;
