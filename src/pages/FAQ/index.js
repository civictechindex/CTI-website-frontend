import React from 'react';
import useStyles from './styles.js';
import SearchBar from '../../components/SearchBar/index';
import FAQCard from '../../components/FAQCard/index';


const FAQ = () => {
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <section className={classes.mainSection}>
                <p className={classes.url}>Home / Radical Collaboration / FAQ</p>
                <h1 className={classes.heading}>How can we help?</h1>
                <div className={classes.searchContainer}>
                    <SearchBar />
                </div>
            </section>
            <section className={classes.faqSection}>
                <div className={classes.faqContainer}>
                    <h2 className={classes.faqHeading}>Frequently Asked Questions:</h2>
                    <div className={classes.faqCardsContainer}>
                        <FAQCard />
                    </div>
                </div>
            </section>
            <section className={classes.getStartedSection}>
                <h2 className={classes.getStartedHeading}>Can't find an answer?</h2>
                <button className={`${classes.getStartedBtn} ${classes.black}`}>Contact Us</button>
            </section>
        </div>
    )
}

export default FAQ