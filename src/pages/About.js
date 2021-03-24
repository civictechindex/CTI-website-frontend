import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { GetStartedCard, NavBreadcrumbs, PictureCard, TitleSection } from '../components';

const About = () => {
  const crumbs = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
  ];

  const pictureMarketingPoints = [
    { src: '/images/girlCoding.png', alt: 'girl coding on her computer', children: 'No coding experience needed to submit your project!' },
    { src: '/images/girlandguyCoding.png', alt: 'girl and guy coding', children: 'Make your project more visible with GitHub’s open-source communities' },
    { src: '/images/groupCoding.png', alt: 'group coding', children: 'The Index is owned by all who contribute to it' },
  ];

  const VideoSection = () => {
    return (
      <Container maxWidth='lg'>
        <Card>
          <CardMedia component='video' image='/images/CTI V1.mp4' title='Overview of CTI' controls />
        </Card>
      </Container>
    );
  };

  const MarketingSection = () => {
    return (
      <Container maxWidth='md'>
        <Box py={6}>
          <Typography variant='h6' color='textSecondary' align='center'>
            With your help, we can create a continuously updated repository for all civic tech enthusiasts to find open source projects to model, connect with, and learn from.
          </Typography>
        </Box>
      </Container>
    );
  };

  return (
    <Box className='containerDefault'>
      <Container >
        <NavBreadcrumbs crumbs={crumbs} />
        <TitleSection>A movement to index every open source civic tech project on GitHub</TitleSection>
        <VideoSection />
        <MarketingSection />
        <PictureCard items={pictureMarketingPoints} />
        <GetStartedCard headerTitle='Ready to get started?' buttonText='Tag your Project' buttonHref='/tag-generator' />
      </Container>
    </Box>
  );
};

export default About;
