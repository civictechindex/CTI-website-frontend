import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  /**********     REFINE-RESULTS SECTION     **********/
  refineResultsContainer: {
    position: 'relative',
    display: 'none',
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
    paddingRight: '20px',
    position: 'relative',
    width: '100%',
    cursor: 'pointer',
  },
  refineResultsSubHeading: {
    margin: '0 0 10px 0',
    fontSize: '20px',
  },
  refineResultsArrow: {
    position: 'absolute',
    top: '7px',
    right: '0',
  },
  refineResultsSearch: {
    display: 'block',
    marginBottom: '10px',
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
  refineResultsOptionsContainer: {
    overflow: 'hidden',
    maxHeight: '1000px',
    transition: 'max-height 0.5s ease-in',
    marginBottom: '30px',
    fontSize: '16px',
  },
  refineResultsOption: {
    border: '1px solid black',
    width: '23px',
    height: '23px',
    marginLeft: 'calc(15px * var(--radius))'
  },
  refineResultsLabel: {
    display: 'inline-block',
    transform: 'translate(3px,-5px)',
  },
  viewMore: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5px 0 0 0',
    cursor: 'pointer',
  },
  refineResultsResetButton: {
    display: 'block',
    width: '271px',
    height: '52px',
    margin: '0 auto 10px auto',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '16px',
    fontFamily: theme.primaryFontFamily,
    backgroundColor: theme.button1BG,
    color: theme.button1TextColor,
  },
  display: {
    display: 'block',
  },
  closeOptionsDisplay: {
    maxHeight: '0px',
    transition: 'max-height 0.2s ease-out',
  },
  flipArrow: {
    transform: 'scaleY(-1)',
  },
/**********     MEDIA-QUERIES SECTION     **********/
  '@media (min-width: 1000px)': {
    refineResultsContainer: { 
      display: 'block',
      width: '265px',
      marginRight: '30px',
      padding: '0',
      height: 'fit-content',
      backgroundColor: 'transparent',
    },
    pageContent: {
      margin: '0',
    },
    refineResultsButton: {
      display: 'none',
    },
    display: {
      display: 'inline',
    },
    refineResultsSubHeading: {
      fontSize: '24px',
    },
    refineResultsSearch: {
      fontSize: '16px',
    },
    refineResultsLabel: {
      fontSize: '18px',
    },
    viewMore: {
      fontSize: '18px',
    },
  }
}))

export default useStyles