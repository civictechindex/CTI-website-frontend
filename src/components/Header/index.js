import React, { useState } from "react";
import "../../styles.css";
import useStyles from "./styles.js";
import NavLinkLarge from "./NavLinkLarge.js";
import NavLinkSmall from "./NavLinkSmall.js";
import NavSublink from "./NavSublink.js";
import NavButton from "../NavButton";
import { Link } from "react-router-dom";
import MenuRounded from "@material-ui/icons/MenuRounded";
import ClearRounded from '@material-ui/icons/ClearRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const links = {
  join: [
    { text: 'Tag Generator', to: '/tag-generator' },
  ],
  about: [
    { text: 'Overview', to: '/about' },
  ],
  contribute: [
    { text: 'Index Contributors', to: '/contributors/all' },
    { text: 'Unaffiliated', to: '/contributors/unaffiliated' },
    { text: 'Affiliated', to: '/contributors/affiliated' },
  ],
  collaborate: [
    { text: 'How to Do It', to: '/adding-projects-to-the-index' },
    { text: 'Donate', to: '/donate' },
    { text: 'Share the CTI', to: '/radicalcollaboration/sharethecti' },
    { text: 'Volunteer with Us', to: 'https://www.hackforla.org/projects/civic-tech-index', external: true },
    { text: 'FAQ', to: '/radicalcollaboration/faq' },
  ],
};

const HeaderLarge = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Link to="/home">
        <img
          className={classes.logo}
          src="/images/cti-logo.svg"
          alt="civic logo"
        />
      </Link>
      <div className={ `${classes.flexContainer}` }>
        <NavLinkLarge heading="Join" route="/tag-generator">
          <NavSublink heading="Tag Generator" route="/tag-generator" />
        </NavLinkLarge>
        <NavLinkLarge heading="About" route="/about">
          <NavSublink heading="Overview" route="/about" />
        </NavLinkLarge>
        <NavLinkLarge heading="Organizations" route="/contributors/all">
          <NavSublink heading="Index Contributors" route="/contributors/all" />
          <NavSublink heading="Unaffiliated" route="/contributors/unaffiliated" />
          <NavSublink heading="Affiliated" route="/contributors/affiliated" />
        </NavLinkLarge>
        <NavLinkLarge heading="Radical Collaboration" route="/radicalcollaboration/faq">
          <NavSublink heading="How to Do It" route="/adding-projects-to-the-index" />
          <NavSublink heading="Donate" route="/donate" />
          <NavSublink heading="Share the CTI" route="/radicalcollaboration/sharethecti" />
          <NavSublink heading="Volunteer with us" route="https://www.hackforla.org/projects/civic-tech-index" isExternal/>
          <NavSublink heading="FAQ" route="/radicalcollaboration/faq" />
        </NavLinkLarge>
        <div className={classes.searchContainer}>
          <NavButton href="/projects" variant="blue">
            Search Projects
          </NavButton>
        </div>
      </div>
    </nav>
  );
};

const HeaderSmall = () => {
  const classes = useStyles();
  const [isBurgerOpen, setIsBurgerOpen] = useState(null);
  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <nav className={classes.nav}>
      <Link to="/home">
        <img
          className={classes.logo}
          src="/images/cti-logo.svg"
          alt="civic logo"
        />
      </Link>
      <div
        className={
          isBurgerOpen
            ? `${classes.flexContainer} ${classes.showMobileNav}`
            : `${classes.flexContainer}`
        }
      >
        <NavLinkSmall header="Join" route="/tag-generator" links={links.join} />
        <NavLinkSmall header="About" route="/about" links={links.about} />
        <NavLinkSmall header="Organizations" route="/contributors/all" links={links.contribute} />
        <NavLinkSmall header="Radical Collaboration" route="/radicalcollaboration" links={links.collaborate} />
        <div className={classes.searchContainer}>
          <NavButton href="/projects" variant="blue">
            Search Projects
          </NavButton>
        </div>
      </div>
      <div onClick={handleClick} className={classes.mobileContainer}>
        {(!isBurgerOpen) 
        ? <MenuRounded data-cy="menuIcon" fontSize="large" /> 
        : <ClearRounded data-cy="menuIcon" fontSize="large" />}
      </div>
    </nav>
  );
};

const Header = () => {
  const theme = useTheme();
  const headerSize = useMediaQuery(theme.breakpoints.up('md'));
  
  return headerSize ? <HeaderLarge /> : <HeaderSmall links={links} />;
};

export default Header
