import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import Typography from '@material-ui/core/Typography';

const Error404 = () => {

  const useStyles = makeStyles((theme) => ({
    errorPageStyle: {
      textAlign: 'center',
      '& h1': {
        [theme.breakpoints.down('sm')]: {
          color: theme.palette.warning.main,
          fontSize: '72px',
        },
        [theme.breakpoints.up('md')]: {
          color: theme.palette.warning.main,
          fontSize: '72px',
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
      <Container maxWidth= 'sm' className={classes.errorPageStyle} >
        <Typography variant='h1'>404<ErrorOutlineRoundedIcon style={{ fontSize: 60 , transform: "translateX(12px) translateY(6px)" }}/></Typography>
        <Typography variant='h6'>Oops! The page you are looking for has moved or does not exist.</Typography>
      </Container>
    );
  };

  return (
    <Box className='containerDefault' py={10} px={5}>
      <ErrorSection/>
    </Box>
  )
}

export default Error404;
