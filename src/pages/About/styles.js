import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  subHeaderStyle: {
    fontWeight: '700',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      padding: '48px 30px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      padding: '48px 100px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
      padding: '48px 200px',
    },
  },
  frameStyle: {
    border: 'none',
    overflow: 'hidden',
    padding: '0',
    width: '949px',
    height: '629px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}));

export default useStyles;
