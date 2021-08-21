import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  btnStyle: {
    '& .MuiButton-label': {
      whiteSpace: 'inherit',
    },
  },
  txtStyle: {
    textAlign: 'center',
    fontWeight: 700,
    color: '#042D5F',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  gridStyle: {
    padding: '8px',
    [theme.breakpoints.up('md')]: {
      width: '292px',
    },
    [theme.breakpoints.down('md')]: {
      width: '270px',
    },
  },
  paper: {
    margin: '24px auto 24px auto',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  ptextStyle: {
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.spectrum.darkBlue,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  routingBtnBeforeClick: {
    backgroundColor: theme.palette.background.default,
    border: '1px solid #6D6E74',
    color: theme.palette.spectrum.darkBlue,
    '&:hover': {
      background: 'none',
    },
  },
  routingBtnAfterClick: {
    backgroundColor: theme.palette.spectrum.lightBlue,
    border: '1px solid #6D6E74',
    color: theme.palette.spectrum.white,
  },
  containerAboveBtnStyle: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
  btnContainerStyle: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '14px',
    },
  },
  containerBelowBtnStyle: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  linksContainerStyle: {
    color: theme.palette.spectrum.darkBlue,
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      margin: '32px auto 30px auto',
      fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '32px auto 24px auto',
      fontSize: '14px',
    },
  },
}));

const BottomSection = () => {
  const classes = useStyles();
  const [addBtnClicked, setAddBtnClicked] = useState(false);
  const btnClick = () => {
    setAddBtnClicked(true);
  };

  const renderBtnWithDescription = (classes, btnClick) => {
    return (
      <>
        <Grid className={classes.btnContainerStyle}>
          <Button onClick={btnClick} className={classes.btnStyle}>
            Added to Civic Tech Index
          </Button>
        </Grid>
        <Typography className={classes.containerBelowBtnStyle}>
          Let us know when you&apos;ve added #civictechindex to your project!
        </Typography>
      </>
    );
  };

  const PaperComp = ({ addBtnClicked, text, btext, bhref }) => {
    return (
      <Grid item className={classes.gridStyle}>
        <Paper variant='outlined' className={classes.paper}>
          <Typography variant='body1' className={classes.ptextStyle}>
            {text}
          </Typography>
          <Grid>
            <Button
              href={bhref}
              className={
                addBtnClicked
                  ? classes.routingBtnAfterClick
                  : classes.routingBtnBeforeClick
              }
            >
              {btext}
            </Button>
          </Grid>
        </Paper>
      </Grid>
    );
  };
  return (
    <>
      <Box className='containerWhite'>
        <Container>
          <Grid container direction='column' alignItems='center'>
            <Grid item className={classes.containerAboveBtnStyle}>
              <Typography variant='h3' className={classes.txtStyle}>
                {addBtnClicked ? (
                  <>
                    Thank you for submmiting<br></br> your project!
                  </>
                ) : (
                  <>
                    This project is so new, <br></br>we are celebrating every
                    win!
                  </>
                )}
              </Typography>
            </Grid>
            {!addBtnClicked && renderBtnWithDescription(classes, btnClick)}
            <Grid
              container
              direction='row'
              justify='center'
              className={classes.linksContainerStyle}
            >
              <PaperComp
                addBtnClicked={addBtnClicked}
                text='Add Another Project'
                btext='Tag Generator'
                bhref='/tag-generator'
              />
              <PaperComp
                addBtnClicked={addBtnClicked}
                text='Collaborate with us'
                btext='Learn More'
                bhref='/support'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BottomSection;
