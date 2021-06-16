import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import ParentSelect from './ParentSelect';

const StepOne = (props) => {
  const classes = useStyles();
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
      <Box className={classes.progress}>
        <Typography variant='subtitle1'>Project Information</Typography>
        <Typography variant='subtitle1'><b>1</b>/2</Typography>
      </Box>
      <LinearProgress variant='determinate' color='secondary' value={50} />
      <Typography variant='h5' className={classes.heading}>Organization Detail</Typography>
      <Typography variant='subtitle1' className={classes.label}>Organization Email:</Typography>
      <TextField
        type='email'
        placeholder='Name@example.com'
        value={props.orgEmail}
        onChange={(event) => {
          props.onOrgEmail(event.target.value);
        }}
      />
      <Typography color='error'>{orgEmailErr}</Typography>
      <Typography variant='subtitle1' className={classes.label}>Organization Name:</Typography>
      <TextField
        value={props.orgName}
        onChange={(event) => {
          props.onOrgName(event.target.value);
        }}
      />
      <Typography color='error'>{orgNameErr}</Typography>
      <Typography variant='subtitle1' className={classes.label}>Parent Organization ID:</Typography>
      <ParentSelect orgList={props.parentOrgList} onChange={props.onParentOrgChange}/>
      <Typography variant='h5' className={classes.heading}>Organization URL</Typography>
      <Typography variant='subtitle1' className={classes.label}>Website URL:*</Typography>
      <TextField
        placeholder='http://example.com...'
        value={props.websiteURL}
        onChange={(event) => {
          props.onWebsiteURL(event.target.value);
        }}
      />
      <Typography color='error'>{websiteURLErr}</Typography>
      <Typography variant='subtitle1' className={classes.label}>Github URL:*</Typography>
      <TextField
        placeholder='https://github.com/example...'
        value={props.githubURL}
        onChange={(event) => {
          props.onGithubURL(event.target.value);
        }}
      />
      <Typography color='error'>{githubURLErr}</Typography>
      <Typography variant='h5' className={classes.heading}>Your GitHub Organization Tags</Typography>
      <Typography variant='subtitle2' className={classes.info}>
        This is the GitHub tag that your organization uses such as <br />
        "code-for-america", "open-oakland" or "hack4la".
      </Typography>
      <TextField
        placeholder='open-oakland'
        value={props.githubTag}
        onChange={(event) => {
          props.onGithubTag(event.target.value);
        }}
      />
      <Typography color='error'>{githubTagErr}</Typography>
      <Box className={classes.buttons}>
        <Button variant='contained' color='default' onClick={props.onCancel}>Cancel</Button>
        <Button variant='contained' color='secondary' onClick={formValidation}>Next</Button>
      </Box>
    </>
  );
};

export default StepOne;
