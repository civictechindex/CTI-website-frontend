import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BottomCallToAction from '../../components/BottomCallToAction';
import useStyles from './styles.js';
import { HeaderSection } from './HeaderSection'
import Box from '@material-ui/core/Box'


const Donation = () => {
  const classes = useStyles();

  return (
    <Box className='pageContainer'>
      <Box className='containerDefault' style={{ minHeight: '200px' }}>
        <Container>
          <HeaderSection />
        </Container>
      </Box>
      <Box className='containerGray' style={{ paddingBottom: '46px' }}>
        <Grid container direction='row' spacing={2} alignItems="stretch">
          <Grid spacing={8} xs={12} sm={5} style={{ paddingTop: '14vw', paddingLeft: '11vw', height: '100%' }}>
            <Typography variant='body1' className={classes.infoDescription}>
              The Civic Tech Index is being developed by Hack For LA,
              and is currently taking donations through Code For America.
            </Typography>
            <Typography variant='body1' className={classes.infoSteps}>
              1. Please follow this link to the Code For America{' '}
              <a href='https://www.codeforamerica.org/donate'>donation form.</a>
            </Typography>
            <Typography variant='body1' className={classes.infoSteps}>
              2. To make a donation to the Civic Tech Index,
                       please select <strong>Hack For LA</strong> under the brigades listed.
            </Typography>
            <Typography variant='h4' className={classes.infoThank}>We appreciate your contribution.</Typography>
          </Grid>
          <Grid item style={{ height: '100%', width: '50%' }} xs={12} sm={5}>
            <img
              alt='A gif demonstrating the use of the donation form'
              className={classes.infoGif} xs={12} md={10}
              src='./images/CTI-Donate-to-HfLA.gif' />
          </Grid>
        </Grid>
      </Box>
      <Box className='containerWhite' style={{ minHeight: '256px' }}>
        <Container className={classes.contactUs}>
          <BottomCallToAction heading='Want to support in other ways?' />
        </Container>
      </Box>
    </Box>

  );
}

export default Donation;
