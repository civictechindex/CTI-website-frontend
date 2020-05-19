import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  main: {
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    '& section':{
      boxSizing: 'border-box',
      paddingLeft: '20px',
      paddingRight: '20px',
    }
  },
/**********     HEADING SECTION      **********/
  headingSection: {
    width: '100%',
    height: '350px',
    backgroundColor: theme.backgroundColor1,
  },
  headingContainer: {
    width: 'fit-content',
    margin: '60px 240px 0 240px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '42px',
    maxWidth: '570px',
    marginTop: '60px'
  },
/**********     TEXT SECTION      **********/
  textSection: {
    color: theme.secondaryTextColor,
    backgroundColor: theme.backgroundColor4,
    textAlign: 'center',
  },
  text: {
    display: 'inline-block',
    maxWidth: '770px',
    fontSize: '26px',
    lineHeight: '32px',
    fontWeight: '400',
    padding: '75px 0',
  },
/**********     PROJCETS SECTION      **********/
  projectsSection: {
    backgroundColor: theme.backgroundColor2,
  },
  projectsHeading: {
    fontSize: '24px',
    lineHeight: '32px',
    maxWidth: '470px',
    margin: '0',
    padding: '60px 20px'
  },
  projectsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingBottom: '40px',
  },
  projectsCard: {
    height: '293px',
    margin: '15px'
  },
  projectsImg2: {
    transform: 'translate(0, 40px)',
  },
  projectsImg3: {
    transform: 'translate(0, 10px)',
  },
  projectsText1: {
    width: '270px',
  },
  projectsText2: {
    width: '303px',
    transform: 'translate(0, 42px)',
  },
  projectsText3: {
    width: '270px',
    transform: 'translate(13%, 11px)',
  },
/**********     GET-STARTED SECTION     **********/
  getStartedSection: {
    backgroundColor: theme.backgroundColor1,
    paddingTop: '60px',
    paddingBottom: '60px',
    margin: '0 10px',
    textAlign: 'center',
    border: '1px solid red'
  },
  getStartedHeading: {
    fontWeight: '500',
    fontSize: '36px',
    margin: '0', 
    marginBottom: '30px', 
  },
  getStartedBtn: {
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
/**********     MEDIA-QUERIES     **********/
  '@media (max-width: 672px)': {
    projectsContainer: {
      paddingBottom: '100px'
    },
    projectsImg3: {
      marginTop: '45px',
    },
  },
  '@media (max-width: 935px)': {
    headingContainer: {
      margin: '50px auto 0 auto'
    },
    heading: {
      maxWidth: '426px',
    }
  },
  '@media (max-width: 450px)': {
    heading: {
      fontSize: '26px',
      lineHeight: '36px',
    },
    text: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    projectsHeading: {
      fontSize: '20px',
      lineHeight: '28px',
    },
  },
  '@media (max-width: 460px)': {
    getStartedHeading: {
      fontSize: '30px',
    },
  },
}))

export default useStyles