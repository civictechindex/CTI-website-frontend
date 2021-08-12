import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TagGeneratorInstructions from "../../components/TagGeneratorInstructions";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  btnStyle: {
    '& .MuiButton-label': {
      whiteSpace: 'inherit',
    },
  },
  txtStyle: {
    textAlign: 'center',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  gridStyle: {
    padding: '8px',
    width: '285px',
    [theme.breakpoints.up('sm')]: {
      width: '270px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '265px',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: '12px',
  },
  ptextStyle: {
    fontWeight: 400,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.875rem',
    },
  },
  btnColor: {
    backgroundColor: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.grey[400],
    color: theme.palette.outline.gray,
  },
}));

const BottomSection = () => {
  const classes = useStyles()

  const PaperComp = ({ text, btext, bhref }) => {
    return (
      <Grid item className={classes.gridStyle} >
        <Paper variant="outlined" className={classes.paper}>
          <Grid style={{ padding: '16px' }}>
            <Typography variant='body1' className={classes.ptextStyle}>{text}</Typography>
          </Grid>
          <Grid><Button href={bhref} className={classes.btnColor}>{btext}</Button></Grid>
        </Paper>
      </Grid>
    )
  }
  return (
    <>
      <Box className='containerWhite'>
        <Container>
          <Grid container direction="column" alignItems="center">
            <Grid item style={{ paddingTop: '48px' }}>
              <Typography variant='h3' className={classes.txtStyle}> This project is so new,<br></br> we are celebrating every win</Typography>
            </Grid>
            <Grid item style={{ padding: '24px 0px' }} >
              <Typography variant='h6' className={classes.ptextStyle}>Let us know when you&apos;ve added #civictechindex</Typography>
            </Grid>
            <Grid style={{ paddingBottom: '32px' }}>
              <Button className={classes.btnStyle}>Added to Civic Tech Index</Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" style={{ paddingBottom: '30px' }}>
            <PaperComp text='Add Another Project' btext='Tag Generator' bhref='/tag-generator' />
            <PaperComp text='Collaborate with us' btext='Learn More' bhref='/support' />
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const Instructions = () => {
  return (
    <Box className="pageContainer">
      <TagGeneratorInstructions />
      <BottomSection />
    </Box>
  )
}

export default Instructions
