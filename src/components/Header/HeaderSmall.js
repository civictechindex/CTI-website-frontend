import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClearRounded from '@material-ui/icons/ClearRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import DropdownList from './DropdownList';
import SearchContainer from './SearchContainer';
import useStyles from './styles';

import { navigation } from '../../navigation';

const HeaderSmall = () => {
  const classes = useStyles();
  const [isBurgerOpen, setIsBurgerOpen] = useState(null);
  const openBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <nav className={classes.nav}>
      <Link to='/home'>
        <img className={classes.logo} src='/images/cti-logo.svg' alt='civic logo' />
      </Link>
      <div className={isBurgerOpen ? `${classes.flexContainer} ${classes.showMobileNav}` : `${classes.flexContainer}`}>
        {navigation.map((nav) => {
          return <DropdownList {...nav} links={nav.subNavigation} />;
        })}
        <SearchContainer />
      </div>
      <div onClick={openBurger} className={classes.mobileContainer}>
        {!isBurgerOpen ? <MenuRounded data-cy='menuIcon' fontSize='large' /> : <ClearRounded data-cy='menuIcon' fontSize='large' />}
      </div>
    </nav>
  );
};

export default HeaderSmall;
