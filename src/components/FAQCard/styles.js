import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 260,
        height: '100%',
        backgroundColor: 'white',
        color: 'white',
        position: 'fixed',
    },
    card: {
        backgroundColor: 'white',
        maxWidth: 1060,
        width: '100%',
        marginLeft:'auto',
        marginRight:'auto',
    },
    answer: {
        backgroundColor: 'white',
        color: theme.backgroundColor6,
    },
    answerText: {
        paddingLeft: '24px',
        paddingRight: '33px',
        fontFamily: theme.secondaryFontFamily,
        backgroundColor: 'white',
        color: theme.backgroundColor6,
    },
    title: {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 260,
        paddingLeft: '10px',
        paddingTop: '10px',
    },
    question: {
        color: 'black',
        backgroundColor: 'white',
    },
    questionText: {
        paddingLeft: '24px',
        //color: theme.primaryTextColor,
        backgroundColor: 'white',
        textAlign: 'left',
        color: 'black',
    },
    icons: {
        backgroundColor: 'white',
    },
}));

export default useStyles;