import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { GetStartedCard, NavBreadcrumbs, PictureCard, TitleSection } from '../components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from "@material-ui/core/Grid";

const About = () => {
  const crumbs = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
  ];

  const useStyles = makeStyles((theme) => ({
  aboutStyle: {
    textAlign: 'center',
    '& h6': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        fontWeight: '400',
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
        fontWeight: '400',
        color: theme.palette.text.secondary,
      },
    },
  },
}));

  const VideoSection = () => {
    return (
      <Grid
        container
        justify='center'
      >
        <Grid item xs={12} md={10} style={{ padding: '0 16px'}}>
          <CardMedia 
            component='video' 
            image='/images/CTI V1.mp4' 
            title='Overview of CTI' 
            controls 
          />
        </Grid>
      </Grid>
    );
  };

  const MarketingSection = () => {
    const classes = useStyles();
    return (
      <Grid
        container
        justify='center'
        className={classes.aboutStyle}
      >
        <Grid item xs={12} style={{ padding: '0 32px'}}>
          <h6>With your help, we can create a continuously updated repository for all civic tech enthusiasts to find open source projects to model, connect with, and learn from.</h6>
        </Grid>
      </Grid>
    );
  };

  const pictureMarketingPoints = [
    { src: '/images/girlCoding.png', alt: 'girl coding on her computer', children: 'No coding experience needed to submit your project!' },
    { src: '/images/girlandguyCoding.png', alt: 'girl and guy coding', children: 'Make your project more visible with GitHub’s open-source communities' },
    { src: '/images/groupCoding.png', alt: 'group coding', children: 'The Index is owned by all who contribute to it' },
  ];

  return (
    <Box className='containerDefault'>
      <NavBreadcrumbs crumbs={crumbs} />
      <TitleSection>A movement to index every open source civic tech project on GitHub</TitleSection>
      <VideoSection />
      <MarketingSection />
      <PictureCard items={pictureMarketingPoints} />
      <GetStartedCard
        headerTitle='Ready to get started?' 
        buttonText='Tag your Project'
        buttonHref='/tag-generator'
      />
    </Box>
  );
};

export default About;
