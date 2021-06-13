import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { getOrganizationLinks } from './getOrganizationLinks.js';
import { useStyles } from '../pages/Contributors/styles';

export const ContributorThumbnail = ({ organization, isOpen }) => {
  const classes = useStyles();

  const [thumbnailInfo, setThumbnailInfo] = useState({});

  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return (
    <Container className={classes.thumbnailWrapper} component="span" data-cy="contributor-thumbnail">
      {thumbnailInfo.organizationUrl ? (
        <Link
          href={thumbnailInfo.organizationUrl}
          className={classes.thumbnails}
          target='_blank'
          rel='noreferrer noopener'
        >
          {thumbnailInfo.imageUrl ? (
            <Thumbnail thumbnailInfo={thumbnailInfo} organization={organization} isOpen={isOpen} />
          ) : (
            <Grid className={classes.textWrapperWithoutImage} component='span'>
              <Grid className={classes.thumbnailTextWithoutImage} component='span'>
                <Typography
                  component='span'
                  className={isOpen ? `${classes.blueColorText}` : `${classes.orgText}`}
                >
                  {organization.name ? organization.name : organization}{' '}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Link>
      ) : (
        <Grid className={classes.textWrapperWithoutImage} component='span'>
          <Typography component='span'> No URL Data for {organization.name} </Typography>
        </Grid>
      )}
    </Container>
  );
};

const Thumbnail = ({ thumbnailInfo, organization, isOpen }) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.imageWrapper} component='span'>
        <CardMedia
          component='img'
          src={thumbnailInfo.imageUrl}
          className={classes.thumbnailImage}
          onError={
            (e) =>
              // eslint-disable-next-line no-console
              console.log(`${e}: error with ${organization.name} image`)
            // Before MVP: Refactor as on-website error/generic case.
          }
          alt={`${organization.name} logo`}
          loading='lazy'
        />
      </Grid>

      <Grid data-cy='affthumbnailTextWrapper' className={classes.textWrapper} component='span'>
        <Box data-cy='affthumbnailText' className={classes.thumbnailText} component='span'>
          <Typography
            component={'span'}
            data-cy='thumbnailTextInfn'
            className={isOpen ? `${classes.blueColorText}` : `${classes.orgText}`}
          >
            {' '}
            {organization.name ? organization.name : organization}{' '}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
