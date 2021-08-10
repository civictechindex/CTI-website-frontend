import React, { useState, useEffect } from 'react';
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
    border: '1px solid',
    borderColor:theme.palette.outline.gray,
    borderRadius: '6px',
    height:'80px',
    padding:'12px 16px',
    [theme.breakpoints.down('xs')]: {
      height: '64px',
    },
  },
  open: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.secondary,
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      height: '64px',
    },
  },
  flexGrid:{
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
}));

export const Dropdown = ({
  organization,
  children,
  dropdownLength,
  isOpen,
  checkboxValue,
}) => {
  const [openChild, setOpenChild] = useState(isOpen ? true : false);
  const [colorStyle, setColor] = useState(isOpen ? true : false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpenChild(!openChild);
    setColor(!colorStyle);
  };


  useEffect(()=>{
    setOpenChild(isOpen);
    setColor(isOpen);
  },[isOpen])


  return (

    <Grid>
      {dropdownLength > 0 ? (
        <Grid item xs={10} className={clsx(classes.dropdown, { [classes.open]: colorStyle === true })} >
          <Grid>
            <ContributorThumbnail organization={organization}  checkboxValue={checkboxValue} dropdownLength={dropdownLength} isOpen={colorStyle} isChildThumbnail={false}/>
          </Grid>
          <Grid className={classes.flexGrid}></Grid>
          <Grid item container className={classes.flexGrid} onClick={handleOpen}>
            <DropdownArrow  open={openChild} setOpenFunction={setOpenChild}  handleArrow={handleOpen} />
          </Grid>
        </Grid>
      )

        :
        <Grid item xs={10} className={classes.dropdown}>
          <ContributorThumbnail organization={organization}  checkboxValue={checkboxValue} isChildThumbnail={false}/>
        </Grid>

      }
      {openChild && children}

    </Grid>

  );
};
export default Dropdown;
