import React from "react";
import { getOrgId } from "./getOrgId.js";

export const DropdownThumbnail = ({ organizations }) => {
  const styles = {
    thumbnailsContainer: {
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

  return (
    <div style={styles.thumbnailsContainer}>
      {organizations
        ? organizations.map((child, indexSubchild) => {
            let imageUrl;
            let orgUrl;
            if (child.links[0]) {
              orgUrl = child.links[0].url;
              child.links.forEach((link) => {
                if (link.link_type === "GitHub") {
                  let id = getOrgId(link.url);
                  imageUrl = `https://avatars0.githubusercontent.com/u/${id}?s=100&v=4`;
                  orgUrl = link.url;
                } else {
                  imageUrl = child.image_url;
                }
              });
            } else {
              child.links[0] = "https://github.com/";
              orgUrl = child.links[0];
            }
            return (
              <a
                href={orgUrl}
                key={indexSubchild}
                style={styles.thumbnails}
                target="_blank"
                rel="noopener noreferrer"
              >
                {child.image_url ? (
                  <>
                    <img
                      src={imageUrl}
                      style={styles.image}
                      onError={() => console.log("error")}
                      alt={child.name}
                      loading="lazy"
                    />
                    <div style={styles.thumbnailText}>{child.name}</div>
                  </>
                ) : (
                  <div style={styles.thumbnailText}>{child.name}</div>
                )}
              </a>
            );
          })
        : null}
    </div>
  );
};
