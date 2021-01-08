import React, { useRef, useState } from 'react'

const dropdown = {
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '2px',
  boxShadow: '0.1rem 0.1rem 10px #e0dede ',
  boxSizing: 'border-box',
  color: '#004364',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0.4rem 0',
  padding: '0 1rem',
  width: '100%',
};

const chevron = {
  '&:hover': {
    cursor: 'pointer',
  },
  fontSize: '1.3rem',
  padding: '0.5rem',
}

export const Dropdown = ({ dropdownText, index, dropdownItems, children }) => {
  const [open, setOpen] = useState(false);
  const arrow = useRef(null);

  const handleClick = () => {
    if (!arrow.current.style.transform) {
      arrow.current.style.transform = 'rotate(180deg)';
    } else {
      arrow.current.style.transform = '';
    }
    setOpen(c => !c);
  }

  return (
    <div key={index} style={{ width: '100%' }} >
      <div style={dropdown} tabIndex='0' >
        <h3>{dropdownText}</h3>
        {dropdownItems ? <img ref={arrow} style={chevron} onClick={handleClick} src='/images/link-arrow.png' alt='dropdown chevron'/> : null}
      </div>
      {open && children}
    </div>
  )
}
