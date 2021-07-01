import React,{ useState,useRef }  from "react";
import Button from '@material-ui/core/Button';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

export const DropdownArrow  = ({ gp,affiliatedSepOpen,setAfflnSepOpen,setOpen,colorStyle }) => {

  const useStyles = makeStyles(theme => ({
    buttonStyle:{
      width:'100%',
      backgroundColor: theme.palette.background.default,
      '&:hover': {
        backgroundColor: theme.palette.background.default,
      },
      '&.MuiButtonBase-root': {
        backgroundColor: theme.palette.background.default,
      },
      '&.MuiButton-label':{
        paddingLeft:'650px',
        marginRight:'0px',
      },
    },
    blueButtonStyle:{
      '&.MuiButtonBase-root': {
        backgroundColor: theme.palette.secondary.dark,
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
  const [arrowColor, setArrowColor] = useState(false);

  const arrowStyle = () =>{
    if (!arrow.current.style.transform) {
      arrow.current.style.transform = "rotate(180deg)";

    } else {
      arrow.current.style.transform = "";
    }
  }

  const handleClickButtonGp = (setAfflnSepOpen) => {
    setArrowColor(!arrowColor);
    arrowStyle();
    setAfflnSepOpen((c) => !c);
  };
  const handleClickButton = (setOpen) => {
    setArrowColor(!arrowColor);
    arrowStyle();
    setOpen((c) => !c);
  };
  return (
    <>
      {gp ? <Button
        className={clsx(classes.buttonStyle, {
          [classes.blueButtonStyle]: affiliatedSepOpen=== true,
        })}
        endIcon={<ExpandMoreOutlinedIcon id = "dropdownChevron" ref={arrow}  className={clsx(classes.chevron, {
          [classes.clickDropDown]: arrowColor === true,
        })} />}
        onClick={()=>handleClickButtonGp(setAfflnSepOpen)}
      >
      </Button> : <Button
        className={clsx(classes.buttonStyle, {
          [classes.blueButtonStyle]: colorStyle=== true,
        })}
        endIcon={<ExpandMoreOutlinedIcon id = "dropdownChevron" ref={arrow}  className={clsx(classes.chevron, {
          [classes.clickDropDown]: arrowColor === true,
        })} />}
        onClick={()=>handleClickButton(setOpen)}
      >
      </Button> }

    </>
  );

};
