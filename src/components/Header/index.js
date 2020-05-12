import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './style.js'

const Header = () => {
  const classes = useStyles()
  
  return (
    <>
    <nav className={classes.nav}>
      <div className={classes.circle}></div>
      <img className={classes.logo} src='/images/cti-logo-bw.svg' alt='civic logo'/>
      <div className={classes.flexContainer}>
        <Link to='/' className={classes.links}>About</Link>
        <Link to='/' className={classes.links}>Tag Generator</Link>
        <Link to='/' className={classes.links}>Communicate with Us</Link>
        <Link to='/' className={classes.links}>Support Us</Link>
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