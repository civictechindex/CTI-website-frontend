import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  AddOrgStyle: {
    backgroundColor: theme.palette.background.primary,
    backgroundImage: 'url(/images/world-view.png)',
    backgroundRepeat: 'no-repeat',
    maxWidth: '905px',
    padding: '40px 0 71px 0',
    alignItems: 'center',
    textAlign: 'left',
    '& h1': {
      color: theme.palette.text.bright,
      padding: '0px',
      margin: '0px',
      [theme.breakpoints.up('xs')]: {
        fontSize: '26px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '36px',
      },
    },
    '& h2': {
      color: theme.palette.text.secondary,
      margin: '0px',
      [theme.breakpoints.up('xs')]: {
        fontSize: '16px',
        padding: '20px 0px 4px 0px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
        padding: '30px 0px 10px 0px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
        padding: '40px 0px 16px 0px',
      },
    },
    '& h3': {
      color: theme.palette.text.secondary,
      margin: '0px',
      [theme.breakpoints.up('xs')]: {
        fontSize: '14px',
        padding: '4px 0px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '17px',
        padding: '6px 0px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        padding: '8px 0px',
      },
    },
    '& label': {
      fontSize: '30px',
      color: theme.palette.text.secondary,
    },
  },
}));

export default useStyles
