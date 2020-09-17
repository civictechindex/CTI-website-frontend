import { createUseStyles } from 'react-jss';

export const useStyle = createUseStyles(theme => ({
  firstSectionWrapper: {
    width: '100%',
    backgroundColor: theme.backgroundColor2,
  },
  projectsLink: {
    margin: '0',
    paddingTop: '70px',
    fontSize: '14px',
  },
  sectionContainer: {
    height: '10rem',
    fontFamily: theme.primaryFontFamily,
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '70%',
    '& p': {
      margin: '0',
    },
  },
  heading: {
    textAlign: 'center',
    margin: '0 auto'
  },
  unaffiliatedWrapper: {
    width: '100%',
    backgroundColor: theme.backgroundColor3
  },  
  unaffiliated: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  affiliatedWrapper: {
    width: '100%',
    backgroundColor: theme.backgroundColor6,
  }, 
  affiliated: {
    width: '100%',
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hidden: {
    display: 'none'
  },
  affiliatedChild: {
    backgroundColor: 'gold',
    width: '100%',
    marginBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}
))