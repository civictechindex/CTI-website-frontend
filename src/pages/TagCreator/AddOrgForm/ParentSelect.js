import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';

const ParentSelect = ({ org, orgList, onChange }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      autoComplete
      getOptionLabel={(option) => option.name}
      getOptionSelected={(option, value) => option.name === value.name }
      onChange={(event, value) => onChange(value)}
      options={orgList}
      value={org}
      renderInput={(params) => (
        <TextField
          label='Parent Organization'
          variant='outlined'
          {...params}
        />
      )}
    />
  );
};

export default ParentSelect;
