import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import GenericHeaderSection from './GenericHeaderSection';
import SettingsGearIcon from '../icons/SettingsGearIcon';

const useStyles = makeStyles((theme) => ({
  containerPadding: {
    paddingLeft: '100px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '16px',
    },
  },
  imgStyle: {
    width: '350px',
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '250px',
    },
  },
  typoStyle: {
    fontWeight: '400',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
}));

const HowToUse = () => {
  const classes = useStyles();
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'How to Add Your Project', href: '/join-index/how-to-add' },
  ];
  const StepComp = (props) => {
    return (
      <Grid container>
        <Grid item xs={6} style={{ padding: '8px 0px' }}>
          <Typography variant='h6' className={classes.typoStyle}>
            {props.children}
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ padding: '8px 0px' }}>
          <CardMedia
            className={classes.imgStyle}
            component='img'
            alt={props.alt}
            image={props.src}
            title={props.alt}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Box className='containerGray'>
        <Box className='containerDefault'>
          <Container>
            <GenericHeaderSection
              mainTitle='How to Add Your Project'
              breadCrumbLinks={breadCrumbLinks}
              addPad
            />
          </Container>
        </Box>
        <Container className={classes.containerPadding}>
          <Grid container>
            <Grid item xs={12} style={{ padding: '24px 0px' }}>
              <Typography variant='h6' className={classes.typoStyle}>
                1. Navigate to your project&apos;s repository in another browser
                to add your generated tags.
              </Typography>
            </Grid>
            <StepComp src='/images/step_2.svg' alt='Step 2'>
              2. Under your project’s repository, click{' '}
              <SettingsGearIcon className={classes.svgStyle} /> to paste your
              tags.
            </StepComp>
            <StepComp src='/images/step_3.svg' alt='Step 3'>
              3. Under &quot;Topics&quot;, paste the topic you want to add to
              your repository.
            </StepComp>
            <StepComp src='/images/step_4.svg' alt='Step 4'>
              4. Repeat until you have finished adding all of your tags, then
              click Save Changes.
            </StepComp>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HowToUse;
