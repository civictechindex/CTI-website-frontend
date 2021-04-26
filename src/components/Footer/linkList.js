import React from 'react';
import { Link } from 'react-router-dom/';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const LinkList = ({ header, links, route }) => {
  const classes = useStyles();

  return (
    <>
      <div 
        className={classes.containerItem}
      >
        <Typography component={Link} to={route} style={{ whiteSpace: 'nowrap' }} variant='body2' color='textSecondary'>{header}</Typography>
        {links.map((link) => {
          return link.external ? (
            <a key={link.key} href={link.to}>{link.text}</a>
          ) : (
            <Link key={link.key} to={link.to}>{link.text}</Link>
          );
        })}
      </div>
    </>
  );
};

export default LinkList;
