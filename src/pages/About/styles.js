import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  main: {
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    '& section':{
      boxSizing: 'border-box',
      padding: '0 20px',
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
    margin: '60px 200px 0 200px',
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
/**********     MEDIA-QUERIES     **********/
  '@media (max-width: 840px)': {
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
    }
  }
}))

export default useStyles