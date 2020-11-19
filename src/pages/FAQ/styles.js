import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    page: {
        fontFamily: theme.primaryFontFamily,
        '& section': {
            boxSizing: 'border-box',
        },
    },
    /**********     HELP SECTION     **********/
    mainSection: {
        width: '100%',
        padding: '75px 0 10px 0',
        backgroundColor: '#004364',
    },
    url: {
        width: 'fit-content',
        color:'#FEFEFE',
        margin: '0px 120px 48px 190px',
    },
    heading: {
        fontSize: '36px',
        lineHeight: '38px',
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: '750px',
        margin: '70px auto 0px auto',
    },
    searchContainer: {
        display: 'flex',
        margin: '0 auto 50px auto',
        paddingTop: '48px',
        width: 'fit-content',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '750px',
    },
    listItemContainer: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '260px',
        margin: '10px',
    },
    listItemCircle: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: '#000000',
    },
    listItemText: {
        textTransform: 'uppercase',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '500',
        width: '216px',
        marginLeft: '15px',
    },
    btnContainer: {
        width: '100%',
        textAlign: 'center',
    },
    btn: {
        display: 'inline-block',
        fontWeight: 'bold',
        fontSize: '16px',
        color: theme.button2TextColor,
        border: `1px solid ${theme.button2TextColor}`,
        backgroundColor: theme.button2BG,
        borderRadius: '22.5px',
        width: '270px',
        height: '45px',
        margin: '10px 18px 18px 18px',
        outline: 'none',
        cursor: 'pointer',
    },
    black: {
        color: theme.button1TextColor,
        backgroundColor: theme.button1BG,
        border: `1px solid ${theme.button1BG}`,
    },
    /**********     FAQ SECTION     **********/
    faqSection: {
        width: '100%',
        minHeight: '380px',
        backgroundColor: theme.backgroundColor2,
        padding: '0 !important',
    },
    faqHeading: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: theme.primaryTextColor,
        margin: '0',
        paddingBottom: '36px',
        textAlign: 'left',
        //margin: '0 0 0 152px',
    },
    faqContainer: {
        maxWidth: '1060px',
        margin: '0 0 0 152px',
        padding: '42px 0',
    },
    faqCardsContainer: {
        textAlign: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
    },
    faqImgs: {
        display: 'inline-block',
        width: '170px',
        height: '100px',
        objectFit: 'scale-down',
        margin: '20px 20px',
    },
    /**********     TRENDING-TOPICS SECTION     **********/
    trendingTopicsSection: {
        backgroundColor: theme.backgroundColor3,
    },
    trendingTopicsContainer: {
        maxWidth: '770px',
        paddingTop: '42px',
        margin: '0 auto',
    },
    trendingTopicsHeader: {
        fontSize: '42px',
        lineHeight: '45px',
        margin: '0',
    },
    allTopicsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    topicContainer: {
        display: 'inline-block',
        position: 'relative',
        minWidth: '48%',
        paddingTop: '18.5%',
        marginTop: '2.5%',
        backgroundColor: theme.backgroundColor6,
    },
    trendingTopicsDetails: {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: theme.primaryTextColor,
        margin: '0',
        position: 'absolute',
        width: 'fit-content',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    /**********     GET-STARTED SECTION     **********/
    getStartedSection: {
        padding: '60px 0',
        textAlign: 'center',
    },
    getStartedHeading: {
        fontWeight: '500',
        fontSize: '36px',
        margin: '0',
        marginBottom: '30px',
    },
    getStartedBtn: {
        display: 'inline-block',
        fontWeight: 'bold',
        fontSize: '16px',
        color: theme.button1TextColor,
        border: `1px solid ${theme.button1BG}`,
        backgroundColor: theme.button1BG,
        borderRadius: '22.5px',
        width: '270px',
        height: '45px',
        outline: 'none',
        cursor: 'pointer',
    },
    /**********     MEDIA-QUERIES     **********/
    '@media (max-width: 900px)': {
        btnContainer: {
            marginTop: '50px',
        },
    },
    '@media (max-width: 675px)': {
        trendingTopicsHeader: {
            fontSize: '21px',
            lineHeight: '26px',
            width: '260px'
        },
        trendingTopicsDetails: {
            fontSize: '14px',
        },
        mainSection: {
            paddingTop: '40px',
        },
        heading: {
            fontSize: '21px',
            lineHeight: '25px',
            maxWidth: '240px',
            margin: '0 auto'
        },
        btn: {
            width: '180px',
            height: '30px',
            margin: '5px 0',
        },
        btnContainer: {
            margin: '0 auto',
            width: '180px',
            marginTop: '25px',
        },
        faqHeading: {
            fontSize: '21px',
            lineHeight: '26px',
            width: '180px',
        },
        faqImgs: {
            width: '35vw',
            height: '20vw',
            margin: '2vw 5vw',
        },
        getStartedHeading: {
            fontSize: '21px',
            fontWeight: 'bold',
        },
        getStartedBtn: {
            width: '180px',
            height: '30px',
        },
        searchContainer: {
            maxWidth: '240px',
            margin: '0 auto'
        },
    },
}))

export default useStyles