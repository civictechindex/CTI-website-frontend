import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HeaderSmall from './HeaderSmall';
import HeaderLarge from './HeaderLarge';

const Header = () => {
    const theme = useTheme();
    const headerSize = useMediaQuery(theme.breakpoints.up('md'));

    const links = {
      about: [
        { text: 'Overview', to: '/about' },
      ],
      join: [
        { text: 'Tag Generator', to: '/tag-generator' },
      ],
      contribute: [
        { text: 'Index Contributors', to: '/contributors/all' },
        { text: 'Unaffiliated', to: '/contributors/unaffiliated' },
        { text: 'Affiliated', to: '/contributors/affiliated' },
      ],
      collaborate: [
        { text: 'How to Do It', to: '/adding-projects-to-the-index' },
        { text: 'Donate', to: '/donate' },
        { text: 'Share the CTI', to: '/' },
        { text: 'Volunteer with Us', to: 'https://www.hackforla.org/projects/civic-tech-index', external: true },
        { text: 'FAQ', to: '/radicalcollaboration/faq' },
      ],
    };
  
    return headerSize ? <HeaderLarge links={links} /> : <HeaderSmall links={links} />;
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.background}></div>
      <Link
        to="/home"
      // onClick={() => setIsBurgerOpen(false)}
      >
        <div className={classes.circle}></div>
        <img
          className={classes.logo}
          src="/images/cti-logo.svg"
          alt="civic logo"
          width="150px"
        />
      </Link>
      <div
        className={
          isBurgerOpen
            ? `${classes.flexContainer} ${classes.showMobileNav}`
            : `${classes.flexContainer}`
        }
      >
        <NavLink heading="Join The Index" route="/tag-generator" />
        <NavLink heading="About" route="/about" />
        <NavLink heading="Radical Collaboration" route="/radicalcollaboration">
          <NavSublink heading="Donate" route="/donate" />
          <NavSublink heading="Share the CTI" route="/radicalcollaboration/sharethecti" />
          <NavSublink heading="Volunteer with us" route="https://www.hackforla.org/projects/civic-tech-index" isExternal />
          <NavSublink heading="FAQ" route="/radicalcollaboration/faq" />
        </NavLink>
        <NavLink heading="Organizations" route="/contributors/all">
          <NavSublink heading="Index Contributors" route="/contributors/all" />
          <NavSublink
            heading="Unaffiliated"
            route="/contributors/unaffiliated"
          />
          <NavSublink heading="Affiliated" route="/contributors/affiliated" />
        </NavLink>
        <div className={classes.searchContainer}>
          <NavButton href="/projects" color="primary">
            Search Projects
          </NavButton>
        </div>
      </div>
      <div onClick={handleClick} className={classes.mobileContainer}>
        <MenuRounded data-cy="menuIcon" fontSize="large" />
      </div>
    </nav>
  );
};


