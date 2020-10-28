import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  commonSection: {
    margin: '0 auto',
    width: '80%',
  },

  contactButton: {
    backgroundColor: '#0CB2E7',
    border: 'none',
    borderRadius: '3vw',
    color: '#FEFEFE',
    cursor: 'pointer',
    display: 'block',
    fontSize: '1vw',
    fontWeight: 'bold',
    margin: '0 auto',
    padding: '1vw 6vw',
    transition: 'background-color 0.25s',
    '&:hover': {
      backgroundColor: '#0899C7',
    },
  },

  contactHeader: {
    color: '#004364',
    fontFamily: theme.primaryFontFamily,
    fontSize: '2.5vw',
    fontWeight: '500',
    margin: '0 0 1vw',
  },

  contactLink: {
    color: 'inherit',
    textDecoration: 'none',
  },

  contactSection: {
    backgroundColor: '#FEFEFE',
    padding: '4vw 0 5vw',
  },

  donateContainer: {
    backgroundColor: '#F2F2F2',
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
    fontSize: '1.75vw',
    fontWeight: 'bold',
    margin: '2.5vw',
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

  '@media screen and (max-width: 700px)': {
    commonSection: {
      width: '90%',
    },

    contactButton: {
      borderRadius: '5vw',
      fontSize: '3vw',
      padding: '2vw 10vw',
    },

    contactHeader: {
      fontSize: '5.5vw',
    },

    donateTitle: {
      fontSize: '9vw',
    },

    infoGif: {
      width: '100%',
    },
    
    infoSteps: {
      fontSize: '3.3vw',
    },

    infoText: {
      display: 'block',
      fontSize: '3.8vw',
      padding: '0',
      width: '100%',
    },

    infoThank: {
      fontSize: '4vw',
    },
  },
}))

export default useStyles;
