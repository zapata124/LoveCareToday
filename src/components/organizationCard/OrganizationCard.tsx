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
import StockImage from '../../assets/charity-8366471_1280.png';
interface OrganizationCardProps {
  data?: unknown[];
  children?: React.ReactNode;
}
interface HoverCardProps {
  children: React.ReactNode;
  name: string;
  slug: string;
  logoUrl: string;
  coverImageUrl: string;
  description: string;
}
const HoverCard: React.FC<HoverCardProps> = ({
  children,
  name,
  slug,
  logoUrl,
  coverImageUrl,
  description,
}) => {
  const [hover, setHover] = React.useState(false);
  const handleMouseEnter = () => {
    setHover(!hover);
  };
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
  setTimeout(() => {
    createWidget(slug);
    console.log(slug, 'slug');
  }, 0);
  return (
    <Card
      onMouseEnter={() => {
        console.log('hovered');
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        console.log('hovered');
        handleMouseEnter();
      }}
      sx={{ position: 'relative', height: 400 }}
    >
      <CardMedia
        component={'img'}
        height={140}
        image={coverImageUrl ? coverImageUrl : StockImage}
      />
      <CardHeader
        title={name}
        subheader={slug}
        avatar={<img src={logoUrl} />}
        sx={{ height: 32 }}
      />
      <CardContent sx={{ overflowY: 'auto', height: 114 }}>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions sx={{ height: 40, justifyContent: 'flex-end' }}>{hover && children}</CardActions>
    </Card>
  );
};

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
      {data?.map((item: any, index: number) => {
        // setTimeout(() => {
        //   createWidget(item.slug);
        //   console.log(item.slug, 'slug');
        // }, 0);
        console.log(item, 'item');
        return (
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: 1000 + index * 300 }}
            key={item.name}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <HoverCard
                name={item.name}
                slug={item.slug}
                logoUrl={item.logoUrl}
                coverImageUrl={item.coverImageUrl}
                description={item.description} // sx={{ position: 'relative', height: 1 }}
                // onClick={() => {
                //   console.log('clicked');
                // }}
                // onMouseEnter={() => {
                //   console.log('hovered');
                // }}
                // onMouseOver={() => {
                //   console.log('hovered');
                // }}
              >
                <Button
                  id={`every-donate-${item.slug}`}
                  // sx={{ bgcolor: 'red' }}
                  href={`https://www.every.org/${item.slug}#/donate`}
                  sx={{ position: 'relative', bottom: '2%', right: '2%' }}
                >
                  {/* <a href={`https://www.every.org/${item.slug}#/donate`}>Donate</a> */}
                  Donate
                </Button>
              </HoverCard>
            </Grid>
          </Grow>
        );
      })}
    </>
  );
};

export default OrganizationCard;
