import React, {useState, useEffect } from "react";
import { getOrganizationGithubInfo } from "./getOrganizationGithubInfo.js";

export const ContributorThumbnail = ({ organization }) => {
  const styles = {
    orgContainer: {
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.7rem",
    },
    thumbnails: {
      backgroundColor: "white",
      borderRadius: "2px",
      display: "flex",
      textDecoration: "none",
      flex: "1",
      minHeight: "80px",
      justifyContent: "center",
    },
    image: {
      flex: 1,
      maxWidth: "100px",
      margin: ".5rem",
    },
    thumbnailText: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      flexWrap: "wrap",
      textAlign: "center",
      color: "#004364",
      padding: ".5rem",
    },
  };
  //   let organizationUrl = getOrganizationUrl(organization);

  const [githubInfo, setGethubInfo] = useState();
  useEffect(() => {
    setGethubInfo(getOrganizationGithubInfo(organization));
  }, [organization]);

  return (
    <div style={styles.orgContainer}>
      {githubInfo.organizationGithubUrl ? (
        <a href={githubInfo.organizationGithubUrl} style={styles.thumbnails}>
          {githubInfo.imageUrl ? (
            <img
              src={githubInfo.imageUrl}
              style={styles.image}
              onError={() => console.log("error")}
              alt={organization.name}
              loading="lazy"
            />
          ) : // (
          //   <div style={styles.thumbnailText}>{organization.name}</div>
          // )
          null}
        </a>
      ) : null}
    </div>
  );
};
