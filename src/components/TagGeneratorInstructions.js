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
    backgroundColor: '#0CB2E7',
    borderRadius: '12px',
  },
  btnStyle: {
    width: '468px',
    height: '56px',
    paddingTop: '13px',
    paddingLeft: '25rem',
  },
  button: {
    borderRadius: '5em',
    backgroundColor: '#fff',
    color: '#6D6E74',
    fontSize: '14px',
    fontFamily: 'Work Sans',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  projectText: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '40px',
    color: '#042D5F',
  },
  projText: {
    marginTop: '40px',
    paddingLeft: '21rem',
    paddingBottom: '64px',
  },

  boxItem: {
    border: '1px solid #BCBCBC',
    borderRadius: '15px',
    fontSize: '18px',
    width: '272px',
    height: '152px',
  },
  boxText: {
    paddingTop: '30px',
    paddingLeft: '37px',
  },

}));

const HowToUse = () => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.projectsList}>
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
            <ListItemText><img src="/images/step_4.png" alt="Step 4" /></ListItemText>
          </ListItem>
        </List>
      </Typography>
      <Grid>
        <Grid className={classes.projectText}> This project is so new we are celebrating every win</Grid>
      </Grid>
      <Box className={classes.btnStyle}>
        <Button className={classes.btnText}>Let us know when you&apos;ve added  #civictechindex</Button>
      </Box>
      <Grid container direction="row" className={classes.projText}>
        <Box component="div" className={classes.boxItem} p={1} m={1}>
          <Typography className={classes.boxText}>Add Another Project</Typography>
          <Grid className={classes.boxText}> <Button variant="outlined" className={classes.button} href="/tag-generator">Tag Generator</Button></Grid>
        </Box>
        <Box component="div" container direction="row" className={classes.boxItem} p={1} m={1}>
          <Typography className={classes.boxText}>Collaborate with us</Typography>
          <Grid className={classes.boxText}> <Button variant="outlined" className={classes.button} href="/radicalcollaboration/faq">Learn More</Button></Grid>
        </Box>
      </Grid>
    </>
  )
}

export default HowToUse


