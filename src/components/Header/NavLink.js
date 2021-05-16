import * as React from 'react';
import { NavLink as NaviLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { usePopupState, bindMenu, bindHover } from 'material-ui-popup-state/hooks';
import Menu from 'material-ui-popup-state/HoverMenu';

const styles = () => ({
  menu: {
    padding: '0',
  },
  popover: {
    padding: '0',
  },
  paper: {
    paddingTop: '1rem',
  },
});

const NavLink = ({ children, classes, header, matchPathParent, route }) => {
  const popupState = usePopupState({ variant: 'popper', popupId: 'navlink' });
  const theme = useTheme();

  return (
    <>
      <Link
        {...bindHover(popupState)}
        underline='none'
        component={NaviLink}
        to={route}
        exact
        isActive={() => {
          return route === matchPathParent;
        }}
        activeStyle={{
          color: theme.palette.primary.main,
          fontWeight: 'bold',
        }}
        classes={{ root: classes.link }}
      >
        {header}
      </Link>
      <Menu
        {...bindMenu(popupState)}
        onClick={popupState.close}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{ paper: classes.paper, list: classes.menu }}
        PopoverClasses={{ paper: classes.popover }}
        elevation={0}
      >
        <div>{children}</div>
      </Menu>
    </>
  );
};

export default withRouter(withStyles(styles)(NavLink));
