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

const CountrySelect = ({ country, onChange }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      autoComplete
      data-cy='org-country-input'
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, value) => option.label === value.label }
      onChange={(event, value) => onChange(value)}
      options={countries}
      value={country}
      renderInput={(params) => (
        <TextField
          className={classes.field}
          label='Country'
          variant='outlined'
          {...params}
        />
      )}
      renderOption={(option) => (
        <span>
          {countryToFlag(option.code)} {option.label} +{option.phone}
        </span>
      )}
    />
  );
};

export default CountrySelect;
