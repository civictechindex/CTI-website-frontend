// See https://github.com/ReactTraining/react-router/issues/1147

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';

const useStyles = makeStyles({
  icon: {
    height: '0.875rem',
    '& svg': {
      transform: 'translateY(4px)',
    },
  },
  muiLink: {
    textDecoration: 'underline',
  },
});

const Link = ({ to, children, ...props }) => {
  const classes = useStyles();

  // If it has no 'to', just style it like a link
  if (!to) {
    return (
      <MuiLink {...props} className={classes.muiLink}>
        {children}
      </MuiLink>
    );
  }

  // If 'to' is an external link, include icon
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} className={classes.icon} {...props}>
        {children} <OpenInNewRoundedIcon fontSize='inherit' />
      </a>
    );
  }

  // Else assume 'to' is a route
  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
