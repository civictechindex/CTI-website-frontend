
import { createUseStyles } from 'react-jss';

export const useStyle = createUseStyles(theme => ({
    
    firstSectionWrapper: {
        width: '100%',
        background: '#004364',
        color: '#FFE06D',
        boxSizing: 'border-box',
        backgroundImage: 'url("/images/CTI-Contributors-BG-1.png")',
        minHeight: '40vh',
        backgroundPositionY: 'bottom',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'

    },
    banner: {
        height: '20px',
        width: '100px'
    },
    projectsLink: {
        margin: '0',
        paddingTop: '70px',
        fontSize: '14px',
        color: '#FEFEFE',
    },
    sectionContainer: {
        fontFamily: theme.primaryFontFamily,
        boxSizing: 'border-box',
        margin: '0 auto',
        width: '70%',
        '& p': {
            margin: '0',
        },
    },
    heading: {
        textAlign: 'center',
        margin: '1rem auto'
    },
    affiliation: {
        paddingRight: '1rem',
        boxSizing: 'border-box',
        color: '#004364',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.3rem'
    },
    unaffiliatedWrapper: {
        width: '100%',
    },
    affiliatedWrapper: {
        width: '100%',
        backgroundColor: '#F2F2F2',
        paddingBottom: '1rem'
    },
    vectorIcon: {
        width: '2rem',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    placeholder: {
        backgroundColor: 'white',
        height: '90vh'
    },
    
    input: {
        width: '100%',
        borderRadius: '7px',
        height: '5vh',
        backgroundImage: 'url("/images/search.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        backgroundPositionX: '10px',
        textIndent: '30px',
        paddingLeft: '0.3rem',
        margin: '2rem auto'
    },
}
))