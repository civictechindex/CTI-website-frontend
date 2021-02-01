import React, { useEffect, useState } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";
import { useStyle } from "../pages/Contributors/styles";

const Thumbnail = ({ thumbnailInfo, organization }) => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.imageWrapper}>
        <img
          src={thumbnailInfo.imageUrl}
          className={classes.thumbnailImage}
          onError={(e) =>
            console.log(`${e}: error with ${organization.name} image`)
          }
          alt={`${organization.name} logo`}
          loading="lazy"
        />
      </div>
      <div className={classes.textWrapper}>
        <p className={classes.thumbnailText}>
          {organization.name ? organization.name : organization}
        </p>
      </div>
    </>
  );
};

export const ContributorThumbnail = ({ organization }) => {
  if (typeof organization === "string") {
    console.log('this organization is a string!')
    console.log(organization)
  }

  const classes = useStyle();

  const [thumbnailInfo, setThumbnailInfo] = useState({});
  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return (
    <div className={classes.thumbnailWrapper}>
      {thumbnailInfo.organizationUrl ? (
        <a
          href={thumbnailInfo.organizationUrl}
          className={classes.thumbnails}
          target="_blank"
          rel="noreferrer noopener"
        >
          {thumbnailInfo.imageUrl ? (
            <Thumbnail
              thumbnailInfo={thumbnailInfo}
              organization={organization}
            />
          ) : (
            <div className={classes.textWrapperWithoutImage}>
              <p className={classes.thumbnailTextWithoutImage}>
                {organization.name ? organization.name : organization}
              </p>
            </div>
          )}
        </a>
      ) : (
        <div className={classes.textWrapperWithoutImage}>
          No URL Data for {organization.name}
        </div>
      )}
    </div>
  );
};

