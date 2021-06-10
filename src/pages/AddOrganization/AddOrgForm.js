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
import StepOne from './StepOne';

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
      orgNameErr.isInvalid = 'Please an Organization Name.';
      isValid = false;
    }

    if (websiteURL.indexOf('www.')) {
      websiteURLErr.isInvalid = 'Website address is not valid. Please enter http:// or www....';
      isValid = false;
    }

    if (githubURL.indexOf('github.com/')) {
      githubURLErr.isInvalid = 'Website address is not valid. Please enter http:// or www....';
      isValid = false;
    }

    if (githubTag.length < 5) {
      githubTagErr.isInvalid = 'Please enter your GitHub Organiation tag.';
      isValid = false;
    }

    setOrgEmailErr(orgEmailErr);
    setOrgNameErr(orgNameErr);
    setWebsiteURLErr(websiteURLErr);
    setGithubURLErr(githubURLErr);
    setGithubTagErr(githubTagErr);
    return isValid;
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
      return <StepOne orgEmail={orgEmail} onOrgEmailChange={setOrgEmail} />;
    case 1:
      return <StepTwo />;
    case 2:
      return <Complete />;
  }
};

export default AddOrgForm;
