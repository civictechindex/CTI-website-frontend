import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  projectsSection: {
    backgroundColor: theme.backgroundColor2,
    width: '100%',
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
  },
  projectsContainer: {
    maxWidth: '770px',
    margin: '0 auto',
  },
  projectsLink: {
    margin: '0',
    paddingTop: '70px',
    fontSize: '14px',
  },
  projectsHeading: {
    fontSize: '42px',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '28px',
  },
  projectsSubHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
  },
  projectsSubHeadingDetails: {
    fontSize: '20px',
    margin: '0',
  },
  link: {
    color: theme.primaryTextColor,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  projectsList: {
    fontSize: '22px',
    lineHeight: '28px',
    margin: '40px 0 0 0',
    padding: '0',
    listStyle: 'none',
    counterReset: 'myCounter',
    '& li': {
      counterIncrement: 'myCounter',
      position: 'relative',
      marginLeft: '32px',
    },
    '& li::before': {
      content: 'counter(myCounter) ". "',
      fontFamily: theme.thirdFontFamily,
      position: 'absolute',
      left: '-32px',
    }
  },
  projectsFooter: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}))

export default useStyles