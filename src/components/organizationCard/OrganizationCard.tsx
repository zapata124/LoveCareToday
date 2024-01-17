import React, { useEffect } from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Grow,
} from '@mui/material';
import { it } from 'node:test';

interface OrganizationCardProps {
  data: unknown[];
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ data }) => {
  function createWidget(slug: string) {
    /* tslint:disable-next-line */
    // @ts-expect-error this will work once loaded
    everyDotOrgDonateButton?.createButton({
      selector: `#every-donate-${slug}`,
    });
    /* tslint:disable-next-line */
    // @ts-expect-error this will work once loaded
    everyDotOrgDonateButton?.createWidget({
      selector: `#every-donate-${slug}`,
      nonprofitSlug: slug,
      //   nonprofitSlug: 'lilbubsbigfund',
    });
  }

  return (
    <>
      {data.map((item: any, index: number) => {
        setTimeout(() => {
          createWidget(item.slug);
          console.log(item.slug, 'slug');
        }, 0);
        return (
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: 1000 + index * 300 }}
            key={item.name}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card sx={{ height: 1 }}>
                <CardMedia component={'img'} height={'140'} image={item.coverImageUrl} />
                <CardHeader
                  title={item.name}
                  subheader={item.slug}
                  avatar={<img src={item.logoUrl} />}
                />
                <CardContent sx={{ overflowY: 'auto' }}>
                  <Typography>{item.description}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    id={`every-donate-${item.slug}`}
                    // sx={{ bgcolor: 'red' }}
                    href={`https://www.every.org/${item.slug}#/donate`}
                  >
                    {/* <a href={`https://www.every.org/${item.slug}#/donate`}>Donate</a> */}
                    Donate
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
        );
      })}
    </>
  );
};

export default OrganizationCard;
