import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  containerFooter: {
    backgroundColor: theme.palette.grey[900],
  },
  footerContainer: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.font.small.fontSize,
      lineHeight: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.font.paragraph.fontSize,
    },
    // info header links
    '& a:nth-child(1)': {
      fontWeight: 700,
      marginTop: 0,
    },
    // info links
    '& a': {
      color: theme.palette.text.secondary,
      display: 'block',
      marginTop: theme.spacing(1.5),
      textDecoration: 'none',
    },
  },
  noteContainer: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
    '& a': {
      display: 'inline',
      textDecoration: 'underline',
    },
    '& p': {
      margin: 0,
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.font.small.fontSize,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: theme.font.paragraph.fontSize,
      },
    },
    '& p:last-child': {
      paddingBottom: theme.spacing(4),
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
