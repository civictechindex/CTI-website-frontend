import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

const Error404 = () => {

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
