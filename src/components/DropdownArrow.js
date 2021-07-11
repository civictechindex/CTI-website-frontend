import React from 'react';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import { makeStyles } from '@material-ui/core/styles';

const DropdownArrow = ({ open, handleOpen }) => {
  const useStyles = makeStyles((theme) => ({
    chevron: {
      cursor: 'pointer',
      width: '53px',
      height: '45px',
      color: theme.palette.secondary.dark,
    },
    clickDropDown: {
      cursor: 'pointer',
      width: '53px',
      height: '45px',
      color: theme.palette.background.default,
    },
  }));

  const classes = useStyles();

  return (
    <>
      {open ? (
        <ExpandLessRoundedIcon
          id='dropdownChevron'
          className={classes.clickDropDown}
          onClick={handleOpen}
        />
      ) : (
        <ExpandMoreRoundedIcon
          id='dropdownChevron'
          className={classes.chevron}
        />
      )}
    </>
  );
};

export default DropdownArrow;
