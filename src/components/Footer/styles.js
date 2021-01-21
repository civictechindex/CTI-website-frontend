import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    paddingTop: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    // info header links
    '& a:nth-child(1)': {
      fontWeight: 'bold',
      marginTop: 0,
    },
    // info links
    '& a': {
      color: theme.palette.common.white,
      display: 'block',
      marginTop: '14px',
      textDecoration: 'none',
    },
  },
  noteContainer: {
    marginTop: '55px',
    textAlign: 'center',
    '& a': {
      display: 'inline',
      textDecoration: 'underline',
    },
    '& p': {
      margin: 0,
      paddingBottom: '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
    },
    '& p:last-child': {
      paddingBottom: '30px',
    },
  },
  socialContainer: {
    // Twitter logo
    '& div:nth-child(3) a img': {
      transform: 'translate(0, 3px)',
    },
  },
}))

export default useStyles
