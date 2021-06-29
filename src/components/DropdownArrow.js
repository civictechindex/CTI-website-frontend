import React from "react";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

export const DropdownArrow  = ({ handleClickArrow,arrow,affiliatedSepOpen }) => {

  const useStyles = makeStyles(theme => ({
    chevron: {
      cursor: "pointer",
      margin: "auto 0 auto auto",
      paddingTop: '10px',
      width: '53px',
      height: '45px',
      color: theme.palette.secondary.dark,
      marginTop: '-10px',
    },
    clickDropDown: {
      color: theme.palette.background.default,
    },
  }));


  const classes = useStyles();

  return (
    <>
      <ExpandMoreOutlinedIcon id = "dropdownChevron" ref={arrow}
        className={clsx(classes.chevron, {
          [classes.clickDropDown]: affiliatedSepOpen=== true,
        })}
        onClick={handleClickArrow}
        alt="/images/Chevron.png" />
    </>
  );

};
