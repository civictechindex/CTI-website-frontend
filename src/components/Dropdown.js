import React, { useState } from 'react'

export const Dropdown = ({ dropdownText, index, dropdownItems, children }) => {
    dropdownItems = dropdownItems || null;
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
    const [open, setOpen] = useState(false);
    return (
        <div key={index} style={{width:'100%'}}>
            <div style={styles}  tabIndex='0' >
                <h3>{dropdownText}</h3>
                {dropdownItems ? <img onClick={() => setOpen(c => !c)} src='/images/link-arrow.png'/> : null}
            </div>
            {open && children}
        </div>
    )
}
