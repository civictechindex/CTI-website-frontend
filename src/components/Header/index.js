import "../../styles.css";
import useStyles from "./styles.js";
import NavButton from "../NavButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink.js";
import NavSublink from "./NavSublink.js";
import { MenuRounded } from "@material-ui/icons";
const Header = () => {
  const classes = useStyles();
  const [isBurgerOpen, setIsBurgerOpen] = useState(null);

  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
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
        <NavLink heading="Radical Collaboration" route="">
          <NavSublink heading="Donate" route="/" />
          <NavSublink heading="Share the CTI" route="/" />
          <NavSublink heading="Volunteer with us" route="/" />
          <NavSublink heading="FAQ" route="/" />
        </NavLink>
        <NavLink heading="Organizations" route="/contributors/all">
          <NavSublink heading="Index Contributors" route="/contributors/all" />
          <NavSublink
            heading="Unaffiliated"
            route="/contributors/unaffiliated"
          />
          <NavSublink heading="Affiliated" route="/contributors/affiliated" />
        </NavLink>

        <div className={classes.linksContainer}>
          <Link to='/about' className={classes.links} onClick={() => setIsBurgerOpen(false)}>About</Link>
        </div>

        <div className={classes.linksContainer}>
          <p className={`${classes.links} ${classes.linksWithArrows}`} tabIndex='0'>
            <Link to='/contributors/all' className={classes.links} >Contributors</Link>
            <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0' />
          </p>
          <div className={classes.subLinksContainer}>
            <Link to='/contributors/affiliated' className={classes.subLinks} >Affiliated</Link>
            <Link to='/contributors/unaffiliated' className={classes.subLinks} >Unaffiliated</Link>
          </div>
        </div>

        <div className={classes.linksContainer}>
          <p className={`${classes.links} ${classes.linksWithArrows}`} tabIndex='0'>
            Radical Collaboration
            <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0' />
          </p>
          <div className={classes.subLinksContainer}>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Donate</Link>
            <Link to='/radicalcollaboration/sharethecti' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Share the CTI</Link>
            <Link to='/' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>Volunteer with Us</Link>
            <Link to='/radicalcollaboration/faq' className={classes.subLinks} onClick={() => setIsBurgerOpen(false)}>FAQ</Link>
          </div>
        </div>
        <div className={classes.searchContainer}>
          <NavButton href="/about" variant="blue">
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

export default Header;
