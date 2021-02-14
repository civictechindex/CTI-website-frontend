import * as React from "react";
import Link from "@material-ui/core/Link";
import { MenuItem, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  menuitem: {
    padding: "1rem",
    "&:hover": {
      backgroundColor: "#0D99C6",
      color: "white",
    },
  },
});
const NavSublink = ({ heading, route, classes }) => {
  return (
    <MenuItem
      disableRipple
      disableGutters
      classes={{ root: classes.menuitem }}
      ListItemClasses={{ root: classes.text }}
    >
      <Link
        component={RouterLink}
        to={route}
        underline="none"
        classes={{ root: classes.text }}
      >
        <Typography>{heading}</Typography>
      </Link>
    </MenuItem>
  );
};

export default withStyles(styles)(NavSublink);
