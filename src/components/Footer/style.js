import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(theme => ({
  footerContainer: {
    width: '100%',
    height: '310px',
    backgroundColor: theme.footerBG,
    fontFamily: theme.primaryFontFamily,
    color: theme.secondaryTextColor,
    fontSize: '16px',
    paddingTop: '32px',
    // '& *': {
    //   border: '1px solid black'
    // },
  },
  allInfoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    '& $infoContainer:first-child': {
      maxWidth: '160px',
    },
  },
  infoContainer: {
    margin: '0 10px',
  },
  infoHeader: {
    fontWeight: 'bold',
    margin: '0',
  },
  infoLink: {
    display: 'block',
    marginTop: '14px',
  },
  margin: {
    marginRight: '20px',
    marginTop: '14px',
  },
  noteContainer: {
    marginTop: '55px',
  },
  note: {
    textAlign: 'center',
    margin: '4px',
  },
  link: {
    textDecoration: 'underline',
    fontWeight: '500',
  },
}))

export default useStyles