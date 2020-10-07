import React, { useState, useRef, useEffect } from 'react'
import {useStyle} from './styles';

export const Dropdown = ({ dropdownText, index, dropdownItems, children }) => {
    const [open, setOpen] = useState(false);
    const arrow = useRef(null);
    const classes = useStyle();
    
    const styles = {
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
      }
      const chevron = {
        padding:'0.6rem',
        '&hover':{
            cursor:'pointer'
        }
      }


    const handleClick = () => {
        if(!arrow.current.style.transform){
            arrow.current.style.transform = 'rotate(180deg)';
        }else{
            arrow.current.style.transform = '';
        }
        setOpen(c => !c);
    }
    return (
        <div key={index} style={{width:'100%'}} >
            <div className={classes.dropdown} tabIndex='0' >
                <h3>{dropdownText}</h3>
                {dropdownItems ? <img ref={arrow} className={classes.chevron}  onClick={handleClick} src='/images/link-arrow.png'/> : null}
            </div>
            {open && children}
        </div>
    )
}
