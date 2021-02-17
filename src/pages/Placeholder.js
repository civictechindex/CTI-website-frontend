import React from 'react';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { NavBreadcrumbs } from '../components';

const Placeholder = () => {
  const crumbs = [
    { name: 'Home', href: '/home' },
    { name: 'Placeholder', href: '/blank' },
  ];

  return (
    <Container className='containerDefault'>
      <NavBreadcrumbs crumbs={crumbs} />
      <Card className='card244'>
        <CardContent>
          <Typography variant='h1'>
            Heading
          </Typography>
          <Typography variant='h6'>
            Subheading
          </Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Placeholder;
