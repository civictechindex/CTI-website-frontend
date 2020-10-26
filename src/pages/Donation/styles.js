import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  commonSection: {
    margin: '0 auto',
    width: '80%',
  },

  donateCrumbs: {
    padding: '25px 0px',
  },

  donateTitle: {
    color: '#004364',
    fontFamily: theme.primaryFontFamily,
    fontSize: '3vw',
  },

  infoDescription: {
    fontSize: '1.5vw',
  },

  infoGif: {
    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    width: '50%',
  },

  infoSteps: {
    fontSize: '1.3vw',
    marginTop: '2.5vw',
  },

  infoText: {
    boxSizing: 'border-box',
    display: 'inline-block',
    fontFamily: theme.primaryFontFamily,
    fontSize: '1.5vw',
    letterSpacing: '0.05vw',
    padding: '3vw 1vw 0 0',
    verticalAlign: 'top',
    width: '50%',
  },

  infoThank: {
    color: '#004364',
    fontFamily: theme.primaryFontFamily,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  styledLink: {
    color: '#0CB2E7',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },

  titleSection: {
    marginBottom: '4vw',
    '& nav': {
      padding: '25px 0px !important', // Temporary fix; remove in the future
    },
  },
}))

export default useStyles;
