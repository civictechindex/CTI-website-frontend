/* eslint-disable sort-keys */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ContributorThumbnail } from './ContributorThumbnail';
import { DropdownArrow } from './DropdownArrow';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  dropdown: {
    margin: '0.75rem 0',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    border: '1px solid #BCBCBC',
    borderRadius: '6px',
    paddingRight: '26.5rem',
    width:'928px',
    height:'80px',
  },
  blueColor:{
    backgroundColor: theme.palette.secondary.dark,
  },
  chevron: {
    cursor: 'pointer',
    fontSize: '1.3rem',
  },
  afflDropdown: {
    paddingLeft: '400px',
    width: '18px',
    height: '30px',
  },

  dropdownStyle : {
    /*
     * maxWidth: '32%',
     * paddingTop:'21px',
     * paddingLeft: '149px',
     */
    fontSize:'24px',
    color:"#004364",
  },
  blueColorStyle : {
    color:'#FEFEFE',
  },

}));

export const Dropdown = ({
  organization,
  children,
  dropdownLength,
  isOpen,
  handleClickArrow,
  arrow,
  affiliatedSepOpen,
}) => {
  const [open, setOpen] = useState(false);

  const [colorStyle, setColor] = useState(false);
  const classes = useStyles();

  const openColor = () => {
    setColor(!colorStyle);
  };


  return (

    <Grid onClick={openColor}>
      {dropdownLength ? (
        <Grid className={clsx(classes.dropdown, {
          [classes.blueColor]: colorStyle === true,
        })}>
          <Grid item >
            <ContributorThumbnail organization={organization}  isOpen={colorStyle} />
          </Grid>
          <Grid item  className={clsx(classes.dropdownStyle, {
            [classes.blueColorStyle]: colorStyle === true,
          }) }>({dropdownLength})
          </Grid>
          <Grid className={classes.afflDropdown}>
            <DropdownArrow className={classes.thumbnailOpen} handleClickArrow={handleClickArrow} arrow={arrow} affiliatedSepOpen={affiliatedSepOpen}/>
          </Grid>
        </Grid>
      ) : null}
      {open && children}

    </Grid>

  );
};
