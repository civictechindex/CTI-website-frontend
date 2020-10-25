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

  infoGif: {
    width: '50%',
  },

  infoText: {
    boxSizing: 'border-box',
    display: 'inline-block',
    fontSize: '1.5vw',
    padding: '3vw 1vw 0 0',
    verticalAlign: 'top',
    width: '50%',
  },

  titleSection: {
    '& nav': {
      padding: '25px 0px !important', // Temporary fix; remove in the future
    },
  },
}))

export default useStyles;
