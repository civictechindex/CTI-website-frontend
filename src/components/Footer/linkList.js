import React from 'react';
import { Link } from 'react-router-dom/';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const LinkList = ({ header, links }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.containerItem}>
        <Typography style={{ whiteSpace: 'nowrap' }} variant='body2' color='textSecondary'>{header}</Typography>
        {links.map((link) => {
          return link.external ? <a href={link.to}>{link.text}</a> : <Link to={link.to}>{link.text}</Link>
        })}
      </div>
    </>
  );
};

export default LinkList;
