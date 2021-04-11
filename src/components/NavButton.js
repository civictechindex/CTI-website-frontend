import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

/**
 * Nav Button styled by Material-UI theme
 * @param {*} props.color - optional - primary or secondary
 * @param {*} props.href - link
 * @param {*} props.variant - optional - contained or outlined
 */

export default function NavButton({ children, href, ...rest }) {
  return (
    <Button component={Link} to={href} {...rest}>
      {children}
    </Button>
  );
}
