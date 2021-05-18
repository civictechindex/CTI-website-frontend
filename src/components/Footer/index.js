import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

import DropdownList from './dropdownList';
import LinkList from './linkList';
import SocialSection from './socialSection';
import SubscribeSection from './subscribeSection';
import Annotation from './Annotation';

const FooterLarge = ({ links }) => {
  const classes = useStyles();

  return (
    <Box className={classes.containerFooter}>
      <Container className={classes.footerContainer}>
        <LinkList
          links={links.join}
          header='Join the Index'
          route='/tag-generator'
        />
        <LinkList links={links.about} header='About' route='/about' />
        <LinkList
          links={links.contribute}
          header='Organization'
          route='/contributors/all'
        />
        <LinkList
          links={links.collaborate}
          header='Radical Collaboration'
          route='/support'
        />
        <SocialSection size='lg' />
        <SubscribeSection size='lg' />
      </Container>
      <Annotation />
    </Box>
  );
};

const FooterSmall = ({ links }) => {
  const classes = useStyles();

  return (
    <Box className={classes.containerFooter}>
      <Box className={classes.footerPadding}>
        <Grid container className={classes.footerContainer}>
          <Grid container item spacing={4} xs={12} direction='column'>
            <Grid item xs={12}>
              <DropdownList
                links={links.join}
                header='Join the Index'
                route='/tag-generator'
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownList
                links={links.about}
                header='About'
                route='/about'
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownList
                links={links.contribute}
                header='Organization'
                route='/contributors/all'
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownList
                links={links.collaborate}
                header='Radical Collaboration'
                route='/support'
              />
            </Grid>
            <Grid item xs={12}>
              <SocialSection size='sm' />
            </Grid>
            <Grid item xs={12}>
              <SubscribeSection size='sm' />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Annotation />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Footer = () => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const links = {
    about: [{ key: 'about', text: 'Overview', to: '/about' }],
    join: [{ key: 'tag_gen', text: 'Tag Generator', to: '/tag-generator' }],
    contribute: [
      {
        key: 'contrib_all',
        text: 'Index Contributors',
        to: '/contributors/all',
      },
      {
        key: 'contrib_unaff',
        text: 'Unaffiliated',
        to: '/contributors/unaffiliated',
      },
      {
        key: 'contrib_aff',
        text: 'Affiliated',
        to: '/contributors/affiliated',
      },
    ],
    collaborate: [
      { key: 'support', text: 'Collaborate with Us', to: '/support' },
      {
        key: 'add_proj',
        text: 'How to Do It',
        to: '/adding-projects-to-the-index',
      },
      { key: 'donate', text: 'Donate', to: '/donate' },
      {
        key: 'share',
        text: 'Share the CTI',
        to: '/radicalcollaboration/sharethecti',
      },
      {
        key: 'volunteer',
        text: 'Volunteer with Us',
        to: 'https://www.hackforla.org/projects/civic-tech-index',
        external: true,
      },
      { key: 'faq', text: 'FAQ', to: '/radicalcollaboration/faq' },
      { key: 'contact', text: 'Contact Us', to: '/radicalcollaboration/contact' },
    ],
  };

  return largeScreen ? (
    <FooterLarge links={links} />
  ) : (
    <FooterSmall links={links} />
  );
};

export default Footer;
