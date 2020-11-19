import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import '../../styles.css'
import SearchBar from '../../components/Search/index';
import FAQCard from '../../components/FAQCard/index';


const FAQ = () => {
    const classes = useStyles()
    //const [faqs, setFaqs] = useState([]);

    // useEffect(() => {
    //   //make API calls
    //   fetch(
    //     `http://test-civictechindexadmin.herokuapp.com/api/faqs/`,
    //     {
    //       method: "GET",
        
    //     }
    //   )
    //     .then((response) => {
    //       if (response.ok) {
    //         console.log(response);
    //         return response.json();
    //       } else {
    //         throw new Error("Something went wrong");
    //       }
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       setFaqs(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },[]);

    return (
      <>
      <Header />
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
                        <FAQCard/>
                    </div>
                </div>
            </section>
            <section className={classes.getStartedSection}>
                <h2 className={classes.getStartedHeading}>Can't find an answer?</h2>
                <button className={`${classes.getStartedBtn} ${classes.black}`}>Contact Us</button>
            </section>
        </div>
        <Footer />
    </>
    )
}

export default FAQ