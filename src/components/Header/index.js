import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '120px',
    backgroundColor: '#D8D8D8',
    fontSize: '16px',
    fontFamily: 'Work Sans',
    '& *': {
      border: '1px solid red',
    },
  },
  logoContainer: {
    width: '240px',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    width: '336px',
    height: '336px',
    backgroundColor: '#F4F4F4',
    borderRadius: '100%',
    transform: 'translate(-100px, -120px)',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',

  },
  links: {
    margin: '10px'
  },
  search: {
    width: '20vw',
    height: '20px'
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <nav className={classes.nav}>
      <div className={classes.logoContainer}>
        <div className={classes.circle}></div>
      </div>
        <a className={classes.links}>About</a>
        <a className={classes.links}>Tag Generator</a>
        <a className={classes.links}>Communicate with Us</a>
        <a className={classes.links}>Support Us</a>
      <input className={classes.search} placeholder='Search'></input>
    </nav>
  )
}

export default Header