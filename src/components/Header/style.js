import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  nav: {
    position: 'relative',
    height: '100px',
    backgroundColor: '#D8D8D8',
    fontSize: '16px',
    fontFamily: 'Work Sans',
    zIndex: '0',
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
    height: '336px',
    backgroundColor: '#F4F4F4',
    borderRadius: '100%',
    transform: 'translate(-125px, -85px)',
  },
  logo: {
    position: 'absolute',
    width: '150px',
    top: '26px',
    left: '16px',
    zIndex: '100',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',

  },
  links: {
    margin: '10px'
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
    fontFamily: 'Work Sans',
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
  whiteSpace: {
    position: 'relative',
    width: '100%',
    height: '50vh',
    backgroundColor: '#FFFFFF',
    zIndex: '1000',
  }
})

export default useStyles