import React from 'react';
import useStyles from './styles.js';
import NavButton from '../NavButton';

export default function SearchContainer() {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <NavButton href="/projects" variant="blue">Search Projects</NavButton>
    </div>
  )
};
