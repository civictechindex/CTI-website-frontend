import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BottomCallToAction from '../../components/BottomCallToAction';
import Link from '../../components/common/Link';
import useStyles from './styles.js';
import { GenericHeaderSection } from '../../components';

const Donate = () => {
  const classes = useStyles();
  const breadCrumbLinks = [
    { href: '/', name: 'Home' },
    { href: '/radical-collaboration/donate', name: 'Donate' },
  ];

  return (
    <Box className='pageContainer'>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='Make a Donation'
            breadCrumbLinks={breadCrumbLinks}
          />
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.infoGrid}>
              <Typography
                variant='h4'
                aria-level='2'
                className={classes.infoDescription}
              >
                The Civic Tech Index is being developed by Hack For LA, and is
                currently taking donations through Code For America.
              </Typography>
              <Typography variant='body1' className={classes.infoSteps}>
                1. Please follow this link to the Code For America{' '}
                <Link
                  to='https://www.codeforamerica.org/donate'
                  target='_blank'
                >
                  donation form
                </Link>
                .
              </Typography>
              <Typography variant='body1' className={classes.infoSteps}>
                2. To make a donation to the Civic Tech Index, please select{' '}
                Hack for LA under the brigades listed.
              </Typography>
              <Typography
                variant='h5'
                aria-level='2'
                className={classes.infoThank}
              >
                We appreciate your contribution.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                alt='A gif demonstrating the use of the donation form'
                className={classes.infoGif}
                src='../images/CfA-HfLA-Donation.gif'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='containerWhite'>
        <Container>
          <BottomCallToAction
            heading='Want to support in other ways?'
            buttonHref='/contact'
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Donate;
