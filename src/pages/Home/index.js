import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { GetStartedCard, NavButton, TitleSection } from '../../components';
import NotableUsersSection from './sections/NotableUsersSection';
import TrendingTopicsSection from './sections/TrendingTopicsSection';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  marketingPointContainerStyle: {
    fontSize: '18px',
    paddingTop: '8px',
    '& p': {
      width: '29.3%',
    },
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      height: '161.5px',
      marginBottom: '29.42px',
      justifyContent: 'space-between',
      '& p': {
        width: '80%',
      },
      '& br': {
        display: 'none',
      },
    },
  },
  localTitleSectionStyle: {
    paddingTop: '5%',
  },
  localTitleStyle:{
    color: theme.palette.warning.main,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '55px',
  },
}));

const MarketingSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      className={classes.marketingPointContainerStyle}
    >
      <Typography variant='body1' color='textSecondary'>
        Requires no coding
      </Typography>
      <Typography variant='body1' color='textSecondary'>
        {' '}
        Make your project more <br /> visible with GitHub’s open-source <br />
        communities
      </Typography>
      <Typography variant='body1' color='textSecondary'>
        {' '}
        The Index is owned by <br />
        all who use it
      </Typography>
    </Grid>
  );
};

const CallToActionSection = () => {
  return (
    <Grid container style={{ paddingTop: '35px' }} justify='center'>
      <Grid container justify='space-between' style={{ width: '392px' }}>
        <NavButton href='/join-index' color='primary'>
                    Tag your project
        </NavButton>
        <NavButton href='/about' variant='outlined'>
          Learn more
        </NavButton>
      </Grid>
    </Grid>
  );
};

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className='boxBackground'>
        <div className='containerWorld'>
          <Container disableGutters='true'>
            <Box component='div'>
              <Grid container
                alignItems='center'
                justify='center'
                className={classes.localTitleSectionStyle}>
                <Grid item xs={10} md={8} lg={10}>
                  <Typography variant='h1' className={classes.localTitleStyle}>
                    Join a worldwide movement to catalog every open source civic tech
                    project.
                  </Typography>
                  {/* <TitleSection className={classes.localTitleStyle}>
                            Join a worldwide movement to catalog every open
                            source civic tech project.
                  </TitleSection> */}
                </Grid>
              </Grid>
            </Box>
            <MarketingSection />
            <CallToActionSection />
            <NotableUsersSection />
            <TrendingTopicsSection />
          </Container>
        </div>
        <GetStartedCard
          headerTitle='Ready to get started?'
          buttonText='Tag your Project'
          buttonHref='/join-index'
        />
      </Box>
    </>
  );
};
Home.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Home);
