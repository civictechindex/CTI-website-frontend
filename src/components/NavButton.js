import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Nav Button styled by Material-UI theme
 * @param {*} props.color - optional - primary or secondary
 * @param {*} props.href - link
 * @param {*} props.variant - optional - contained or outlined
 */

const useStyles = makeStyles(theme => ({
  navBtnStyle: {
    textDecoration:'none',
  },

}));
export default function NavButton({ children, href }) {
  const classes = useStyles()
  return (
    <Link to={href} className={classes.navBtnStyle}>
      <Button >
        {children}
      </Button>
    </Link>
  );
}
