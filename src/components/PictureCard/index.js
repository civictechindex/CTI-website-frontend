import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles.js";

const PictureCard = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.picturesContainer}>
        <Grid
          item
          xs={12}
          lg={3}
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12} lg={3}>
            <img
              src="/images/girlCoding.png"
              alt="girl coding on her computer"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <p className={classes.projectsText}>
              No coding experience needed to submit your project!
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={3}>
            <img
              src="/images/girlandguyCoding.png"
              alt="girl and guy coding"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <p className={classes.projectsText}>
              Make your project more visible with GitHub’s open-source
              communities
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={3}>
            <img
              src="/images/groupCodingColor.png"
              alt="group coding"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <p className={classes.projectsText}>
              The Index is owned by all who contribute to it
            </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PictureCard;
