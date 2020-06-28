import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    position: 'relative',
    backgroundColor: theme.backgroundColor5,
    fontFamily: theme.primaryFontFamily,
    padding: '0px 20px 30px 20px',
    outline: 'none',
    '& *': {
      boxSizing: 'border-box',
    },
  },
  display: {
    display: 'block',
  },
  displayNone: {
    display: 'none',
  },
  noPadding: {
    padding: '0',
  },
  content: {
    width: '100%',
    margin: '0 auto',
  },
  link: {
    fontSize: '14px',
    margin: '0',
    paddingTop: '60px',
  },
  heading: {
    fontSize: '26px',
    textAlign: 'center',
    margin: '30px 0',
  },
  search: {
    display: 'block',
    margin: '0 auto 30px auto',
    width: '100%',
    maxWidth: '670px',
    height: '56px',
    padding: '15px',
    borderRadius: '24px',
    border: 'none',
    background: '#FFFFFF url(images/search.svg) no-repeat scroll 15px 15px',
    backgroundSize: '24px 24px',
    paddingLeft: '50px',
    fontFamily: theme.primaryFontFamily,
    fontSize: '17px',
    outline: 'none',
    transition: 'width .8s',
  },
  textAndSelectContainer: {},
  resultsTextContainer: {
    display: 'block',
    width: 'fit-content',
  },
  results: {
    display: 'inline-block',
    margin: '0 6px 0 0',
    fontSize: '16px',
    fontWeight: '500',
  },
  resultsFor: {
    display: 'block',
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0B1BA6',
  },
/**********     SELECT-OPTIONS SECTION     **********/
  selectContainer: {
    maxWidth: '100%',
    height: 'fit-content',
    margin: '10px 0 68px 0',
    '& $select:first-of-type': {
      float: 'left',
      width: '48%',
    },
    '& $select:last-of-type': {
      float: 'right',
      width: '48%',
    }
  },
  select: {
    position: 'relative',
    maxWidth: '200px',
    height: '39px',
    borderRadius: '8px',
    fontSize: '14px',
    color: theme.searchSelect,
    backgroundColor: theme.backgroundColor1,
    outline: 'none',
    '&:focus $arrow': {
      transform: 'scaleY(-1)',
    },
    '&:focus $optionsContainer': {
      display: 'block',
    }
  },
  centerText: {
    margin: '0',
    paddingLeft: '10px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontWeight: '500',
  },
  cornerText: {
    margin: '0',
    paddingLeft: '10px',
    position: 'absolute',
    top: '2px',
    fontSize: '10px',
  },
  displaySortBy: {
    margin: '0',
    paddingLeft: '10px',
    position: 'absolute',
    top: '14px',
    fontWeight: '500',
  },
  optionsContainer: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    width: '100%',
    borderRadius: '8px',
    backgroundColor: theme.backgroundColor1,
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)',
    zIndex: '1',
    '& $option': {
      borderBottom: '1px solid #D8D8D8',
      margin: '0',
    },
    '& $option:last-child': {
      borderBottom: 'none',
    },
  },
  displayOptionsContainer: {
    display: 'block',
  },
  option: {
    position: 'relative',
    paddingLeft: '10px',
    height: '46px',
    '&:hover': {
      color: theme.secondaryTextColor,
      backgroundColor: '#C6C6C6',
    },
  },
  optionText: {
    margin: '0',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  arrow: {
    position: 'absolute',
    top: '15px',
    right: '10px',
  },
/**********     PROJECT SECTION     **********/
  projectSection: {
    maxWidth: '670px',
    margin: '0 auto',
  },
  projectContainer: {
    position: 'relative',
    width: '100%',
    height: '36vw',
    maxHeight: '224px',
    backgroundColor: theme.backgroundColor1,
    marginBottom: '20px',
    
  },
  project: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
/**********     INDEX SECTION     **********/
  indexContainer: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '466px',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: '500',
    '& *': {
      margin: '0',
    },
    '& p': {
      padding: '7px 16px',
      cursor: 'pointer',
      border: '1px solid transparent',
      '&:hover': {
        border: `1px solid ${theme.backgroundColor6}`,
      }
    },
    '& p:nth-of-type(4), p:nth-of-type(5)': {
      display: 'none',
    },
    '& img': {
      width: '18px',
      height: '12px',
    },
    '& img:first-of-type': {
      transform: 'rotate(270deg)',
    },
    '& img:last-of-type': {
      transform: 'rotate(90deg)',
    },
  },
  highlightNum: {
    backgroundColor: theme.backgroundColor6
  },
  refineResults: {
    display: 'none',
  },
  refineResultsAndProjectContainer: {
    maxWidth: '970px',
    margin: '0 auto',
  },
  indexArrow: {
    cursor: 'pointer',
  },
/**********     MEDIA-QUERIES SECTION     **********/
  '@media (min-width: 466px)': {
    indexContainer: {
      '& p:nth-of-type(4), p:nth-of-type(5)': {
        display: 'block',
      },
    }
  },
  '@media (min-width: 1000px)': {
    refineResultsAndProjectContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    refineResults: {
      display: 'block',
      '& p': {
        fontSize: '21px'
      }
    },
    projectSection: {
      margin: '0',
      minWidth: '670px',
    },
    search: {
      maxWidth: '970px',
    },
    textAndSelectContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '10px 0 20px 0',
    },
    selectContainer: {
      minWidth: '200px',
      height: 'fit-content',
      margin: '0',
      '& $select:first-of-type': {
        display: 'none'
      },
      '& $select:last-of-type': {
        width: '100%',
        float: 'none',
      }
    },
  }
}))

export default useStyles