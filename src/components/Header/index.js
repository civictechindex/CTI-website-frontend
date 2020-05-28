import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Header = () => {
  const classes = useStyles()
  const [isBurgerOpen, setIsBurgerOpen] = useState(null)
  const nav = useRef(null)
  const burgerContent = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)


  useEffect(() => {
    if(isBurgerOpen) {
      nav.current.className = `${classes.flexContainer} ${classes.showMobileNav}`
      burgerContent.current.className = `${classes.burger} ${classes.transformBurger}`
      line1.current.className = `${classes.burgerLine} ${classes.transformLine1}`
      line2.current.className = classes.displayNone
      line3.current.className = `${classes.burgerLine} ${classes.transformLine3}`
    } else {
      nav.current.className = classes.flexContainer
      burgerContent.current.className = classes.burger
      line1.current.className = classes.burgerLine
      line2.current.className = classes.burgerLine
      line3.current.className = classes.burgerLine
    }
    return
  })
  return (
    <nav className={classes.nav}>
      <div className={classes.background}></div>
      <Link to='/'><div className={classes.circle}></div></Link>
      <Link to='/'><img className={classes.logo} src='/images/cti-logo-bw.svg' alt='civic logo'/></Link>
      <div className={classes.flexContainer} ref={nav}>
        <div className={classes.linksContainer}>
          <Link to='/' className={classes.links} onClick={() => setIsBurgerOpen(false)}>Tag Generator</Link>
        </div>
        <div className={classes.linksContainer}>
          <Link to='/about' className={classes.links} onClick={() => setIsBurgerOpen(false)}>About</Link>
          <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0'/>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Searching the Index</Link>
            <Link to='/adding-projects-to-the-index' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Adding Projects to the Index</Link>
          </div>
        </div>
        <div className={classes.linksContainer}>
          <Link to='/' className={classes.links} onClick={() => setIsBurgerOpen(false)}>Contributors</Link>
          <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0'/>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Index Contributors</Link>
          </div>
        </div>
        <div className={classes.linksContainer}>
          <Link to='/' className={classes.links} onClick={() => setIsBurgerOpen(false)}>Radical Collaboration</Link>
          <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0'/>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Donate</Link>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Share the CTI</Link>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Volunteer with Us</Link>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>FAQ</Link>
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