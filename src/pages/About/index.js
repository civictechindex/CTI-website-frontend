import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React from 'react'
import useStyles from './styles.js'
import '../../styles.css'

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.page}>
        <section className={classes.aboutSection}>
          <div className={classes.urlDiv}>
            <p className={classes.url}>Home / About</p>
            </div>
            <div className={classes.headingDiv}>
            <h2 className={classes.heading}>
              A movement to index every open source civic tech project on Github
            </h2>
    
          </div>
          <div className={classes.videoDiv}>
            <img
              className={classes.playButtonImg}
              src="/images/playButton.png"
              alt="Video play button"
            />
          </div>
          <div className={classes.textSection}>
            <h3 className={classes.text}>
              With your help, we can create a continuously updated repository
              for all civic tech enthusiasts to find open source projects to
              model, connect with, and learn from.
            </h3>
          </div>
        </section>
        <section className={classes.projectSection}>
          <div className={classes.projectsContainer}>
            <div className={classes.projectsCard}>
              <img
                className={classes.projectsImg1}
                src="/images/girlCoding.png"
                alt="girl coding on her computer"
              />
              <p className={classes.projectsText}>
                No coding experience needed to submit your project!
              </p>
            </div>
            <div className={classes.projectsCard}>
              <img
                className={classes.projectsImg2}
                src="/images/girlandguyCoding.png"
                alt="girl and guy coding"
              />
              <p className={classes.projectsText}>
                Make your project more visible with GitHub’s open-source
                communities
              </p>
            </div>
            <div className={classes.projectsCard}>
              <img
                className={classes.projectsImg3}
                src="/images/groupCodingColor.png"
                alt="group coding"
              />
              <p className={classes.projectsText3}>
                The Index is owned by all who contribute to it
              </p>
            </div>
          </div>
        </section>
        <section className={classes.getStartedSection}>
          <h2 className={classes.getStartedHeading}>Ready to get started?</h2>
          <button className={`${classes.getStartedBtn} ${classes.black}`}>
            Tag Your Project
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About