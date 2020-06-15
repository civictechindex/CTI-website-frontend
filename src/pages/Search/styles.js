import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    backgroundColor: theme.backgroundColor5,
    fontFamily: theme.primaryFontFamily,
    padding: '0px 20px',
    outline: 'none',
    '& *': {
      boxSizing: 'border-box',
    },
  },
  link: {
    fontSize: '14px',
    margin: '0',
    paddingTop: '60px',
  },
  heading: {
    fontSize: '26px',
    margin: '30px 0',
  },
  search: {
    marginBottom: '30px',
    width: '100%',
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
  results: {
    margin: '0',
    fontSize: '16px',
    fontWeight: '500',
  },
  resultsFor: {
    margin: '2px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0B1BA6',
  },
/**********     SELECT-OPTIONS SECTION     **********/
  select: {
    display: 'inline-block',
    margin: '10px 20px 20px 0',
    position: 'relative',
    height: '38px',
    width: '170px',
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
  sortByCenter: {
    margin: '0',
    paddingLeft: '10px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontWeight: '500',
  },
  sortByCorner: {
    margin: '0',
    paddingLeft: '10px',
    position: 'absolute',
    top: '2px',
    fontSize: '10px',
  },
  displayOption: {
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
    width: '170px',
    borderRadius: '8px',
    backgroundColor: theme.backgroundColor1,
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)',
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
/**********     PROJECT-RESULTS SECTION     **********/
  projectContainer: {
    position: 'relative',
    width: '328px',
    height: '168px',
    backgroundColor: theme.backgroundColor1,
    marginBottom: '20px',
    
  },
  project: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}))

export default useStyles