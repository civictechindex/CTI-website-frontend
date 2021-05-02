import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClearRounded from '@material-ui/icons/ClearRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import DropdownList from './DropdownList';
import SearchContainer from './SearchContainer';
import useStyles from './styles';

const links = {
  about: [{ text: 'Overview', to: '/about' }],
  join: [{ text: 'Tag Generator', to: '/tag-generator' }],
  contribute: [
    { text: 'Index Contributors', to: '/contributors/all' },
    { text: 'Unaffiliated', to: '/contributors/unaffiliated' },
    { text: 'Affiliated', to: '/contributors/affiliated' },
  ],
  collaborate: [
    { text: 'Collaborate with Us', to: '/support' },
    { text: 'How to Do It', to: '/adding-projects-to-the-index' },
    { text: 'Donate', to: '/donate' },
    { text: 'Share the CTI', to: '/radicalcollaboration/sharethecti' },
    { text: 'Volunteer with Us', to: 'https://www.hackforla.org/projects/civic-tech-index', external: true },
    { text: 'FAQ', to: '/radicalcollaboration/faq' },
  ],
};

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
        <DropdownList header='Join' route='/tag-generator' links={links.join} />
        <DropdownList header='About' route='/about' links={links.about} />
        <DropdownList header='Organizations' route='/contributors/all' links={links.contribute} />
        <DropdownList header='Radical Collaboration' route='/support' links={links.collaborate} />
        <SearchContainer />
      </div>
      <div onClick={openBurger} className={classes.mobileContainer}>
        {!isBurgerOpen ? <MenuRounded data-cy='menuIcon' fontSize='large' /> : <ClearRounded data-cy='menuIcon' fontSize='large' />}
      </div>
    </nav>
  );
};

export default HeaderSmall;
