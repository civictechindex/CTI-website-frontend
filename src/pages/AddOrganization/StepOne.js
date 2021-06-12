import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ParentSelect from './ParentSelect';

const StepOne = (props) => {
  const [orgEmailErr, setOrgEmailErr] = useState('');
  const [orgNameErr, setOrgNameErr] = useState('');
  const [websiteURLErr, setWebsiteURLErr] = useState('');
  const [githubURLErr, setGithubURLErr] = useState('');
  const [githubTagErr, setGithubTagErr] = useState('');
  const formValidation = () => {
    let isValid = true;
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(props.orgEmail)) {
      isValid = false;
      setOrgEmailErr('Please enter a valid email address. For example, "janedoe@gmail.com".');
    } else {
      setOrgEmailErr('');
    }
    if (!props.orgName) {
      isValid = false;
      setOrgNameErr('Please enter an Organization Name.');
    } else {
      setOrgNameErr('');
    }
    re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (!re.test(props.websiteURL)) {
      isValid = false;
      setWebsiteURLErr('Website address is not valid. Please enter http(s)://... or www...');
    } else {
      setWebsiteURLErr('');
    }
    re = /^(?:https:\/\/)?(?:www\.)?github.com\/[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (!re.test(props.githubURL)) {
      isValid = false;
      setGithubURLErr('Github address is not valid. Please enter https://github.com/... or www.github.com/...');
    } else {
      setGithubURLErr('');
    }
    if (!props.githubTag) {
      isValid = false;
      setGithubTagErr('Please enter your GitHub Organiation tag.');
    } else {
      setGithubTagErr('');
    }
    if (isValid) {
      props.onNext();
    }
  };

  return (
    <>
      <Box style={{ justifyContent: 'center' }}>
        <Container style={{ maxWidth: '600px' }}>
          <Grid container>
            <Grid item style={{ textAlign: 'left', width: '50%', padding: '47px 0 0 0' }}>
              <Typography variant='subtitle1'>Project Information</Typography>
            </Grid>
            <Grid item style={{ textAlign: 'right', width: '50%', padding: '47px 0 0 0' }}>
              <Typography variant='subtitle1' style={{ color: '#004364' }}>
                <b>1</b>/2
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction='column'>
            <LinearProgress variant='determinate' color='secondary' value={50} />
            <Typography variant='h5' style={{ color: '#004364', padding: '27px 0 0 0' }}>
              Organization Detail
            </Typography>
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Organization Email
            </Typography>
            <TextField
              type='email'
              placeholder='Name@example.com'
              name='orgEmail'
              value={props.orgEmail}
              onChange={(event) => {
                props.onOrgEmail(event.target.value);
              }}
            />
            {orgEmailErr && <Typography style={{ color: 'red' }}>{orgEmailErr}</Typography>}
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Organization Name:
            </Typography>
            <TextField
              name='orgName'
              value={props.orgName}
              onChange={(event) => {
                props.onOrgName(event.target.value);
              }}
            />
            {orgNameErr && <Typography style={{ color: 'red' }}>{orgNameErr}</Typography>}
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Parent Organization ID:
            </Typography>
            <ParentSelect
              orgList={props.parentOrgList}
              onChange={props.onParentOrgChange}
              style={{ width: '100%' }}
            />
            <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
              Organization URL
            </Typography>
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Website URL:*
            </Typography>
            <TextField
              placeholder='http://example.com...'
              name='websiteURL'
              value={props.websiteURL}
              onChange={(event) => {
                props.onWebsiteURL(event.target.value);
              }}
            />
            {websiteURLErr && <Typography style={{ color: 'red' }}>{websiteURLErr}</Typography>}
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Github URL:*
            </Typography>
            <TextField
              placeholder='http://github.com/example...'
              name='githubURL'
              value={props.githubURL}
              onChange={(event) => {
                props.onGithubURL(event.target.value);
              }}
            />
            {githubURLErr && <Typography style={{ color: 'red' }}>{githubURLErr}</Typography>}
            <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
              Your GitHub Organization Tags
            </Typography>
            <Typography variant='subtitle2' style={{ fontStyle: 'italic' }}>
              This is the GitHub tag that your organization uses such as <br />
              "code-for-america", "open-oakland" or "hack4la".
            </Typography>
            <TextField
              name='githubTag'
              placeholder='open-oakland'
              value={props.githubTag}
              onChange={(event) => {
                props.onGithubTag(event.target.value);
              }}
            />
            {githubTagErr && <Typography style={{ color: 'red' }}>{githubTagErr}</Typography>}
          </Grid>
          {/* //Buttons */}
          <Grid container justify='center' alignItems='center' style={{ padding: '40px 0 60px 0' }}>
            <Grid item style={{ textAlign: 'center' }}>
              <Button
                style={{ width: '250px', padding: '10px', margin: '12px' }}
                variant='contained'
                color='default'
                href='/tag-generator'
              >
                Cancel
              </Button>
            </Grid>
            <Grid item style={{ textAlign: 'center' }}>
              <Button
                style={{ width: '250px', padding: '10px', margin: '12px' }}
                variant='contained'
                color='secondary'
                onClick={formValidation}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default StepOne;
