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
  // // Proceed to next step
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  // // Go Back to previous step
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  // Submit
  const handleSubmit = () => {
    // Add API call here
    setStep((prevStep) => prevStep + 1);
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
          onSubmit={handleSubmit}
        />
      );
    case 2:
      return <Complete />;
  }
};

export default AddOrgForm;
