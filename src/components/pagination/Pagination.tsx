import React from 'react';
import { useUpdatePage } from '../../providers/PageProvider';
import { useLocation } from 'react-router-dom';
import {
  Stack,
  Button,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Pagination,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const createMenus = (count: number) => {
  const menus = [];

  for (let i = 1; i <= count; i++) {
    menus.push(
      <MenuItem value={i} sx={{ justifyContent: 'center' }} key={`menu-${i}`}>
        {i}
      </MenuItem>,
    );
  }
  return menus;
};
const MobilePagination: React.FC = () => {
  const { page, totalPages, handleUpdatePage } = useUpdatePage();
  const handleChange = (event: SelectChangeEvent) => {
    handleUpdatePage(Number(event.target.value));
  };
  const handlePrevPage = () => {
    if (page !== 1) {
      handleUpdatePage(page - 1);
    }
  };
  const handleNexrPage = () => {
    if (page !== totalPages) {
      handleUpdatePage(page + 1);
    }
  };
  return (
    <Stack direction={'row'}>
      <Button size='small' onClick={handlePrevPage}>
        <KeyboardArrowLeftIcon />
      </Button>
      <FormControl sx={{ m: 1 }}>
        <Select
          value={String(page)}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size='small'
          SelectDisplayProps={{
            style: {
              padding: 0,
            },
          }}
          IconComponent={() => null}
          sx={{
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        >
          {createMenus(totalPages)}
        </Select>
      </FormControl>
      <Button size='small' onClick={handleNexrPage}>
        <KeyboardArrowRightIcon />
      </Button>
    </Stack>
  );
};

const PaginationApp = () => {
  const { page, totalPages, handleUpdatePage } = useUpdatePage();

  const location = useLocation().pathname;
  const findSearch = location.search('search');

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '5rem',
        width: 1,
        alignItems: 'flex-end',
      }}
    >
      {findSearch < 0 && location !== '/' ? (
        mobile ? (
          <MobilePagination />
        ) : (
          <Pagination
            onChange={(event: React.ChangeEvent<unknown>, page: number) => {
              handleUpdatePage(page);
            }}
            count={totalPages}
            page={page}
          />
        )
      ) : null}
    </Stack>
  );
};

export default PaginationApp;
