import React from 'react';
import useStyles from './styles.js';
import NavButton from '../NavButton';

export default function SearchContainer() {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <NavButton href="/projects">Search Projects</NavButton>
    </div>
  )
};
