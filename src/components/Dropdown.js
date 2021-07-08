import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
    borderRadius: '4px',
    paddingRight: '71px',
    height:'80px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '7%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1%',
      height: '64px',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '7%',
      height: '64px',
      marginRight: '7%',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '1%',
      marginRight: '8%',
    },
  },
  blueColor: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.secondary,
  },
  chevron: {
    cursor: 'pointer',
    fontSize: '1.3rem',
  },
  afflDropdown: {
    width: '18px',
    height: '30px',
  },
}));

export const Dropdown = ({
  organization,
  children,
  dropdownLength,
  isOpen,

}) => {
  const [open, setOpen] = useState(isOpen ? true : false);
  const [colorStyle, setColor] = useState(isOpen ? true : false);
  const classes = useStyles();

  const openColor = () => {
    setColor(!colorStyle);

  };

  return (

    <Grid onClick={openColor} className="containerDropdown">
      {dropdownLength ? (
        <Box className={clsx(classes.dropdown, { [classes.blueColor]: colorStyle === true })}>
          <Grid container>
            <Grid item xs={4}>
              <ContributorThumbnail organization={organization} dropdownLength={dropdownLength} isOpen={colorStyle} isChildThumbnail={false}/>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant='body2' className={classes.afflDropdown}>
              <DropdownArrow className={classes.thumbnailOpen} setOpenFunction={setOpen} isOpen={isOpen}/>
            </Typography>
          </Grid>
        </Box>
      ) : null}
      {open && children}

    </Grid>

  );
};
export default Dropdown;
