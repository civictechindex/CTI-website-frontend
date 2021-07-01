import React, { useEffect, useState } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";
import { useStyle } from "../pages/Contributors/styles";
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';

export const ContributorThumbnail = ({ organization, isOpen, dropdownLength, isChildThumbnail }) => {
  const classes = useStyle();

  const [thumbnailInfo, setThumbnailInfo] = useState({});
  
  useEffect(() => {


    setThumbnailInfo(getOrganizationLinks(organization));

  }, [organization]);

  return (


    <>
      <Container className={isChildThumbnail ? `${classes.altThumbnailWrapper}` : `${classes.thumbnailWrapper}`} component="span">
        {organization.cti_contributor && (
          <Box className={classes.contributorThumbnailWrapper}>

            <CardMedia
              component="img"
              src='/images/contributor-icon.png'
              className={classes.contributorThumbnailImage}
              onError={(e) =>
              // eslint-disable-next-line no-console
                console.log(`${e}: error with ${organization.name} image`)
                // Before MVP: Refactor as on-website error/generic case.
              }
              alt={`${organization.name} logo`}
              loading="lazy"
            />
          </Box>)
        }
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
                isOpen={isOpen}
                dropdownLength={dropdownLength}
              />
            ) : (
              <Grid className={classes.textWrapperWithoutImage} component="span">
                <Grid className={classes.thumbnailTextWithoutImage} component="span">
                  <Typography component="span" className={isOpen ? `${classes.blueColorText}` : `${classes.orgText}`}>
                    {organization.name ? organization.name : organization}
                    <span style={{ paddingLeft: "1px" }}> { dropdownLength ? `(${dropdownLength})`  : ` `   }  </span>
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Link>
        ) : (
          <Grid className={classes.textWrapperWithoutImage} component="span">
            <Typography component="span"> No URL Data for {organization.name} </Typography>
          </Grid>
        )}




      </Container>
    </>
  );
};



const Thumbnail = ({  thumbnailInfo, organization, isOpen,dropdownLength }) => {
  const classes = useStyle();
  if (thumbnailInfo.imageUrl.includes('undefined') || thumbnailInfo.imageUrl.includes('scontent')){
    thumbnailInfo.imageUrl = '/images/default-github-repo-image.png';
  }
  var thumbnailImageStyle = classes.thumbnailImage;
  var thumbnailTextStyle = classes.thumbnailText;
  var textWrapperStyle = classes.textWrapper;
  console.log(dropdownLength)
  if(organization.affiliated && dropdownLength > 0){
    thumbnailImageStyle = classes.unaffiliatedThumbnailImage;
    thumbnailTextStyle = classes.dropdownThumbnailText;
    textWrapperStyle = classes.dropdownTextWrapper;
  }
  return (
    <>
      <Grid className={classes.imageWrapper} component="span">
        <CardMedia
          component="img"
          src={thumbnailInfo.imageUrl}
          className={thumbnailImageStyle}
          onError={(e) =>
            // eslint-disable-next-line no-console
            console.log(`${e}: error with ${organization.name} image`)
            // Before MVP: Refactor as on-website error/generic case.
          }
          alt={`${organization.name} logo`}
          loading="lazy"
        />
      </Grid>

      <Grid data-cy="affthumbnailTextWrapper" className={textWrapperStyle} component="span">
        <Box data-cy="affthumbnailText" className={thumbnailTextStyle} component="span">

          <Typography  component={'span'} data-cy='thumbnailTextInfn' className={isOpen ? `${classes.blueColorText}` : `${classes.orgText}`}>
            {organization.name ? organization.name : organization}

            <span style={{ paddingLeft: "1px" }}> { dropdownLength ? `(${dropdownLength})`  : ` `   }  </span>
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
