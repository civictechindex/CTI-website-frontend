import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

const Error404 = () => {
  // No breadcrumbs on Figma design

  return (
    <Box className='containerDefault' p={10}>
      <Container maxWidth='sm' >
        <Card className='card241'>
          <CardContent>
            <Typography variant='h1' color='textPrimary'>404 <ErrorOutlineRoundedIcon /> </Typography>
            <Typography display="block" variant='h4' color='textSecondary'>Oops! The page you are looking for has moved or does not exist.</Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Error404;
