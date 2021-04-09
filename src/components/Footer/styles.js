import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  containerFooter: {
    backgroundColor: theme.palette.grey[900],
  },
  dropdownHeader: {
    alignItems: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  errorMessage: {
    color: theme.palette.error.main,
  },
  footerContainer: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
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
      fontSize: theme.font.small.fontSize,
    },
  },
  socialContainer: {
    '& a': {
      display: 'inline',
      marginRight: '25px',
    },
  },
  socialContainerLarge: {
    textAlign: 'center',
    '& a': {
      marginBottom: theme.spacing(3),
    },
  },
  subHeader: {
    marginBottom: theme.spacing(2),
  },
  subSection: {
    display: 'flex',
    marginBottom: theme.spacing(1),
    '& button': {
      marginLeft: theme.spacing(1),
    }
  },
  successMessage: {
    textAlign: 'center',
  },
  textField: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    marginBottom: theme.spacing(2),
  },
}))

export default useStyles
