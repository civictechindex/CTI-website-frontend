import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: theme.spacing(4),
    '&>*': {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: '15rem',
    },
  },
  complete: {
    paddingTop: theme.spacing(3),
    textAlign: 'right',
  },
  container: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(6),
    maxWidth: '40rem',
  },
  heading: {
    color: theme.palette.secondary.dark,
    paddingTop: theme.spacing(5),
  },
  icon: {
    color: 'green',
    fontSize: '5rem',
    marginTop: theme.spacing(10),
  },
  info: {
    fontStyle: 'italic',
  },
  infoLarge: {
    color: theme.palette.secondary.dark,
    fontSize: '3rem',
  },
  label: {
    paddingTop: theme.spacing(2),
  },
  progress: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(3),
    '& :last-child': {
      color: theme.palette.secondary.dark,
    },
  },
  return: {
    textAlign: 'center',
    padding: theme.spacing(5),
    '&>*': {
      background: 'none',
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      width: '15rem',
      '&:hover': {
        background: 'none',
      },
    },
  },
}));

export default useStyles;
