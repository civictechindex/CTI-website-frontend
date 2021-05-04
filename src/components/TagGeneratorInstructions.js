import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  btnStyle: {
    width:'368px',
    height: '56px',
    '& .MuiButton-label':{
      whiteSpace:'inherit',
    },
  },
  txtStyle:{
    textAlign: 'center',
    fontWeight:400,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: '12px',
  },
  ptextStyle:{
    fontSize: '18px',
    fontWeight:500,
  },
  btnColor:{
    backgroundColor:theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.grey[400],
    color: theme.palette.outline.gray,
  },
}));

const BottomSection = () =>{
  const classes = useStyles()

  const PaperComp = ({ text,btext,bhref }) =>{
    return (
      <Grid style={{ padding:'30px 15px' }}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid style={{ padding:'15px 25px' }}>
            <Typography className={classes.ptextStyle}>{text}</Typography>
          </Grid>
          <Grid style={{ padding:'15px' }}><Button href={bhref} className={classes.btnColor}>{btext}</Button></Grid>
        </Paper>
      </Grid>
    )
  }
  return (
    <>
      <Box className='containerWhite'>
        <Container>
          <Grid container direction="column" alignItems="center">
            <Grid item md={6}  style={{ padding: '48px' }}>
              <Typography variant='h3' className={classes.txtStyle}> This project is so new we are celebrating every win</Typography>
            </Grid>
            <Grid>
              <Button className={classes.btnStyle}>Let us know when you&apos;ve added #civictechindex</Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" style={{ padding:'30px' }}>
            <PaperComp text='Add Another Project' btext='Tag Generator' bhref='/tag-generator'/>
            <PaperComp text='Collaborate with us' btext='Learn More' bhref='/support'/>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const HowToUse = () => {
  const StepComp =({ stext,src,alt }) =>{
    return (
      <>
        <Grid item xs={12} md={6}>
          <Typography variant='body1'>{stext}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={src} alt={alt} />
        </Grid>
      </>
    )
  }

  return (
    <>
      <Box className='containerGray'>
        <Container>
          <Grid container >
            <Grid item xs={12} style={{ padding:'70px 10px' }}>
              <Typography variant='body1'> 1. Navigate to your project&apos;s repository in another browser to add your generated tags.</Typography>
            </Grid>
            <StepComp stext='2. Under your project’s repository, click to paste your tags.' src='/images/step_2.png' alt='Step 2'/>
            <StepComp stext='>3. Under &quot;Topics&quot;, paste the topic you want to add to your repository.' src='/images/step_3.png' alt='Step 3'/>
            <StepComp stext='4. Repeat until you have finished adding all of your tags, then click Save Changes.' src='/images/step_4.png' alt='Step 4'/>
          </Grid>
        </Container>
        <BottomSection/>
      </Box>
    </>
  )
}

export default HowToUse


