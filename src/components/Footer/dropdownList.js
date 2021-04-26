import React, { useState } from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandLessRounded from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';
import useStyles from './styles';

const DropdownList = ({ header, links, route }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const toggleList = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={classes.dropdownHeader} onClick={toggleList}>
        <Typography 
          // Uncomment below to create Dropdown headers as links
          // component={Link} to={route} 
          variant='body2' color='textSecondary'>{header}
        </Typography>
        {open ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </Box>
      {open &&
        links.map((link) => {
          return link.external ? (
            <a key={link.key} href={link.to}>{link.text}</a>
          ) : (
            <Link key={link.key} to={link.to}>{link.text}</Link>
          );
        })
      }
    </>
  );
};

export default DropdownList;
