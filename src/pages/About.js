import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { GetStartedCard, PictureCard, GenericHeaderSection } from '../components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

const About = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
  ];

  const useStyles = makeStyles((theme) => ({
    subHeaderStyle: {
      fontWeight: '700',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        padding: '48px 30px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
        padding: '48px 100px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
        padding: '48px 200px',
      },
    },
    videoStyle: {
      height: 'auto',
      [theme.breakpoints.up('lg')]: {
        height: '440px',
      },
    },
  }));
  const classes = useStyles();
  const VideoSection = () => {
    return (
      <Grid container justify='center'>
        <CardMedia
          className={classes.videoStyle}
          component='video'
          image='/images/CTI V1.mp4'
          title='Overview of CTI'
          controls
        />
      </Grid>
    );
  };

  const pictureMarketingPoints = [
    {
      src: '/images/girlCoding.png',
      alt: 'girl coding on her computer',
      children: 'No coding experience needed to submit your project!',
    },
    {
      src: '/images/groupCoding.png',
      alt: 'group coding',
      children: 'Make your project more visible with GitHub’s open-source communities',
    },
    {
      src: '/images/girlandguyCoding.png',
      alt: 'girl and guy coding',
      children: 'The Index is owned by all who contribute to it',
    },
  ];

  return (
    <Box className='containerDefault'>
      <Box className='boxBackround'>
      <Container className='containerDefault'>
        <GenericHeaderSection
          mainTitle='A movement to index every open source civic tech project on GitHub'
          breadCrumbLinks={breadCrumbLinks}
        >
          <VideoSection />
          <Typography
            variant='h5'
            color='textSecondary'
            className={classes.subHeaderStyle}
          >
            With your help, we can create a continuously updated repository for
            all civic tech enthusiasts to find open source projects to model,
            connect with, and learn from.
          </Typography>
        </GenericHeaderSection>
      </Container>
      </Box>
      <PictureCard
        items={pictureMarketingPoints}
        style={{ padding: '0 115px' }}
      />
      <GetStartedCard
        headerTitle='Ready to get started?'
        buttonText='Tag your Project'
        buttonHref='/join-index'
      />
    </Box>
  );
};

export default About;
