import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  homeTag: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    padding: '0 4px',
    '&.MuiChip-outlined': {
      borderColor: theme.palette.outline.gray,
    },
    [theme.breakpoints.down('md')]: {
      height: '36px',
    },
    [theme.breakpoints.up('md')]: {
      height: '42px',
    },
  },
}));

const topicData = [
  { detail: "Covid-19", link: "#" },
  { detail: "Trending Topic 1", link: "#" },
  { detail: "Trending Topic 2", link: "#" },
  { detail: "Trending Topic 3", link: "#" },
  { detail: "Trending Topic 4", link: "#" },
  { detail: "Trending Topic 5", link: "#" },
];

const TrendingTopicsSection = () => {
  const TrendingTopicList = () => {
    return (
      topicData.map((topic, key) => {
        return <TrendingTopicChip key={key} href={topic.link}>{topic.detail}</TrendingTopicChip>
      })
    )
  }

  const TrendingTopicChip = (props) => {
    const classes = useStyles();
    return (
      <a href={props.href}>
        <Chip
          label={props.children}
          className = {classes.homeTag}
        />
      </a>
    );
  }

  return (
    <Grid container>
      <Grid item xs={false} md={1} />
      <Grid item xs={6} md={5}>
        <Typography variant='h3' color='textPrimary' gutterBottom>
          How are people using the CTI?
        </Typography>
        <Typography variant='h5' color='textSecondary' gutterBottom>
          Trending Topics:
        </Typography>
        <TrendingTopicList />
      </Grid>
      <Grid item xs={6} md={5}>
        <img width='100%' src='images/mag.svg' alt='Trending topics side graphic'></img>
      </Grid>
      <Grid item xs={false} md={1} />
    </Grid>
  );
}

export default TrendingTopicsSection
