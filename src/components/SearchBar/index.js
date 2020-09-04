import React from 'react';
import useStyles from './styles.js';
import {
    Search
} from '@material-ui/icons';

export default function SearchBar() {
    const classes = useStyles();

    return (
        <div>
            {/* <div className={classes.icons}>
                <Search />
            </div> */}
            <input className={classes.searchBar} type="text" placeholder="Search the knowledge base" />
        </div>
    );
}
