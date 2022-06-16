import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.card240': {
      backgroundColor: theme.palette.background.dark,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.text.light,
      },
      '& .MuiTypography-body1': {
        color: theme.palette.text.secondary,
      },
    },
    '.card241': {
      backgroundColor: theme.palette.background.primary,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.text.bright,
      },
      '& .MuiTypography-body1': {
        color: theme.palette.text.secondary,
      },
    },
    '.card242': {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.secondary.dark,
      },
    },
    '.card244': {
      backgroundColor: theme.palette.background.secondary,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.secondary.dark,
      },
    },
    '.containerTeal': {
      backgroundColor: theme.palette.background.primary,
      padding: 0,
    },
    '.containerDefault': {
      backgroundColor: theme.palette.secondary.dark,
      padding: '0 0 2em',
    },
    '.containerGray': {
      backgroundColor: theme.palette.background.secondary,
    },
    '.containerWhite': {
      backgroundColor: theme.palette.background.default,
    },
    '.containerWorld': {
      backgroundColor: theme.palette.secondary.dark,
      backgroundImage: 'url(/images/world-view.png),url(/images/mag.svg)',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundPosition: 'top center,bottom right',
      backgroundSize: 'contain,534px 356px',
      minHeight: '500px',
    },
    '.pageContainer': {
      minHeight: '500px',
    },
    '.frame223': {
      backgroundColor: theme.palette.background.secondary,
    },
    '.frame222': {
      backgroundColor: theme.palette.background.dark,
      '& p': {
        color: theme.palette.text.secondary,
      },
    },
    '.frame226': {
      backgroundColor: theme.palette.background.primary,
      '& p': {
        color: theme.palette.text.secondary,
      },
    },
    '.boxBackground': {
      backgroundColor: theme.palette.background.primary,
    },
    '.genSubheadTypo': {
      color: theme.palette.text.secondary,
      fontSize: '24px',
      fontWeight: '500',
      margin: 'auto',
      textAlign: 'center',
      width: '66%',
      '& a:link': {
        color: theme.palette.text.secondary,
        fontWeight: '400',
      },
      '& a:visited': {
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        width: '66%',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        width: '90%',
      },
    },
  },
}));

export default useStyles;
