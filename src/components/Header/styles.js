import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  nav: {
    position: 'relative',
    height: '100px',
    backgroundColor: '#D8D8D8',
    fontSize: '16px',
    fontFamily: theme.primaryFontFamily,
  },
  flexContainer: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: '240px',
  },
  circle: {
    position: 'absolute',
    width: '336px',
    height: '180px',
    borderRadius: '180px 180px 0 0',
    backgroundColor: theme.headerBG,
    transform: 'translate(-100px, -80px)',
  },
  logo: {
    position: 'absolute',
    width: '150px',
    top: '26px',
    left: '30px',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
    '&:hover $subLinksContainer': {
      display: 'flex',
    },
  },
  links: {
    textDecoration: 'none',
    color: theme.primaryTextColor,
    margin: '10px',
  },
  searchContainer: {
    width: '180px',
  },
  search: {
    width: '180px',
    height: '30px',
    padding: '15px',
    borderRadius: '22.5px',
    border: '1px solid #C3C3C3',
    background: '#FFFFFF url(images/search.svg) no-repeat scroll 8px 5.5px',
    paddingLeft: '36px',
    fontFamily: theme.primaryFontFamily,
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'width .8s',
    '&:focus': {
      width: '97%',
      position: 'absolute',
      top: '35px',
      right: '10px',
    }
  },
  subLinksContainer: {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '38px',
    left: '8px',
    width: '168px',
    borderRadius: '4px',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)',
    zIndex: '1000',
    '& $subLinks:first-child': {
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
    },
    '& $subLinks:last-child': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      borderBottom: 'none',
    },
  },
  subLinks: {
    fontSize: '14px',
    textDecoration: 'none',
    color: '#8F8F8F',
    padding: '10px',
    backgroundColor: theme.backgroundColor1,
    borderBottom: '1px solid #DEDEDE',
    '&:hover': {
      color: theme.secondaryTextColor,
      backgroundColor: '#C6C6C6',
    },
  },
  whiteSpace: {
    width: '100%',
    height: '50vh',
    backgroundColor: '#FFFFFF',
  },
  burger: {
    display: 'none',
    position: 'relative',
    cursor: 'pointer',
    width: '17px',
    height: '14px',
    padding: '10px 15px',
    zIndex: '500',
    border: '1px solid red',
    '& $burgerLine': {
      position: 'absolute',
      width: '22px',
      height: '2.5px',
      background: 'black',
      borderRadius: '20%',
      transition: 'all .2s ease-in-out',
    },
    '& $burgerLine:last-child': {
      top: '20px',
    },
  },
  '@media (max-width: 1000px)': {
    circle: {
      display: 'none',
    },
    linksContainer: {
      display: 'none',
    },
    burger: {
      display: 'block',
    }
  },
}))

export default useStyles