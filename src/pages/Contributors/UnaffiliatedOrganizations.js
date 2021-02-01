import React from "react";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyle } from "./styles.js";

export const UnaffiliatedOrganizations = ({ unAffiliatedOrgs }) => {
  const classes = useStyle();

  return (
    <div className={classes.unaffiliatedThumbnailsWrapper}>
      {unAffiliatedOrgs.map((organization, index) => {
        if (typeof organization === "string") {
          console.log('this organization is a string!')
          console.log(organization)
        }
        return (
        <div className={classes.unaffiliatedThumbnails} key={index}>
          <ContributorThumbnail
            organization={organization}
          ></ContributorThumbnail>
        </div>
        )
      })}
    </div>
  );
};
