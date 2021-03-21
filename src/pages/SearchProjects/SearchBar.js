import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

/**
 * Simple search.
 *
 * FIXME: Should the functions for search be defined here?
 *       const [query, setQuery] = useState('');
 *       const [results, setResults] = useState('');
 *
 *       const handleSubmit = (event) => {
 *          if (event.key === 'Enter') { console.log(query); } };
 *
 * <SearchBar value={query} onInput={e => setQuery(e.target.value)} placeholder="Search the Civic Tech Index" onKeyPress={handleSubmit} />
 *
 * @param {*} value Value of the input passed into the SearchBar. You'll want to pass a state variable here
 * @param {*} onInput Supply hook for value state changes
 * @param {String} placeholder Default placeholder value
 * @param {function} onKeyPress Listens for enter value.
 */

export default function SearchBar(props) {
  return (
    <div align='center'>
      <TextField
        data-cy='search-projects'
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
        margin='normal'
        onInput={props.onInput}
        onKeyPress={props.onKeyPress}
        placeholder={props.placeholder}
        value={props.query}
        variant='outlined'
      />
    </div>
  );
}
