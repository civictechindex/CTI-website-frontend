import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import LocationMedia from './LocationMedia';
import Complete from './Complete';
import useStyles from './styles.js';

export class AddOrgForm extends Component {
  state = {
    step: 1,
    orgEmail: '',
    orgName: '',
    parentOrg: '',
    websiteURL: '',
    githubURL: '',
    githubTag: '',
    facebookURL: '',
    twitterURL: '',
    meetupURL: '',
    city: '',
    stateProvCo: '',
    country: '',
    orgEmailError: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go Back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
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

  render() {
    const { step } = this.state;
    const {
      orgEmail,
      orgName,
      parentOrg,
      websiteURL,
      githubURL,
      githubTag,
      facebookURL,
      twitterURL,
      meetupURL,
      city,
      stateProvCo,
      country,
      orgEmailError,
    } = this.state;
    const values = {
      orgEmail,
      orgName,
      parentOrg,
      websiteURL,
      githubURL,
      githubTag,
      facebookURL,
      twitterURL,
      meetupURL,
      city,
      stateProvCo,
      country,
      orgEmailError,
    };

    switch (step) {
      case 1:
        return (
          <ProjectInfo nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        );
      case 2:
        return (
          <LocationMedia
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Complete />;
    }
  }
}

export default AddOrgForm;
