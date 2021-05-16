import React, { useState } from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ExpandLessRounded from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';
import useStyles from './styles';

const DropdownList = ({ linkClickHandler, header, links, route }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleList = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClick = () => {
    setOpen(false);
    linkClickHandler();
  };

  const LinkComponent = ({ link }) => {
    const { header, isExternal, route } = link;
    if (isExternal) {
      return (
        <a style={{ textDecoration: 'none' }} href={route} onClick={handleClick}>
          {header}
        </a>
      );
    } else {
      return (
        <Link style={{ textDecoration: 'none' }} to={route} onClick={handleClick}>
          {header}
        </Link>
      );
    }
  };

  return (
    <>
      <Box className={classes.dropdownHeader} onClick={toggleList}>
        <Typography
          // component={Link} to={route} // uncomment to create Menu header as link
          variant='body2'
          color='textSecondary'
          style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'none' }}
        >
          {header}
        </Typography>
        {open ? <ExpandLessRounded color='secondary' /> : <ExpandMoreRounded color='primary' />}
      </Box>
      <Collapse in={open} className={classes.collapse}>
        <List dense disablePadding>
          {links.map((link, index) => {
            return (
              <ListItem dense disableGutters key={index}>
                <LinkComponent link={link} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default DropdownList;
