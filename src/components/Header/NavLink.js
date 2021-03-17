import * as React from "react";
import Link from "@material-ui/core/Link";
import { NavLink as NaviLink, withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
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
    paddingTop: "0.7rem",
  },
});

const NavLink = ({ heading, route, children, classes }) => {
  const popupState = usePopupState({ variant: "popper", popupId: "navlink" });
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
        classes={{ root: classes.link }}
      >
        {heading}
      </Link>
      {children && (
        <Menu
          {...bindMenu(popupState)}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          classes={{ paper: classes.paper, list: classes.menu }}
          PopoverClasses={{ paper: classes.popover }}
          elevation="0"
        >
          {children}
        </Menu>
      )}
    </>
  );
};

export default withRouter(withStyles(styles)(NavLink));
