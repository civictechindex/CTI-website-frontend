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
    '.containerDefault': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '.containerGray': {
      backgroundColor: theme.palette.background.secondary,
    },
    '.containerTeal': {
      backgroundColor: theme.palette.background.primary,
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
    '.indv-header-bg': {
      backgroundImage: 'url(/images/indv-org-page-bg.png)',
      minHeight: '512px',
      maxHeight: '580px',
    },
  },
}));

export default useStyles;
