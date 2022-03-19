import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const SocialSection = ({ size }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.sectionPaddingSm]: size !== 'lg',
        [classes.containerItem]: size === 'lg',
      })}
    >
      <Grid
        container
        direction='column'
        spacing={size !== 'lg' ? 4 : 0}
        className={clsx({
          [classes.socialContainerLarge]: size === 'lg',
        })}
      >
        <Grid item>
          <Typography
            variant='body2'
            color='textSecondary'
            className={clsx({
              [classes.followTypographySm]: size !== 'lg',
              [classes.followTypographyLg]: size === 'lg',
            })}
          >
            Follow Us
          </Typography>
        </Grid>

        <Grid
          item
          className={clsx({
            [classes.socialContainer]: size !== 'lg',
            [classes.socialIcons]: size === 'lg',
          })}
        >
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
  );
};

export default SocialSection;
