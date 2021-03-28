import React from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import DropdownList from './dropdownList';
import SocialSection from './socialSection';
import SubscribeSection from './subscribeSection';

const Footer = () => {
  const classes = useStyles();
  const links = {
    join: [
      { text: 'Join', to: '/' },
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

  return (
    <Box className={classes.containerFooter}>
      <Grid container className={classes.footerContainer}>
        <Grid item xs={1} />
        <Grid container item spacing={4} xs={11} direction='column'>
          <Grid item xs={12}>
            <DropdownList links={links.join} header='Join the Index' />
          </Grid>
          <Grid item xs={12}>
            <Link to='/about'>About</Link>
          </Grid>
          <Grid item xs={12}>
            <DropdownList links={links.contribute} header='Organization' />
          </Grid>
          <Grid item xs={12}>
            <DropdownList links={links.collaborate} header='Radical Collaboration' />
          </Grid>
          <Grid item xs={12}>
            <SocialSection />
          </Grid>
          <Grid container item spacing={6} xs={12}>
            <SubscribeSection />
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.noteContainer}>
          <Typography variant='body1' color='textSecondary'>
            The Civic Tech Index is an open-source project, read more on our <a href='https://github.com/civictechindex'>GitHub</a>.
          </Typography>
          <Typography variant='body1'><a href="/">View Attributions</a></Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer
