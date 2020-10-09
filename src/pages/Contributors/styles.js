
import { createUseStyles } from 'react-jss';

export const useStyle = createUseStyles(theme => ({
    body: {
        /* Hide scrollbar for IE, Edge and Firefox */
        msOverflowStyle: 'none',  /* IE and Edge */
        scrollbarWidth: 'none',  /* Firefox */
        /* Hide scrollbar for Chrome, Safari and Opera */
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
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
    unaffiliatedWrapper: {
        width: '100%',
    },
    unaffiliated: {
        paddingRight: '1rem',
        boxSizing: 'border-box',
        color: '#004364',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.3rem'
    },
    affiliatedWrapper: {
        width: '100%',
        backgroundColor: '#F2F2F2',
        paddingBottom: '1rem'
    },
    affiliated: {
        boxSizing: 'border-box',
        color: '#004364',
        width: '100%',
        paddingRight: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.3rem'
    },
    hidden: {
        display: 'none'
    },

    vectorIcon:{
        width:'2rem',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    placeholder: {
        backgroundColor: 'white',
        height: '90vh'
    },
    callToAction2: {
        fontFamily: theme.primaryFontFamily,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '15rem',
        textAlign: 'center',
    },
    button: {
        fontFamily: theme.primaryFontFamily,
        fontWeight:'700',
        backgroundColor:'#0CB2E7', 
        padding: '1rem 5rem',
        color:'white', 
        border:'none',
        borderRadius:'20px',
        boxShadow: '0.1rem 0.1rem 10px #e0dede ',
        '&:hover': {
            cursor: 'pointer',
        }
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
        paddingLeft:'0.3rem',
        margin: '2rem auto'
    },
}
))