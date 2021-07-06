import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ContributorThumbnail } from './ContributorThumbnail';
import { DropdownArrow } from './DropdownArrow';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({

  dropdown: {
    margin: '24px auto',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    border: '1px solid #BCBCBC',
    borderRadius: '6px',
    height:'80px',
    padding:'12px 16px',
    [theme.breakpoints.down('xs')]: {
      height: '64px',
    },
  },
  blueColor: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      height: '64px',
    },
  },
  flexGrid:{
    flexGrow: 1,
  },
}));

export const Dropdown = ({
  organization,
  children,
  dropdownLength,
  isOpen,
}) => {
  const [open, setOpen] = useState(false);
  const [colorStyle, setColor] = useState(false);
  const classes = useStyles();

  const openColor = () => {
    setColor(!colorStyle);
  };

  return (

    <Grid onClick={openColor} >
      {dropdownLength ? (
        <Grid item xs={10} className={clsx(classes.dropdown, { [classes.blueColor]: colorStyle === true })} >
          <Grid>
            <ContributorThumbnail organization={organization} dropdownLength={dropdownLength} isOpen={colorStyle} isChildThumbnail={false}/>
          </Grid>
          <Grid className={classes.flexGrid}></Grid>
          <Grid>
            <DropdownArrow className={classes.thumbnailOpen} setOpen={setOpen} colorStyle={colorStyle} />
          </Grid>
        </Grid>
      ) : null}
      {open && children}

    </Grid>

  );
};
export default Dropdown;
