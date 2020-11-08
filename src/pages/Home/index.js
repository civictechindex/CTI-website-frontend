import Footer from '../../components/Footer'
import Header from '../../components/Header'
import React from 'react'
import useStyles from './styles.js'
import '../../styles.css'

const sampleImageData = [
  { alt: "Code for All", link: "/", src: "/images/code-for-all.png" },
  { alt: "Code for America", link: "/", src: "/images/code-for-america.svg" },
  { alt: "DemocracyLab", link: "/", src: "/images/democracy-lab.svg" },
  { alt: "Hack for LA", link: "/", src: "/images/hack-for-la.png" },
  { alt: "OpenOakland", link: "/", src: "/images/open-oakland.svg" },
  { alt: "Open San Diego", link: "/", src: "/images/open-san-diego.svg" },
  { alt: "Open Savannah", link: "/", src: "/images/open-savannah.png" },
  { alt: "Yale OpenLab", link: "/", src: "/images/yale-openlab.svg" },
];

const sampleTopicData = [
  { detail: "Covid-19", link: "/" },
  { detail: "Trending Topic 1", link: "/" },
  { detail: "Trending Topic 2", link: "/" },
  { detail: "Trending Topic 3", link: "/" },
  { detail: "Trending Topic 4", link: "/" },
  { detail: "Trending Topic 5", link: "/" },
];

const OrgImagesList = () => {
  const classes = useStyles()

  return (
    <div className={classes.ctiImgsContainer}>
      {sampleImageData.map((image, index) => {
        return <a href={image.link} key={index}>
          <img
            alt={image.alt}
            className={classes.ctiImgs}
            src={image.src}
          />
        </a>
      })}
    </div>
  )
}

const TrendingTopics = () => {
  const classes = useStyles()

  return (
    <div className={classes.allTopicsContainer}>
      {sampleTopicData.map((topic, index) => {
        return <div className={classes.topicContainer} key={index}>
          <a href={topic.link}>
            <p className={classes.trendingTopicsDetails}>{topic.detail}</p>
          </a>
        </div>
      })}
    </div>
  )
}

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.page}>
        <section className="page-section world-background">
          <h1 className={classes.heading}>
            Join a worldwide movement to catalog every open source civic tech project.
          </h1>
          <div className={classes.listContainer}>
            <p className={classes.listItemText}>Requires no coding</p>
            <p className={classes.listItemText}>Display a customized index on any site</p>
            <p className={classes.listItemText}>Index is owned by all who use it</p>
          </div>
          <div className={classes.btnContainer}>
            <button className={`${classes.btn} ${classes.black}`}>Tag Your Project</button>
            <button className={classes.btn}>Learn More</button>
          </div>
        </section>
        <section className={classes.ctiSection}>
          <div className={classes.ctiContainer}>
            <h2 className={classes.ctiHeading}>Civic Tech Index is used by:</h2>
            <OrgImagesList />
          </div>
        </section>
        <section className={classes.trendingTopicsSection}>
          <h2 className={classes.trendingTopicsHeader}>How are people using the CTI?</h2>
          <TrendingTopics />
        </section>
        <section className={classes.getStartedSection}>
          <h2 className={classes.getStartedHeading}>Ready to get started?</h2>
          <button className={`${classes.getStartedBtn} ${classes.black}`}>Tag Your Project</button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
