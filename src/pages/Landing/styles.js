import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  comingSoonHeader: {
    color: '#FEFEFE',
    fontFamily: theme.primaryFontFamily,
    fontSize: '2vw',
    fontWeight: 'normal',
    letterSpacing: '5px',
  },

  comingSoonSection: {
    margin: '0 auto',
    textAlign: 'center',
    width: '60%',
  },

  followAndVolunteerSection: {
    display: 'flex',
    fontFamily: theme.primaryFontFamily,
    justifyContent: 'space-around',
    margin: '50px auto',
    textAlign: 'center',
    width: '60%',
  },

  followContainer: {
    boxSizing: 'border-box',
    color: '#FEFEFE',
    display: 'inline-block',
    width: '33%',
  },

  followIcons: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  headerSection: {
    fontFamily: theme.primaryFontFamily,
    margin: '0 auto',
    textAlign: 'center',
    width: '60%',
  },

  landingContainer: {
    backgroundColor: '#004364',
    padding: '10px 0px', // This is needed so it hugs header and footer
  },

  landingHeader: {
    color: '#FFE06D',
    fontSize: '3vw',
  },

  notificationContainer: {
    fontFamily: theme.primaryFontFamily,
    margin: '0 auto',
    textAlign: 'center',
  },

  notificationHeader: {
    color: '#FEFEFE',
    fontFamily: theme.primaryFontFamily,
    fontSize: '1.8vw',
    fontWeight: '500',
    marginBottom: '1.5vw',
    width: '100%',
  },

  notifyButton: {
    backgroundColor: '#0CB2E7',
    borderRadius: '0px 25px 25px 0px',
    color: '#FEFEFE',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1vw',
    fontWeight: '500',
    padding: '15px',
    transition: 'background-color 0.25s', // [CHANGE]: Change style based on figma recommendation
    width: '15%',
    '&:active': {
      boxShadow: '1px 1px 10px #333 inset ', // [CHANGE]: Change style based on figma recommendation
    },
    '&:hover': {
      backgroundColor: '#00ccff', // [CHANGE]: Change style based on figma recommendation
    },
  },

  notifyInput: {
    backgroundColor: '#FEFEFE',
    border: 'none',
    borderRadius: '25px 0px 0px 25px',
    fontFamily: theme.primaryFontFamily,
    fontSize: '1vw',
    letterSpacing: '0.5px',
    padding: '15px',
  transition: 'box-shadow 0.25s',
    width: '40%',
    '&:focus': {
      boxShadow: '0px 0px 0px 4px #0F1D2F inset;', // [CHANGE]: Change style based on figma recommendation
      outline: 'none', // [CHANGE]: Change style based on figma recommendation
    },
    '&::placeholder': {
      color: 'black',
      opacity: '1',
    },
  },

  twitterIcon: {
    transform: 'translate(0, 3px)',
  },

  volunteerButton: {
    backgroundColor: '#0CB2E7',
    borderRadius: '20px',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1.2vw',
    margin: '0',
    padding: '10px',
    transition: 'background-color 0.25s', // [CHANGE]: Change style based on figma recommendation
    width: '80%',
    '&:active': {
      boxShadow: '1px 1px 10px #333 inset ', // [CHANGE]: Change style based on figma recommendation
    },
    '&:hover': {
      backgroundColor: '#00ccff', // [CHANGE]: Change style based on figma recommendation
    },
  },

  volunteerContainer: {
    color: '#FEFEFE',
    display: 'inline-block',
    width: '33%',
  },

  volunteerHeader: {
    fontSize: '1.7vw',
    margin: '10px 0px 20px 0px',
  },

  volunteerLink: {
    color: 'inherit',
  },
}));

export default useStyles;
