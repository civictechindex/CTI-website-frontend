import { Link } from 'react-router-dom'
import React from 'react'
import useStyles from './styles.js'

const SocialSection = () => {

  const classes = useStyles()

  return (
    <div className={classes.infoContainer}>
      <a href='/' className={classes.infoHeader}>Follow Us</a>
      <a href='https://www.instagram.com/civictechindex'>
        <img
          className={classes.margin}
          src='/images/insta-logo.svg'
          alt='instagram logo' /></a>
      <a href='https://twitter.com/civictechindex'>
        <img
          className={`${classes.margin} ${classes.twitter}`}
          src='/images/twitter-logo.svg' alt='twitter logo' /></a>
      <a href='https://www.facebook.com/civictechindex'>
        <img className={classes.margin} src='/images/fb-logo.svg' alt='facebook logo' /></a>
      <a href='https://github.com/civictechindex'>
        <img src='/images/github-logo.svg' alt='github logo' /></a>
    </div>
  )
}

const Footer = () => {

  const classes = useStyles()

  return (
    <div className={classes.footerContainer}>
      <div className={classes.allInfoContainer}>
        <div className={classes.infoContainer}>
          <Link to='/' className={classes.infoHeader}>Join the Index</Link>
          <Link to='/tag-generator' className={classes.infoLink}>Tag Generator</Link>
        </div>
        <div className={classes.infoContainer}>
          <Link to='/about'><p className={classes.infoHeader}>About</p></Link>
        </div>
        <div className={classes.infoContainer}>
          <Link to='/' className={classes.infoHeader}>Contributors</Link>
          <Link to='/' className={classes.infoLink}>Unaffiliated</Link>
          <Link to='/' className={classes.infoLink}>Affiliated</Link>
        </div>
        <div className={classes.infoContainer}>
          <Link to='/' className={classes.infoHeader}>Radical Collaboration</Link>
          <Link to='/' className={classes.infoLink}>How to Do It</Link>
          <Link to='/' className={classes.infoLink}>Donate</Link>
          <Link to='/' className={classes.infoLink}>Share the CTI</Link>
          <Link to='/' className={classes.infoLink}>Volunteer with Us</Link>
          <Link to='/' className={classes.infoLink}>FAQ</Link>
        </div>
        <SocialSection />
      </div>
      <div className={classes.noteContainer}>
        <p className={classes.note}>The Civic Tech Index is an open-source project.</p>
        <p className={classes.note}>You can download or contribute to the code on&nbsp;
          <a href='https://github.com/civictechindex' className={classes.link}>GitHub.</a></p>
        <p className={classes.note}><a href="#" className={classes.link}>View Attributions</a></p>
      </div>
    </div>
  )
}

export default Footer
