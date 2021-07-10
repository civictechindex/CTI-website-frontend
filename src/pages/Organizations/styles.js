import { makeStyles } from '@material-ui/core';
import { LIGHT_BLUE_HOVER } from '../../theme-colors';

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
    fontWeight: 500,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  tabPanel: {},
  indicator: {
    backgroundColor: LIGHT_BLUE_HOVER,
  },
  tabRoot: {
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: 32,
  },
  tabSelected: { color: LIGHT_BLUE_HOVER },
}));
