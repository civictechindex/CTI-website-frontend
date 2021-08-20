/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getOrganizationLinks } from './getOrganizationLinks.js';

const useStyles = makeStyles((theme) => ({
  thumbnailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: '13px',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      marginTop: '1px',
      marginLeft: '1px',
    },
  },
  thumbnailImage: {
    width: '48px',
    height: '48px',
    [theme.breakpoints.down('sm')]: {
      width: '26px',
      height: '26px',
    },
  },
  orgText: {
    paddingLeft: '9px',
    paddingTop: '3px',
    color: theme.palette.secondary.dark,
    '& a:link': {
      color: theme.palette.secondary.dark,
    },
    '& a:visited': {
      color: theme.palette.secondary.dark,
    },
    [theme.breakpoints.between('xs','sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },
  blueColorText: {
    paddingLeft: '16px',
    color: theme.palette.text.secondary,
    '& a:link': {
      color: theme.palette.text.secondary,
    },
    '& a:visited': {
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.between('xs','sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },
  grandparentIcon: {
    marginTop: '22%',
    marginLeft: '13%',
    width: '42px',
    height: '42px',
    [theme.breakpoints.down('sm')]: {
      width: '32px',
      height: '32px',
      marginTop: '23%',
      marginLeft: '2%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '23px',
      height: '23px',
    },
  },
  contributorItem: {
    display: 'grid',
    position:'absolute',
    marginTop: '2px',
    right: '0',
    [theme.breakpoints.down('sm')]: {
      right: 0,
    },
  },
  thumbnailWrapperContributor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: '13px',
    flexWrap: 'nowrap',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
    },
  },
  thumbnailChildImage: {
    width: '32px',
    height: '32px',
    [theme.breakpoints.down('sm')]: {
      width: '20px',
      height: '20px',
      marginTop: '5px',
      marginLeft: '10px',
    },
  },
  contributorIcon: {
    width: '24px',
    height: '24px',
    [theme.breakpoints.down('sm')]: {
      width: '17px',
      height: '17px',
    },
  },
  parentText: {
    alignItems: 'center',
  },
}));

export const ContributorThumbnail = ({
  organization,
  isOpen,
  dropdownLength,
  isChildThumbnail,
  checkboxValue,
}) => {
  const classes = useStyles();
  const [thumbnailInfo, setThumbnailInfo] = useState({});

  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return (
    <>
      <Box style={{ position: 'relative' }}>
        {thumbnailInfo.organizationUrl ? (
          <Thumbnail
            thumbnailInfo={thumbnailInfo}
            organization={organization}
            isOpen={isOpen}
            dropdownLength={dropdownLength}
            isChildThumbnail={isChildThumbnail}
            checkboxValue={checkboxValue}
          />
        ) : (
          <Grid className={classes.textWrapperWithoutImage} component='span'>
            <Typography component='span'>
              {' '}
              No URL Data for {organization.name}{' '}
            </Typography>
          </Grid>
        )}
      </Box>
    </>
  );
};

const Thumbnail = ({
  thumbnailInfo,
  organization,
  isOpen,
  dropdownLength,
  isChildThumbnail,
  checkboxValue,
}) => {
  const classes = useStyles();
  let thumbnailImageStyle, thumbnailWrapperStyle;
  if (
    thumbnailInfo.imageUrl.includes('undefined') ||
    thumbnailInfo.imageUrl.includes('scontent')
  ) {
    thumbnailInfo.imageUrl = '/images/default-github-repo-image.png';
  }
  if (organization.cti_contributor) {
    thumbnailWrapperStyle = classes.thumbnailWrapperContributor;
  } else {
    thumbnailWrapperStyle = `${classes.thumbnailWrapper} ${classes.parentText}`;
  }
  if (organization.affiliated && organization.depth === 3) {
    thumbnailImageStyle = classes.thumbnailImage;
  } else if (organization.depth === 4) {
    thumbnailImageStyle = classes.thumbnailChildImage;
  } else if (organization.depth === 2) {
    thumbnailImageStyle = classes.thumbnailImage;
  }
  return (
    <>
      <Box className={classes.contributorItem}>
        {organization.depth === 4 &&
        checkboxValue &&
        organization.cti_contributor ? (
          <img
            alt='contributor-icon'
            data-cy='contributor-icon'
            className={classes.contributorIcon}
            src='/images/Child_contributed.svg'
          />
        ) : null}
      </Box>
      <Grid className={thumbnailWrapperStyle}>
        <Grid item className={classes.imageWrapper}>
          <CardMedia
            component='img'
            src={thumbnailInfo.imageUrl}
            className={thumbnailImageStyle}
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
        <Grid item className={classes.affthumbnailText}>
          <Typography
            variant={isChildThumbnail ? 'body1' : 'h6'}
            noWrap
            data-cy='contributor-thumbnail-text'
            className={
              isOpen ? `${classes.blueColorText}` : `${classes.orgText}`
            }
          >
            <Link
              href={`/organization/${organization.slug}`}
              target='_blank'
              rel='noreferrer noopener'
            >
              {organization.name ? organization.name : organization}
            </Link>{' '}
            {dropdownLength ? `(${dropdownLength})` : ` `}
          </Typography>
        </Grid>
        <Grid>
          <Typography>
            {organization.depth === 3 && checkboxValue ? (
              <img
                alt='contributor-icon'
                data-cy='contributor-icon'
                className={classes.grandparentIcon}
                src='/images/Gparent_contributed.svg'
              />
            ) : (
              ' '
            )}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
