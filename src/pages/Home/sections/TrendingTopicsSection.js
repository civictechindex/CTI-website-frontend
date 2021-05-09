import React from 'react';
import { Link } from 'react-router-dom';
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
  trendingContainerStyle: {
    marginTop: '80px',
    paddingBottom: '96px',
  },
}));

const topicData = [
  { detail: 'Covid-19', link: '/projects' },
  { detail: 'food', link: '/projects' },
  { detail: 'justice', link: '/projects' },
  { detail: 'Trending Topic 1', link: '/projects' },
  { detail: 'Trending Topic 2', link: '/projects' },
  { detail: 'Trending Topic 3', link: '/projects' },
];

const TrendingTopicsSection = () => {
  const classes = useStyles();
  const TrendingTopicList = () => {
    return topicData.map((topic, key) => {
      return (
        <TrendingTopicChip key={key}>
          <Link
            to={{
              pathname: topic.link,
              query: { search: topic.detail },
            }}>
            {topic.detail}
          </Link>
        </TrendingTopicChip>
      );
    });
  };

  const TrendingTopicChip = (props) => {
    return (
      <a href={props.href}>
        <Chip label={props.children} className={classes.homeTag} />
      </a>
    );
  };

  return (
    <Grid container className={classes.trendingContainerStyle}>
      <Grid item lg={6}>
        <Typography variant='h3' color='textPrimary' gutterBottom>
                    How are people using the CTI?
        </Typography>
        <Typography variant='h5' color='textSecondary' gutterBottom>
                    Trending Topics:
        </Typography>
        <TrendingTopicList />
      </Grid>
    </Grid>
  );
};

export default TrendingTopicsSection;
