import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const defaultBreadcrumb = {
  fontFamily: 'Work Sans',
  fontSize: '14px',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '24px',
  letterSpacing: '0px',
  textAlign: 'left'
}

/**
 * Navigation enabled breadcrumb.
 * 
 * You may pass an array containing an object of 
 * <NavBreadcrumb crumbs={[{name: 'Home', href:'/'}]}
 * @param {Array} crumbs Array of name & href pairs.
 * @param {String} color Use color scheme
 */
export default function NavBreadcrumb(props) {
  const crumbs = props.crumbs

  const displayCrumbs = crumbs.map((i, k) => {
    if (i.href !== null || i.href !== '') {
      return <Link key={k} color="inherit" href={i.href}> {i.name}</Link>
    } else {
      return <Typography key={k} color="inherit">{i.name}</Typography>
    }
  });

  return (
    <div style={defaultBreadcrumb}>
      <Breadcrumbs aria-label="breadcrumb" style={{color:props.color, padding: '25px'}}>
        {displayCrumbs}
      </Breadcrumbs>
    </div>
  );
}