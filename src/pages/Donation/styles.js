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

  styledLink: {
    color: '#0CB2E7',
    fontWeight: 'bold',
  },

  titleSection: {
    marginBottom: '4vw',
    '& nav': {
      padding: '25px 0px !important', // Temporary fix; remove in the future
    },
  },
}))

export default useStyles;
