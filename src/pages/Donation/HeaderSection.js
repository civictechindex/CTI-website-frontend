import React from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBreadcrumbs from "../../components/NavBreadcrumbs.js";
import { TitleSection } from '../../components'


const breadCrumbLinks = [
  { href: '/home', name: 'Home' },
  { href: '/radicalcollaboration/faq', name: 'Radical Collaboration' },
  { href: '/donate', name: 'Make a Donation' },
];

export const HeaderSection = () => {
  return (
    <Box className='boxBackground'>
      <Container style={{ paddingBottom: '40px' }}>
        <NavBreadcrumbs crumbs={breadCrumbLinks} />
        <Grid container>
          <TitleSection>Make a Donation</TitleSection>
        </Grid>
      </Container>
    </Box>
  )
}
