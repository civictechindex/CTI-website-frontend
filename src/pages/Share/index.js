import React from 'react';
import useStyles from './styles.js';
import MediaInfo from './MediaInfo.js';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GenericHeaderSection } from '../../components';
import GitHubButton from 'react-github-btn';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const StarMediaSection = () => {
  const classes = useStyles();

  const CardSection = ({ image, title, cardContent, link = '' }) => {
    return (
      <Card className={classes.card}>
        <CardActionArea
          className={`${classes.link} ${classes.media}`}
          href={link}
          target='_blank'
        >
          <CardMedia className={classes.media} image={image} title={title} />
        </CardActionArea>
        <CardContent>
          <Typography variant='h6' className={classes.cardTypo}>
            {cardContent}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <Grid
      container
      item
      xs={12}
      spacing={4}
      className={classes.starMediaSection}
    >
      <Grid item md={4}>
        <Card variant='outlined' className={classes.card}>
          <CardActions>
            <GitHubButton
              href='https://github.com/civictechindex/CTI-website-frontend'
              data-icon='octicon-star'
              data-size='large'
              data-show-count='true'
              aria-label='Star civictechindex/CTI-website-frontend on GitHub'
            >
              Star
            </GitHubButton>
          </CardActions>
          <CardContent>
            <Typography variant='h6' className={classes.cardTypo}>
              Don’t forget to star our repository
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4}>
        <CardSection
          image='/images/medium.png'
          title='Medium logo'
          cardContent='Mention or write about us on Medium'
          link='https://medium.com/new-story'
        />
      </Grid>
    </Grid>
  );
};
const SocialMediaPostSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      style={{ marginTop: '24px' }}
    >
      <Grid className={classes.twitterFeedStyle}>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='CivicTechIndex'
          options={{ height: 640 }}
        />
      </Grid>
    </Grid>
  );
};
const SocialMediaSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='column'
          className={classes.socialMediaSectionStyle}
        >
          <Typography
            variant='h4'
            className={classes.sectionHeadTypography}
            style={{
              marginBottom: '24px',
            }}
          >
            Follow us on Social Media
          </Typography>
          <Typography
            variant='h6'
            style={{
              marginBottom: '48px',
            }}
          >
            #Civictechindex
          </Typography>
          <Grid
            container
            alignItems='center'
            justify='space-between'
            style={{ maxWidth: '576px' }}
          >
            <a href='https://www.instagram.com/civictechindex'>
              <img src='/images/share-insta-logo.svg' alt='instagram logo' />
            </a>
            <a href='https://twitter.com/civictechindex'>
              <img src='/images/share-twitter-logo.svg' alt='twitter logo' />
            </a>
            <a href='https://www.facebook.com/civictechindex'>
              <img src='/images/share-fb-logo.svg' alt='facebook logo' />
            </a>
            <a href='https://github.com/civictechindex'>
              <img src='/images/share-github-logo.svg' alt='github logo' />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default function ShareTheCti() {
  const classes = useStyles();
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Share the CTI', href: '/support/share' },
  ];

  return (
    <Box>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='Share the CTI'
            breadCrumbLinks={breadCrumbLinks}
          />
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container className={classes.containerStyle}>
          <Grid
            container
            alignItems='center'
            justify='center'
            direction='column'
            style={{
              padding: '0',
              textAlign: 'center',
            }}
          >
            <Typography variant='h4' className={classes.sectionHeadTypography}>
              Tell others about us!
            </Typography>
            <Typography
              variant='h6'
              style={{
                margin: '8px 0 32px',
              }}
            >
              Here are some suggested content to share with your networks.
            </Typography>
            <StarMediaSection />
          </Grid>
          <Grid className={classes.tweetGrid}>
            <Typography variant='h4' className={classes.sectionHeadTypography}>
              Latest Updates from the CTI
            </Typography>
            <SocialMediaPostSection />
          </Grid>
        </Container>
        <SocialMediaSection />
      </Box>
      <MediaInfo />
    </Box>
  );
}
