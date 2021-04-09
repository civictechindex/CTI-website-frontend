import React from 'react';
import { Link } from 'react-router-dom/';
import Typography from '@material-ui/core/Typography';

const LinkList = ({ header, links }) => {

  return (
    <>
      <Typography variant='body2' color='textSecondary'>{header}</Typography>
      {links.map((link) => {
        return link.external ? <a href={link.to}>{link.text}</a> : <Link to={link.to}>{link.text}</Link>
      })}
    </>
  );
};

export default LinkList;
