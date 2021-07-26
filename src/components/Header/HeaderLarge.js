import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import NavSublink from './NavSublink';
import SearchContainer from './SearchContainer';
import useStyles from './styles';

import { navigation } from '../../navigation';

const HeaderLarge = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Link to='/home'>
        <img className={classes.logo} src='/images/cti-logo.svg' alt='civic logo' />
      </Link>
      <div className={classes.flexContainer}>
        {navigation.map((nav) => {
          return (
            <NavLink key={nav.id} id={nav.id} header={nav.header} route={nav.route}>
              {nav.subNavigation.map((subNav) => {
                return (
                  <NavSublink
                    key={subNav.id}
                    header={subNav.header}
                    route={subNav.route}
                    isExternal={subNav.isExternal}
                  />
                );
              })}
            </NavLink>
          );
        })}
        <SearchContainer />
      </div>
    </nav>
  );
};

export default HeaderLarge;
