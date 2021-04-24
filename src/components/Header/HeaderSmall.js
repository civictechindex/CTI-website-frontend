import React, { useState } from 'react'
import useStyles from './styles';
import DropdownList from './DropdownList';
import { Link } from 'react-router-dom';
import MenuRounded from '@material-ui/icons/MenuRounded';
import ClearRounded from '@material-ui/icons/ClearRounded';
import SearchContainer from './SearchContainer';

const HeaderSmall = ({ links }) => {
    const classes = useStyles();
    const [isBurgerOpen, setIsBurgerOpen] = useState(null);
    const openBurger = () => {
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
            <DropdownList header="Join" route="/tag-generator" links={links.join} />
            <DropdownList header="About" route="/about" links={links.about} />
            <DropdownList header="Organizations" route="/contributors/all" links={links.contribute} />
            <DropdownList header="Radical Collaboration" route="/radicalcollaboration" links={links.collaborate} />
            <SearchContainer />
        </div>
        <div onClick={openBurger} className={classes.mobileContainer}>
            {(!isBurgerOpen) 
                ? <MenuRounded data-cy="menuIcon" fontSize="large" /> 
                : <ClearRounded data-cy="menuIcon" fontSize="large" />
            }
        </div>
        </nav>
    );
};

export default HeaderSmall;