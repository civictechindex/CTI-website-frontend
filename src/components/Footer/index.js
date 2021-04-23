import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
      <Box className={classes.footerPadding}>
        <Container className={classes.footerContainer}>
          <LinkList links={links.join} header='Join the Index' />
          <LinkList links={links.about} header='About' />
          <LinkList links={links.contribute} header='Organization' />
          <LinkList style={{display:"flex"}} links={links.collaborate} header='Radical Collaboration' />
          <SocialSection size='lg' />
          <SubscribeSection size='lg'/>
        </Container>
        <Annotation />
      </Box>
    </Box>
  );
}

const FooterSmall = ({ links }) => {
  const classes = useStyles();

  return (
    <Box className={classes.containerFooter}>
      <Box className={classes.footerPadding}>
      <Grid container className={classes.footerContainer}>
        <Grid container item spacing={4} xs={12} direction='column'>
          <Grid item xs={12}>
            <DropdownList links={links.join} header='Join the Index' />
          </Grid>
          <Grid item xs={12}>
            <DropdownList links={links.about} header='About' />
          </Grid>
          <Grid item xs={12}>
            <DropdownList links={links.contribute} header='Organization' />
          </Grid>
          <Grid item xs={12}>
            <DropdownList links={links.collaborate} header='Radical Collaboration' />
          </Grid>
          <Grid item xs={12}>
            <SocialSection size='sm' />
          </Grid>
          <Grid container item xs={12}>
            <SubscribeSection size='sm'/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Annotation />
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
}

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const links = {
    about: [
      { text: 'Overview', to: '/about' },
    ],
    join: [
      { text: 'Tag Generator', to: '/tag-generator' },
    ],
    contribute: [
      { text: 'Index Contributors', to: '/contributors/all' },
      { text: 'Unaffiliated', to: '/contributors/unaffiliated' },
      { text: 'Affiliated', to: '/contributors/affiliated' },
    ],
    collaborate: [
      { text: 'How to Do It', to: '/adding-projects-to-the-index' },
      { text: 'Donate', to: '/donate' },
      { text: 'Share the CTI', to: '/' },
      { text: 'Volunteer with Us', to: 'https://www.hackforla.org/projects/civic-tech-index', external: true },
      { text: 'FAQ', to: '/radicalcollaboration/faq' },
    ],
  };

  return matches ? <FooterLarge links={links} /> : <FooterSmall links={links} />;
};

export default Footer
