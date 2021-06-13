import React from "react";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyles } from "./styles.js";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export const UnaffiliatedOrganizations = ({ unAffiliatedOrgs }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.unaffiliatedThumbnailsWrapper}>
      {unAffiliatedOrgs.map((organization, index) => (
        <Typography className={classes.unaffiliatedThumbnails} key={index} component="div">
          <ContributorThumbnail
            organization={organization}
          ></ContributorThumbnail>
        </Typography>
      ))}
    </Grid>
  );
};
