import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Header = () => {
  const classes = useStyles()
  const [isBurgerOpen, setIsBurgerOpen] = useState(null)
  const burgerContent = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)


  useEffect(() => {
    console.log(classes.burgerLine.width)
    if(isBurgerOpen) {
      burgerContent.current.className = `${classes.burger} ${classes.transformBurger}`
      line1.current.className = `${classes.burgerLine} ${classes.transformLine1}`
      line2.current.className = classes.displayNone
      line3.current.className = `${classes.burgerLine} ${classes.transformLine3}`
    } else {
      burgerContent.current.className = classes.burger
      line1.current.className = classes.burgerLine
      line2.current.className = classes.burgerLine
      line3.current.className = classes.burgerLine
    }
    return
  })
  return (
    <nav className={classes.nav}>
      <Link to='/'><div className={classes.circle}></div></Link>
      <Link to='/'><img className={classes.logo} src='/images/cti-logo-bw.svg' alt='civic logo'/></Link>
      <div className={classes.flexContainer}>
        <div className={classes.linksContainer}>
          <Link to='/about' className={classes.links}>About</Link>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks}>Overview</Link>
            <Link to='/' className={classes.subLinks}>Searching the Index</Link>
            <Link to='/adding-projects-to-the-index' className={classes.subLinks}>Adding Projects to the Index</Link>
            <Link to='/' className={classes.subLinks}>Index Contributors</Link>
          </div>
        </div>
        <div className={classes.linksContainer}>
          <Link to='/' className={classes.links}>Tag Generator</Link>
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
      <div className={classes.mobileContainer}>
        <input className={classes.mobileSearch} placeholder='Search'></input>
        <div 
          className={classes.burger} 
          onClick={() => setIsBurgerOpen(bool => !bool)}
          ref={burgerContent}>
          <div className={classes.burgerLine} ref={line1}></div>
          <div className={classes.burgerLine} ref={line2}></div>
          <div className={classes.burgerLine} ref={line3}></div>
        </div>
      </div>
    </nav>
  )
}

export default Header