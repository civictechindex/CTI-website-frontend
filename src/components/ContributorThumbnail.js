import React, { useEffect, useState } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";
import { useStyle } from "../pages/Contributors/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';

export const ContributorThumbnail = ({ organization }) => {
  const classes = useStyle();

  const [thumbnailInfo, setThumbnailInfo] = useState({});
  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return (
    <Typography className={classes.thumbnailWrapper}>
      {thumbnailInfo.organizationUrl ? (
        <Link
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
            <Typography className={classes.textWrapperWithoutImage}>
              <Typography className={classes.thumbnailTextWithoutImage}>
                {organization.name ? organization.name : organization}
              </Typography>
            </Typography>
          )}
        </Link>
      ) : (
        <Typography className={classes.textWrapperWithoutImage}>
            No URL Data for {organization.name}
        </Typography>
      )}
    </Typography>
  );
};

const Thumbnail = ({ thumbnailInfo, organization }) => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.imageWrapper}>
        <CardMedia
          component="img"
          src={thumbnailInfo.imageUrl}
          className={classes.thumbnailImage}
          onError={(e) =>
            // eslint-disable-next-line no-console
            console.log(`${e}: error with ${organization.name} image`)
            // Before MVP: Refactor as on-website error/generic case.
          }
          alt={`${organization.name} logo`}
          loading="lazy"
        />
      </Box>
      <Box className={classes.textWrapper}>
        <Box className={classes.thumbnailText}>
          {organization.name ? organization.name : organization}
        </Box>
      </Box>
    </>
  );
};
