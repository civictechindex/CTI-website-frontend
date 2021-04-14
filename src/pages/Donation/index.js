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
    <Box xs={12} sm={6} md={3}>
      <HeaderSection />
      <Container className="containerGray" style={{ paddingBottom: '46px' }}>
        <Grid container spacing={2}>
          <Grid container item direction='column' spacing={8} xs={12} sm={5} >
            <Grid item style={{ paddingTop: '14vw', paddingLeft: '10vw' }}>
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
              <Typography variant='h4' className={classes.infoThank}>We appreciate your contribution.</Typography>
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
        </Grid>
      </Container>
      <Container className={classes.contactUs} >
        <BottomCallToAction heading='Want to support in other ways?' />
      </Container>
    </Box>
  );
}

export default Donation;
