import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  /** ********     PROJECTS SECTION     **********/
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
    color: theme.palette.primary.main,
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
      marginLeft: '32px',
      marginBottom: '20px',
      counterIncrement: 'myCounter',
      position: 'relative',
    },
    '& li::before': {
      content: 'counter(myCounter) ". "',
      fontFamily: theme.typography.secondFontFamily.fontFamily,
      position: 'absolute',
      left: '-32px',
    },
    '& textarea': {
      width: '100%',
      resize: 'none',
      border: 'none',
      outline: 'none',
      fontSize: '18px',
      padding: '10px 12px',
      marginBottom: '25px',
    },
    '& textarea:nth-of-type(1)': {
      height: '406px',
    },
    '& textarea:nth-of-type(2)': {
      height: '151px',
    },
    '& textarea:nth-of-type(3)': {
      height: '151px',
    },
  },
  imgContainer: {
    position: 'relative',
    marginBottom: '25px',
  },
  img: {
    maxWidth: '100%',
  },
  imgText: {
    position: 'absolute',
    top: '-10px',
    left: '5%',
    color: '#0366d6',
    fontSize: '14px',
  },
  black: {
    color: theme.palette.common.black,
  },
  gray: {
    opacity: '0.5',
  },
  projectsFooter: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0',
    paddingTop: '40px',
    paddingBottom: '60px',
  },
  /** ********     MEDIA QUERIES     **********/
  '@media (max-width: 770px)': {
    imgText: {
      fontSize: '2vw',
    },
  },
  '@media (max-width: 600px)': {
    imgText: {
      top: '-13px',
    },
  },
}))

export default useStyles
