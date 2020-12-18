import React from "react";
// import logo from '../../public/images/Brigade-Photo.png'

export const ParentContributor = ({ dropdownLength, children }) => {
  const styles = {
    thumbnailWrapper: {
      display: "flex",
      flexGrow: "1",
      width: "50%",
      borderRadius: "4px",
      backgroundColor: "white",
      color: "#0F1D2F",
      margin: "auto",
    },
    thumbnails: {
      display: "flex",
      textDecoration: "none",
    },
    imageWrapper: {
      display: "flex",
      placeItems: "center",
      maxWidth: "6rem",
      margin: " 0 0.5rem",
      flexGrow: "1",
    },
    thumbnailImage: {
      maxWidth: "100%",
      height: "auto",
    },
    textWrapper: {
      display: "flex",
      margin: "0 0.5rem 0 1rem",
      flexGrow: "1",
      alignItems: "center",
    },
    thumbnailText: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      margin: "0",
      color: "#0F1D2F",
    },
    dropdownLength: {
      color: "#0F1D2F",
    },
  };

  return (
    <>
      <div style={styles.thumbnailWrapper}>
        <a
          href={"https://codeforall.org"}
          style={styles.thumbnails}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div style={styles.imageWrapper}>
            <img
              src={"https://codeforall.org/assets/images/homepage/logo.png"}
              style={styles.thumbnailImage}
              onError={(e) =>
                console.log(
                  e,
                  `error with 'Code For All' ParentContributor Component`
                )
              }
              alt="code for all logo"
              loading="lazy"
            />
          </div>
          <div style={styles.textWrapper}>
            <p style={styles.thumbnailText}>Code For All</p>
          </div>
        </a>
        <h5 style={styles.dropdownLength}>
          <span>({dropdownLength})</span>
        </h5>
      </div>
      {children}
    </>
  );
};
