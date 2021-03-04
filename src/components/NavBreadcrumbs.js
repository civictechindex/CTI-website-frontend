import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: props => ({
    padding: '25px',
    color: props.color,
  }),
});

/**
 * Navigation enabled breadcrumb.
 *
 * You may pass an array containing an object of
 * <NavBreadcrumbs crumbs={[{name: 'Home', href='/'}]}
 * @param {Array} crumbs Array of name & href pairs.
 * @param {String} color Use color scheme
 */
export default function NavBreadcrumbs(props) {
  const crumbs = props.crumbs;
  const classes = useStyles(props)

  const displayCrumbs = crumbs.map((i,idx) => {
    if (i.href) {
      return <Link key={idx} color="inherit" href={i.href}>{i.name}</Link>
    } else {
      return <Typography key={idx} color="inherit">{i.name}</Typography>
    }
  });

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      {displayCrumbs}
    </Breadcrumbs>
  );
}
