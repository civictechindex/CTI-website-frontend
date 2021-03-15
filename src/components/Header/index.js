import "../../styles.css";
import useStyles from "./styles.js";
import NavButton from "../NavButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink.js";
import NavSublink from "./NavSublink.js";
import MenuRounded from "@material-ui/icons/MenuRounded";
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
        <NavLink heading="Radical Collaboration" route="/radicalcollaboration">
          <NavSublink heading="Donate" route="/" />
          <NavSublink heading="Share the CTI" route="/radicalcollaboration/sharethecti" />
          <NavSublink heading="Volunteer with us" route="/" />
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
