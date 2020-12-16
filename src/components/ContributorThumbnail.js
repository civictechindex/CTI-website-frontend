import React, { useState, useEffect } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";

export const ContributorThumbnail = ({ organization }) => {
  const styles = {
      thumbnailWrapper:{
          display: 'flex',
    //   flex: 'stretch'
        minHeight: '7rem'
      },
    thumbnails: {
      backgroundColor: "white",
      display: "flex",
      textDecoration: "none",
      borderRadius: "4px",
      flexGrow: '1'
    },
    imageWrapper: {
      display: "flex",
      placeItems: "center",
      maxWidth: "6rem",
      flexGrow: '1',
      margin: '0.5rem'
    },
    thumbnailImage: {
      maxWidth: "100%",
      height: "auto",
    },
    textWrapper: {
      display: "flex",
      margin: "0 0.5rem 0 1rem",
    flexGrow: '4',
    alignItems: 'center'
    },
    thumbnailText: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
      margin: '0',
      color: "#0F1D2F",
    },
  };

  const [thumbnailInfo, setThumbnailInfo] = useState({});
  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return thumbnailInfo.organizationUrl ? (
    <div style={styles.thumbnailWrapper}>
      <a
        href={thumbnailInfo.organizationUrl}
        style={styles.thumbnails}
        target="_blank"
        rel="noreferrer noopener"
      >
        {thumbnailInfo.imageUrl ? (
          <div style={styles.imageWrapper}>
            <img
              src={thumbnailInfo.imageUrl}
              style={styles.thumbnailImage}
              onError={(e) => console.log(e, `error with ${organization.name}`)}
              alt={organization.name}
              loading="lazy"
            />
          </div>
        ) : null}
        <div style={styles.textWrapper}>
          <p style={styles.thumbnailText}>
            {organization.name ? organization.name : organization}
          </p>
        </div>
      </a>
    </div>
  ) : null;
};
