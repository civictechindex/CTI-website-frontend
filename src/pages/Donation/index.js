import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import BottomCallToAction from '../../components/BottomCallToAction';
import BreadCrumbs from "../../components/NavBreadcrumbs.js";

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
      <Container className={classes.commonSection + ' ' + classes.titleSection}>
        <BreadCrumbs crumbs={breadCrumbLinks} />
        <Typography variant='h2' className={classes.donateTitle}>Make a Donation</Typography>
      </Container>

      <Container className={classes.commonSection + ' ' + classes.infoSection}>
        <Box className={classes.infoText}>
          <Typography variant='body1' className={classes.infoDescription}>
            The Civic Tech Index is being developed by Hack For LA,
            and is currently taking donations through Code For America.
          </Typography>

          <Typography variant='body1' className={classes.infoSteps}>
            1. Please follow this link to the Code For America{' '}
            <a
              className={classes.styledLinkMobile + ' ' + classes.styledLink}
              href='https://www.codeforamerica.org/donate'>
              donation form.
            </a>
          </Typography>

          <Typography variant='body1' className={classes.infoSteps}>
            2. To make a donation to the Civic Tech Index, please
            select <strong>Hack For LA</strong> under the brigades listed.
          </Typography>
        </Box>
        <img
          alt='A gif demonstrating the use of the donation form'
          className={classes.infoGif}
          src='./images/CTI-Donate-to-HfLA.gif' />

        <Typography variant='body1' className={classes.infoThank}>We appreciate your contribution.</Typography>
      </Container>
      <BottomCallToAction heading='Want to support in other ways?' />
    </Container>
  );
}

export default Donation;
