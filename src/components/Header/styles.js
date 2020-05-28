import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  nav: {
    position: 'relative',
    height: '100px',
    backgroundColor: theme.headerBG,
    fontSize: '16px',
    fontFamily: theme.primaryFontFamily,
    zIndex: '900',
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
    backgroundColor: theme.headerCircleBG,
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
  linksArrows: {
    display: 'none',
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
/**********     MOBILE SECTION     **********/
  mobileContainer: {
    display: 'none',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    marginLeft: '220px',
  },
  mobileSearch: {
    width: '8px',
    height: '30px',
    padding: '20px 12px',
    borderRadius: '22.5px',
    border: 'none',
    background: `url(images/mobile-search.svg) no-repeat scroll 8px 5.5px`,
    backgroundSize: '30px',
    paddingLeft: '50px',
    fontFamily: theme.primaryFontFamily,
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'width .8s',
    '&:focus': {
      width: '100%',
    }
  },
  burger: {
    position: 'relative',
    cursor: 'pointer',
    minWidth: '30px',
    height: '35px',
    zIndex: '500',
    marginRight: '30px',
    '& $burgerLine:nth-child(1)': {
      top: '5px',
    },
    '& $burgerLine:nth-child(2)': {
      top: '15px',
    },
    '& $burgerLine:nth-child(3)': {
      top: '25px',
    },
  },
  burgerLine: {
    position: 'absolute',
    width: '30px',
    height: '4px',
    background: 'black',
    transition: 'all .2s ease-in-out',
  },
  transformLine1: {
    transform: 'translateY(10px) rotate(135deg)',
  },
  transformLine3: {
    transform: 'translateY(-10px) rotate(-135deg)',
  },
  displayNone: {
    display: 'none',
  },
  background: {},
  containsArrow: {},
  showMobileNav: {},
/**********     MEDIA-QUERIES SECTION     **********/
  '@media (max-width: 1000px)': {
    background: {
      position: 'absolute',
      height: '100px',
      width: '100%',
      backgroundColor: theme.headerBG,
    },
    circle: {
      display: 'none',
    },
    flexContainer: {
      display: 'block',
      position: 'absolute',
      bottom: '0px',
      left: '-240px',
      transform: 'translateY(0)',
      backgroundColor: theme.headerBG2,
      width: '100%',
      height: 'fit-content',
      fontSize: '18px',
      fontWeight: 'bold',
      padding: '30px 20px 40px 20px',
      zIndex: '-10',
      '& $searchContainer': {
        display: 'none',
      },
    },
    links: {
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content',
      margin: '8px 0',
    },
    linksArrows: {
      display: 'inline',
      width: 'fit-content',
      transform: 'translateY(7px) scaleY(-1)',
      padding: '8px 12px',
      outline: 'none',
    },
    linksContainer: {
      display: 'block',
      '& $linksArrows:focus': {
        transform: 'translateY(7px) scaleY(1)',
      },
      '& $linksArrows:focus ~ $subLinksContainer': {
        maxHeight: '1000px',
        transition: 'max-height 1s ease-in-out',
      }
    },
    subLinksContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'static',
      width: 'fit-content',
      maxHeight: '0px',
      transition: 'max-height 0s ease-in-out',
      overflow: 'hidden',
      borderRadius: 'none',
      boxShadow: 'none',
      zIndex: '1000',
      '& $subLinks:first-child':{
        padding: '4px 10px 6px 20px',
      },
    },
    subLinks: {
      fontWeight: 'normal',
      color: theme.primaryTextColor,
      padding: '6px 10px 6px 20px',
      backgroundColor: 'inherit',
      border: 'none',
      '&:hover': {
        color: 'inherit',
        backgroundColor: 'inherit',
      },
    },
    showMobileNav:{
      transform: 'translateY(100%)',
      transition: 'transform 1s',
    },
    mobileContainer: {
      display: 'flex',
    },
  },
}))

export default useStyles