import React from "react";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import { makeStyles } from '@material-ui/core/styles';

export const DropdownArrow  = ({ open,handleOpen }) => {

  const useStyles = makeStyles(theme => ({
    chevron: {
      cursor: "pointer",
      width: '53px',
      height: '45px',
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down('xs')]: {
        width: '20px',
        height: '17px',
      },
    },
    clickDropDown: {
      cursor: "pointer",
      width: '53px',
      height: '45px',
      color: theme.palette.background.default,
      [theme.breakpoints.down('xs')]: {
        width: '20px',
        height: '17px',
      },
    },
  }));

  const classes = useStyles();
  const handleClick = (setOpenFunction) => {
    setOpenFunction((c) => !c);
  };

  return (
    <>
      {open ? <ExpandLessRoundedIcon data-cy="dropdown-chevron" className={classes.clickDropDown} onClick={handleOpen} />
        : <ExpandMoreRoundedIcon data-cy="dropdown-chevron"  className={classes.chevron}  onClick={()=>handleClick}/>}
    </>
  );

};
