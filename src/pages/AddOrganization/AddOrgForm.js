import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Complete from './Complete';

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

  switch (step) {
    case 0:
      return (
        <StepOne
          orgEmail={orgEmail}
          onOrgEmail={setOrgEmail}
          orgEmailErr={orgEmailErr}
          onOrgEmailErr={setOrgEmailErr}
          orgName={orgName}
          onOrgName={setOrgName}
          websiteURL={websiteURL}
          onWebsiteURL={setWebsiteURL}
          githubTag={githubTag}
          onGithubTag={setGithubTag}
          onEnter={onEnter}
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
        />
      );
    case 2:
      return <Complete />;
  }
};

export default AddOrgForm;
