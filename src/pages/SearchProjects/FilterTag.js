import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  filterTag: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '4px',
    height: '42px',
    '&.MuiChip-outlined': {
      borderColor: theme.palette.outline.gray,
    },
    '&.MuiChip-deletable svg': {
      color: theme.palette.outline.gray,
    },
  },
}));

const FilterTag = ({ data, onDelete }) => {
  const classes = useStyles();
  return (
    <Chip
      variant='outlined'
      label={data.label}
      className={classes.filterTag}
      onDelete={() => onDelete(data, true)}
    />
  );
};

export default FilterTag;
