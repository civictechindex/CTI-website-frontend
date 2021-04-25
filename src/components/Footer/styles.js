import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  containerFooter: {
    backgroundColor: '#0F1D2F',
    border: 'none',
  },
  containerItem: {
    padding: '0px 30px',
  },
  footerPadding: {
    padding: '40px 5px 65px 5px',
  },
  dropdownHeader: {
    alignItems: 'center',
    padding: '0px 30px',
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
    position: "relative",
    display: "flex",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "top",
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
  annotation: {
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
  subHeaderNewsletter: {
    margin: '16px 0px 0px 0px',
  },
  subHeaderNews: {
    margin: '0px 40px 0px 0px',
  },
  subHeaderEmail: {
    margin: '16px 0px 0px 0px',
  },
  subSection: {
    display: 'flex',
    justify: "flex-end",
  },
  successMessage: {
    textAlign: 'center',
  },
  textField: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    margin: '0px 8px 5px 0px',
  },
}));

export default useStyles;
