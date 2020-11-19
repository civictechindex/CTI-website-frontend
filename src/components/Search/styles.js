import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    page: {
        fontFamily: theme.fontFamily,
        '& section': {
            boxSizing: 'border-box',
            paddingRight: '20px',
            paddingLeft: '20px',
        },
    },
    /**********     SEARCH BAR     **********/
    searchBar: {
        width: '810px',
        fontSize: '21px',
        padding: '10px 10px 10px 10px',
        backgroundColor: theme.backgroundColor2,
        border: 'none',
    },

    icons: {
        color: theme.backgroundColor6,
        padding: '10px',
        backgroundColor: theme.backgroundColor2,
        width: '70px',
        textAlign: 'center',
    },

    /**********     MEDIA-QUERIES     **********/
    '@media (max-width: 900px)': {
        searchBar: {
            fontSize: '18px',
            width: '700px'
        },
    },
    '@media (max-width: 675px)': {
        searchBar: {
            fontSize: '12px',
            width: '260px'
        },
    }
})
);

export default useStyles;