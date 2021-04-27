import React, { useEffect, useState } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";
import { useStyle } from "../pages/Contributors/styles";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

export const ContributorThumbnail = ({ organization }) => {
  const classes = useStyle();

  const [thumbnailInfo, setThumbnailInfo] = useState({});
  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return (
    <Container className={classes.thumbnailWrapper}>
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
            <Grid className={classes.textWrapperWithoutImage}>
              <Typography className={classes.thumbnailTextWithoutImage} component="div">
                {organization.name ? organization.name : organization}
              </Typography>
            </Grid>
          )}
        </Link>
      ) : (
        <Grid className={classes.textWrapperWithoutImage}>
            No URL Data for {organization.name}
        </Grid>
      )}
    </Container>
  );
};

const Thumbnail = ({ thumbnailInfo, organization }) => {
  const classes = useStyle();
  return (
    <>
      <Grid className={classes.imageWrapper}>
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
      </Grid>
      <Grid className={classes.textWrapper}>
        <Grid className={classes.thumbnailText}>
          {organization.name ? organization.name : organization}
        </Grid>
      </Grid>
    </>
  );
};
