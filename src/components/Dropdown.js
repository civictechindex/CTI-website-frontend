/* eslint-disable sort-keys */

import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ContributorThumbnail } from './ContributorThumbnail';
import { DropdownArrow } from './DropdownArrow';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  dropdown: {
    margin: '0.75rem 0',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    border: '1px solid #BCBCBC',
    borderRadius: '4px',
    paddingRight: '26.5rem',
    width:'928px',
    height:'80px',
  },

  chevron: {
    cursor: 'pointer',
    fontSize: '1.3rem',
  },
  blueColor: {
    backgroundColor: "#004364",
    color:"theme​.palette.​text.secondary",
    display: 'flex',
    alignItems: 'center',
    paddingRight: '26.5rem',
    width:'928px',
  },

  afflDropdown: {
    paddingLeft: '365px',
    width: '18px',
    height: '30px',
  },

  dropdownStyle : {
    maxWidth: '32%',
    paddingTop:'21px',
    paddingLeft: '149px',
    fontSize:'24px',
    color:"#004364",
  },

  blueColorStyle : {
    maxWidth: '32%',
    paddingTop:'22px',
    paddingLeft: '146px',
    fontSize:'24px',
    color:'#FEFEFE',
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

    <Grid onClick={openColor} className="containerDropdown">
      {dropdownLength ? (
        <Box className={colorStyle ? `${classes.blueColor} ` : `${classes.dropdown}`} data-cy="contributor-thumbnail">

          <Grid container>
            <Grid item xs={4}>
              <ContributorThumbnail organization={organization}  isOpen={colorStyle} />
            </Grid>
            <Grid item xs={4} className={colorStyle ? `${classes.blueColorStyle} ` : `${classes.dropdownStyle}`}>
                ({dropdownLength})
            </Grid>
          </Grid>
          <Grid>


            <Typography variant='body2' className={classes.afflDropdown}><DropdownArrow className={classes.thumbnailOpen} setOpenFunction={setOpen} /></Typography>


          </Grid>
        </Box>
      ) : null}
      {open && children}

    </Grid>

  );
};
