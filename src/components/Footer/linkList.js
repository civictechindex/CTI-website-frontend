import React from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const LinkList = ({ header, links, route }) => {
  const classes = useStyles();

  return (
    <Box >
      <Typography
        component={Link}
        to={route}
        variant='body2'
        color='textSecondary'
        className={classes.linkTypography}>
        {header}
      </Typography>
      {links.map((link) => {
        return link.external ? (
          <a key={link.key} href={link.to}>
            {link.text}
          </a>
        ) : (
          <Link key={link.key} to={link.to}>
            {link.text}
          </Link>
        );
      })}
    </Box>
  );
};

export default LinkList;
