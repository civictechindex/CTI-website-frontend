import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  nav: {
    width: '100%',
    height: '120px',
    backgroundColor: '#D8D8D8',
    '& *': {
      border: '1px solid red',
    },
  },
  logo: {
    width: '336px',
    height: '336px',
    backgroundColor: '#F4F4F4',
    borderRadius: '100%',
    transform: 'translate(-100px, -50px)',
    display: 'inline-block',
  },
  links: {
    margin: '10px'
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}></div>
      <p className={classes.links}><a>About</a></p>
      <p className={classes.links}><a>Tag Generator</a></p>
      <p className={classes.links}><a>Communicate with Us</a></p>
      <p className={classes.links}><a>Support Us</a></p>
      <input placeholder='Search'></input>
    </nav>
  )
}

export default Header