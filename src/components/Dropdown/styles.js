
import { createUseStyles } from 'react-jss';

export const useStyle = createUseStyles(theme => ({

    dropdown: {
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
    },
    chevron: {
        fontSize: '1.3rem',
        padding: '0.5rem',
        '&:hover': {
            cursor: 'pointer'
        }
    }

})
)