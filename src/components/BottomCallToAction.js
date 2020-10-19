import React from 'react'

export const BottomCallToAction = ({ heading, buttonText }) => {
    const styles = {
        bottomCallToAction: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '15rem',
            textAlign: 'center',
        },
        heading: {
            fontFamily: 'Work Sans, san-serif',
            color: '#042D5F',
            fontSize: '2.5rem'
        },
        button: {
            fontFamily: 'Work Sans, san-serif',
            fontWeight: '700',
            backgroundColor: '#0CB2E7',
            padding: '1rem 5rem',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            boxShadow: '0.1rem 0.1rem 10px #e0dede ',
            '&:hover': {
                cursor: 'pointer',
            }
        },
    }
    return (

        <div style={styles.bottomCallToAction}>
            <p style={styles.heading}>{heading}</p>
            <a href="/"><button style={styles.button}>{buttonText}</button></a>
        </div>
    )
}