/* eslint-disable max-lines-per-function */
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import NavButton from '../../components/NavButton';

const useStyles = makeStyles((theme) => ({
  leftContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap-reverse',
    },
  },

  leftInnerTextCardContainer: {
    background: 'none',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '14px',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '3px',
      width: '100%',
    },
  },
  leftCardHeading: {
    color: theme.palette.secondary.dark,
    fontSize: '42px',
    lineHeight: '48px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '27px',
    },
  },
  leftSubcardHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
  leftDescription: {
    fontSize: '18px',
    marginBottom: '11px',
    marginTop: '7px',
    textAlign: 'justify',
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      textAlign: 'justify',
    },
  },
  leftButtonStyle: {
    padding: '8px 32px',
    top: '21px',
    color: '#FEFEFE',
    [theme.breakpoints.down('sm')]: {
      top: '14px',
      padding: '16px 0px',
      width: '192px',
      fontSize: '13px',
    },
  },
  leftImgCard: {
    background: 'none',
    width: '45%',
    marginTop: '30px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  leftCardMedia: {
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
const LeftTextRightImage = ({
  mainHeading,
  subHeading,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  hasExternalNav,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.leftContainerStyle}>
      <Paper elevation={0} className={classes.leftInnerTextCardContainer}>
        <Typography className={classes.leftCardHeading} variant='h4'>
          {' '}
          {mainHeading}{' '}
        </Typography>
        <Typography
          variant='h6'
          color='primary'
          className={classes.leftSubcardHeading}
        >
          {subHeading}
        </Typography>
        <Typography className={classes.leftDescription}>
          {description}
        </Typography>
        <NavButton
          href={buttonHref}
          isExternal={hasExternalNav}
          className={classes.leftButtonStyle}
        >
          {buttonText}
        </NavButton>
      </Paper>
      <Card className={classes.leftImgCard}>
        <CardMedia
          className={classes.leftCardMedia}
          component='img'
          image={imageSrc}
        />
      </Card>
    </Grid>
  );
};
export default LeftTextRightImage;
