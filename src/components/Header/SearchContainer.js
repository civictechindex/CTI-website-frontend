import React from 'react';
import NavButton from '../NavButton';
import useStyles from './styles.js';

export default function SearchContainer() {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <NavButton href='/projects'>Search Projects</NavButton>
    </div>
  );
}
