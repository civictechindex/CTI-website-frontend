import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DropdownArrow from '../../components/DropdownArrow';
import getOrganizationLinks from '../../utils/getOrganizationLinks';
import OrgTile from './OrgTile';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    borderRadius: '6px',
    boxSizing: 'border-box',
    display: 'flex',
    height: 80,
    margin: '24px auto',
    padding: '12px 16px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 64,
    },
  },
  blueColor: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.secondary,
  },
}));

const OrgDropdown = ({
  children,
  organization,
  isOpen,
  dropdownLength,
  isChildThumbnail,
}) => {
  const classes = useStyles();

  const [dropdownLinks, setDropdownLinks] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const links = getOrganizationLinks(organization);
    if (!links.imageUrl || links.imageUrl.includes('fbcdn')) {
      links.imageUrl = '/images/default-github-repo-image.png';
    }
    setDropdownLinks(links);
  }, [organization]);

  const handleOpen = () => {
    setDropdownOpen(true);
  };

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid
        item
        xs={10}
        className={clsx(classes.dropdown, {
          [classes.blueColor]: dropdownOpen,
        })}
      >
        <Box display='flex' alignItems='center' style={{ width: '100%' }}>
          <Box>
            <OrgTile organization={organization} size='large' borderless />
          </Box>
          <Box flexGrow={1} onClick={handleOpen}></Box>
          <Box onClick={handleOpen}>
            <DropdownArrow
              open={dropdownOpen}
              setOpenFunction={handleOpen}
              handleArrow={handleOpen}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1} />
      {dropdownOpen && children}
    </Grid>
  );
};

export default OrgDropdown;
