import React, { useEffect, useState } from 'react';
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
  Link,
  Stack,
  Dialog,
  DialogContent,
  Zoom,
} from '@mui/material';
import StockImage from '../../assets/charity-8366471_1280.png';
import Scrollbars from 'react-custom-scrollbars';
import SeeMore from '../seemore/SeeMore';

export const DialogComponent: React.FC<Children> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleOpen}>See more</Button>
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        maxWidth='lg'
      >
        <Zoom in={open}>
          <DialogContent sx={{ padding: 0 }}>{children}</DialogContent>
        </Zoom>
      </Dialog>
    </>
  );
};
interface HoverCardProps {
  children: React.ReactNode;
  name: string;
  slug: string;
  logoUrl: string;
  coverImageUrl: string;
  description: string;
  websiteUrl?: string;
}

const getShortDescription = (description: string) => {
  return description.substring(0, description.indexOf('.') + 1);
};

const HoverCard: React.FC<HoverCardProps> = ({
  children,
  name,
  slug,
  logoUrl,
  coverImageUrl,
  description,
  websiteUrl,
}) => {
  const [hover, setHover] = useState(false);

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
    });
  }
  setTimeout(() => {
    createWidget(slug);
  }, 0);
  return (
    <Card
      // onMouseEnter={() => {
      //   handleMouseEnter();
      // }}
      // onMouseLeave={() => {
      //   handleMouseEnter();
      // }}
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
        {description && <Typography>{getShortDescription(description)}</Typography>}
      </CardContent>
      <CardActions sx={{ height: 40, justifyContent: websiteUrl ? 'space-between' : 'flex-end' }}>
        <Stack direction={'row'} justifyContent={'space-between'} width={1}>
          <DialogComponent>
            <SeeMore nonPropfit={name} />
          </DialogComponent>
          {children}
        </Stack>
      </CardActions>
    </Card>
  );
};

interface OrganizationCardProps {
  data?: unknown[];
  children?: React.ReactNode;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ data }) => {
  return (
    <Scrollbars style={{ width: '100%', height: '100%' }}>
      <Grid container spacing={2} sx={{ pt: 2, pb: 2, pr: 1 }}>
        {data?.map((item: any, index: number) => {
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
                  description={item.description}
                  websiteUrl={item.websiteUrl}
                >
                  <Button
                    id={`every-donate-${item.slug}`}
                    href={`https://www.every.org/${item.slug}#/donate`}
                    sx={{ position: 'relative', bottom: '2%', right: '2%' }}
                  >
                    Donate
                  </Button>
                </HoverCard>
              </Grid>
            </Grow>
          );
        })}
      </Grid>
    </Scrollbars>
  );
};

export default OrganizationCard;
