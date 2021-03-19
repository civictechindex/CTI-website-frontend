import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  buttonStyles: {
    backgroundColor: props => {
      if (props.variant === 'blue') {
        return theme.button.blue
      } else {
        return theme.palette.background.default
      }
    },
    border: 'none',
    borderRadius: theme.button.borderRadius,
    boxShadow: '4px 4px 12px 4px rgba(4, 45, 95, 0.08)',
    color: props => {
      if (props.variant === 'blue') {
        return theme.palette.text.secondary
      } else {
        return theme.palette.text.disabled
      }
    },
    fontSize: '1rem',
    fontWeight: 700,
    padding: theme.spacing(2),
    width: theme.spacing(32),
  },
}));

/**
 * button color
 * @param {*} props.variant
 */

export default function NavButton (props) {
  const classes = useStyles(props);
  return (
    <>
      <Link to={props.href}>
        <button className={classes.buttonStyles}>
          {props.children}
        </button>
      </Link>
    </>
  );
}
