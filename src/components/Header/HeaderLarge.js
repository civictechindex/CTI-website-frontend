import * as React from 'react';
import useStyles from './styles';
import NavLink from './NavLink';
import OrgLink from './OrgLink';
import RCLink from './RCLink';
import NavSublink from './NavSublink';
import SearchContainer from './SearchContainer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HeaderLarge = () => {
    const classes = useStyles();
    const { pathname } = useLocation();
    
    return (
        <nav className={classes.nav}>
            <Link to="/home">
                <img
                    className={classes.logo}
                    src="/images/cti-logo.svg"
                    alt="civic logo"
                />
            </Link>
            <div className={classes.flexContainer}>
                <NavLink header="Join" route="/tag-generator">
                    <NavSublink header="Tag Generator" route="/tag-generator" />
                </NavLink>
                <NavLink header="About" route="/about">
                    <NavSublink header="Overview" route="/about" />
                </NavLink>
                <OrgLink header="Organizations" route="/contributors/all">
                    <NavSublink header="Index Contributors" route="/contributors/all" />
                    <NavSublink header="Unaffiliated" route="/contributors/unaffiliated" />
                    <NavSublink header="Affiliated" route="/contributors/affiliated" />
                </OrgLink>
                <RCLink header="Radical Collaboration" route="/support">
                    <NavSublink header="Collaborate with Us" route="/support" />
                    <NavSublink header="How to Do It" route="/adding-projects-to-the-index" />
                    <NavSublink header="Donate" route="/donate" />
                    <NavSublink header="Share the CTI" route="/radicalcollaboration/sharethecti" />
                    <NavSublink header="Volunteer with us" route="https://www.hackforla.org/projects/civic-tech-index" isExternal/>
                    <NavSublink header="FAQ" route="/radicalcollaboration/faq" />
                </RCLink>
                <SearchContainer />
            </div>
        </nav>
    );
};

export default HeaderLarge;