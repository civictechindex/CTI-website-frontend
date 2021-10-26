import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: '32px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      padding: '32px 0',
    },
  },
  summary: {
    fontSize: '24px',
    margin: '32px auto 64px',
    textAlign: 'justify',
    width: '66%',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      margin: '0px auto 32px',
      width: '100%',
    },
  },
  typoStyle: {
    fontWeight: '400',
    textAlign: 'justify',
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  boxPadding: {
    padding: '24px 16px 0',
  },
}));

export default useStyles;
