import React, { useState, useEffect } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";

export const ContributorThumbnail = ({ organization }) => {
  const styles = {
    thumbnailWrapper: {
      display: "flex",
      flex: "0 0 24%",
      minHeight: "6rem",
    },
    thumbnails: {
        color: 'black',
      backgroundColor: "white",
      display: "flex",
      textDecoration: "none",
      borderRadius: "4px",
      flexGrow: "1",
    },
    imageWrapper: {
      display: "grid",
      placeItems: "center",
      padding: "0.5rem",
    },
    thumbnailImage: {
      width: "100%",
      maxWidth: "6rem",
    },
    textWrapper: {
      display: "flex",
      alignItems: "center",
      flex: "3 1 75%",
    },
    textWrapperWithoutImage: {
      display: "grid",
      placeItems: "center",
      width: "100%",
    },
    thumbnailTextWithoutImage: {
      display: "flex",
      alignItems: "center",
      padding: "0 0.5rem",
    },
  };

  const [thumbnailInfo, setThumbnailInfo] = useState({});
  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return (
    <div style={styles.thumbnailWrapper}>
      {thumbnailInfo.organizationUrl ? (
        <a
          href={thumbnailInfo.organizationUrl}
          style={styles.thumbnails}
          target="_blank"
          rel="noreferrer noopener"
        >
          {thumbnailInfo.imageUrl ? (
            <>
              <div style={styles.imageWrapper}>
                <img
                  src={thumbnailInfo.imageUrl}
                  style={styles.thumbnailImage}
                  onError={(e) =>
                    console.log(`${e}: error with ${organization.name} image`)
                  }
                  alt={`${organization.name} logo`}
                  loading="lazy"
                />
              </div>
              <div style={styles.textWrapper}>

              <p style={styles.thumbnailText}>
                {organization.name ? organization.name : organization}
              </p>
              </div>
            </>
          ) : (
            <div style={styles.textWrapperWithoutImage}>
              <p style={styles.thumbnailTextWithoutImage}>
                {organization.name ? organization.name : organization}
              </p>
            </div>
          )}
        </a>
      ) : (
        <div style={styles.textWrapperWithoutImage}>
          No URL Data for {organization.name}
        </div>
      )}
    </div>
  );
};
