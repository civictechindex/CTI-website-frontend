import React from 'react'
import useStyles from './styles.js';

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingContainer}>

      <section className={classes.headerSection}>
        <h2 className={classes.landingHeader}>Join a worldwide movement to catalog every open source civic tech project</h2>
      </section>

      <section className={classes.comingSoonSection}>
        <h3 className={classes.comingSoonHeader}>COMING SOON</h3>
        <div className={classes.notificationContainer}>
          <h4 className={classes.notificationHeader}>Be the First to Know when the Civic Tech Index launches</h4>
          <input className={classes.notifyInput} name="email" placeholder="Enter your email address" type="text"></input>
          <div className={classes.notifyButton}>Notify Me</div>
        </div>
      </section>

      <section className={classes.followAndVolunteerSection}>
        <div className={classes.volunteerContainer}>
          <h4 className={classes.volunteerHeader}>Want to join the<br/>Civic Tech Index team?</h4>
          <div className={classes.volunteerButton}>Volunteer</div>
        </div>
        <div className={classes.followContainer}>
          <h4 className={classes.volunteerHeader}>Follow us for<br/>launch updates</h4>
          <div className={classes.followIcons}>
            <a href='#'><img src='/images/insta-logo.svg' alt='instagram logo'/></a>
            <a href='#'><img className={classes.twitterIcon} src='/images/twitter-logo.svg' alt='twitter logo'/></a>
            <a href='#'><img src='/images/fb-logo.svg' alt='facebook logo'/></a>
            <a href='https://github.com/civictechindex'><img src='/images/github-logo.svg' alt='github logo'/></a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Landing;
