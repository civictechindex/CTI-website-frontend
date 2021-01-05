import React, { useState, useEffect } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";

export const ContributorThumbnail = ({ organization }) => {
  const styles = {
    thumbnailWrapper: {
      display: "flex",
      flex: "0 0 24%",
      //   margin: "0.2rem 0",
      //   padding: '0.5rem'
      // padding: '0.5rem'
    },
    thumbnails: {
      backgroundColor: "white",
      display: "flex",
      textDecoration: "none",
      borderRadius: "4px",
      flexGrow: "1",
      //   margin: '0.3rem 0.5rem',
      // justifyContent: 'center'
    },
    imageWrapper: {
      display: "grid",
      placeItems: "center",
      //   maxWidth: "29%",
      //   flex: "1 1 30%",
      //   margin: "0.5rem 0 0.5rem 0.5rem",
      padding: "0.5rem",
    },
    thumbnailImage: {
      width: "100%",
      maxWidth: "6rem",
    },
    textWrapper: {
      display: "flex",
      alignItems: "center",
      //   marginLeft: "0.5rem",
      flex: "3 1 75%",
    },
    textWrapperWithoutImage: {
      display: "grid",
      placeItems: "center",
      //   marginLeft: "0.5rem",
      // flex: "1 1 100%",
      width: "100%",
    },
    thumbnailText: {
      // width: "75%",
      //   width: "100%",111
      //   margin: "0",
      //   color: "#0F1D2F",
      //   padding: '0 0.5rem'
    },
    thumbnailTextWithoutImage: {
      display: "flex",
      alignItems: "center",
      padding: "0 0.5rem",

      //   margin: "0 0.5rem",
      //   width: "75%",
      //   flex: "3 1 75%",
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
              onError={(e) =>
                console.log(`${e}: error with ${organization.name} image`)
              }
              alt={`${organization.name} logo`}
              loading="lazy"
            />
          </div>
        ) : null}
        <div style={styles.textWrapperWithoutImage}>
          {thumbnailInfo.imageUrl ? (
            <p style={styles.thumbnailText}>
              {organization.name ? organization.name : organization}
            </p>
          ) : (
            <p style={styles.thumbnailTextWithoutImage}>
              {organization.name ? organization.name : organization}
            </p>
          )}
        </div>
      </a>
    </div>
  ) : (
    <div style={styles.thumbnailWrapper}>No Data</div>
  );
};
