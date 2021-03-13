import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import { TitleSection } from '../components';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

const Error404 = () => {
  // No breadcrumbs on Figma design

  return (
    <Box className='containerDefault'>
      <Container maxWidth='lg' >
        <Card className='card244'>
          <CardContent>
            <TitleSection>404 <ErrorOutlineRoundedIcon /></TitleSection>
            <Typography variant='h3'>Oops! The page you are looking for has moved or does not exist.</Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Error404;
