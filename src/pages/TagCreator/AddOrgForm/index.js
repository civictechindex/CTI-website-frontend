import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Complete from './Complete';

const AddOrgForm = React.forwardRef(({ onClose, onNewOrg }, ref) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [parentOrg, setParentOrg] = useState();
  const [orgEmail, setOrgEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [parentOrgList, setParentOrgList] = useState([]);
  const [websiteURL, setWebsiteURL] = useState('');
  const [githubURL, setGithubURL] = useState('');
  const [githubTag, setGithubTag] = useState('');
  const [facebookURL, setFacebookURL] = useState('');
  const [twitterURL, setTwitterURL] = useState('');
  const [meetupURL, setMeetupURL] = useState('');
  const [city, setCity] = useState('');
  const [stateProvCo, setStateProvCo] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
    .then((response) => {
      setParentOrgList(response.data);
    });
  }, []);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    setStep(0);
    setOrgEmail('');
    setOrgName('');
    setParentOrg('');
    setWebsiteURL('');
    setGithubURL('');
    setGithubTag('');
    setFacebookURL('');
    setTwitterURL('');
    setMeetupURL('');
    setCity('');
    setStateProvCo('');
    setCountry('');
    onClose();
  };

  const handleSubmit = async () => {
    const orgProps = {
      name: orgName,
      github_url: githubURL,
      website_url: websiteURL,
      organization_email: orgEmail,
      org_tag: githubTag,
    };
    if (parentOrg) { orgProps.parent_organization = parentOrg }
    if (facebookURL) { orgProps.facebook_url = facebookURL }
    if (twitterURL) { orgProps.twitter_url = twitterURL }
    if (meetupURL) { orgProps.meetup_url = meetupURL }
    if (city) { orgProps.city = city }
    if (stateProvCo) { orgProps.state = stateProvCo }
    if (country) { orgProps.country = country }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/organizations/`,
        orgProps
      );
      setStep(2);
      onNewOrg(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const renderStep = () => {
    switch (step) {
    case 0:
      return (
        <StepOne
          orgEmail={orgEmail}
          onOrgEmail={setOrgEmail}
          orgName={orgName}
          onOrgName={setOrgName}
          websiteURL={websiteURL}
          onWebsiteURL={setWebsiteURL}
          githubURL={githubURL}
          onGithubURL={setGithubURL}
          githubTag={githubTag}
          onGithubTag={setGithubTag}
          parentOrgList={parentOrgList}
          onParentOrgChange={setParentOrg}
          onCancel={handleClose}
          onNext={handleNext}
        />
      );
    case 1:
      return (
        <StepTwo
          facebookURL={facebookURL}
          onFacebookURL={setFacebookURL}
          twitterURL={twitterURL}
          onTwitterURL={setTwitterURL}
          meetupURL={meetupURL}
          onMeetupURL={setMeetupURL}
          city={city}
          onCity={setCity}
          stateProvCo={stateProvCo}
          onStateProvCo={setStateProvCo}
          onCountryChange={setCountry}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
        />
      );
    case 2:
      return <Complete onClose={handleClose} />;
    default:
      return (
        <StepOne
          orgEmail={orgEmail}
          onOrgEmail={setOrgEmail}
          orgName={orgName}
          onOrgName={setOrgName}
          websiteURL={websiteURL}
          onWebsiteURL={setWebsiteURL}
          githubURL={githubURL}
          onGithubURL={setGithubURL}
          githubTag={githubTag}
          onGithubTag={setGithubTag}
          parentOrgList={parentOrgList}
          onParentOrgChange={setParentOrg}
          onNext={handleNext}
        />
      );
    }
  };

  return (
      <Container className={classes.container} ref={ref}>
        {renderStep()}
      </Container>
  );
});

AddOrgForm.displayName = "AddOrgForm";

export default AddOrgForm;
