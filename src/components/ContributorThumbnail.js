import React, { useState, useEffect } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";

export const ContributorThumbnail = ({ organization }) => {
  const styles = {
      thumbnailWrapper:{
          flex: '1 1 20rem'
      },
    thumbnails: {
      backgroundColor: "white",
      display: "flex",
      textDecoration: "none",
      borderRadius: "4px",
      minHeight: '7rem'
    },
    imageWrapper: {
      display: "grid",
      placeItems: "center",
      maxWidth: "6rem",
      margin: " 0 0.5rem",
    },
    thumbnailImage: {
      maxWidth: "100%",
      height: "auto",
    },
    textWrapper: {
      display: "grid",
      margin: "0 0.5rem 0 1rem",
    },
    thumbnailText: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
      margin: '0',
      color: "#0F1D2F",
      display: 'grid',
      placeItems: 'center'
    },
  };

  const [thumbnailInfo, setThumbnailInfo] = useState({});
  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return thumbnailInfo.organizationUrl ? (
    <div >
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
