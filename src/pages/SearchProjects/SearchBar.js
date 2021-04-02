import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  icon: {
    backgroundColor: theme.palette.secondary.main,
    borderBottomRightRadius: '4px',
    borderTopRightRadius: '4px',
    color: theme.palette.text.secondary,
    height: '56px',
    marginRight: '-14px',
    width: '56px',
  },
  input: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      data-cy={props.dataCy}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchRoundedIcon className={classes.icon} />
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
  );
}
