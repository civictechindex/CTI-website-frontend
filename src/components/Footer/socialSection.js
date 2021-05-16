import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom/';
import useStyles from './styles';

const SocialSection = ({ size }) => {
  const classes = useStyles()

  return (
    <div className={classes.containerItem}>
      <Grid container direction='column' spacing={size !== 'lg' && 4} className={size === 'lg' && classes.socialContainerLarge}>
        <Grid item xs={12}>
          <Link to="/" style={{ whiteSpace: 'nowrap' }}>Follow Us</Link></Grid>
        <Grid item xs={12} className={size !== 'lg' && classes.socialContainer}>
          <a href='https://www.instagram.com/civictechindex'>
            <img src='/images/insta-logo.svg' alt='Instagram logo' />
          </a>
          <a href='https://twitter.com/civictechindex'>
            <img src='/images/twitter-logo.svg' alt='Twitter logo' />
          </a>
          <a href='https://www.facebook.com/civictechindex'>
            <img src='/images/fb-logo.svg' alt='Facebook logo' />
          </a>
          <a href='https://github.com/civictechindex'>
            <img src='/images/github-logo.svg' alt='GitHub logo' />
          </a>
        </Grid>
      </Grid>
    </div>
  )
};

export default SocialSection;
