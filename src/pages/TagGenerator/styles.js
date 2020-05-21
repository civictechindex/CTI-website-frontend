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

}))

export default useStyles