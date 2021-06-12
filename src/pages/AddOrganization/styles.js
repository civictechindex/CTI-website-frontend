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
  container: {
    maxWidth: '40rem',
  },
  heading: {
    color: theme.palette.secondary.dark,
    paddingTop: theme.spacing(5),
  },
  info: {
    fontStyle: 'italic',
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
}));

export default useStyles;
