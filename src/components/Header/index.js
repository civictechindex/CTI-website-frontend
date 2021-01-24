/*eslint-disable */
import "../../styles.css";
import useStyles from "./styles.js";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const [isBurgerOpen, setIsBurgerOpen] = useState(null);
  
  return (
    <nav className={classes.nav}>
      <div className={classes.background}></div>
      <Link to="/home" 
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
      <div className={isBurgerOpen? `${classes.flexContainer} ${classes.showMobileNav}`: `${classes.flexContainer}`} 
      // ref={nav}
      >
        <div className={classes.linksContainer}>
          <Link
            to="/tag-generator"
            className={classes.links}
            // onClick={() => setIsBurgerOpen(false)}
          >
            Join the Index
          </Link>
        </div>

        <div className={classes.linksContainer}>
          <Link
            to="/about"
            className={classes.links}
            // onClick={() => setIsBurgerOpen(false)}
          >
            About
          </Link>
        </div>

        <div className={classes.linksContainer}>
          <p
            className={`${classes.links} ${classes.linksWithArrows}`}
            tabIndex="0"
          >
            <Link to="/contributors/all" className={classes.links}>
              Contributors
            </Link>
            <img
              className={classes.linksArrows}
              src="/images/link-arrow.png"
              alt="arrow for about link"
              tabIndex="0"
            />
          </p>
          <div className={classes.subLinksContainer}>
            <Link to="/contributors/affiliated" className={classes.subLinks}>
              Affiliated
            </Link>
            <Link to="/contributors/unaffiliated" className={classes.subLinks}>
              Unaffiliated
            </Link>
          </div>
        </div>

        <div className={classes.linksContainer}>
          <p
            className={`${classes.links} ${classes.linksWithArrows}`}
            tabIndex="0"
          >
            Radical Collaboration
            <img
              className={classes.linksArrows}
              src="/images/link-arrow.png"
              alt="arrow for about link"
              tabIndex="0"
            />
          </p>
          <div className={classes.subLinksContainer}>
            <Link
              to="/"
              className={classes.subLinks}
            //   onClick={() => setIsBurgerOpen(false)}
            >
              Donate
            </Link>
            <Link
              to="/"
              className={classes.subLinks}
            //   onClick={() => setIsBurgerOpen(false)}
            >
              Share the CTI
            </Link>
            <Link
              to="/"
              className={classes.subLinks}
            //   onClick={() => setIsBurgerOpen(false)}
            >
              Volunteer with Us
            </Link>
            <Link
              to="/"
              className={classes.subLinks}
            //   onClick={() => setIsBurgerOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className={classes.searchContainer}>
          <Link to="/projects">
            <button className="nav-button">Search Projects</button>
          </Link>
        </div>
      </div>
      <div className={classes.mobileContainer}>
        <div
          className={isBurgerOpen?`${classes.burger} ${classes.transformBurger}`: classes.burger}
          onClick={() => setIsBurgerOpen(c => !c)}
         //  ref={burgerContent}
        >
          <div className={isBurgerOpen?`${classes.burgerLine} ${classes.transformLine1}`:classes.burgerLine} 
         //  ref={line1}
          ></div>
          <div className={isBurgerOpen? classes.displayNone: classes.burgerLine} 
         //  ref={line2}
          ></div>
          <div className={isBurgerOpen? `${classes.burgerLine} ${classes.transformLine3}`: classes.burgerLine} 
         //  ref={line3}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
