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
    marginLeft: '210px',
  },
  circle: {
    position: 'absolute',
    width: '336px',
    height: '180px',
    borderRadius: '180px 180px 0 0',
    backgroundColor: theme.headerBG,
    transform: 'translate(-125px, -80px)',
  },
  logo: {
    position: 'absolute',
    width: '150px',
    top: '26px',
    left: '16px',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',

  },
  links: {
    textDecoration: 'none',
    color: theme.primaryTextColor,
    margin: '10px',
  },
  searchContainer: {
    width: '120px',
  },
  search: {
    width: '120px',
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
  linksContainer: {
    position: 'relative',
  },
  subLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '168px',
    zIndex: '1000'
  },
  subLinks: {
    fontSize: '14px',
    textDecoration: 'none',
    color: theme.primaryTextColor,
  },
  whiteSpace: {
    width: '100%',
    height: '50vh',
    backgroundColor: '#FFFFFF',
  }
}))

export default useStyles