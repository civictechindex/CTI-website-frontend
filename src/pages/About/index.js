import React from 'react'
import useStyles from './styles.js'

const About = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <section className={classes.headingSection}>
        <div className={classes.headingContainer}>
          <p className={classes.url}>Home / About</p>
          <h1 className={classes.heading}>A movement to index every open source civic tech project on Github</h1>
        </div>
      </section>
      <section className={classes.textSection}>
        <h2 className={classes.text}>With your help, we can create a continuously updated repository for all civic tech enthusiasts to find open source projects to model, connect with, and learn from.</h2>
      </section>
      <section className={classes.projectsSection}>
        <h3 className={classes.projectsHeading}>Easily search and clone projects from local and global brigades.</h3>
        <div className={classes.projectsContainer}>
          <img className={classes.projectsImg} src='/images/girl-coding.png' alt='girl coding on her computer' />
          <p className={classes.projectsText}>No coding experience needed to submit your project!</p>
        </div>
        <div className={classes.projectsContainer}>
          <img className={classes.projectsImg} src='/images/girl-and-guy-coding.png' alt='girl and guy coding' />
          <p className={classes.projectsText}>The index can be displayed and customized on any website</p>
        </div>
        <div className={classes.projectsContainer}>
          <img className={classes.projectsImg} src='/images/group/coding' alt='group coding' />
          <p className={classes.projectsText}>The index is owned by all who contribute to it</p>
        </div>
      </section>
      <section className={classes.getStartedSection}>
        <h2 className={classes.getStartedHeading}>Ready to get started?</h2>
        <button className={`${classes.getStartedBtn} ${classes.black}`}>Tag Your Project</button>
      </section>
    </main>
  )
}

export default About