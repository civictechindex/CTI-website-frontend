/* eslint-disable max-lines-per-function */
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import NavButton from '../../components/NavButton';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  rightContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  rightInnerTextCardContainer: {
    background: 'none',
    width: '45%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '3px',
    },
  },
  rightCardHeading: {
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
  rightSubcardHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
  rightDescription: {
    marginBottom: '11px',
    marginTop: '7px',
    fontSize: '18px',
    textAlign: 'justify',
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  rightButtonStyle: {
    backgroundColor: theme.palette.spectrum.lightBlue,
    padding: '8px 32px',
    top: '21px',
    [theme.breakpoints.down('sm')]: {
      top: '14px',
      padding: '16px 0px',
      width: '192px',
      height: '42px',
      fontSize: '13px',
    },
  },
  rightImgCard: {
    background: 'none',
    width: '45%',
    marginTop: '30px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  rightCardMedia: {
    borderRadius: '8px',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
const RightImageLeftText = ({
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
    <Grid container className={classes.rightContainerStyle}>
      <Card className={classes.rightImgCard}>
        <CardMedia
          className={classes.rightCardMedia}
          component='img'
          image={imageSrc}
        />
      </Card>
      <Paper elevation={0} className={classes.rightInnerTextCardContainer}>
        <Typography className={classes.rightCardHeading} variant='h4'>
          {' '}
          {mainHeading}{' '}
        </Typography>
        <Typography
          variant='h6'
          color='primary'
          className={classes.rightSubcardHeading}
        >
          {subHeading}
        </Typography>
        <Typography className={classes.rightDescription}>
          {description}
        </Typography>
        <NavButton
          href={buttonHref}
          isExternal={hasExternalNav}
          className={classes.rightButtonStyle}
        >
          {buttonText}
        </NavButton>
      </Paper>
    </Grid>
  );
};
export default RightImageLeftText;
