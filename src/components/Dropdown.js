import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { ContributorThumbnail } from "./ContributorThumbnail";

const useStyles = createUseStyles({
  container: {
    width: "100%",
  },
  codeForAll: {
    "& h4": {
        color: "#004364",
    },
    color: "#0F1D2F",
    margin: "1rem auto",
    boxSizing: "border-box",
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "2px",
    paddingRight: "1rem",
    "&:nth-of-type(2)": {
      color: "red",
    },
  },
  dropdown: {
    "& h5": {
      color: "#0F1D2F",
      margin: '0'
    },
    "& p": {
        color: "#0F1D2F",
        fontSize: '1.3rem',
        fontWeight: 'bold',
      },
    minHeight: '6rem',
    // margin: "0.75rem 0",
    color: "#004364",
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "2px",
    paddingRight: "1rem",
    "&:nth-of-type(2)": {
      color: "red",
    },
  },
  chevron: {
    marginLeft: "auto",
    fontSize: "1.3rem",
    padding: "0.5rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const Dropdown = ({
  organization,
  children,
  hasInputValue,
  dropdownLength,
  isOpen
}) => {
  const [open, setOpen] = useState(isOpen);
  const arrow = useRef(null);
  const classes = useStyles();

  const handleClick = () => {
    if (!arrow.current.style.transform) {
      arrow.current.style.transform = "rotate(180deg)";
    } else {
      arrow.current.style.transform = "";
    }
    setOpen((c) => !c);
  };

//   useEffect(() => {
//           if (dropdownLength < 3 && hasInputValue) {
//             setOpen(true);
//           }
//   }, [hasInputValue, dropdownLength]);

  return (
    <div  className={classes.container}>
      <div
        className={
          typeof organization === "string"
            ? classes.codeForAll
            : classes.dropdown
        }
      >
        <div>
          <ContributorThumbnail organization={organization} />
        </div>
        {dropdownLength ? (
          <h5>
            <span>({dropdownLength})</span>
          </h5>
        ) : null}
        {dropdownLength ? (
          <img
            ref={arrow}
            className={classes.chevron}
            onClick={handleClick}
            src="/images/Chevron.png"
            alt="dropdown chevron"
          />
        ) : null}
      </div>
      {open && children}
    </div>
  );
};
