import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import spectrum from './../theme-spectrum';

const FULL_OPAQUE = '100%';
const SEMI_OPAQUE = '80%';

/**
 * Navigation enabled breadcrumb.
 *
 * You may pass an array containing an object of
 * <NavBreadcrumbs crumbs={[{name: 'Home', href='/'}]} color="primary"
 * @param {Array} crumbs Array of name & href pairs.
 * @param {String} color Use primary or secondary color scheme
 */
export default function NavBreadcrumbs(props) {
  const crumbs = props.crumbs;

  let linkColor = spectrum.white;
  let activeLinkColor = spectrum.white;
  let opacity = SEMI_OPAQUE;
  if (props.color === 'secondary') {
    linkColor = spectrum.darkGray;
    activeLinkColor = spectrum.darkBlue;
    opacity = FULL_OPAQUE;
  }

  const linkProps = {
    color: linkColor,
    opacity: opacity,
  }
  const activeLinkProps = {
    color: activeLinkColor,
    opacity: FULL_OPAQUE,
  }
  const theme = createMuiTheme({
    overrides: {
      MuiBreadcrumbs: {
        root: {
          fontFamily: 'Work Sans',
          padding: '32px',
          '& p': linkProps,
          '& a:link':linkProps,
          '& a:visited': linkProps,
          '& a:hover': activeLinkProps,
          '& a:active': activeLinkProps,
          '& a:focus': activeLinkProps,
          '& ol': {
            '& li:last-child': {
              '& a:link': {
                textDecoration:'none',
              },
            },
          },
        },
        separator: linkProps,
      },
    },
  });

  const displayCrumbs = crumbs.map((i,idx) => {
    if (i.href) {
      return <NavLink key={idx} to={i.href}>{i.name}</NavLink>
    } else {
      return <Typography key={idx}>{i.name}</Typography>
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Breadcrumbs aria-label="breadcrumb" maxItems={6} style={{ height: '65px' }}>
        {displayCrumbs}
      </Breadcrumbs>
    </ThemeProvider>
  );
}
