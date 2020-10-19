import axios from 'axios';
import React, { useState } from 'react'
import useStyles from './styles.js';

const Landing = () => {
  const classes = useStyles();
  const [inputFieldValue, setInputValue] = useState('');
  const [showSubmit, setSubmit] = useState('showForm');
  const [showMessage, setMessage] = useState('');

  const formSwitch = param => {
    switch (param) {
      case 'showForm':
        return <div>
          <h4 className={classes.notificationHeader}>Be the First to Know when the Civic Tech Index launches</h4>
          <form onSubmit={postUserEmail}>
            <input className={classes.notifyInput} onChange={(event) => setInputValue(event.target.value)} name="email" placeholder="Enter your email address" type="text"></input>
            <div className={classes.notifyButton} onClick={postUserEmail}>Notify Me</div>
          </form>
        </div>;
      default:
        return null;
    }
  }

  const messageSwitch = param => {
    switch (param) {
      case 'duplicate':
        return <h4 className={classes.errorMessage}>That email address has already been registered with us.</h4>
      case 'error':
        return <h4 className={classes.errorMessage}>The email address you've submitted was invalid.<br />Please check the format and resubmit.</h4>
      case 'success':
        return <h4 className={classes.submitMessage}>Thanks for subscribing!<br />We will be in touch soon.</h4>
      default:
        return null;
    }
  }

  const postUserEmail = (event) => {
    event.preventDefault();
    axios.post(process.env.REACT_APP_CTI_SUBSCRIBE_URL,
      {
        email_address: inputFieldValue,
        notification_type: "string",
      })
      .then((response) => {
        setSubmit('');
        setMessage('success');
      })
      .catch((error) => {
        if (error.response.data.email_address) {
          setMessage('error');
        } else {
          setMessage('duplicate');
        }
      });
  };

  return (
    <div className={classes.landingContainer}>
      <section className={classes.headerSection}>
        <img src="/images/Civic Tech Index Logo - Landing Page.png" alt="civic tech index logo" />
        <h2 className={classes.landingHeader}>Join a worldwide movement to catalog every open source civic tech project</h2>
      </section>

      <section className={classes.comingSoonSection}>
        <h3 className={classes.comingSoonHeader}>COMING SOON</h3>
        <div className={classes.notificationContainer}>
          {formSwitch(showSubmit)}
          {messageSwitch(showMessage)}
        </div>
      </section>

      <section className={classes.followAndVolunteerSection}>
        <div className={classes.volunteerContainer}>
          <h4 className={classes.volunteerHeader}>Want to join the<br />Civic Tech Index team?</h4>
          <a className={classes.volunteerLink} href="https://www.hackforla.org/projects/civic-tech-index"><div className={classes.volunteerButton}>Volunteer</div></a>
        </div>
        <div className={classes.followContainer}>
          <h4 className={classes.volunteerHeader}>Follow us for<br />launch updates</h4>
          <div className={classes.followIcons}>
            <a href='https://www.instagram.com/civictechindex'><img src='/images/insta-logo.svg' alt='instagram logo' /></a>
            <a href='https://twitter.com/hackforla'><img className={classes.twitterIcon} src='/images/twitter-logo.svg' alt='twitter logo' /></a>
            <a href='https://www.facebook.com/civictechindex'><img src='/images/fb-logo.svg' alt='facebook logo' /></a>
            <a href='https://github.com/civictechindex'><img src='/images/github-logo.svg' alt='github logo' /></a>
          </div>
        </div>
      </section>

      <section className={classes.footerSection}>
        <p>The Civic Tech Index is an open-source project.<br />
        You can download or contribute to the code on <a href="https://github.com/civictechindex">Github.</a>
        </p>

      </section>

    </div>
  )
}

export default Landing;
