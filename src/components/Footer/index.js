import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerContainer}>
      <div className={classes.allInfoContainer}>
        <div className={classes.infoContainer}>
          <Link to='/' className={classes.infoHeader}>Tag Generator</Link>
        </div>
        <div className={classes.infoContainer}>
          <Link to='/about'><p className={classes.infoHeader}>About</p></Link>
          <Link to='/' className={classes.infoLink}>Overview</Link>
          <Link to='/' className={classes.infoLink}>Searching the Index</Link>
          <Link to='/adding-projects-to-the-index' className={classes.infoLink}>Adding Projects to the Index</Link>
          <Link to='/' className={classes.infoLink}>Index Contributors</Link>
        </div>
        <div className={classes.infoContainer}>
          <Link to='/' className={classes.infoHeader}>Communicate with Us</Link>
          <Link to='/FAQ' className={classes.infoLink}>FAQ</Link>
        </div>
        <div className={classes.infoContainer}>
          <Link to='/' className={classes.infoHeader}>Support Us</Link>
          <Link to='/' className={classes.infoLink}>Donate</Link>
          <Link to='/' className={classes.infoLink}>Share the CTI</Link>
          <Link to='/' className={classes.infoLink}>Volunteer with Us</Link>
        </div>
        <div className={classes.infoContainer}>
          <a className={classes.infoHeader}>Follow Us</a>
          <a href='#'><img className={classes.margin} src='/images/insta-logo.svg' alt='instagram logo' /></a>
          <a href='#'><img className={`${classes.margin} ${classes.twitter}`} src='/images/twitter-logo.svg' alt='twitter logo' /></a>
          <a href='#'><img className={classes.margin} src='/images/fb-logo.svg' alt='facebook logo' /></a>
          <a href='https://github.com/civictechindex'><img src='/images/github-logo.svg' alt='github logo' /></a>
        </div>
      </div>
      <div className={classes.noteContainer}>
        <p className={classes.note}>The Civic Tech Index is an open-source project.</p>
        <p className={classes.note}>You can download or contribute to the code on <a href='https://github.com/civictechindex' className={classes.link}>GitHub.</a></p>
      </div>
    </div>
  )
}

export default Footer