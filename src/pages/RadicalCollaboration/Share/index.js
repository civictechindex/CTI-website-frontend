import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { GenericHeaderSection } from '../../../components';
import GitHubButton from 'react-github-btn';

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    paddingBottom: theme.spacing(6),
  },
  imageStyle: {
    border: '1px solid',
    borderColor: theme.palette.background.darkGray,
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
    },
  },
  ctiImageStyle: {
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '102px',
      height: '62px',
    },
  },
  ctiSquareStyle: {
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '150px',
    },
  },
  starMediaSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  socialMediaSectionStyle: {
    padding: '99px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '47px 0 72px 0',
    },
  },
  mediaInfoStyle: {
    padding: '112px 0 153px 0 ',
    [theme.breakpoints.down('md')]: {
      padding: '112px 0 77px 0 ',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '112px 0 96px 0 ',
    },
  },
  card: {
    backgroundColor: theme.palette.spectrum.white,
    height: '186px',
    border: '1px solid',
    borderRadius:'4px',
    borderColor: theme.palette.background.darkGray,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardTypo:{
    textAlign:'center',
    width:'218px',
  },
  media: {
    height: '64px',
    width: '64px',
  },
  tweetGrid:{
    paddingTop:'96px',
    paddingBottom:'32px',
  },
  tweetHeading:{
    textAlign: 'center',
    color: theme.palette.spectrum.teal,
  },
}));

const StarMediaSection = () => {
  const classes = useStyles();

  const CardSection = ({ image, title, cardContent }) => {
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography variant='h6' className={classes.cardTypo}>{cardContent}</Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <Grid container item xs={12} spacing={4} className={classes.starMediaSection}>
      <Grid item sm={4}>
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
      <Grid item sm={4}>
        <CardSection
          image='/images/medium.png'
          title='Medium logo'
          cardContent='Mention or write about us on Medium'
        />
      </Grid>
      <Grid item sm={4}>
        <CardSection
          image='/images/mail.png'
          title='Mail logo'
          cardContent='Share new tags with your project admin'
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
      <Grid item>
        <img
          src='/images/CTI-Twitter-latest.png'
          alt='CTI Twitter latest'
          className={classes.imageStyle}
        />
      </Grid>
    </Grid>
  );
};
const SocialMediaSection = () => {
  const classes = useStyles();
  return (
    <Box className='containerGray'>
      <Container>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='column'
          className={classes.socialMediaSectionStyle}
        >
          <Typography
            variant='h3'
            style={{
              color: '#004364',
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
              <img src='/images/insta-logo-variant.png' alt='Instagram logo' />
            </a>
            <a href='https://twitter.com/civictechindex'>
              <img src='/images/twitter-logo-variant.png' alt='Twitter logo' />
            </a>
            <a href='https://www.facebook.com/civictechindex'>
              <img src='/images/fb-logo-variant.png' alt='Facebook logo' />
            </a>
            <a href='https://github.com/civictechindex'>
              <img src='/images/github-logo-variant.png' alt='GitHub logo' />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const MediaInfo = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.mediaInfoStyle}>
        <Grid
          container
          direction='column'
          alignItems='center'
          item
          lg={6}
          sm={12}
          md={12}
          style={{ marginBottom: '32px' }}
        >
          <Box>
            <Typography
              variant='h4'
              style={{ color: '#004364', marginBottom: '32px' }}
            >
              Use our Logo on your Project!
            </Typography>
            <Typography variant='h6' style={{ marginBottom: '16px' }}>
              If you have done the following:
            </Typography>

            <Typography variant='body1' style={{ paddingBottom: '15px' }}>
              • You have listed your project on Civic Tech Index
            </Typography>
            <Typography variant='body1' style={{ paddingBottom: '15px' }}>
              • You have added the topic tag &quot;civictechindex&quot;to your
              project repository
            </Typography>
            <Typography variant='body1' style={{ paddingBottom: '15px' }}>
              • You have developed your own interface to search the Index
            </Typography>
            <Typography variant='body1' style={{ paddingBottom: '15px' }}>
              • In articles or social media posts featuring Civic Tech Index.
            </Typography>
            <Typography variant='body1' style={{ paddingBottom: '15px' }}>
              • For all other uses, please
              <a
                style={{
                  color: '#0D99C6',
                  textDecoration: ' none',
                }}
                href='/contact'
              >
                {' '}
                contact us
              </a>{' '}
              for permission.
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          direction='column'
          alignItems='center'
          item
          lg={6}
          sm={12}
          md={12}
        >
          <CtiImageSection />
          <ButtonSection />
        </Grid>
      </Grid>
    </Container>
  );
};

const CtiImageSection = () => {
  const classes = useStyles();
  return (
    <Grid container justify='space-evenly'>
      <img
        src='/images/Rectangle55.png'
        alt='CTI logo'
        className={classes.ctiImageStyle}
      />
      <img
        src='/images/Rectangle51.png'
        alt='Facebook logo'
        className={classes.ctiSquareStyle}
      />
      <img
        src='/images/Rectangle53.png'
        alt='CTI logo'
        className={classes.ctiImageStyle}
      />
    </Grid>
  );
};

const ButtonSection = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      style={{ marginTop: '48px' }}
    >
      <Button
        href='https://drive.google.com/drive/folders/1EORoPWmALLXJCfHyDXJemYpO5HvnMzPN'
        target='blank'
      >
        Download the CTI Assets Kit
      </Button>

      <Typography variant='body1' style={{ marginTop: '18px' }}>
        (All sizes & formats listed above in a .zip file)
      </Typography>
    </Grid>
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
              padding: '64px 0 47px 0',
              textAlign: 'center',
            }}
          >
            <Typography variant='h3' style={{ color: '#004364' }}>
              Tell others about us!
            </Typography>
            <Typography
              variant='h5'
              style={{
                fontWeight: '400',
                fontSize: '20px',
                marginTop: '8px',
              }}
            >
              Here are some suggested content to share with your networks.
            </Typography>
          </Grid>
          <StarMediaSection />
          <Grid className={classes.tweetGrid}>
            <Typography
              variant='h3'
              className={classes.tweetHeading}
            >
            Latest Updates from the CTI
            </Typography>
          </Grid>
          <SocialMediaPostSection />
        </Container>
        <SocialMediaSection />
      </Box>
      <MediaInfo />
    </Box>
  );
}
