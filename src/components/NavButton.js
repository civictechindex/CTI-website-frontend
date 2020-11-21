import React from 'react';
import { Link } from 'react-router-dom';

const blueVariant = {
    fontFamily: 'Work Sans, san-serif',
    fontWeight: '700',
    padding:'16px',
    backgroundColor: '#0CB2E7',
    height: '48px',
    width: '256px',
    color: 'white',
    border: 'none',
    borderRadius: '24px',
    boxShadow: '4px 4px 12px 4px rgba(4, 45, 95, 0.08)'
}

const defaultVariant = {
    fontFamily: 'Work Sans, san-serif',
    fontWeight: '700',
    padding:'16px',
    backgroundColor: '#FEFEFE',
    width: '256px',
    height: '48px',
    color: '#6D6E74',
    border: 'none',
    borderRadius: '24px',
    boxShadow: '4px 4px 12px 4px rgba(4, 45, 95, 0.08)'
}

/**
 */
export default function NavButton(props) {
    return (
        <>
            <Link to={props.href}>
                <button style={props.variant === 'blue' ? blueVariant : defaultVariant}>
                    {props.children}
                </button>
            </Link>
        </>
    );
}