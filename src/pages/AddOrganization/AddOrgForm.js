import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo';
import LocationMedia from './LocationMedia';
import Complete from './Complete';
import useStyles from './styles.js';

export const AddOrgForm = () => {
    const [step, setStep] = useState(0)
    const [orgEmail, setOrgEmail] = useState()
    const [orgName, setOrgName] = useState()
    const [parentOrg, setParentOrg] = useState()
    const [websiteURL, setWebsiteURL] = useState()
    const [githubURL, setGithubURL] = useState()
    const [githubTag, setGithubTag] = useState()
    const [facebookURL, setFacebookURL] = useState()
    const [twitterURL, setTwitterURL] = useState()
    const [meetupURL, setMeetupURL] = useState()
    const [city, setCity] = useState()
    const [stateProvCo, setStateProvCo] = useState()
    const [country, setCountry] = useState()
    const [orgEmailError, setOrgEmailError] = useState() 
  

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go Back to previous step
  const prevStep = () => {
   setStep(step - 1);
  };

  // Handle fields change
  const handleChange = (e) => {
    this.setState({ [input]: e.target.value });
  };

  // Validate fields
  //   validate = () => {
  //     let orgEmailError = '';

  //     if (!this.state.orgEmail.includes('@')) {
  //       orgEmailError = 'Invalid email entered';
  //     }

  //     if (orgEmailError) {
  //       this.setState({ orgEmailError });
  //       return false;
  //     }

  //     return true;
  //   };


    // const { step } = this.state;
    // const {
    //   orgEmail,
    //   orgName,
    //   parentOrg,
    //   websiteURL,
    //   githubURL,
    //   githubTag,
    //   facebookURL,
    //   twitterURL,
    //   meetupURL,
    //   city,
    //   stateProvCo,
    //   country,
    //   orgEmailError,
    // } = this.state;
    // const values = {
    //   orgEmail,
    //   orgName,
    //   parentOrg,
    //   websiteURL,
    //   githubURL,
    //   githubTag,
    //   facebookURL,
    //   twitterURL,
    //   meetupURL,
    //   city,
    //   stateProvCo,
    //   country,
    //   orgEmailError,
    // };

    const renderStep = () => {
      switch (step) {
      case 0:
        return (
          <ProjectInfo nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        );
      case 1:
        return (
          <LocationMedia
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return ( 
          <Complete />
        );
    }
  }

export default AddOrgForm;
