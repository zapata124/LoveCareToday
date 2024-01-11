import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { getNonProfitByTitle } from '../../query';

const apiKey = import.meta.env.VITE_APIkey;
const URL = import.meta.env.VITE_URL;

const convertToLabeldOptions = (options: string[]) => {
  const parced = options.map((option: any) => ({ label: option.name }));
  return parced;
};
const SearchBar: React.FC = () => {
  const [search, setSearch] = React.useState<string | undefined>('');
  const [searchOptions, setSearchqOptions] = React.useState<any>([]);

  // / This is here for late use ///

  //   const [newData, setNewData] = React.useState<any>([]);

  //   const { loading, error, data } = useQuery(getNonProfitByTitle, {
  //     variables: { search: search, take: 10 },
  //   });
  //   useEffect(() => {
  //     if (data?.search) {
  //       const parced = data?.search.map((option: any) => ({ label: option.name }));
  //       setNewData(parced);
  //     }
  //   }, [data]);
  //   const handleASearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearch(event.target.value);
  //   };

  const navigate = useNavigate();
  console.log(apiKey, URL);
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
    navigate(`/search/${search}`);
  };

  return (
    <Box sx={{ width: 600 }}>
      <FormControl fullWidth>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            autoComplete
            autoSelect
            value={search}
            onChange={(event: any, newValue: string | null | undefined) => {
              if (newValue === null || newValue === undefined) return;
              setSearch(newValue as string);
            }}
            inputValue={search}
            onInputChange={(event, newInputValue) => {
              setSearch(newInputValue);
            }}
            disablePortal
            id='combo-box-demo'
            options={searchOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} placeholder='Search' />}
          />
        </form>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
