import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    maxWidth: '8rem',
  },
  query: {
    color: theme.palette.secondary.main,
  },
  select: {
    [theme.breakpoints.down('xs')]: {
      width: '55vw',
    },
  },
}));

const ResultHeaderLarge = (props) => {
  const classes = useStyles();
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Typography color='primary'>
        <b>Displaying {props.itemLength} of {props.totalCount} results matching: </b>
        <span className={classes.query}><b>“{props.queryStr}”</b></span>
      </Typography>
      <FormControl variant='outlined'>
        <InputLabel id='sort-select-label'>Sort</InputLabel>
        <Select
          labelId='sort-select-label'
          label='Sort'
          defaultValue='best match'
          onChange={(e) => props.onSortChange(e.target.value)}
        >
          <MenuItem value='best match'>Best Match</MenuItem>
          <MenuItem value='updated'>Last Updated</MenuItem>
          <MenuItem value='stars'>Stargazer Count</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const ResultHeaderSmall = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
        <Button className={classes.button} onClick={props.onHeaderClick}><FilterListIcon />Filter</Button>
        <FormControl variant='outlined'>
          <InputLabel id='sort-select-label'>Sort</InputLabel>
          <Select
            labelId='sort-select-label'
            label='Sort'
            defaultValue='best match'
            className={classes.select}
            onChange={(e) => props.onSortChange(e.target.value)}
          >
            <MenuItem value='best match'>Best Match</MenuItem>
            <MenuItem value='updated'>Last Updated</MenuItem>
            <MenuItem value='stars'>Stargazer Count</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography color='primary'>
          <b>Displaying {props.itemLength} of {props.totalCount} results matching: </b>
          <span className={classes.query}><b>“{props.queryStr}”</b></span>
        </Typography>
      </Box>
    </>
  );
};

const ResultHeader = (props) => {
  if (props.variant === 'large') {
    return <ResultHeaderLarge {...props} />
  } else {
    return <ResultHeaderSmall {...props} />
  }
};

export default ResultHeader;
