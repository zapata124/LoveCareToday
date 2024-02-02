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

const apiKey = import.meta.env.VITE_APIkey;
const URL = import.meta.env.VITE_URL;

const convertToLabeldOptions = (options: string[]) => {
  const parced = options.map((option: any) => ({ label: option.name, logoUrl: option.logoUrl }));
  return parced;
};
const SearchBar: React.FC = () => {
  const [search, setSearch] = React.useState<string | undefined>('');
  const [searchOptions, setSearchqOptions] = React.useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://${URL}/search/${search}?apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((data: any) => {
        setSearchqOptions(convertToLabeldOptions(data.nonprofits));
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch('');
    setSearchqOptions([]);
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
              if (newValue === null || newValue === undefined) return;
              handleSubmit(event);
            }}
            inputValue={search}
            onInputChange={(event, newInputValue, reason) => {
              setSearch(reason === 'reset' ? '' : newInputValue);
            }}
            PopperComponent={(props) => (
              <Popper {...props} sx={{ display: 'flex', justifyContent: 'center' }} />
            )}
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
