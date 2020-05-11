import React from 'react'
import useStyles from './style.js'

const Header = () => {
  const classes = useStyles()
  
  return (
    <>
    <nav className={classes.nav}>
      <div className={classes.circle}></div>
      <img className={classes.logo} src='/images/cti-logo-bw.svg' alt='civic logo'/>
      <div className={classes.flexContainer}>
        <a href='#' className={classes.links}>About</a>
        <a href='#' className={classes.links}>Tag Generator</a>
        <a href='#' className={classes.links}>Communicate with Us</a>
        <a href='#' className={classes.links}>Support Us</a>
        <div className={classes.searchContainer}>
          <input className={classes.search} placeholder='Search'></input>
        </div>
      </div>
    </nav>
    {/* Remove. Just to see visually. */}
    <div className={classes.whiteSpace}></div>
    </>
  )
}

export default Header