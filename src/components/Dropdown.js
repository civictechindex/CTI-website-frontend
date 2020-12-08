import React, { useState, useRef } from 'react'

const dropdown = {
    margin: '0.4rem 0',
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#004364',
    backgroundColor: 'white',
    borderRadius: '2px',
    padding: '0 1rem',
    boxShadow: '0.1rem 0.1rem 10px #e0dede ',
};

const chevron = {
    fontSize: '1.3rem',
    padding: '0.5rem',
    '&:hover': {
        cursor: 'pointer'
    }
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
