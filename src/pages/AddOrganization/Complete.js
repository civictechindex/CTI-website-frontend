import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export class Complete extends Component {
  render() {
    return (
      <>
        <Box style={{ justifyContent: 'center' }}>
          <Container style={{ maxWidth: '600px' }}>
            <Grid container>
              <Grid item style={{ textAlign: 'right', width: '100%', padding: '47px 0 0 0' }}>
                <Typography variant='subtitle1'>
                  <b>Complete!</b>
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction='column' style={{ textAlign: 'center' }}>
              <LinearProgress variant='determinate' color='secondary' value={100} />
              <Grid item>
                <CheckCircleIcon
                  color='#C4C4C4'
                  style={{ fontSize: '72px', margin: '100px 0 0 0' }}
                />
              </Grid>
              <Typography variant='h1' style={{ color: '#004364', fontSize: '46px' }}>
                You're all set!
              </Typography>
              <Typography variant='h1' style={{ color: '#004364', fontSize: '46px' }}>
                Thanks for contributing.
              </Typography>
            </Grid>
            <Grid
              container
              justify='center'
              alignItems='center'
              style={{ padding: '40px 0 60px 0' }}
            >
              <Grid item style={{ textAlign: 'center' }}>
                <Button
                  href='/tag-generator'
                  style={{ width: '270px', padding: '10px', margin: '12px' }}
                  variant='outlined'
                  color='inherit'
                >
                  <Typography variant='body2' style={{ color: 'black' }}>
                    Return to Tag Generator
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}

export default Complete;
