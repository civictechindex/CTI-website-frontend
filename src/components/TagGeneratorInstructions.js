import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

  projectsList: {
    color: theme.palette.text.primary,
    paddingLeft: '126px',
    backgroundColor: theme.palette.background.secondary,
  },
  btnText: {
    borderRadius: '142.5px',
    fontSize: '14px',
    fontFamily: 'Work Sans',
    paddingTop:'10px',
  },
  btnStyle: {
    width: '468px',
    height: '56px',
    paddingTop: '13px',
    paddingLeft: '57px',
  },
  button: {
    width:'200px',
    height: '36px',
    borderRadius: '22.5px',
    backgroundColor: '#fff',
    border: '1px solid #BCBCBC',
    color: '#6D6E74',
    fontSize: '14px',
    fontFamily: 'Work Sans',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  btnClass: {
    paddingLeft:'30px',
    paddingTop:'30px',
  },
  projectText: {
    fontSize: '32px',
    fontWeight:'500',
    lineHeight: '40px',
    paddingTop: '40px',
    color: '#042D5F',
    fontFamily: 'Work Sans',
  },
  projText: {
    marginTop: '40px',
    paddingBottom: '64px',
    paddingRight: '82px',
  },

  boxItem: {
    border: '1px solid #BCBCBC',
    borderRadius: '12px',
    width: '272px',
    height: '152px',
  },
  boxText: {
    paddingTop: '30px',
    paddingLeft: '46px',
    color:'#0F1D2F',
    fontSize: '18px',
    fontFamily: 'Work Sans',
  },

}));

const HowToUse = () => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.projectsList} component="div">
        <List>
          <ListItem alignItems="flex-start" >
            <ListItemText primary={
              <Typography style={{ fontSize: '17px', paddingBottom: '12px' }}> 1. Navigate to your project&apos;s repository in another browser to add your generated tags.</Typography>}>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary={
              <Typography style={{ fontSize: '17px' }}>2. Under your project’s repository, click to paste your tags.</Typography>}>
            </ListItemText>
            <ListItemText><img src="/images/step_2.png" alt="Step 2" /></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary={
              <Typography style={{ fontSize: '17px' }}>3. Under &quot;Topics&quot;, paste the topic you want to add to your repository.</Typography>}>
            </ListItemText>
            <ListItemText><img src="/images/step_3.png" alt="Step 3" /></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary={
              <Typography style={{ fontSize: '17px' }}>4. Repeat until you have finished adding all of your tags, then click Save Changes.</Typography>}>
            </ListItemText>
            <ListItemText><img src="/images/step_4.png" alt="Step 4" style={{ paddingRight: '97px' }} /></ListItemText>
          </ListItem>
        </List>
      </Typography>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid className={classes.projectText}> This project is so new we are celebrating every win</Grid>
        <Grid className={classes.btnStyle}>
          <Button className={classes.btnText}>Let us know when you&apos;ve added <br/> #civictechindex</Button>
        </Grid>
        <Grid container direction="row" className={classes.projText} alignItems="center" justify="center">
          <Box component="div" className={classes.boxItem} p={1} m={1}>
            <Typography className={classes.boxText}>Add Another Project</Typography>
            <Grid className={classes.btnClass}> <Button className={classes.button} href="/tag-generator">Tag Generator</Button></Grid>
          </Box>
          <Box component="div" className={classes.boxItem} p={1} m={1}>
            <Typography className={classes.boxText}>Collaborate with us</Typography>
            <Grid className={classes.btnClass}> <Button className={classes.button} href="/radicalcollaboration/faq">Learn More</Button></Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default HowToUse


