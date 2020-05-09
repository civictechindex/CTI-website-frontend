import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(theme => ({
  footerContainer: {
    width: '100%',
    height: '310px',
    backgroundColor: theme.footerBG,
    fontFamily: theme.primaryFontFamily,
    color: theme.secondaryTextColor,
    fontSize: '16px',
  },
  allInfoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  infoHeader: {
    fontWeight: 'bold',
  },
  note: {
    margin: '0',
  },
  infoLink: {
    display: 'block'
  }
}))

export default useStyles