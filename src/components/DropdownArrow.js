import React, { useRef } from "react";

export const DropdownArrow = ({ setOpenFunction }) => {

  const arrow = useRef(null);

  const styles = {
    chevron: {
      cursor: "pointer",
      margin: "auto 0 auto auto",
    },
  };
  const handleClick = (setOpenFunction) => {
    if (!arrow.current.style.transform) {
      arrow.current.style.transform = "rotate(180deg)";
    } else {
      arrow.current.style.transform = "";
    }
    setOpenFunction((c) => !c);
  };

  return (
    <img
      id = "dropdownChevron"
      ref={arrow}
      style={styles.chevron}
      onClick={()=>handleClick(setOpenFunction)}
      src="/images/Chevron.png"
      alt="dropdown chevron"
    />
  );
};
