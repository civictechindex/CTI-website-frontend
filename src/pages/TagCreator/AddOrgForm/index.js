import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Complete from './Complete';

// eslint-disable-next-line max-lines-per-function
const AddOrgForm = React.forwardRef(({ onClose }, ref) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [apiErrors, setApiErrors] = useState({});
  const [city, setCity] = useState('');
  const [country, setCountry] = useState();
  const [facebookUrl, setFacebookUrl] = useState('');
  const [githubTag, setGithubTag] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [meetupUrl, setMeetupUrl] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [parentOrg, setParentOrg] = useState();
  const [parentOrgList, setParentOrgList] = useState([]);
  const [stateProvCo, setStateProvCo] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

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
    if (step === 2) {
      onClose(orgName);
    } else {
      onClose();
    }

    setStep(0);
    setApiErrors({});
    setOrgEmail('');
    setOrgName('');
    setParentOrg('');
    setWebsiteUrl('');
    setGithubUrl('');
    setGithubTag('');
    setFacebookUrl('');
    setTwitterUrl('');
    setMeetupUrl('');
    setCity('');
    setStateProvCo('');
    setCountry('');
  };

  const handleSubmit = async () => {
    const orgProps = {
      name: orgName,
      github_url: githubUrl,
      website_url: websiteUrl,
      organization_email: orgEmail,
      org_tag: githubTag,
    };
    if (parentOrg) { orgProps.parent_organization = parentOrg }
    if (facebookUrl) { orgProps.facebook_url = facebookUrl }
    if (twitterUrl) { orgProps.twitter_url = twitterUrl }
    if (meetupUrl) { orgProps.meetup_url = meetupUrl }
    if (city) { orgProps.city = city }
    if (stateProvCo) { orgProps.state = stateProvCo }
    if (country) { orgProps.country = country }
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/organizations/`, orgProps);
      setStep(2);
    } catch (error) {
      const errors = error.response.data;
      if (errors.name || errors.github_url || errors.website_url || errors.organization_email || errors.org_tag) {
        setStep(0);
      } else {
        setStep(1);
      }
      setApiErrors(errors);
    }
  };

  const renderStep = () => {
    switch (step) {
    case 0:
      return (
        <StepOne
          apiErrors={apiErrors}
          setApiErrors={setApiErrors}
          orgEmail={orgEmail}
          onOrgEmail={setOrgEmail}
          orgName={orgName}
          onOrgName={setOrgName}
          websiteUrl={websiteUrl}
          onWebsiteUrl={setWebsiteUrl}
          githubUrl={githubUrl}
          onGithubUrl={setGithubUrl}
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
          apiErrors={apiErrors}
          setApiErrors={setApiErrors}
          facebookUrl={facebookUrl}
          onFacebookUrl={setFacebookUrl}
          twitterUrl={twitterUrl}
          onTwitterUrl={setTwitterUrl}
          meetupUrl={meetupUrl}
          onMeetupUrl={setMeetupUrl}
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
          apiErrors={apiErrors}
          setApiErrors={setApiErrors}
          orgEmail={orgEmail}
          onOrgEmail={setOrgEmail}
          orgName={orgName}
          onOrgName={setOrgName}
          websiteUrl={websiteUrl}
          onWebsiteUrl={setWebsiteUrl}
          githubUrl={githubUrl}
          onGithubUrl={setGithubUrl}
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
    <Container className={classes.dialogContainer} ref={ref}>
      {renderStep()}
    </Container>
  );
});

AddOrgForm.displayName = "AddOrgForm";

export default AddOrgForm;
