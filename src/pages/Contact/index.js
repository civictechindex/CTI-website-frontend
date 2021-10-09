import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { GenericHeaderSection } from '../../components/';

const Contact = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/about/contact' },
  ];
  const handlePageHeight = () => {
    window.parent.scrollTo(0, 0);
  };
  return (
    <Box>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='Contact Us'
            breadCrumbLinks={breadCrumbLinks}
          >
            <Typography className='genSubheadTypo'>
              We would love to hear your thoughts or feedback on how we can
              improve your experience with the Civic Tech Index!
            </Typography>
          </GenericHeaderSection>
        </Container>
      </Box>
      <Card>
        <CardMedia
          component='iframe'
          title='googleContactForm'
          src='https://docs.google.com/forms/d/1BiuXPE2iqPbXpF_-5uMDDWsR-aCSu42VKyRsz-PIL5I/viewform?edit_requested=true'
          width='640'
          height='1179'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
          onLoad={handlePageHeight}
        >
          Loading…
        </CardMedia>
      </Card>
    </Box>
  );
};

export default Contact;
