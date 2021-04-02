import React from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const LinkList = ({ header, links }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.dropdownHeader}>
        <Typography variant='body2' color='textSecondary'>{header}</Typography>
      </Box>
      {links.map((link) => {
        return link.external ? <a href={link.to}>{link.text}</a> : <Link to={link.to}>{link.text}</Link>
      })}
    </>
  );
};

export default LinkList;
