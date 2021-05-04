import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  menuitem: {
    padding: '1rem',
    '&:hover': {
      backgroundColor: '#0D99C6',
      '& $p': {
        color: 'white',
        fontWeight: '700',
      },
    },
  },
});

const NavSublink = ({ classes, header, isExternal = false, location, onMatchPath, route }) => {
  if (location.pathname === route) {
    onMatchPath(route);
  }

  const linkComponent = isExternal ? (
    <a href={route} style={{ textDecoration: 'none' }}>
      <Typography>{header}</Typography>
    </a>
  ) : (
    <Link component={RouterLink} to={route} underline='none' classes={{ root: classes.text }}>
      <Typography>{header}</Typography>
    </Link>
  );

  return (
    <MenuItem data-cy='menuItem' disableRipple disableGutters classes={{ root: classes.menuitem }} ListItemClasses={{ root: classes.text }}>
      {linkComponent}
    </MenuItem>
  );
};

export default withRouter(withStyles(styles)(NavSublink));
