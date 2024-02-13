import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardActionArea, CardContent, CardActions } from '@mui/material';

const SeeMore: React.FC = () => {
  const [newData, setNewData] = useState<any>();

  return (
    <>
      {newData ? (
        <Card sx={{ overflow: 'scroll' }}>
          {newData && (
            <img src={newData.data?.nonprofit?.coverImageUrl} alt='test' width={'900px'} />
          )}
          {/* {newData.data.nonprofit.description} */}
          {newData.data.nonprofit.descriptionLong}
          {newData.data.nonprofit.locationAddress}
          {newData.data.nonprofit.name}
          {newData.data.nonprofit.websiteUrl}
          {newData && <img src={newData.data.nonprofit.logoUrl} alt='dd' />}
        </Card>
      ) : (
        <div>Loading ....</div>
      )}
    </>
  );
};

export default SeeMore;
