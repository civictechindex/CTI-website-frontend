import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NavBreadcrumbs } from '../components';
import AddOrganization from '../components/AddOrganization';

const Placeholder = () => {
  const crumbs = [
    { name: 'Home', href: '/home' },
    { name: 'Placeholder', href: '/blank' },
  ];

  return (
  
      <AddOrganization></AddOrganization>
   
  );
};

export default Placeholder;
