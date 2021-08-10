import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { GeneratedTopicTag,CopyPasteTopicTag,ClickableTopicTag }  from '../pages/TagCreator/TopicTag'

const ShowTopicTags = () => {
  return (
    <Container className='containerGray'>
      <Typography variant='h1'>Topic Tags</Typography>
      <Card className='card244'>
        <CardContent>
          <GeneratedTopicTag label='generated-topic' variant='generated' />
          <ClickableTopicTag label='clickable-topic' />
          <CopyPasteTopicTag label='copy-and-paste-topic' variant='copypaste' />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShowTopicTags;
