import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
/**********     HOW-TO-USE PAGE     **********/
  main: {
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    '& section': {
      width: '100%',
    },
    '& *': {
      boxSizing: 'border-box',
    },
  },
/**********     PROJECTS SECTION     **********/
  projectsSection: {
    backgroundColor: theme.backgroundColor2,
    padding: '0 20px',
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
      marginLeft: '32px',
      marginBottom: '20px',
      counterIncrement: 'myCounter',
      position: 'relative',
    },
    '& li::before': {
      content: 'counter(myCounter) ". "',
      fontFamily: theme.thirdFontFamily,
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
    color: 'black',
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
/**********     CONTACT-US SECTION     **********/
  contactUsSection: {
    padding: '60px 20px',
    textAlign: 'center',
  },
  contactUsHeading: {
    fontWeight: '500',
    fontSize: '36px',
    margin: '0', 
    marginBottom: '30px', 
  },
  contactUsBtn: {
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '16px',
    color: theme.button1TextColor,
    border: `1px solid ${theme.button1BG}`,
    backgroundColor: theme.button1BG,
    borderRadius: '22.5px',
    width: '270px',
    height: '45px',
    outline: 'none',
    cursor: 'pointer',
  },
/**********     MEDIA QUERIES     **********/
  '@media (max-width: 770px)': {
    imgText: {
      fontSize: '2vw',
    },
  },
  '@media (max-width: 600px)': {
    imgText: {
      top: '-13px',
    },
  }
}))

export default useStyles