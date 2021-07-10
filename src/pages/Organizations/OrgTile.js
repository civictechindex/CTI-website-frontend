import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import getOrganizationLinks from '../../utils/getOrganizationLinks';

const useStyles = makeStyles((theme) => ({
  thumbnailWrapper: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: (props) => (props.size === 'medium' ? 64 : 80),
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      height: (props) => (props.size === 'medium' ? 48 : 56),
    },
  },
  thumbnailImage: {
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
    fontSize: 24,
    paddingLeft: 8,
    width: 'calc(100% - 24px)',
    '& a, & a:visited': {
      color: theme.palette.secondary.dark,
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

const OrgTile = ({ organization, size = 'medium' }) => {
  const classes = useStyles({ size });

  const [tileLinks, setTileLinks] = useState({});

  useEffect(() => {
    const links = getOrganizationLinks(organization);
    if (!links.imageUrl || links.imageUrl.includes('fbcdn')) {
      links.imageUrl = '/images/default-github-repo-image.png';
    }
    setTileLinks(links);
  }, [organization]);

  return (
    <Box className={classes.thumbnailWrapper} alignItems='center'>
      <Box className={classes.imageWrapper}>
        <img
          alt={`${organization.name} logo`}
          className={classes.thumbnailImage}
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
  organization: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['medium', 'large']),
};

export default OrgTile;
