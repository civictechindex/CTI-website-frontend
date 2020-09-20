import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  comingSoonHeader: {
    fontFamily: theme.thirdFontFamily,
    fontSize: '2vw',
    letterSpacing: '5px',
  },

  comingSoonSection: {
    margin: '0 auto',
    textAlign: 'center',
    width: '60%',
  },

  headerSection: {
    color: theme.primaryTextColor,
    fontFamily: theme.primaryFontFamily,
    margin: '0 auto',
    textAlign: 'center',
    width: '60%',
  },

  landingHeader: {
    color: 'gold',
    fontSize: '3vw',
  },

  notificationContainer: {
    fontFamily: theme.primaryFontFamily,
    margin: '0 auto',
    textAlign: 'center',
  },

  notificationHeader: {
    fontFamily: theme.primaryFontFamily,
    fontSize: '1.8vw',
    fontWeight: '500',
    width: '100%',
  },

  notifyButton: {
    backgroundColor: '#00b6e3',
    borderRadius: '0px 25px 25px 0px',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1vw',
    fontWeight: '500',
    padding: '15px',
    width: '15%',
  },

  notifyInput: {
    backgroundColor: 'lightgoldenrodyellow',
    border: 'none',
    borderRadius: '25px 0px 0px 25px',
    fontSize: '1vw',
    padding: '15px',
    width: '40%',
    '&:focus': {
      boxShadow: '1px 1px 10px #333 inset',
      outline: 'none',
    },
    '&::placeholder': {
      color: 'black',
      opacity: '1',
    },
  },
}));

export default useStyles;
