import React, { useState } from 'react';
import Link from "@material-ui/core/Link";
import Typography from '@material-ui/core/Typography';
import ExpandLessRounded from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';
import useStyles from './styles.js';


const NavLinkSmall = ({ header, links }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
  
    const toggleList = () => {
      setOpen(!open);
    };
  
    return (
      <>
        <div className={classes.dropdownHeader} onClick={toggleList}>
          <Typography>{header}</Typography>
          {open ? <ExpandLessRounded color="secondary" /> : <ExpandMoreRounded color="primary" />}
        </div>
        {open &&
          links.map((link) => {
            return link.external ? <a href={link.to}>{link.text}</a> : <Link to={link.to} style={{ underline: "none" }} >{link.text}</Link>
          })
        }
      </>
    );
  };
  
  export default NavLinkSmall;