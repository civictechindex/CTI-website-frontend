import React from 'react'
import useStyles from './style.js'

const Header = () => {
  const classes = useStyles()
  
  return (
    <>
    <nav className={classes.nav}>
      <div className={classes.circle}></div>
      <img className={classes.logo} src='/images/civic-logo.png' alt='civic logo'/>
      <div className={classes.flexContainer}>
        <a className={classes.links}>About</a>
        <a className={classes.links}>Tag Generator</a>
        <a className={classes.links}>Communicate with Us</a>
        <a className={classes.links}>Support Us</a>
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