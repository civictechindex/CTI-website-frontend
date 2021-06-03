import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import CountrySelect from './CountrySelect';

export class LocationMedia extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, handleCountryChange } = this.props;
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
                hintText='http://facebook.com/example...'
                onChange={handleChange('facebookURL')}
                defaultValue={values.facebookURL}
              />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Twitter URL:
              </Typography>
              <TextField
                hintText='Twitter URL'
                onChange={handleChange('twitterURL')}
                defaultValue={values.twitterURL}
              />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                MeetUp URL:
              </Typography>
              <TextField
                hintText='MeetUp URL'
                onChange={handleChange('meetupURL')}
                defaultValue={values.meetupURL}
              />
              <Typography variant='h5' style={{ color: '#004364', padding: '27px 0 0 0' }}>
                Location
              </Typography>
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                City
              </Typography>
              <TextField
                hintText='Viletown, USA'
                onChange={handleChange('city')}
                defaultValue={values.city}
              />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                State/Prov./Co.
              </Typography>
              <TextField
                hintText='Mayors Income, TN'
                onChange={handleChange('stateProvCo')}
                defaultValue={values.stateProvCo}
              />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Country:
              </Typography>
              <CountrySelect style={{ width: '100%' }} onChange={handleCountryChange} />
            </Grid>
            {/* //Buttons */}
            <Grid
              container
              justify='center'
              alignItems='center'
              style={{ padding: '40px 0 60px 0' }}
            >
              <Grid item style={{ textAlign: 'center' }}>
                <Button
                  style={{ width: '250px', padding: '10px', margin: '12px' }}
                  variant='contained'
                  color='default'
                  onClick={this.previous}
                >
                  Back
                </Button>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <Button
                  style={{ width: '250px', padding: '10px', margin: '12px' }}
                  variant='contained'
                  color='secondary'
                  onClick={this.continue}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}

export default LocationMedia;
