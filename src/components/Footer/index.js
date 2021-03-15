import React from 'react'
import { Link } from 'react-router-dom/'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import useStyles from './styles'

const SocialSection = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.socialContainer}>
      <Grid item xs={12}>
        <a href='/'>Follow Us</a>
      </Grid>
      <Grid item xs={6} sm={3}>
        <a href='https://www.instagram.com/civictechindex'>
          <img src='/images/insta-logo.svg' alt='Instagram logo' />
        </a>
      </Grid>
      <Grid item xs={6} sm={3}>
        <a href='https://twitter.com/civictechindex'>
          <img src='/images/twitter-logo.svg' alt='Twitter logo' />
        </a>
      </Grid>
      <Grid item xs={6} sm={3}>
        <a href='https://www.facebook.com/civictechindex'>
          <img src='/images/fb-logo.svg' alt='Facebook logo' />
        </a>
      </Grid>
      <Grid item xs={6} sm={3}>
        <a href='https://github.com/civictechindex'>
          <img src='/images/github-logo.svg' alt='GitHub logo' />
        </a>
      </Grid>
    </Grid>
  )
}

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.containerFooter}>
      <Grid container className={classes.footerContainer}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={4} sm={2}>
          <Link to='/'>Join the Index</Link>
          <Link to='/tag-generator'>Tag Generator</Link>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Link to='/about'>About</Link>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Link to='/contributors/all'>Contributors</Link>
          <Link to='/contributors/unaffiliated'>Unaffiliated</Link>
          <Link to='/contributors/affiliated'>Affiliated</Link>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Link to='/'>Radical Collaboration</Link>
          <Link to='/adding-projects-to-the-index'>How to Do It</Link>
          <Link to='/donate'>Donate</Link>
          <Link to='/'>Share the CTI</Link>
          <Link to='/'>Volunteer with Us</Link>
          <Link to='/radicalcollaboration/faq'>FAQ</Link>
        </Grid>
        <Grid item xs={6} sm={2}>
          <SocialSection />
        </Grid>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} className={classes.noteContainer}>
          <p>The Civic Tech Index is an open-source project.</p>
          <p>You can download or contribute to the code on <a href='https://github.com/civictechindex'>GitHub</a>.</p>
          <p><a href="/">View Attributions</a></p>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
