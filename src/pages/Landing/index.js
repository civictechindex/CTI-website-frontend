import React from 'react'
import useStyles from './styles.js';

const Landing = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.joinHeader}>Join a worldwide movement to catalog every open source civic tech project</h2>
    </div>
  )
}

export default Landing;
