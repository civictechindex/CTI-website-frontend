import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  main: {
    fontFamily: theme.primaryFontFamily,
    '& section':{
      boxSizing: 'border-box',
      padding: '10px',
    }
  },
/******     HEADING SECTION      ******/
  headingSection: {
    width: '100%',
    height: '400px',
    backgroundColor: theme.backgroundColor1,
    border: '1px solid black'
  },
  headingContainer: {
    width: 'fit-content',
    margin: '50px 200px 0 200px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '42px',
    maxWidth: '570px',
    marginTop: '60px'
  },
/**********     MEDIA-QUERIES     **********/
  '@media (max-width: 840px)': {
    headingContainer: {
      margin: '50px auto 0 auto'
    },
    heading: {
      maxWidth: '426px'
    }
  },
  '@media (max-width: 450px)': {
    heading: {
      fontSize: '26px'
    }
  }
}))

export default useStyles