import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100%",
  },
  dropdown: {
    margin: "0.4rem 0",
    color: "#004364",
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "2px",
    padding: "0 1rem",
    "&:nth-of-type(2)": {
      color: "red",
    },
  },
  chevron: {
    fontSize: "1.3rem",
    padding: "0.5rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const Dropdown = ({
  dropdownText,
  index,
  dropdownItems,
  children,
  hasInputValue,
}) => {
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    if (hasInputValue) {
      setOpen(true);
    }
  }, [hasInputValue]);

  return (
    <div key={index} className={classes.container}>
      <div className={classes.dropdown} tabIndex="0">
        <h3>
          {dropdownText}{" "}
          {dropdownItems ? <span>({dropdownItems.length})</span> : null}
        </h3>
        {dropdownItems ? (
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
