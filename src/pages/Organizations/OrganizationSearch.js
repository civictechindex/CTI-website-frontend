import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 32,
    paddingTop: 16,
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 4,
    color: theme.palette.text.secondary,
    height: 64,
    [theme.breakpoints.down('sm')]: {
      height: 48,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  input: {
    '& .MuiOutlinedInput-root': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 0,
      fontSize: 20,
      height: 64,
      [theme.breakpoints.down('sm')]: {
        height: 48,
        padding: 4,
      },
    },
  },
}));

/* Autocomplete `inputValue` is text displayed, `value` is selected option */
const OrganizationSearch = (props) => {
  const {
    inputPlaceholder,
    inputValue: topLevelInputValue,
    options,
    setInputValue: setTopLevelInputValue,
  } = props;
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState(topLevelInputValue);

  const handleClick = (event) => {
    // is there anything to do upon clicking the magnifying glass?
  };

  const handleInputChange = (event, value, reason) => {
    setInputValue(value);
    setTopLevelInputValue(value);
  };

  const handleChange = (event, value, reason) => {
    if (reason === 'select-option') {
      setValue(value);
    } else if (reason === 'clear') {
      setInputValue('');
      setValue(null);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Box display='flex' alignItems='center'>
          <Autocomplete
            forcePopupIcon={false}
            freeSolo
            fullWidth
            handleHomeEndKeys
            inputValue={inputValue}
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                className={classes.input}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
                placeholder={inputPlaceholder}
              />
            )}
            selectOnFocus
            value={value}
          />
          <IconButton
            type='submit'
            onClick={handleClick}
            className={classes.icon}
            aria-label='search'
          >
            <SearchRoundedIcon fontSize='large' />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default OrganizationSearch;
