import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBreadcrumbs from "../../components/NavBreadcrumbs.js";
import { TitleSection } from '../../components';
import useStyles from './styles';

const breadCrumbLinks = [
  { name: 'Home', href: '/home' },
  { name: 'Radical Collaboration', href: '/radicalcollaboration' },
];

const HeaderSection = () => {
  const classes = useStyles();
  return (
    <Box className='boxBackground'>
      <Container className={classes.headerSection}>
        <NavBreadcrumbs crumbs={breadCrumbLinks} />
        <Grid container>
          <TitleSection>Your help goes a long way</TitleSection>
        </Grid>
      </Container>
    </Box>
  )
};

export default HeaderSection;
