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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const AddOrgForm = () => {
  //State Variables
  const [orgProps, setOrgProps] = useState({});
  const [step, setStep] = useState(0);
  const [orgEmail, setOrgEmail] = useState();
  const [orgName, setOrgName] = useState();
  const [parentOrg, setParentOrg] = useState();
  const [websiteURL, setWebsiteURL] = useState();
  const [githubURL, setGithubURL] = useState();
  const [githubTag, setGithubTag] = useState();
  const [facebookURL, setFacebookURL] = useState();
  const [twitterURL, setTwitterURL] = useState();
  const [meetupURL, setMeetupURL] = useState();
  const [city, setCity] = useState();
  const [stateProvCo, setStateProvCo] = useState();
  const [country, setCountry] = useState();
  // Error messages
  const [orgEmailErr, setOrgEmailErr] = useState({});
  const [orgNameErr, setOrgNameErr] = useState({});
  const [websiteURLErr, setWebsiteURLErr] = useState({});
  const [githubURLErr, setGithubURLErr] = useState({});
  const [githubTagErr, setGithubTagErr] = useState({});
  // Proceed to next step
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  // Go Back to previous step
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  // Handles country input dropdown
  // const handleCountryChange = (country) => {
  //   setOrgProps({ ...orgProps, country: country });
  // };
  // Handles all field input changes
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setOrgProps({ ...orgProps, [name]: value });
  // };

  const onEnter = (event) => {
    event.preventDefault();
    const isValid = formValidation();
  };

  const formValidation = () => {
    const orgEmailErr = {};
    const orgNameErr = {};
    const websiteURLErr = {};
    const githubURLErr = {};
    const githubTagErr = {};
    let isValid = true;

    if (!orgEmail.indexOf('@')) {
      orgEmailErr.isInvalid =
        'Please enter a valid email address. For example, "janedoe@gmail.com".';
      isValid = false;
    }

    if (orgName.length < 5) {
      orgNameErr.isInvalid = "Please your organization's name.";
      isValid = false;
    }

    if (websiteURL.indexOf('www.')) {
      websiteURLErr.isInvalid = 'Please enter a valid url. For example, "http://www.website.com".';
      isValid = false;
    }

    if (githubURL.indexOf('github.com/')) {
      githubURLErr.isInvalid =
        'Please enter a valid url. For example, "http://github.com/organization".';
      isValid = false;
    }

    if (githubTag.length < 5) {
      githubTagErr.isInvalid = "Please enter your organiation's github tag.";
      isValid = false;
    }

    setOrgEmailErr(orgEmailErr);
    return isValid;

    setOrgNameErr(orgNameErr);
    return isValid;

    setWebsiteURLErr(websiteURLErr);
    return isValid;

    setGithubURLErr(githubURLErr);
    return isValid;

    setGithubTagErr(githubTagErr);
    return isValid;
  };

  const StepOne = () => {
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
                name='orgEmail'
                placeholder='Name@example.com'
                value={orgEmail}
                onChange={(event) => {
                  setOrgEmail(event.target.value);
                }}
              />
              {Object.keys(orgEmailErr).map((key) => {
                return <div style={{ color: 'red' }}>{orgEmailErr[key]}</div>;
              })}
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Organization Name:
              </Typography>
              <TextField
                name='orgName'
                value={orgName}
                onChange={(event) => {
                  setOrgName(event.target.value);
                }}
              />
              {Object.keys(orgNameErr).map((key) => {
                return <div style={{ color: 'red' }}>{orgNameErr[key]}</div>;
              })}
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Parent Organization:
              </Typography>
              <TextField />
              <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
                Organization URL
              </Typography>
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Website URL:*
              </Typography>
              <TextField
                placeholder='http://example.com...'
                name='websiteURL'
                value={websiteURL}
                onChange={(event) => {
                  setWebsiteURL(event.target.value);
                }}
              />
              {Object.keys(websiteURLErr).map((key) => {
                return <div style={{ color: 'red' }}>{websiteURLErr[key]}</div>;
              })}
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Github URL:*
              </Typography>
              <TextField
                placeholder='http://github.com/example...'
                name='githubURL'
                value={githubURL}
                onChange={(event) => {
                  setGithubURL(event.target.value);
                }}
              />
              {Object.keys(githubURLErr).map((key) => {
                return <div style={{ color: 'red' }}>{githubURLErr[key]}</div>;
              })}
              <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
                Your GitHub Organization Tags
              </Typography>
              <Typography variant='subtitle2' style={{ fontStyle: 'italic' }}>
                This is the GitHub tag that your organization uses such as <br />
                "code-for-america", "open-oakland" or "hack4la".
              </Typography>
              <TextField
                placeholder='open-oakland'
                name='githubTag'
                value={githubTag}
                onChange={(event) => {
                  setGithubTag(event.target.value);
                }}
              />
              {Object.keys(githubTagErr).map((key) => {
                return <div style={{ color: 'red' }}>{githubTagErr[key]}</div>;
              })}
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
                  onClick={onEnter}
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

  const StepTwo = () => {
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
              <TextField hintText='http://facebook.com/example...' />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Twitter URL:
              </Typography>
              <TextField hintText='Twitter URL' />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                MeetUp URL:
              </Typography>
              <TextField hintText='MeetUp URL' />
              <Typography variant='h5' style={{ color: '#004364', padding: '27px 0 0 0' }}>
                Location
              </Typography>
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                City
              </Typography>
              <TextField hintText='Viletown, USA' />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                State/Prov./Co.
              </Typography>
              <TextField hintText='Mayors Income, TN' />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Country:
              </Typography>
              <CountrySelect
                // onChange={handleCountryChange}
                style={{ width: '100%' }}
              />
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
                  onClick={handlePrev}
                >
                  Back
                </Button>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <Button
                  style={{ width: '250px', padding: '10px', margin: '12px' }}
                  variant='contained'
                  color='secondary'
                  onClick={handleNext}
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

  const Complete = () => {
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
  };

  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <Complete />;
  }
};

export default AddOrgForm;
