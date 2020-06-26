import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  /**********     REFINE-RESULTS SECTION     **********/
  refineResultsContainer: {
    position: 'relative',
    // display: 'none',
    display: 'block',
    margin: '0',
    width: '100%',
    height: '100%',
    backgroundColor: theme.backgroundColor1,
    zIndex: '10',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: theme.primaryFontFamily,
    '& *': {
      boxSizing: 'border-box',
    },
  },
  pageContent: {
    maxWidth: '360px',
    margin: '0 auto',
  },
  refineResultsButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '28px',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    color: 'gray',
    '&:hover': {
      color: 'black',
    },
  },
  refineResultsHeading: {
    margin: '0 0 25px 0',
    fontSize: '28px',
  },
  refineResultsSubHeadingContainer: {
    position: 'relative',
    width: '100%',
    cursor: 'pointer',
    border: '1px solid red',
  },
  refineResultsSubHeading: {
    margin: '0',
    fontSize: '20px',
  },
  refineResultsArrow: {
    position: 'absolute',
    top: '7px',
    right: '0',
  },
  refineResultsSearch: {
    display: 'block',
    margin: '10px 0',
    border: theme.buttonBorder1,
    borderRadius: '22.5px',
    width: '100%',
    height: '45px',
    padding: '15px',
    background: '#FFFFFF url(images/search.svg) no-repeat scroll 11px 11px',
    paddingLeft: '42px',
    fontSize: '16px',
    outline: 'none',
  },
  refineResultsOption: {
    border: '1px solid black',
    width: '23px',
    height: '23px',
  },
  refineResultsLabel: {
    display: 'inline-block',
    transform: 'translate(3px,-5px)',
  },
  viewMore: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5px 0 30px 0'
  },
  display: {
    display: 'block',
  }
}))

export default useStyles