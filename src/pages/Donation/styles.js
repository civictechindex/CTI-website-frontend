import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  infoGrid: {
    [theme.breakpoints.down('md')]: {
      padding: '32px 16px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '4vw',
      padding: '0 48px 96px 48px',
    },
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
  },

  infoDescription: {
    color: '#004364',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  },

  infoSteps: {
    margin: '2.5vw 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },

  infoThank: {
    textAlign: 'left',
    color: '#004364',
    padding: '1vw 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },

  infoGif: {
    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    marginBottom: '6vw',
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      width: '80vw',
      height: '75vw',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '4vw',
      width: '458px',
      height: '466px',
    },
  },
}));

export default useStyles
