import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { GetStartedCard, NavButton, TitleSection } from '../../components';
import NotableUsersSection from './sections/NotableUsersSection';
import TrendingTopicsSection from './sections/TrendingTopicsSection';

const useStyles = makeStyles((theme) => ({
  marketingPointContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    color: 'white',
    fontSize: '18px',
    textAlign: 'center',
    paddingTop: '8px',
    width: '1008px',
    height: '120px',
    '& p': {
      width: '33.3%',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      height: '161.5px',
      marginBottom: '29.42px',
      '& p': {
        width: '80%',
      },
      '& br': {
        display: 'none',
      },
    },
  },
  btnGroupsContainerStyle: {
    display: 'flex',
    width: '392px',
    justifyContent: 'space-between',
  },
}));

const MarketingSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.marketingPointContainerStyle}>
      <p>Requires no coding</p>
      <p>
                Make your project more <br /> visible with GitHub’s open-source
                communities
      </p>
      <p>
                The Index is owned by <br />
                all who use it
      </p>
    </div>
  );
};

const CallToActionSection = () => {
  const classes = useStyles();
  return (
    <Grid container style={{ paddingTop: '35px' }} justify='center'>
      <div className={classes.btnGroupsContainerStyle}>
        <NavButton href='/tag-generator' color='primary'>
                    Tag your project
        </NavButton>
        <NavButton href='/about' variant='outlined'>
                    Learn more
        </NavButton>
      </div>
    </Grid>
  );
};

const Home = () => {
  return (
    <Box className='boxBackground'>
      <div className='containerWorld'>
        <Container>
          <TitleSection>
                        Join a worldwide movement to catalog every open source
                        civic tech project.
          </TitleSection>
          <MarketingSection />
          <CallToActionSection />
          <NotableUsersSection />
          <TrendingTopicsSection />
        </Container>
      </div>
      <GetStartedCard
        headerTitle='Ready to get started?'
        buttonText='Tag your Project'
        buttonHref='/tag-generator'
      />
    </Box>
  );
};

export default Home;
