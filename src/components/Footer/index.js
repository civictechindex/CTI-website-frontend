import React from 'react'
import useStyles from './style.js'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerContainer}>
      <div className={classes.allInfoContainer}>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>About</p>
          <a href='#' className={classes.infoLink}>Overview</a>
          <a href='#' className={classes.infoLink}>Searching the Index</a>
          <a href='#' className={classes.infoLink}>Adding Projects to the Index</a>
          <a href='#' className={classes.infoLink}>Index Contributors</a>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Tag Generator</p>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Communicate with Us</p>
          <a href='#' className={classes.infoLink}>FAQ</a>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Support Us</p>
          <a href='#' className={classes.infoLink}>Donate</a>
          <a href='#' className={classes.infoLink}>Share the CTI</a>
          <a href='#' className={classes.infoLink}>Volunteer with Us</a>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Follow Us</p>
          <a href='#'><img className={classes.margin} src='/images/insta-logo.svg' alt='instagram logo'/></a>
          <a href='#'><img className={`${classes.margin} ${classes.twitter}`} src='/images/twitter-logo.svg' alt='twitter logo'/></a>
          <a href='#'><img className={classes.margin} src='/images/fb-logo.svg' alt='facebook logo'/></a>
          <a href='https://github.com/civictechindex'><img src='/images/github-logo.svg' alt='github logo'/></a>
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