import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BottomCallToAction from '../../components/BottomCallToAction';
import Link from '../../components/common/Link';
import useStyles from './styles.js';
import { HeaderSection } from './HeaderSection'
import Box from '@material-ui/core/Box'


const Donation = () => {
  const classes = useStyles();

  return (
    <Box className='pageContainer'>
      <Box className='containerDefault'>
        <Container>
          <HeaderSection />
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container>
          <Grid container direction='row'>
            <Grid item xs={12} md={6} className={classes.infoGrid}>
              <Typography variant='body1' className={classes.infoDescription}>
                The Civic Tech Index is being developed by Hack For LA, and is currently taking
                donations through Code For America.
              </Typography>
              <Typography variant='body1' className={classes.infoSteps}>
                1. Please follow this link to the Code For America{' '}
                <Link to='https://www.codeforamerica.org/donate'>donation form</Link>.
              </Typography>
              <Typography variant='body1' className={classes.infoSteps}>
                2. To make a donation to the Civic Tech Index, please select{' '}
                <strong>Hack for LA</strong> under the brigades listed.
              </Typography>
              <Typography variant='h4' className={classes.infoThank}>
                We appreciate your contribution.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                alt='A gif demonstrating the use of the donation form'
                className={classes.infoGif}
                src='./images/CTI-Donate-to-HfLA.gif'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='containerWhite'>
        <Container>
          <BottomCallToAction heading='Want to support in other ways?' />
        </Container>
      </Box>
    </Box>
  );
}

export default Donation;
