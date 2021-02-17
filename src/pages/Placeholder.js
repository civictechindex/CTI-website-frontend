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
          <Typography variant='h1' color='secondary'>
            Placeholder
          </Typography>
          <Typography variant='body1'>This space intentionally left blank.</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Placeholder;
