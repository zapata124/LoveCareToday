import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardActionArea, CardContent, CardActions } from '@mui/material';

const SeeMore: React.FC = () => {
  const [newData, setNewData] = useState<any>();
  useEffect(() => {
    fetch(
      'https://partners.every.org/v0.2/nonprofit/Hoop-For-All-Foundation?apiKey=pk_live_4d17374d4c171f0f91524140256c6bc3',
    )
      .then((data) => data.json())
      .then((data: any) => {
        console.log(data);
        setNewData(data);
      });
  }, []);

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
