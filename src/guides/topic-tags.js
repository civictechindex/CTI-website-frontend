import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import TopicTag from '../pages/TagCreator/TopicTag'

const ShowTopicTags = () => {
  return (
    <Container className='containerGray'>
      <Typography variant='h1'>Topic Tags</Typography>
      <Card className='card244'>
        <CardContent>
          <TopicTag label='generated-topic' variant='generated' />
          <TopicTag label='clickable-topic' />
          <TopicTag label='copy-and-paste-topic' variant='copypaste' />
          <TopicTag label='home-topic' variant='home' />
          <TopicTag label='add-topic' variant='add' />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShowTopicTags;
