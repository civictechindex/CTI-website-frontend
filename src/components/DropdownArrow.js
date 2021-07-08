import React, { useRef, useState } from "react";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { makeStyles } from '@material-ui/core/styles';

export const DropdownArrow  = ({ setOpenFunction, isOpen }) => {


  const arrow = useRef(null);
  const [colorStyle, setColor] = useState(isOpen ? true : false);


  const useStyles = makeStyles((theme) => ({
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
      margin: "auto 0 auto auto",
      paddingTop: '10px',
      width: '53px',
      height: '45px',
      color: theme.palette.text.secondary,

    },
  }));

  const handleClick = (setOpenFunction) => {

    setColor(!colorStyle);
    if (!arrow.current.style.transform) {
      arrow.current.style.transform = "rotate(180deg)";

    } else {
      arrow.current.style.transform = "";
    }
    setOpenFunction((c) => !c);
  };

  const classes = useStyles();

  return (

    <>
      <ExpandMoreOutlinedIcon id = "dropdownChevron" ref={arrow}
        className={colorStyle ? `${classes.clickDropDown} ` : `${classes.chevron}`}
        onClick={()=>handleClick(setOpenFunction)}
        alt="/images/Chevron.png" />



    </>
  );

};
