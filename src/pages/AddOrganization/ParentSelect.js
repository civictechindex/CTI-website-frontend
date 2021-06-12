import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 14,
  },
});

export default function ParentSelect({ onChange, orgList }) {
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
      id='parent-org-select'
      name='parent-org'
      options={orgList}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => String(option.id)}
      onInputChange={handleInputChange}
      renderOption={(option) => (
        `${option.name} (${option.id})`
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label=''
          id='filled-basic'
          variant='outlined'
          size='large'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}