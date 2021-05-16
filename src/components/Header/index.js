import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import HeaderSmall from './HeaderSmall';
import HeaderLarge from './HeaderLarge';

const Header = () => {
  return (
    <>
      <Hidden mdUp>
        <HeaderSmall />
      </Hidden>
      <Hidden smDown>
        <HeaderLarge />
      </Hidden>
    </>
  );
};

export default Header;
