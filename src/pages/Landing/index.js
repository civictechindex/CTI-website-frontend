import React from 'react'
import useStyles from './styles.js';

const Landing = () => {
  const classes = useStyles();

  return (
    <div>

      <section className={classes.headerSection + ' ' + classes.landingSection}>
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

    </div>
  )
}

export default Landing;
