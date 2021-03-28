import React, { useState } from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './styles';

const DropdownList = ({ header, links }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const toggleList = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={classes.dropdownHeader} onClick={toggleList}>
        <Typography variant='body2' color='textSecondary'>{header}</Typography>
        {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
      </Box>
      {open &&
        links.map((link) => {
          return link.external ? <a href={link.to}>{link.text}</a> : <Link to={link.to}>{link.text}</Link>
        })
      }
    </>
  );
};

export default DropdownList;
