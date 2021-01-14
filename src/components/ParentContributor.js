import React from "react";
// import logo from '../../public/images/Brigade-Photo.png'
import { useStyle } from "../pages/Contributors/styles";

export const ParentContributor = ({ dropdownLength, children }) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.codeForAllThumbnailWrapper}>
        <a
          href={"https://codeforall.org"}
          className={classes.codeForAllThumbnails}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={classes.codeForAllImageWrapper}>
            <img
              src={"https://codeforall.org/assets/images/homepage/logo.png"}
              className={classes.codeForAllThumbnailImage}
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
          <div className={classes.codeForAllTextWrapper}>
            <p className={classes.codeForAllThumbnailText}>Code For All</p>
          </div>
        </a>
        <h5 className={classes.dropdownLength}>
          <span>({dropdownLength})</span>
        </h5>
      </div>
      {children}
    </>
  );
};
