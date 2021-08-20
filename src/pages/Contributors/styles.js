import makeStyles from '@material-ui/core/styles/makeStyles';
const DARK_GRAY = '#6D6E74';

export const useStyle = makeStyles((theme) => ({
  firstSectionWrapper: {
    background: theme.palette.secondary.dark,
    color: '#FFE06D',
    boxSizing: 'border-box',
    backgroundImage: 'url("/images/CTI-Contributors-BG-1.png")',
    minHeight: '35vh',
    backgroundPositionY: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      minHeight: '25vh',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      minHeight: '28vh',
    },
    [theme.breakpoints.down('xl')]: {
      minHeight: '16vh',
    },
  },

  banner: {
    height: '20px',
    width: '100px',
  },
  textStyle: {
    color: theme.palette.text.secondary,
    fontWeight: 700,
    fontSize: '24px',
    textAlign: 'center',
    marginTop: '-1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  projectsLink: {
    margin: '0',
    paddingTop: '70px',
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  sectionContainer: {
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '70%',
    '& p': {
      margin: '0',
    },
  },
  indicator: {
    backgroundColor: '#006B95',
  },
  tabVal: {
    color: DARK_GRAY,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
    },
    '&:hover': {
      color: '#006B95',
      opacity: 1,
    },
  },
  tabRoot: {
    '&.MuiTab-root': {
      fontSize: '32px',
      color: DARK_GRAY,
      fontWeight: 'bold',
      textTransform: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '11px',
      },
    },
    '&$tabSelected': {
      color: '#006B95',
    },
  },
  tabSelected: {},

  chkBoxStyle: {
    '& .MuiSvgIcon-root': {
      width: '24px',
      height: '24px',
      color: DARK_GRAY,

      [theme.breakpoints.down('sm')]: {
        width: '13px',
        height: '13px',
      },
    },
  },
  checkBox: {
    marginLeft: '9%',
    marginTop: '2%',
  },
  formControlLabel: {
    color: theme.palette.secondary.dark,
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
}));
