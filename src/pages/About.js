import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { GetStartedCard,  PictureCard, GenericHeaderSection } from '../components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from "@material-ui/core/Grid";


const About = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
  ];

  const useStyles = makeStyles((theme) => ({
    subTextStyle: {
      fontWeight:'700' ,
      textAlign:'center',
      padding:'48px 0 16px 0',
      '& h5': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '20px',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '20px',
        },
      },
    },
    videoStyle :{
      height:'360px',
      [theme.breakpoints.up('lg')]: {
        height:'440px',
      },
    },
  }));
  const classes = useStyles();
  const VideoSection = () => {

    return (
      <Grid
        container
        justify='center'
      >
        <CardMedia
          className= {classes.videoStyle}
          component='video'
          image='/images/CTI V1.mp4'
          title='Overview of CTI'
          controls
        />
      </Grid>
    );
  };



  const pictureMarketingPoints = [
    { src: '/images/girlCoding.png', alt: 'girl coding on her computer', children: 'No coding experience needed to submit your project!' },
    { src: '/images/groupCoding.png', alt: 'group coding', children: 'Make your project more visible with GitHub’s open-source communities' },
    { src: '/images/girlandguyCoding.png', alt: 'girl and guy coding', children: 'The Index is owned by all who contribute to it' },
  ];

  return (
    <Box className='containerDefault'>
      <GenericHeaderSection mainTitle ="A movement to index every open source civic tech project on GitHub" breadCrumbLinks ={breadCrumbLinks} lg='872px' md='775px' sm='800px'>
        <VideoSection />
        <Typography variant='h5' color='textSecondary' className={classes.subTextStyle}>With your help, we can create a continuously updated repository for all civic tech enthusiasts to find open source projects to model, connect with, and learn from.</Typography>

      </GenericHeaderSection>

      <PictureCard items={pictureMarketingPoints} style={{ padding: '0 115px' }}/>
      <GetStartedCard
        headerTitle='Ready to get started?'
        buttonText='Tag your Project'
        buttonHref='/tag-generator'
      />
    </Box>
  );
};

export default About;
