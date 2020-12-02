import React from "react";
import NavBreadcrumb from "../../components/NavBreadcrumbs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PictureCard from "../../components/PictureCard";
import useStyles from "./styles.js";
import "../../styles.css";
import { Grid } from "@material-ui/core";

const About = () => {
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
  ];

  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.mainContainer}
      >
        <Grid item xs={12} className={classes.navContainer}>
          <NavBreadcrumb crumbs={crumbs} color="#FEFEFE" />
        </Grid>
        <Grid item xs={12} className={classes.headingContainer}>
          <h1 className={classes.heading}>
            A movement to index every open source civic tech project on Github
          </h1>
        </Grid>
        <Grid item xs={12} container justify="center">
          <Grid
            item
            xs={10}
            md={8}
            lg={6}
            container
            justify="center"
            className={classes.videoContainer}
          >
            <img
              className={classes.playButtonImg}
              src="/images/playButton.png"
              alt="Video play button"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.textContainer}>
          <h3 className={classes.text}>
            With your help, we can create a continuously updated repository for
            all civic tech enthusiasts to find open source projects to model,
            connect with, and learn from.
          </h3>
        </Grid>
        <Grid item xs={12}>
          <PictureCard />
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.getStartedContainer}
        >
          <Grid item xs={12}>
            <h2 className={classes.getStartedHeading}>Ready to get started?</h2>
          </Grid>
          <Grid item xs={12}>
            <button className={classes.getStartedBtn}>Tag Your Project</button>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default About;
