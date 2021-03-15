import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  infoDescription: {
    fontSize: '20px',
  },

  infoGif: {
    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    width: '100%',
    marginTop: '5vw',
  },

  infoSteps: {
    fontSize: '18px',
    marginTop: '2.5vw',
  },

  infoThank: {
    textAlign: 'center',
  },

}))

export default useStyles
