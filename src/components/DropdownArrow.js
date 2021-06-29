import React,{ useRef }  from "react";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

export const DropdownArrow  = ({ affiliatedSepOpen,setAfflnSepOpen }) => {

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
  const arrow = useRef(null);

  const handleClickArrow = (setAfflnSepOpen) => {
    console.log(arrow)
    if (!arrow.current.style.transform) {
      arrow.current.style.transform = "rotate(180deg)";

    } else {
      arrow.current.style.transform = "";
    }
    setAfflnSepOpen((c) => !c);
  };

  return (
    <>
      <ExpandMoreOutlinedIcon id = "dropdownChevron" ref={arrow}
        className={clsx(classes.chevron, {
          [classes.clickDropDown]: affiliatedSepOpen=== true,
        })}
        onClick={()=>handleClickArrow(setAfflnSepOpen)}
        alt="/images/Chevron.png" />
    </>
  );

};
