import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  infoDescription: {
    color: '#004364',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',

    [theme.breakpoints.up('md')]: {
      width: '41vw',
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
      fontSize: '18px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '35vw',
      fontSize: '20px',
    },
  },

  infoGif: {
    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    marginTop: '4vw',
    marginLeft: '14vw',


    [theme.breakpoints.down('sm')]: {
      width: '47vw',
      height: '52vw',
      marginLeft: '7vw',
      marginTop: '6vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '458px',
      height: '466px',
      marginLeft: '18vw',
      marginTop: '6vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '70vw',
      height: '60vw',
      marginLeft: '17vw',
      marginTop: '6vw',
    },

  },

  infoSteps: {
    marginTop: '2.5vw',
    marginBottom: '3vw',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
      width: '37vw',
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
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
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
