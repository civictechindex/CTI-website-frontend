import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import BottomCallToAction from '../../components/BottomCallToAction';
import NavBreadCrumbs from "../../components/NavBreadcrumbs.js";

import useStyles from './styles.js';

const breadCrumbLinks = [
  { href: '/home', name: 'Home' },
  { href: '/donate#root', name: 'Radical Collaboration' }, // Update when page is built
  { href: '/donate', name: 'Support Us' },
  { href: '/donate', name: 'Donate' },
];

const Donation = () => {
  const classes = useStyles();

  return (
    <Container className="containerGray">
      <Grid container spacing={2}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <NavBreadCrumbs crumbs={breadCrumbLinks} />
        </Grid>
        <Grid item xs={false} sm={1} />
        <Grid item xs={false} sm={1} />
        <Grid container item direction='column' spacing={8} xs={12} sm={5} >
          <Grid item>
            <Typography variant='h2'>Make a Donation</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' className={classes.infoDescription}>
              The Civic Tech Index is being developed by Hack For LA,
              and is currently taking donations through Code For America.
            </Typography>

            <Typography variant='body1' className={classes.infoSteps}>
              1. Please follow this link to the Code For America{' '}
              <a href='https://www.codeforamerica.org/donate'>donation form.</a>
            </Typography>

            <Typography variant='body1' className={classes.infoSteps}>
              2. To make a donation to the Civic Tech Index, please
              select <strong>Hack For LA</strong> under the brigades listed.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction='column' xs={12} sm={5} >
          <Grid item>
            <img
              alt='A gif demonstrating the use of the donation form'
              className={classes.infoGif}
              src='./images/CTI-Donate-to-HfLA.gif' />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12}>
          <Typography variant='body1' className={classes.infoThank}>We appreciate your contribution.</Typography>
        </Grid>
      </Grid>
      <BottomCallToAction heading='Want to support in other ways?' />
    </Container>
  );
}

export default Donation;
