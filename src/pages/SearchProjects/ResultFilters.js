import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  filters: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    '& p': {
      marginRight: theme.spacing(1),
    },
  },
}));

const ResultFilters = ({ show, filterTags, onFilterChange }) => {
  const classes = useStyles();
  if (show) {
    return (
      <Box className={classes.filters}>
        <Typography variant='body1'>
          <b>Filter: </b>
        </Typography>
        {filterTags}
        <Typography
          variant='body1'
          color='secondary'
          onClick={() => onFilterChange({ category: 'all' }, true)}
        >
          <b>Clear all</b>
        </Typography>
      </Box>
    );
  }
  return null;
};

export default ResultFilters;
