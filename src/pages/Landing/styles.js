import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  comingSoonHeader: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: 'clamp(12px, 2vw, 26px)',
    fontWeight: 'normal',
    letterSpacing: '0.4vw',
  },

  comingSoonSection: {
    margin: '0 auto',
    textAlign: 'center',
    width: '60%',
  },

  errorMessage: {
    color: theme.palette.error.main,
    fontSize: '2vw',
    fontWeight: '500',
  },

  followAndVolunteerSection: {
    display: 'flex',
    fontFamily: theme.typography.fontFamily,
    justifyContent: 'space-around',
    margin: '50px auto',
    textAlign: 'center',
    width: '60%',
  },

  followContainer: {
    boxSizing: 'border-box',
    color: theme.palette.text.secondary,
    display: 'inline-block',
    width: '33%',
  },

  followIcons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '& a:hover': {
      filter: 'invert(20%) sepia(57%) saturate(6000%) hue-rotate(182deg) brightness(114%) contrast(84%)',
    },
  },

  footerSection: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: 'clamp(16px, 1vw, 20px)',
    lineHeight: 'calc(16px + 0.8vw)',
    margin: '0 auto',
    textAlign: 'center',
    width: '60%',
    '& a': {
      color: theme.palette.secondary.light,
    },
  },

  headerSection: {
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto',
    textAlign: 'center',
    width: '60%',
    '& img': {
      maxWidth: '500px',
    },
  },

  landingContainer: {
    backgroundColor: theme.palette.background.primary,
    backgroundImage: 'url(images/world-view.png)',
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '10px 0px', // This is needed so it hugs header and footer
  },

  landingHeader: {
    color: theme.palette.warning.main,
    fontSize: 'clamp(12px, 3vw, 36px)',
  },

  notificationContainer: {
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto',
    textAlign: 'center',
  },

  notificationHeader: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: 'clamp(12px, 2vw, 26px)',
    fontWeight: '500',
    marginBottom: '1.5vw',
    width: '100%',
  },

  notifyButton: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '0px 7px 7px 0px',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'clamp(10px, 1vw, 14px)',
    fontWeight: '500',
    padding: '15px',
    transition: 'background-color 0.25s', // [CHANGE]: Change style based on figma recommendation
    width: '15%',
    '&:active': {
      boxShadow: '1px 1px 10px #333 inset ', // [CHANGE]: Change style based on figma recommendation
    },
    '&:hover': {
      backgroundColor: '#0899c7', // [CHANGE]: Change style based on figma recommendation
    },
  },

  notifyInput: {
    backgroundColor: theme.palette.background.default,
    border: 'none',
    borderRadius: '7px 0px 0px 7px',
    fontFamily: theme.typography.fontFamily,
    fontSize: 'clamp(10px, 1vw, 14px)',
    letterSpacing: '0.5px',
    padding: '15px',
    transition: 'box-shadow 0.25s',
    width: '40%',
    '&:focus': {
      outline: 'none', // [CHANGE]: Change style based on figma recommendation
    },
    '&::placeholder': {
      color: theme.palette.primary.main,
      opacity: '1',
    },
  },

  submitMessage: {
    color: theme.palette.text.secondary,
    fontSize: '2vw',
    fontWeight: '500',
  },

  twitterIcon: {
    transform: 'translate(0, 3px)',
  },

  volunteerButton: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '7px',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'clamp(10px, 1.2vw, 18px)',
    margin: '0',
    padding: '10px',
    transition: 'background-color 0.25s', // [CHANGE]: Change style based on figma recommendation
    width: '70%',
    '&:active': {
      boxShadow: '1px 1px 10px #333 inset ', // [CHANGE]: Change style based on figma recommendation
    },
    '&:hover': {
      backgroundColor: '#0899c7', // [CHANGE]: Change style based on figma recommendation
    },
  },

  volunteerContainer: {
    color: theme.palette.text.secondary,
    display: 'inline-block',
    width: '33%',
  },

  volunteerHeader: {
    fontSize: 'clamp(12px, 1.7vw, 24px)',
    margin: '10px 0px 20px 0px',
  },

  volunteerLink: {
    color: theme.palette.text.secondary,
  },

  '@media screen and (max-width: 800px)': {
    comingSoonHeader: {
      fontSize: '17px',
      letterSpacing: '3px',
    },

    comingSoonSection: {
      width: '90%',
    },

    errorMessage: {
      fontSize: '3.5vw',
    },

    followAndVolunteerSection: {
      flexDirection: 'column',
      margin: '30px auto',
      width: '90%',
    },

    followContainer: {
      display: 'block',
      width: '100%',
    },

    followIcons: {
      justifyContent: 'center',
      '& a': {
        margin: '0 5px',
      },
    },

    footerSection: {
      fontSize: '12px',
      width: '90%',
    },

    headerSection: {
      width: '90%',
      '& img': {
        maxWidth: '75%',
      },
    },

    landingHeader: {
      fontSize: '26px',
      width: '100%',
    },

    notificationHeader: {
      fontSize: '13px',
      marginBottom: '15px',
    },

    notifyButton: {
      fontSize: '10px',
      width: '22%',
    },

    notifyInput: {
      fontSize: '10px',
      padding: '15px 25px 15px 15px',
      width: '50%',
    },

    submitMessage: {
      fontSize: '3.5vw',
    },

    volunteerButton: {
      fontSize: '10px',
      width: '25%',
    },

    volunteerContainer: {
      display: 'block',
      marginBottom: '15px',
      width: '100%',
    },

    volunteerHeader: {
      fontSize: '14px',
    },
  },

  '@media screen and (max-width: 330px)': {
    notifyButton: {
      fontSize: '10px',
      right: '10px',
    },

    notifyInput: {
      fontSize: '10px',
      left: '10px',
      position: 'relative',
    },

    submitMessage: {
      fontSize: '13px',
    },
  },
}));

export default useStyles;
