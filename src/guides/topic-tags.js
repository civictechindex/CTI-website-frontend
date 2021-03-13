import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';

import TopicTag from '../pages/TagCreator/TopicTag'

const ShowTopicTags = () => {
  return (
    <Container className='containerGray'>
      <Typography variant='h1'>Topic Tags</Typography>
      <Card className='card241'>
        <CardContent>
          <TopicTag label="foo" variant="generated" />
          <TopicTag label="bar" variant="clickable" />
          <TopicTag label="long long long long label" variant="copyandpaste" />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShowTopicTags;
