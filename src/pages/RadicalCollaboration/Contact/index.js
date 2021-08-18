import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { GenericHeaderSection } from '../../../components/';

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    color: theme.palette.text.secondary,
    maxWidth: '1150px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 32px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 100px',
    },
    '& h6': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        fontWeight: '700',
        margin: '0px 0px 71px 0px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
        fontWeight: '700',
        margin: '0px 0px 86px 0px',
      },
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Contact', href: '/about/contact' },
  ];

  return (
    <Box>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='Contact Us'
            breadCrumbLinks={breadCrumbLinks}
          >
            <Typography variant='h6' className={classes.headerStyle}>
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
          src='https://docs.google.com/forms/d/e/1FAIpQLSeTVA3JJdzS1Hftq5CmpGVYcn60KRXqu2ajM85NgF2vxEgghg/viewform?embedded=true'
          width='640'
          height='1179'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
        >
          Loading…
        </CardMedia>
      </Card>
    </Box>
  );
};

export default Contact;
