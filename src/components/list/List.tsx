import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader } from '@mui/material';

// interface CharityCardProps {

// }

const MainCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader title='Charity Name' subheader='Charity Type' />
        <CardContent>Charity Description</CardContent>
      </CardActionArea>
      <CardActions>
        <button>Donate</button>
      </CardActions>
    </Card>
  );
};

export default MainCard;
