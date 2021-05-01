import * as React from 'react';
import Link from '@material-ui/core/Link';
import { NavLink as NaviLink, withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  usePopupState,
  bindMenu,
  bindHover,
} from "material-ui-popup-state/hooks";
import Menu from "material-ui-popup-state/HoverMenu";

const styles = () => ({
  menu: {
    padding: "0",
  },
  popover: {
    padding: "0",
  },
  paper: {
    paddingTop: "1rem",
  },
});

const OrgLink = ({ header, route, children, classes }) => {
  const popupState = usePopupState({ variant: "popper", popupId: "navlink" });
  const { pathname } = useLocation();
  
  return (
    <>
      <Link
        {...bindHover(popupState)}
        underline="none"
        component={NaviLink}
        to={route} 
        exact
        activeStyle={{
          color: "#0F1D2F",
          fontWeight: "bold",
        }}
        isActive={(match, location) => {
          if (match) {
            return true;
          } else if (window.location.href.indexOf("/contributors") > -1) {
            return true;
          }
        }}
        classes={{ root: classes.link }}
      >
        {header}
      </Link>
      {children && (
        <Menu
          {...bindMenu(popupState)}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          classes={{ paper: classes.paper, list: classes.menu }}
          PopoverClasses={{ paper: classes.popover }}
          elevation={0}
        >
          <div>{children}</div>
        </Menu>
      )}
    </>
  );
};

export default withRouter(withStyles(styles)(OrgLink));