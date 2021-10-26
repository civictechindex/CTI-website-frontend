/* eslint-disable max-lines-per-function */
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '../../components/common/Link';
import BottomCallToAction from '../../components/BottomCallToAction';
import { GenericHeaderSection } from '../../components/';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LeftTextRightImage from './LeftTextRightImage';
import RightTextLeftImage from './RightTextLeftImage';

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '28px',
    },
  },
}));

const Collaborate = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Collaborate with Us', href: '/support/collaborate' },
  ];
  const classes = useStyles();
  return (
    <Box className='pageContainer'>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='Your help goes a long way'
            breadCrumbLinks={breadCrumbLinks}
          />
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container>
          <Grid container item className={classes.LinkText} xs={12} spacing={4}>
            <LeftTextRightImage
              mainHeading='Donate'
              subHeading='Every gift helps us continue our work.'
              description='Your tax-deductible gift today will help make more open-source solutions easily available for the
              communities who need it the most. Thank You'
              hasExternalNav={false}
              buttonHref='/donate'
              buttonText='Make a Donation'
              imageSrc='/images/Donate-to-Us.png'
            />
            <RightTextLeftImage
              imageSrc='/images/Evangelize-Us.png'
              mainHeading='Share the CTI'
              subHeading='Love the Index? Be an evangelist!'
              description='Help others and their communities discover, share and benefit from contributed projects on the index.'
              hasExternalNav={false}
              buttonHref='/support/share'
              buttonText='Share the Civic Tech Index'
            />
            <LeftTextRightImage
              mainHeading='Volunteer With Us'
              subHeading='Help us improve the Civic Tech Index.'
              description={[
                'If you would like to volunteer for our organization please visit this ',
                <Link
                  key='join'
                  to='https://www.hackforla.org/join'
                  target='_blank'
                >
                  page.
                </Link>,
              ]}
              hasExternalNav={true}
              buttonHref='https://www.hackforla.org/join'
              buttonText='Become a Volunteer'
              imageSrc='/images/Volunteer-With-Us.png'
            />
            <RightTextLeftImage
              imageSrc='/images/FAQ.png'
              mainHeading='Need Help?'
              subHeading="Can't find the answer youre looking for?"
              description={[
                `We've shared some of our most frequently asked questions to help you out!  View our `,
                <Link key='faq' to='/faq'>
                  FAQ
                </Link>,
                ' to find answers or ',
                <Link key='contact' to='/contact'>
                  contact us.
                </Link>,
              ]}
              hasExternalNav={false}
              buttonHref='/faq'
              buttonText='View the FAQ'
            />
          </Grid>
        </Container>
      </Box>
      <Box className='containerWhite'>
        <Container>
          <BottomCallToAction
            heading='Want to support in other ways?'
            buttonHref='/contact'
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Collaborate;
