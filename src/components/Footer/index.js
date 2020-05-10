import React from 'react'
import useStyles from './style.js'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerContainer}>
      <div className={classes.allInfoContainer}>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>About</p>
          <a className={classes.infoLink}>Overview</a>
          <a className={classes.infoLink}>Searching the Index</a>
          <a className={classes.infoLink}>Adding Projects to the Index</a>
          <a className={classes.infoLink}>Index Contributors</a>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Tag Generator</p>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Communicate with Us</p>
          <a className={classes.infoLink}>FAQ</a>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Support Us</p>
          <a className={classes.infoLink}>Donate</a>
          <a className={classes.infoLink}>Share the CTI</a>
          <a className={classes.infoLink}>Volunteer with Us</a>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.infoHeader}>Follow Us</p>
          <img className={classes.margin} src='/images/fb.svg' alt='instagram logo'/>
          <img className={classes.margin} src='/images/fb.svg' alt='twitter logo'/>
          <img className={classes.margin} src='/images/fb.svg' alt='facebook logo'/>
          <img src='/images/fb.svg' alt='github logo'/>
        </div>
      </div>
      <div className={classes.noteContainer}>
        <p className={classes.note}>The Civic Tech Index is an open-source project.</p>
        <p className={classes.note}>You can download or contribute to the code on <a className={classes.link}>GitHub.</a></p>
      </div>
    </div>
  )
}

export default Footer