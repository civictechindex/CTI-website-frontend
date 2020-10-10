import React, { useState, useRef } from 'react'
import { useStyle } from './styles';

export const Dropdown = ({ dropdownText, index, dropdownItems, children }) => {
    const [open, setOpen] = useState(false);
    const arrow = useRef(null);
    const classes = useStyle();

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
            <div className={classes.dropdown} tabIndex='0' >
                <h3>{dropdownText}</h3>
                {dropdownItems ? <img ref={arrow} className={classes.chevron} onClick={handleClick} src='/images/link-arrow.png' alt='dropdown chevron'/> : null}
            </div>
            {open && children}
        </div>
    )
}
