/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import countries from './countryList';

/*
 * ISO 3166-1 alpha-2
 * ⚠️ No support for IE 11
 */
const countryToFlag = (isoCode) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? String.fromCodePoint(...[...isoCode.toUpperCase()]
      .map((char) => 127397 + char.charCodeAt()))
    : isoCode;
};

const CountrySelect = ({ onChange }) => {
  const classes = useStyles();

  const handleInputChange = (event, value) => {
    event.preventDefault();
    if (value) {
      onChange(value);
    } else {
      onChange(event.target.value);
    }
  };

  return (
    <Autocomplete
      id='country-select-demo'
      name='country'
      options={countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onInputChange={handleInputChange}
      renderOption={(option) => (
        <span>
          {countryToFlag(option.code)} {option.label} +{option.phone}
        </span>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label=''
          id='filled-basic'
          variant='outlined'
          size='medium'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
