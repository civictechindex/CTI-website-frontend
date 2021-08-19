import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import BottomCallToAction from '../../components/BottomCallToAction';
import PhotoCardDesktop from './PhotoCardDesktop';
import PhotoCardMobile from './PhotoCardMobile';

import { GenericHeaderSection } from '../../components/';
const RadicalCollaboration = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Collaborate with Us', href: '/support' },
  ];
  const Images = [
    {
      src: '/images/dsktp-photo-of-people-standing-near-window-3184427.png',
      alt: 'team high fiving',
      title: 'img-1',
      heading: 'Donate',
      subHeading: 'Every gift helps us continue our work.',
      textBody:
        'Your tax-deductible gift today will help make more open-source solutions easily available for the communities who need it the most.',
      footerText: 'Thank You.',
      buttonText: 'Make a Donation',
      dsktpTxtLn1: 'Your tax-deductible gift today will help make more',
      dsktpTxtLn2: 'open-source solutions easily available for the',
      dsktpTxtLn3: 'communities who need it the most.',
      route: '/donate',
    },
    {
      src: '/images/group-smiling-working.png',
      alt: 'group working',
      title: 'img-2',
      heading: 'Share the CTI',
      subHeading: 'Love the Index? Be an evangelist!',
      textBody:
        ' Help others and their communities discover, share, and benefit from contributed projects on the Index.',
      buttonText: 'Share the Civic Tech Index',
      dsktpTxtLn1: 'Help others and their communities discover, share, and',
      dsktpTxtLn2: 'benefit from contributed projects on the index.',
      route: '/support/share',
    },
    {
      src: '/images/bulletin-board-postits.png',
      alt: 'bulletin board',
      title: 'img-3',
      heading: 'Volunteer with Us',
      subHeading: 'Help us improve the Civic Tech Index',
      textBody:
        'Please complete this application if you would like us to reach out to you directly or find us on our project team page.',
      buttonText: 'Become a Volunteer',
      dsktpTxtLn1: 'Please complete this application if you would like',
      dsktpTxtLn2: 'us to reach out to you directly or find us on our',
      dsktpTxtLn3: 'project team page.',
      route: "https://www.hackforla.org/#about",
    },
    {
      src: '/images/man-and-woman-working.png',
      alt: 'girl and guy coding',
      title: 'img-4',
      heading: 'Need Help?',
      subHeading: "Can't find the answer you're looking for?",
      textBody:
        "We've shared some of our most frequently asked questions to help you out! View our FAQ to find answers or contact us.",
      buttonText: 'View the FAQ',
      dsktpTxtLn1: "We've shared some of our most frequently asked",
      dsktpTxtLn2: 'questions to help you out!',
      dsktpTxtLn3: 'View our FAQ to find answers or contact us.',
      route: '/faq',
    },
  ];
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
          <Hidden mdDown>
            <PhotoCardDesktop items={Images} />
          </Hidden>
          <Hidden lgUp>
            <PhotoCardMobile items={Images} />
          </Hidden>
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

export default withWidth()(RadicalCollaboration);
