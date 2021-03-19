/* eslint-disable sort-keys */

import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ContributorThumbnail } from './ContributorThumbnail';
import { DropdownArrow } from './DropdownArrow';

const useStyles = makeStyles(theme => ({
  dropdown: {
    '& p': {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    minHeight: '6rem',
    margin: '0.75rem 0',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    border: '1px solid #BCBCBC',
    borderRadius: '4px',
    paddingRight: '1.5rem',
  },
  chevron: {
    cursor: 'pointer',
    fontSize: '1.3rem',
  },
}));

export const Dropdown = ({
  organization,
  children,
  dropdownLength,
  isOpen,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen)
    }
  }, [isOpen]);

  return (
    <Box className="containerDropdown">
      <Box className={classes.dropdown}>
        <ContributorThumbnail organization={organization} />
        {dropdownLength ? (
          <>
            <Typography>({dropdownLength})</Typography>
            <DropdownArrow setOpenFunction={setOpen} />
          </>
        ) : null}
      </Box>
      {open && children}
    </Box>
  );
};
