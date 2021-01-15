import React from 'react'

import { Chip, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';

const topicData = [
  { detail: "Covid-19", link: "#" },
  { detail: "Trending Topic 1", link: "#" },
  { detail: "Trending Topic 2", link: "#" },
  { detail: "Trending Topic 3", link: "#" },
  { detail: "Trending Topic 4", link: "#" },
  { detail: "Trending Topic 5", link: "#" },
];

const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      root: {
        cursor: 'pointer',
      },
    },
  },
});

const TrendingTopicsSection = () => {
  const TrendingTopicList = () => {
    return (
      topicData.map((topic, key) => {
        return <TrendingTopicChip key={key} href={topic.link}>{topic.detail}</TrendingTopicChip>
      })
    )
  }

  const TrendingTopicChip = (props) => {
    return (
      <ThemeProvider theme={theme}>
        <a href={props.href}>
          <Chip style={{ margin: 5 }} label={props.children} cursor="cursor" />
        </a>
      </ThemeProvider>
    )
  }

  return (
    <Grid container justify="center">
      <Grid item sm={6} style={{ padding: '20px' }}>
        <h2>How are people using the CTI?</h2>
        <h5>Trending Topics:</h5>
        <TrendingTopicList />
      </Grid>
      <Grid item sm={6} style={{ padding: '20px' }}><img width="100%" src="images/mag.svg" alt="Trending topics side"></img></Grid>
    </Grid>
  )
}

export default TrendingTopicsSection
