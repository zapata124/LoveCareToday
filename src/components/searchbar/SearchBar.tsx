import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

const SearchBar: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const handleASearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch('');
    console.log(search, 'submitted');
  };
  console.log(search);
  return (
    <Box sx={{ width: 600 }}>
      <FormControl fullWidth>
        <form onSubmit={handleSubmit}>
          <TextField
            id='outlined-basic'
            label=''
            placeholder='Search'
            type='search'
            variant='outlined'
            sx={{ width: '100%' }}
            onChange={handleASearch}
            // defaultValue={search}
            value={search}
          />
        </form>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
