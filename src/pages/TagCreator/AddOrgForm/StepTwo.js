import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import CountrySelect from './CountrySelect';

const StepTwo = (props) => {
  const classes = useStyles();
  const facebookUrlApiErr = props.apiErrors.facebook_url;
  const twitterUrlApiErr = props.apiErrors.twitter_url;
  const meetupUrlApiErr = props.apiErrors.meetup_url;

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
        placeholder='https://facebook.com/example...'
        error={facebookUrlApiErr}
        helperText={facebookUrlApiErr}
        value={props.facebookUrl}
        onChange={(event) => {
          props.onFacebookUrl(event.target.value);
          props.setApiErrors({ ...props.apiErrors, facebook_url: '' });
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>Twitter URL:</Typography>
      <TextField
        placeholder='https://twitter.com/example...'
        error={twitterUrlApiErr}
        helperText={twitterUrlApiErr}
        value={props.twitterUrl}
        onChange={(event) => {
          props.onTwitterUrl(event.target.value);
          props.setApiErrors({ ...props.apiErrors, twitter_url: '' });
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>MeetUp URL:</Typography>
      <TextField
        placeholder='http://meetup.com/example...'
        error={meetupUrlApiErr}
        helperText={meetupUrlApiErr}
        value={props.meetupUrl}
        onChange={(event) => {
          props.onMeetupUrl(event.target.value);
          props.setApiErrors({ ...props.apiErrors, meetup_url: '' });
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
        <Button variant='contained' color='default' onClick={props.onPrev}>Back</Button>
        <Tooltip
          title='Once your org is submitted, you can return to the Tag Generator and add it to the CTI.'
          aria-label='submit'
        >
          <Button variant='contained' color='secondary' onClick={props.onSubmit}>Submit</Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default StepTwo;
