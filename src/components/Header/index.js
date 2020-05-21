import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Header = () => {
  const classes = useStyles()
  
  return (
    <>
    <nav className={classes.nav}>
      <Link to='/'><div className={classes.circle}></div></Link>
      <Link to='/'><img className={classes.logo} src='/images/cti-logo-bw.svg' alt='civic logo'/></Link>
      <div className={classes.flexContainer}>
        <div className={classes.linksContainer}>
          <Link to='/about' className={classes.links}>About</Link>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks}>Overview</Link>
            <Link to='/' className={classes.subLinks}>Searching the Index</Link>
            <Link to='/' className={classes.subLinks}>Adding Projects to the Index</Link>
            <Link to='/' className={classes.subLinks}>Index Contributors</Link>
          </div>
        </div>
        <div className={classes.linksContainer}>
          <Link to='/taggenerator' className={classes.links}>Tag Generator</Link>
        </div>
        <div className={classes.linksContainer}>
          <Link to='/' className={classes.links}>Communicate with Us</Link>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks}>FAQ</Link>
          </div>
        </div>
        <div className={classes.linksContainer}>
          <Link to='/' className={classes.links}>Support Us</Link>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks}>Donate</Link>
            <Link to='/' className={classes.subLinks}>Share the CTI</Link>
            <Link to='/' className={classes.subLinks}>Volunteer with Us</Link>
          </div>
        </div>
        <div className={classes.searchContainer}>
          <input className={classes.search} placeholder='Search'></input>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header