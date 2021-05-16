import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ClearRounded from '@material-ui/icons/ClearRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import DropdownList from './DropdownList';
import SearchContainer from './SearchContainer';
import useStyles from './styles';

import { navigation } from '../../navigation';

const HeaderSmall = () => {
  const classes = useStyles();
  const [isBurgerOpen, setIsBurgerOpen] = useState(null);
  const toggleBurger = () => {
    setIsBurgerOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className={classes.nav}>
      <Link to='/home'>
        <img className={classes.logo} src='/images/cti-logo.svg' alt='civic logo' />
      </Link>
      <div
        className={clsx(classes.flexContainer, {
          [classes.showMobileNav]: isBurgerOpen,
          [classes.hideMobileNav]: !isBurgerOpen,
        })}
      >
        {navigation.map((nav) => {
          return <DropdownList key={nav.id} header={nav.header} route={nav.route} links={nav.subNavigation} />;
        })}
        <SearchContainer />
      </div>
      <div onClick={toggleBurger} className={classes.mobileContainer}>
        <IconButton>
          {!isBurgerOpen ? (
            <MenuRounded data-cy='menuIcon' fontSize='large' />
          ) : (
            <ClearRounded data-cy='menuIcon' fontSize='large' />
          )}
        </IconButton>
      </div>
    </nav>
  );
};

export default HeaderSmall;
