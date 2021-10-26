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
    color: theme.palette.spectrum.teal,
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },

  infoSteps: {
    margin: '2.5vw 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },

  infoThank: {
    textAlign: 'left',
    color: theme.palette.spectrum.teal,
    padding: '1vw 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },

  infoGif: {
    marginTop: '4vw',
    marginBottom: '6vw',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '84px',
    },
    [theme.breakpoints.down('md')]: {
      width: '400px',
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
      height: '500px',
    },
  },
}));

export default useStyles
