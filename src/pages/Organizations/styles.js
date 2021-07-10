import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  firstSection: {
    backgroundImage: 'url("/images/CTI-Contributors-BG-1.png")',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '16vh',
  },
  subheading: {
    fontSize: 24,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  tabPanel: {},
}));
