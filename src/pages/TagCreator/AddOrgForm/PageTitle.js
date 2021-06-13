import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBreadcrumbs from '../../components/NavBreadcrumbs.js';
import { TitleSection } from '../../components';

const breadCrumbLinks = [
  { href: '/home', name: 'Home' },
  { href: '/addorganization', name: 'Add Organization' },
];

export const PageTitle = () => {
  return (
    <Box className='boxBackground'>
      <Container style={{ paddingBottom: '40px' }}>
        <NavBreadcrumbs crumbs={breadCrumbLinks} />
        <Grid container>
          <TitleSection>Add an Organization to the Civic Tech Index</TitleSection>
        </Grid>
      </Container>
    </Box>
  );
};
