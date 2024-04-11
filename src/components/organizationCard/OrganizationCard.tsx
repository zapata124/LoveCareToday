import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
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
  Stack,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import StockImage from '../../assets/charity-8366471_1280.png';
import SeeMore from '../seemore/SeeMore';
import CloseIcon from '@mui/icons-material/Close';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useAuthenticatedUser } from '../../providers/AuthenticatedUserProvider';
import { useLazyQuery, useMutation } from '@apollo/client';
import { clientPY } from '../../client';
import { addBookmark, deleteBookmark } from '../../query';
import { useUpdateBookmarks } from '../../hooks';
import { customScrollBar } from '../../style';

interface TestProps {
  contentComponent: ReactNode;
  actionComponent: ReactElement;
}
export const DialogComponent: React.FC<TestProps> = ({ contentComponent, actionComponent }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const onClickComponent = React.cloneElement(actionComponent, { onClick: () => handleOpen() });
  return (
    <>
      {onClickComponent}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleOpen}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        maxWidth='lg'
        // zIndex = 99 allows to render the donate dialog on top of this current dialog
        sx={{ zIndex: 99 }}
      >
        {fullScreen && (
          <Box
            sx={{
              position: 'absolute',
              zIndex: 1,
              top: 0,
              right: 0,
              bgcolor: 'white',
              borderRadius: '8px 0 8px',
            }}
          >
            <CloseIcon onClick={handleOpen} />
          </Box>
        )}
        <DialogContent sx={{ padding: 0 }}>{contentComponent}</DialogContent>
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

export const createWidget = (slug: string) => {
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
};

type BookmarkAppProp = { name: string; slug: string };
export const BookmarkApp: React.FC<BookmarkAppProp> = ({ name, slug }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const { handleAddBookmark, handleDeleteBookmark } = useUpdateBookmarks();
  const { cookie } = useAuthenticatedUser();
  const bookmarks = cookie?.user?.bookmarks;
  const checkBookmark = bookmarks ? (bookmarks[name] ? true : false) : null;
  const fontSize = 26;

  if (!bookmarks) {
    return null;
  }
  const setBookmark = () => {
    handleAddBookmark(name, slug);
    // allows for a quick update of the bookmark visually
    setBookmarked(true);
  };

  const removeBookmark = () => {
    handleDeleteBookmark(name);
    // allows for a quick update of the bookmark visually
    setBookmarked(false);
  };

  useEffect(() => {
    if (bookmarked) {
      setBookmarked(false);
    }
  }, [cookie]);

  return (
    <Box sx={{ pr: 2 }}>
      {checkBookmark || bookmarked ? (
        <BookmarkIcon
          sx={{ fontSize: fontSize, color: '#FFA500', ':hover': { cursor: 'pointer' } }}
          onClick={removeBookmark}
        />
      ) : (
        <BookmarkBorderIcon
          sx={{ fontSize: fontSize, ':hover': { cursor: 'pointer' } }}
          onClick={setBookmark}
        />
      )}
    </Box>
  );
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
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <CardHeader
          title={name}
          subheader={slug}
          avatar={<img src={logoUrl} />}
          sx={{ height: 32 }}
        />
        <BookmarkApp name={name} slug={slug} />
      </Stack>
      <CardContent sx={{ overflowY: 'auto', height: 114 }}>
        {description && <Typography>{getShortDescription(description)}</Typography>}
      </CardContent>
      <CardActions sx={{ height: 40, justifyContent: websiteUrl ? 'space-between' : 'flex-end' }}>
        <Stack direction={'row'} justifyContent={'space-between'} width={1}>
          <DialogComponent
            contentComponent={<SeeMore nonProfit={name} slug={slug} />}
            actionComponent={<Button>See more</Button>}
          />
          {children}
        </Stack>
      </CardActions>
    </Card>
  );
};

interface OrganizationCardProps {
  data?: unknown[];
  children?: React.ReactNode;
  Featured?: React.ReactNode;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ data, Featured }) => {
  return (
    <Box width={1} height={1} sx={{ overflowY: 'scroll', ...customScrollBar }}>
      {Featured}
      <Grid container spacing={2} sx={{ pt: 2, pb: 2, pr: 1 }}>
        {data?.map((item: any, index: number) => {
          if (!item.coverImageUrl) {
            return null;
          }
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
    </Box>
  );
};

export default OrganizationCard;
