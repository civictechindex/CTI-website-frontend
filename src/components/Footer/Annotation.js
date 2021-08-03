import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

export default function Annotation() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.annotation}>
      <Typography variant='body1' color='textSecondary'>
        The Civic Tech Index is an open-source project, read more on our&nbsp;
        <a style={{ color: '#0D99C6', padding: '0px' }} href='https://github.com/civictechindex'>GitHub</a>.
      </Typography>
    </Grid>
  )
}
