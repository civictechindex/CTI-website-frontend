import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ContributorThumbnail } from './ContributorThumbnail';
import { DropdownArrow } from './DropdownArrow';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    width: '100%',
    margin: '16px 0 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    borderRadius: '6px',
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      height: '49px',
    },
  },
  arrowBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    [theme.breakpoints.down('md')]: {
      padding: '0 16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 8px',
    },
  },
  open: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.secondary,
    borderRadius: '6px 6px 0 0',
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      height: '49px',
    },
  },
}));

export const Dropdown = ({
  checkboxValue,
  children,
  dropdownLength,
  filtersActive,
  isOpen,
  onClick,
  organization,
}) => {
  const [openChild, setOpenChild] = useState(isOpen ? true : false);
  const [colorStyle, setColor] = useState(isOpen ? true : false);
  const classes = useStyles();

  const handleClick = () => {
    onClick(organization);
    setOpenChild(!openChild);
    setColor(!colorStyle);
  };

  useEffect(() => {
    setOpenChild(isOpen);
    setColor(isOpen);
  }, [isOpen]);

  return (
    <Box data-cy='thumbnail-dropdown'>
      {dropdownLength > 0 ? (
        <Box
          className={clsx(classes.dropdown, {
            [classes.open]: isOpen,
          })}
        >
          <ContributorThumbnail
            organization={organization}
            filtersActive={filtersActive}
            checkboxValue={checkboxValue}
            dropdownLength={dropdownLength}
            isOpen={isOpen}
            isChildThumbnail={false}
          />
          <Box onClick={handleClick} className={classes.arrowBox}>
            <DropdownArrow open={isOpen} />
          </Box>
        </Box>
      ) : (
        <Box item className={classes.dropdown}>
          <ContributorThumbnail
            organization={organization}
            checkboxValue={checkboxValue}
            isChildThumbnail={false}
          />
        </Box>
      )}
      {isOpen && children}
    </Box>
  );
};
export default Dropdown;
