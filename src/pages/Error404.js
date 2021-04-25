import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

const Error404 = () => {

  const useStyles = makeStyles((theme) => ({
    errorPageStyle: {
      textAlign: 'center',
      '& h1': {
        [theme.breakpoints.down('sm')]: {
          color: theme.palette.warning.main,
        },
        [theme.breakpoints.up('md')]: {
          color: theme.palette.warning.main,
        },
      },
      '& h6': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '24px',
          color: theme.palette.text.secondary,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '24px',
          color: theme.palette.text.secondary,
        },
      },
    },
  }));

  const ErrorSection = () => {
    const classes = useStyles();
    return (
      <Grid
        container
        justify='center'
        className={classes.errorPageStyle}
      >
        <Grid style={{ fontSize: 52 }}>
          <h1>404<ErrorOutlineRoundedIcon style={{ fontSize: 84 }}/></h1>
          <h6>Oops! The page you are looking for has moved or does not exist.</h6>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box className='containerDefault' p={10}>
      <ErrorSection />
    </Box>
  )
}

export default Error404;
