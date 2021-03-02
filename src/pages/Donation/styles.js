import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  infoDescription: {
    fontSize: 'clamp(12px, 1.5vw, 28px)',
  },

  infoGif: {
    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    width: '100%',
    marginTop: '5vw',
  },

  infoSteps: {
    fontSize: 'clamp(11px, 1.3vw, 25px)',
    marginTop: '2.5vw',
  },

  infoThank: {
    fontSize: 'clamp(16px, 1.75vw, 28px)',
    fontWeight: 'bold',
    margin: '2.5vw',
    textAlign: 'center',
  },

}))

export default useStyles
