import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  nav: {
    position: 'relative',
    paddingRight: '10px',
    height: '120px',
    backgroundColor: '#D8D8D8',
    fontSize: '16px',
    fontFamily: 'Work Sans',
    '& *': {
      border: '1px solid red',
    },
  },
  flexContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: '290px',
  },
  circle: {
    position: 'absolute',
    width: '336px',
    height: '336px',
    backgroundColor: '#F4F4F4',
    borderRadius: '100%',
    transform: 'translate(-60px, -55px)',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',

  },
  links: {
    margin: '10px'
  },
  search: {
    width: '222px',
    height: '40px',
    padding: '10px',
    borderRadius: '22.5px',
    border: '1px solid #C3C3C3',
    background: '#FFFFFF url(images/search.svg) no-repeat scroll 12px 10px',
    paddingLeft: '42px',
    fontFamily: 'Work Sans',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <nav className={classes.nav}>
      <div className={classes.circle}></div>
      <div className={classes.flexContainer}>
        <a className={classes.links}>About</a>
        <a className={classes.links}>Tag Generator</a>
        <a className={classes.links}>Communicate with Us</a>
        <a className={classes.links}>Support Us</a>
        <input className={classes.search} placeholder='Search'></input>
      </div>
    </nav>
  )
}

export default Header