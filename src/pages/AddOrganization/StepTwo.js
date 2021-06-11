import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CountrySelect from './CountrySelect';

const StepTwo = (props) => {
  return (
    <>
      <Box style={{ justifyContent: 'center' }}>
        <Container style={{ maxWidth: '600px' }}>
          <Grid container>
            <Grid item style={{ textAlign: 'left', width: '50%', padding: '47px 0 0 0' }}>
              <Typography variant='subtitle1'>Social Media and Location</Typography>
            </Grid>
            <Grid item style={{ textAlign: 'right', width: '50%', padding: '47px 0 0 0' }}>
              <Typography variant='subtitle1' style={{ color: '#004364' }}>
                <b>2/2</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction='column'>
            <LinearProgress variant='determinate' color='secondary' value={100} />
            <Typography variant='h5' style={{ color: '#004364', padding: '27px 0 0 0' }}>
              Social Media URL (optional)
            </Typography>
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Facebook URL:
            </Typography>
            <TextField
              placeholder='http://facebook.com/example...'
              name='facebookURL'
              value={props.facebookURL}
              onChange={(event) => {
                props.onFacebookURL(event.target.value);
              }}
            />
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Twitter URL:
            </Typography>
            <TextField
              placeholder='http://twitter.com/example...'
              name='twitterURL'
              value={props.twitterURL}
              onChange={(event) => {
                props.onTwitterURL(event.target.value);
              }}
            />
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              MeetUp URL:
            </Typography>
            <TextField
              placeholder='http://meetup.com/example...'
              name='meetupURL'
              value={props.meetupURL}
              onChange={(event) => {
                props.onMeetupURL(event.target.value);
              }}
            />
            <Typography variant='h5' style={{ color: '#004364', padding: '27px 0 0 0' }}>
              Location
            </Typography>
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              City
            </Typography>
            <TextField
              name='city'
              value={props.city}
              onChange={(event) => {
                props.onCity(event.target.value);
              }}
            />
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              State/Prov./Co.
            </Typography>
            <TextField
              name='stateProvCo'
              value={props.stateProvCo}
              onChange={(event) => {
                props.onStateProvCo(event.target.value);
              }}
            />
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Country:
            </Typography>
            <CountrySelect
              // onChange={handleCountryChange}
              style={{ width: '100%' }}
            />
          </Grid>
          {/* //Buttons */}
          <Grid container justify='center' alignItems='center' style={{ padding: '40px 0 60px 0' }}>
            <Grid item style={{ textAlign: 'center' }}>
              <Button
                style={{ width: '250px', padding: '10px', margin: '12px' }}
                variant='contained'
                color='default'
                // onClick={handlePrev}
              >
                Back
              </Button>
            </Grid>
            <Grid item style={{ textAlign: 'center' }}>
              <Button
                style={{ width: '250px', padding: '10px', margin: '12px' }}
                variant='contained'
                color='secondary'
                onClick={props.onSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default StepTwo;
