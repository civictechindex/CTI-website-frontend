import makeStyles from '@material-ui/core/styles/makeStyles'

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
      backgroundImage: 'url(/images/world-view.png)',
      backgroundRepeat: 'no-repeat',
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
    '.grid241': {
      backgroundColor: theme.palette.background.primary,
      padding: theme.spacing(2),
      '& .MuiTypography-body1': {
        color: theme.palette.text.secondary,
      },
    },
    '.grid242': {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
    },
    '.boxBackground': {
      backgroundColor: theme.palette.background.primary,
    },
  },
}));

export default useStyles
