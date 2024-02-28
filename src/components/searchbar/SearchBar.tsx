import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getSearchBarData } from '../../query';
import { useChangeZIndex } from '../../providers/ChangeZIndexProvider';

const convertToLabeldOptions = (options: string[]) => {
  const parced = options.map((option: any) => ({ label: option.name, logoUrl: option.logoUrl }));
  return parced;
};

const SearchBar: React.FC = () => {
  const { change, changeIndex } = useChangeZIndex();
  const [search, setSearch] = React.useState<string | undefined>('');
  const [searchOptions, setSearchqOptions] = React.useState<any[]>([]);
  // temp solution until we can use fetch with gql
  const { data } = useQuery(getSearchBarData, {
    variables: { arg: search },
  });

  const navigate = useNavigate();
  // temp solution until we can use fetch with gql
  useEffect(() => {
    if (search && !change) {
      changeIndex();
    }
    if (data) {
      setSearchqOptions(convertToLabeldOptions(JSON.parse(data.searchBar.data).nonprofits));
    }
  }, [search, data]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch('');
    setSearchqOptions([]);
    changeIndex();
    console.log('dddddd', search);
    // this is returning the search item
    // is also giving error when closing the popper
    // internal server error!!!!!
    navigate(`/search/${event.type === 'click' ? event.target.outerText : search}`);
  };

  return (
    <Box
      sx={{
        width: { xl: '25%', lg: '35%', md: '45%', sm: '50%', xs: '100%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormControl sx={{ width: '100%', pl: 1, pr: 1 }}>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            sx={{
              '.MuiAutocomplete-inputRoot': { borderRadius: 500, padding: 0, pl: 2 },
            }}
            autoComplete
            autoSelect
            onChange={(event: any, newValue: string | null | undefined | any) => {
              console.log(event, newValue);
              if (newValue === null || newValue === undefined) return;
              handleSubmit(event);
            }}
            inputValue={search}
            onInputChange={(event, newInputValue, reason) => {
              setSearch(reason === 'reset' ? '' : newInputValue);
            }}
            PopperComponent={(props: any) => {
              if (props.open === false && change) {
                setTimeout(() => {
                  changeIndex();
                }, 0);
              }
              return <Popper {...props} sx={{ display: 'flex', justifyContent: 'center' }} />;
            }}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            loading={searchOptions.length === 0}
            open={search !== ''}
            PaperComponent={({ children }) => <Paper style={{ width: '92%' }}>{children}</Paper>}
            disablePortal
            id='combo-box-demo'
            options={searchOptions}
            renderOption={(props, option: { label: string; logoUrl: string }) => {
              return (
                <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img loading='lazy' width='20' src={option.logoUrl} alt='' />
                  <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} noWrap>
                    {option.label}
                  </Typography>
                </Box>
              );
            }}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Search'
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {searchOptions.length === 0 && search !== '' ? (
                        <CircularProgress color='inherit' size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </form>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
