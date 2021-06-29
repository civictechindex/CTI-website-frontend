import React,{ useRef }  from "react";
import Button from '@material-ui/core/Button';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

export const DropdownArrow  = ({ affiliatedSepOpen,setAfflnSepOpen }) => {

  const useStyles = makeStyles(theme => ({
    buttonStyle:{
      width:'100%',
      backgroundColor: theme.palette.background.default,
      '&.MuiButtonBase-root': {
        backgroundColor: theme.palette.background.default,
        //opacity: '0',
      },
    },
    blueButtonStyle:{
      //backgroundColor: theme.palette.secondary.dark,
      '&.MuiButtonBase-root': {
        backgroundColor: theme.palette.secondary.dark,
        //opacity: '0',
      },
    },
    chevron: {
      cursor: "pointer",
      width: '53px',
      height: '45px',
      color: theme.palette.secondary.dark,
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
      <Button
        //className={classes.buttonStyle}
        className={clsx(classes.buttonStyle, {
          [classes.blueButtonStyle]: affiliatedSepOpen=== true,
        })}
        endIcon={<ExpandMoreOutlinedIcon id = "dropdownChevron" ref={arrow}  className={clsx(classes.chevron, {
          [classes.clickDropDown]: affiliatedSepOpen=== true,
        })} />}
        onClick={()=>handleClickArrow(setAfflnSepOpen)}
      >
      </Button>
      {/* <ExpandMoreOutlinedIcon id = "dropdownChevron" ref={arrow}
        className={clsx(classes.chevron, {
          [classes.clickDropDown]: affiliatedSepOpen=== true,
        })}
        onClick={()=>handleClickArrow(setAfflnSepOpen)}
        alt="/images/Chevron.png" /> */}
    </>
  );

};
