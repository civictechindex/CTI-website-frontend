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
    margin: '16px auto',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    border: '1px solid #BCBCBC',
    borderRadius: '4px',
<<<<<<< HEAD
    padding: '12px 0px 12px 0px',
    width:'928px',
=======
    paddingRight: '71px',
    width:'1014px',
>>>>>>> main
    height:'80px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '-57px',
      width: '756px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-83px',
      width: '473px',
      height: '64px',
    },
  },
  blueColor: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-83px',
      width: '473px',
      height: '64px',
    },
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
  const [open, setOpen] = useState(false);
  const [colorStyle, setColor] = useState(false);
  const classes = useStyles();

  const openColor = () => {
    setColor(!colorStyle);
  };

  return (

    <Grid onClick={openColor} >
      {dropdownLength ? (
        <Box className={clsx(classes.dropdown, { [classes.blueColor]: colorStyle === true })} >
          <Box>
            <ContributorThumbnail organization={organization} dropdownLength={dropdownLength} isOpen={colorStyle} isChildThumbnail={false}/>
          </Box>
          <Box flexGrow={1}>
            <DropdownArrow className={classes.thumbnailOpen} setOpen={setOpen} colorStyle={colorStyle} />
          </Box>
        </Box>
      ) : null}
      {open && children}

    </Grid>

  );
};
export default Dropdown;
