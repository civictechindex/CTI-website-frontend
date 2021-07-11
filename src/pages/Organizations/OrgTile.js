import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import getOrganizationLinks from '../../utils/getOrganizationLinks';
import OrgImage from './OrgImage';

const useStyles = makeStyles((theme) => ({
  tileBorder: {
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    borderRadius: '6px',
  },
  tileWrapper: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: (props) => (props.size === 'medium' ? 64 : 80),
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      height: (props) => (props.size === 'medium' ? 48 : 56),
    },
  },
  tileImage: {
    height: (props) => (props.size === 'medium' ? 32 : 48),
    width: (props) => (props.size === 'medium' ? 32 : 48),
    [theme.breakpoints.down('sm')]: {
      height: '32px !important',
      width: '32px !important',
    },
  },
  imageWrapper: {
    padding: 8,
    paddingBottom: 4,
    paddingTop: 4,
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {
      paddingBottom: (props) => (props.size === 'medium' ? 0 : 4),
      paddingTop: (props) => (props.size === 'medium' ? 0 : 4),
    },
  },
  orgText: {
    color: theme.palette.secondary.dark,
    paddingLeft: 8,
    width: 'calc(100% - 24px)',
    '& a, & a:visited': {
      color: theme.palette.secondary.dark,
      fontSize: (props) => (props.size === 'medium' ? 20 : 24),
      fontWeight: (props) => (props.size === 'medium' ? 500 : 700),
      },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      paddingLeft: 8,
      width: 'calc(100% - 32px)',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 48px)',
    },
  },
}));

const OrgTile = ({ borderless = false, organization, size = 'medium' }) => {
  const classes = useStyles({ borderless, size });

  const [tileLinks, setTileLinks] = useState({
    imageUrl: '/images/default-github-repo-image.png',
  });

  useEffect(() => {
    const links = getOrganizationLinks(organization);
    if (!links.imageUrl || links.imageUrl.includes('fbcdn')) {
      links.imageUrl = '/images/default-github-repo-image.png';
    }
    setTileLinks(links);
  }, [organization]);

  return (
    <Box
      className={clsx(classes.tileWrapper, {
        [classes.tileBorder]: !borderless,
      })}
      alignItems='center'
    >
      <Box className={classes.imageWrapper}>
        <OrgImage
          alt={`${organization.name} logo`}
          className={classes.tileImage}
          src={tileLinks.imageUrl}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography className={classes.orgText} noWrap variant='body1'>
          <Link
            href={tileLinks.organizationUrl}
            target='_blank'
            rel='noreferrer noopener'
          >
            {organization.name}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

OrgTile.propTypes = {
  borderless: PropTypes.bool,
  organization: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['medium', 'large']),
};

export default OrgTile;
