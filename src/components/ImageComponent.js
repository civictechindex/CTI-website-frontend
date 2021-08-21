import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    padding: '16px 0 32px 0',
    margin: 'auto',
  },
  imgStyle: {
    width: '517px',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '250px',
    },
  },
}));

const ImageComponent = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.gridStyle}>
      <CardMedia
        className={classes.imgStyle}
        component='img'
        alt={props.alt}
        image={props.src}
        title={props.alt}
      />
    </Grid>
  );
};

export default ImageComponent;
