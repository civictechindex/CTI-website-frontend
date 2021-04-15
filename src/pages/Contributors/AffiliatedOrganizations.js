import React from "react";
import { Dropdown } from "../../components/Dropdown";
import { ParentContributor } from "../../components/ParentContributor";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyle } from "./styles.js";

export const AffiliatedOrganizations = ({ organizations }) => {
  const classes = useStyle();

  const parentOrg = organizations['Code for All'];

  const getChildrenLength = (org) => {
    if (organizations[org.name]) {
      return organizations[org.name].length;
    } else {
      return 0;
    }
  };

  if (parentOrg) {
    return (
      <ParentContributor dropdownLength={parentOrg.length} isOpen={true}>
        {parentOrg.map((org, i) => {
          return (
            <Dropdown organization={org} key={i} dropdownLength={getChildrenLength(org)} isOpen={parentOrg.length < 3 ? true : false}>
              {organizations[org.name] ? (
                <div className={classes.affiliatedThumbnailsWrapper}>
                  {organizations[org.name].map((child, idx) => (
                    <ContributorThumbnail organization={child} key={idx} />
                  ))}
                </div>
              ) : null}
            </Dropdown>
          );
        })}
      </ParentContributor>
    );
  } else {
    return null;
  }
};
