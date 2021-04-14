import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  infoDescription: {
    color: '#004364',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '24px',
    width: '80vw',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '39vw',
      fontSize: '24px',
    },
  },

  infoGif: {
    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    marginTop: '4vw',
    marginLeft: '19vw',
    [theme.breakpoints.down('md')]: {
      width: '43vw',
      height: '43vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '535px',
      height: '466px',
      marginLeft: '16vw',
    },
  },

  infoSteps: {

    marginTop: '2.5vw',
    marginBottom: '3vw',
    marginLeft: '10px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
    },
  },

  infoThank: {
    textAlign: 'center',
    color: '#004364',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '20px',
    },
  },

  contactUs: {
    backgroundColor: 'theme.palette.background.secondary',
    overflow: 'hidden',
    '& h2': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
        overflow: 'hidden',
      },
    },
  },

}))

export default useStyles
