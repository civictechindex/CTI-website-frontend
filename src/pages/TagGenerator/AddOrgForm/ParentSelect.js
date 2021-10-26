import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ParentSelect = ({ org, orgList, onChange }) => {
  const parseOptionLabel = (option) => {
    if (typeof option === 'object' && option !== null) {
      return option.name;
    }
    return option;
  };

  return (
    <Autocomplete
      autoSelect
      data-cy='parent-org-input'
      freeSolo
      getOptionLabel={parseOptionLabel}
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
