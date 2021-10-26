import React from 'react';
import useStyles from './styles.js';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '../../components/common/Link';

const CtiLogoSection = () => {
  const classes = useStyles();
  const logoBWUrl = '/images/OneColor_CTI_Logo.svg';
  const logoColorUrl = '/images/FullColor_CTI_Logo.svg';
  return (
    <Container className={classes.logoContainer}>
      <img className={classes.logoBW} src={logoBWUrl} alt='CTI logo' />
      <img
        className={classes.logoColor}
        src={logoColorUrl}
        alt='CTI logo color'
      />
    </Container>
  );
};

const ButtonSection = () => {
  const assetsKitUrl =
    'https://drive.google.com/drive/folders/1EORoPWmALLXJCfHyDXJemYpO5HvnMzPN';
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      style={{ marginTop: '40px' }}
    >
      <Button href={assetsKitUrl} target='_blank'>
        Download the CTI Assets Kit
      </Button>
      <Typography variant='body1' style={{ marginTop: '18px' }}>
        (All sizes & formats listed above in a .zip file)
      </Typography>
    </Grid>
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
          justify='center'
          item
          lg={6}
          sm={12}
          md={12}
        >
          <Box>
            <Typography
              variant='h4'
              className={classes.sectionHeadTypography}
              style={{ textAlign: 'left', marginBottom: '32px' }}
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
              • You have added the topic tag &quot;civictechindex&quot; to your
              project repository
            </Typography>
            <Typography variant='body1' style={{ paddingBottom: '15px' }}>
              • You have developed your own interface to search the Index
            </Typography>
            <Typography variant='body1' style={{ paddingBottom: '15px' }}>
              • In articles or social media posts featuring Civic Tech Index
            </Typography>
            <Typography
              variant='body1'
              style={{ paddingBottom: '40px' }}
              className={classes.contactLinkStyle}
            >
              • For all other uses, please <Link to='/contact'>contact us</Link>{' '}
              for permission
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
          <CtiLogoSection />
          <ButtonSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MediaInfo;
