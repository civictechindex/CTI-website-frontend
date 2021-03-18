import React, { useState } from 'react';
import axios from 'axios';
import { Box,Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NavBreadcrumbs from '../../components/NavBreadcrumbs'
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import TopicTag from './TopicTag';
import orgs from './orgs.json';
import { TitleSection } from '../../components'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';


const TopicTags = ({ topicNames }) => {
  console.log(topicNames)
  const topicArray = topicNames || []
  return topicArray.map((name, key) => <TopicTag key={key} label={name} variant='generated' />);
}

const TopicTagSection = ({ names, tagsToAdd,orgName,repositoryUrl,repositoryName }) => {
  console.log(names)
  console.log(tagsToAdd)
  return (
    <>
      <Grid container direction="row" alignItems="center" spacing={3}>
        <Grid item>
          <Typography variant='body1'>Affliated Organization:</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h3'>{orgName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' color='LIGHT_BLUE'>
            <Link >change</Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" spacing={3}>
        <Grid item>
          <Typography variant='body1'>Project Repository URL:</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>{repositoryUrl}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            <Link>change</Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography variant='body1'>Current topic tags on {repositoryName}:</Typography>
      </Grid>
      <Grid data-cy='current-tags'>
        <TopicTags topicNames={names} />
      </Grid>
      <Grid>
        <Typography variant='body1'>Do you want to add more tags specific to your project&apos;s subject area to increase visibility?</Typography>
      </Grid>
    </>
  )
}

export default TopicTagSection;
