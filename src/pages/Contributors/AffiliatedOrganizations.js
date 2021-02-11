import React from "react";
import { Dropdown } from "../../components/Dropdown";
import { ParentContributor } from "../../components/ParentContributor";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyle } from "./styles.js";

export const AffiliatedOrganizations = ({ affiliatedObject }) => {
  const classes = useStyle();
  const parent = Object.keys(affiliatedObject)[0];

  const numOfChildren = (organization) => {
    if (affiliatedObject[organization.name]) {
      return affiliatedObject[organization.name].length;
    } else {
      return 0;
    }
  };
  return (parent ? (
    <ParentContributor
      dropdownLength={affiliatedObject["Code for All"].length}
      isOpen={true}
    >
      {affiliatedObject["Code for All"].map((organization, idx) => {
        return (
          <Dropdown
            organization={organization}
            key={idx}
            dropdownLength={numOfChildren(organization)}
            isOpen={affiliatedObject["Code for All"].length < 3 ? true : false}
          >
            {affiliatedObject[organization.name] ? (
              <div className={classes.affiliatedThumbnailsWrapper}>
                {affiliatedObject[organization.name].map((child, idx) => (
                  <ContributorThumbnail organization={child} key={idx} />
                ))}
              </div>
            ) : null}
          </Dropdown>
        );
      })}
    </ParentContributor>
  ) : null);
};
