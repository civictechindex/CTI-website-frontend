import React, { useState } from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandLessRounded from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';
import useStyles from './styles';

const DropdownList = ({ header, links, route }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleList = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={classes.dropdownHeader} onClick={toggleList}>
        <Typography 
          // Uncomment below to create Menu header as link
          // component={Link} to={route} 
          variant='body2' color='textSecondary' style={{ fontWeight:'bold', textDecoration: 'none' }}>{header}
        </Typography>
        {open ? <ExpandLessRounded color="secondary" /> : <ExpandMoreRounded color="primary" />}
      </Box>
      {open &&
        links.map((link) => {
          return link.external ? <a style={{ textDecoration: 'none' }} href={link.to}>{link.text}</a> : <Link style={{ textDecoration: 'none' }} to={link.to}>{link.text}</Link>
        })
      }
    </>
  );
};

export default DropdownList;