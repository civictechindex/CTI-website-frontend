import React from 'react'
import { Link } from 'react-router-dom'
import Container from "@material-ui/core/Container";
import BottomCallToAction from '../../components/BottomCallToAction'
import useStyles from './styles.js'

const HowToUse = () => {
  const classes = useStyles()

  return (
    <Container className='containerGray'>
      <p className={classes.projectsLink}>About / Adding Projects to the Index</p>
      <h1 className={classes.projectsHeading}>Adding Projects to the Index</h1>
      <h6 className={classes.projectsSubHeading}>Generating Topics/Tags for your Civic Tech Project</h6>
      <p className={classes.projectsSubHeadingDetails}>We recommend having your project&apos;s repository open in another browser for ease of convenience</p>
      <ol className={classes.projectsList}>
        <li>On the Civic Tech Index <Link to='/' className={classes.link}>Tag Generator,</Link> navigate to the form and complete the following fields</li>
        <textarea></textarea>
        <li>To create tags, type in keywords that describe your topic(s), causes(s), or civic issue(s) that your project addresses.</li>
        <textarea></textarea>
        <li>Copy the tages that appear below each keyword.</li>
        <textarea></textarea>
        <li>Navigate to your project&apos;s repository in another browser to add your generated tags.</li>
        <li>Under your project&apos;s repository, click <span className={classes.bold}>Manage Topics</span> to paste your tags.</li>
        <div className={classes.imgContainer}>
          <img className={classes.img} src='/images/how-to-use-step-1.png' alt='first step on how to manage your tags in github' />
          <p className={`${classes.imgText} ${classes.gray}`}>civictechindex <span className={classes.black}>/</span> <strong>civictechindex-launch</strong></p>
        </div>
        <div className={classes.imgContainer}>
          <img className={classes.img} src='/images/how-to-use-step-2.png' alt='second step on how to manage your tags in github' />
          <p className={`${classes.imgText} ${classes.gray}`}>civictechindex <span className={classes.black}>/</span> <strong>civictechindex-launch</strong></p>
        </div>
        <li>Repeat until you have finished adding all of your tags, then click <span className={classes.bold}>Done</span> to save your new topics.</li>
        <div className={classes.imgContainer}>
          <img className={classes.img} src='/images/how-to-use-step-3.png' alt='last step on how to manage your tags in gitbub' />
          <p className={classes.imgText}>civictechindex <span className={classes.black}>/</span> <strong>civictechindex-launch</strong></p>
        </div>
      </ol>
      <p className={classes.projectsFooter}>Don&apos;t forget to tell us when you&apos;ve submitted a project or if you would like your organization added to our network!</p>
      <BottomCallToAction heading='Submitted a project or still need help?' />
    </Container>
  )
}

export default HowToUse
