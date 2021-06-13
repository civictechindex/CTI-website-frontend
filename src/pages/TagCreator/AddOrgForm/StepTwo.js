import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import CountrySelect from './CountrySelect';

const StepTwo = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.progress}>
        <Typography variant='subtitle1'>Social Media and Location</Typography>
        <Typography variant='subtitle1'><b>2/2</b></Typography>
      </Box>
      <LinearProgress variant='determinate' color='secondary' value={100} />
      <Typography variant='h5' className={classes.heading}>Social Media URL (optional)</Typography>
      <Typography variant='subtitle1' className={classes.label}>Facebook URL:</Typography>
      <TextField
        placeholder='http://facebook.com/example...'
        value={props.facebookURL}
        onChange={(event) => {
          props.onFacebookURL(event.target.value);
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>Twitter URL:</Typography>
      <TextField
        placeholder='http://twitter.com/example...'
        value={props.twitterURL}
        onChange={(event) => {
          props.onTwitterURL(event.target.value);
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>MeetUp URL:</Typography>
      <TextField
        placeholder='http://meetup.com/example...'
        value={props.meetupURL}
        onChange={(event) => {
          props.onMeetupURL(event.target.value);
        }}
      />
      <Typography variant='h5' className={classes.heading}>Location</Typography>
      <Typography variant='subtitle1' className={classes.label}>City:</Typography>
      <TextField
        value={props.city}
        onChange={(event) => {
          props.onCity(event.target.value);
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>State:</Typography>
      <TextField
        value={props.stateProvCo}
        onChange={(event) => {
          props.onStateProvCo(event.target.value);
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>Country:</Typography>
      <CountrySelect onChange={props.onCountryChange} />
      <Box className={classes.buttons}>
        <Button variant='contained' color='default' onClicks={props.onPrev}>Back</Button>
        <Button variant='contained' color='secondary' onClick={props.onSubmit}>Next</Button>
      </Box>
    </>
  );
};

export default StepTwo;
