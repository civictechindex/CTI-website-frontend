import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const HowToUse = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
    <section className={classes.projectsSection}>
      <div className={classes.projectsContainer}>
        <p className={classes.projectsLink}>About / Adding Projects to the Index</p>
        <h1 className={classes.projectsHeading}>Adding Projects to the Index</h1>
        <h6 className={classes.projectsSubHeading}>Generating Topics/Tags for your Civic Tech Project</h6>
        <p className={classes.projectsSubHeadingDetails}>We recommend having your project's repository open in another browser for ease of convenience</p>
        <ol className={classes.projectsList}>
          <li>On the Civic Tech Index <Link to='/' className={classes.link}>Tag Generator,</Link> navigate to the form and complete the following fields</li>
          <textarea required></textarea>
          <li>To create tags, type in keywords that describe your topic(s), causes(s), or civic issue(s) that your project addresses.</li>
          <textarea required></textarea>
          <li>Copy the tages that appear below each keyword.</li>
          <textarea required></textarea>
          <li>Navigate to your project's repository in another browser to add your generated tags.</li>
          <li>Under your project's repository, click <span className={classes.bold}>Manage Topics</span> to paste your tags.</li>
          <img src='/images/how-to-use-step-1.png' alt='first step on how to manage your tags in github' />
          <img src='/images/how-to-use-step-2.png' alt='second step on how to manage your tags in gitbub' />
          <li>Repeat until you have finished adding all of your tags, then click <span className={classes.bold}>Done</span> to save your new topics.</li>
          <img src='/images/how-to-use-step-3.png' alt='last step on how to manage your tags in gitbub' />
        </ol>
        <p className={classes.projectsFooter}>Don't forget to tell us when you've submitted a project or if you would like your organization added to our network!</p>
      </div>
    </section>
    </main>
  )
}

export default HowToUse