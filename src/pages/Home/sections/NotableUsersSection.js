import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NavButton from '../../../components/NavButton';
import IconButton from '@material-ui/core/IconButton';

const notableUsers = [
  {
    alt: 'Hack for LA',
    link: 'https://www.hackforla.org/',
    src: '/images/hack-for-la.png',
  },
  {
    alt: 'Code for America',
    link: 'https://www.codeforamerica.org/',
    src: '/images/code-for-america.svg',
  },
  {
    alt: 'OpenOakland',
    link: 'https://openoakland.org/',
    src: '/images/open-oakland.svg',
  },
  {
    alt: 'Code for Tulsa',
    link: 'https://codefortulsa.org/',
    src: '/images/code-for-tulsa.png',
  },

  {
    alt: 'Code for Chapel Hill',
    link: 'http://www.codeforchapelhill.com/',
    src: '/images/code-for-chapel-hill.png',
  },
  {
    alt: 'Code for PDX',
    link: 'https://www.meetup.com/Code-for-PDX/',
    src: '/images/code-for-PDX.png',
  },
  {
    alt: 'Code for Buffalo',
    link: 'https://www.codeforbuffalo.org/',
    src: '/images/code-for-buffalo.png',
  },
  {
    alt: 'BetaNYC',
    link: 'https://beta.nyc/',
    src: '/images/betanyc.png',
  },
];

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    '& h1': {
      fontSize: '28px',
    },

    padding: '48px 0 32px 0',
    [theme.breakpoints.down('md')]: {
      '& h1': {
        fontSize: '24px',
      },
      padding: '16px 0 32px 0',
    },
  },
}));

const NotableUsersSection = () => {
  const classes = useStyles();
  const SectionTitle = () => {
    return (
      <Grid item lg={12} md={12} sm={12} className={classes.sectionTitle}>
        <Typography variant='h1' align='center'>
          {' '}
                    See how the Civic Tech Index is used by:
        </Typography>
      </Grid>
    );
  };

  const LogoList = () => {
    const LogoItem = (props) => {
      return (
        <Grid item lg={3} md={3} xs={6} style={{ height: '120px' }}>
          <Grid
            container
            alignItems='center'
            justify='center'
            style={{ height: '100%' }}>
            <IconButton
              href={props.link
              }>
              <img
                style={{ top: '50%' }}
                align='center'
                alt={props.alt}
                src={props.src}
              />
            </IconButton>
          </Grid>
        </Grid>
      );
    };

    return notableUsers.map((image, key) => {
      return (
        <LogoItem
          key={key}
          link={image.link}
          alt={image.alt}
          src={image.src}
        />
      );
    });
  };

  const MoreContributors = () => {
    return (
      <Grid item xs={12} style={{ padding: '30px' }}>
        <div align='center'>
          <NavButton href='/organizations/affiliated' color='primary'>
                        View contributors
          </NavButton>
        </div>
      </Grid>
    );
  };

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      style={{ padding: '64.24px 0 0 0' }}>
      <Grid item xs={1} md={2} lg={1} />
      <Grid item xs={10} md={8} lg={10}>
        <Paper>
          <Grid container justify='center'>
            <SectionTitle />
            <LogoList />
            <MoreContributors />
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={1} md={2} lg={1} />
    </Grid>

  );
};

export default NotableUsersSection;
