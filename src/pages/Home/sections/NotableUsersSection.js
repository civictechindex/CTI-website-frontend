import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavButton from '../../../components/NavButton';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
const notableUsers = [
  { alt: 'Code for All', link: '#', src: '/images/code-for-all.png' },
  { alt: 'Code for America', link: '#', src: '/images/code-for-america.svg' },
  { alt: 'DemocracyLab', link: '#', src: '/images/democracy-lab.svg' },
  { alt: 'Hack for LA', link: '#', src: '/images/hack-for-la.png' },
  { alt: 'OpenOakland', link: '#', src: '/images/open-oakland.svg' },
  { alt: 'Open San Diego', link: '#', src: '/images/open-san-diego.svg' },
  { alt: 'Open Savannah', link: '#', src: '/images/open-savannah.png' },
  { alt: 'Yale OpenLab', link: '#', src: '/images/yale-openlab.svg' },
];

const useStyles = makeStyles((theme) => ({
  sectionTitle:{
    '& h1':{
      fontSize: '28px' ,
    },

    padding:'64px 0 32px 0',
    [theme.breakpoints.down('md')]: {
      '& h1':{
        fontSize: '24px' ,
      },
      padding:'32px 0 32px 0',
    },
  },
}));

const NotableUsersSection = () => {
  const classes = useStyles();
  const SectionTitle = () => {
    return (
      <Grid item lg={12} md={12} sm={12} className={classes.sectionTitle}>
        <Typography  variant='h1' align='center' > See how the Civic Tech Index is used by:</Typography>
      </Grid>
    );
  };

  const LogoList = () => {
    const LogoItem = (props) => {
      return (
        <Grid item  lg ={3} md={3} xs={6} style={{ height: '120px' }}>
          <Grid
            container
            alignItems='center'
            justify='center'
            style={{ height:'100%' }}>
            <a href={props.link}>
              <img
                style={{ top: '50%' }}
                align='center'
                alt={props.alt}
                src={props.src}
              />
            </a>
          </Grid >
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
          <NavButton href='/contributors/affiliated' color='primary'>
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
      <Paper>
        <Grid container justify='center'>
          <SectionTitle />
          <LogoList />
          <MoreContributors />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default NotableUsersSection;
