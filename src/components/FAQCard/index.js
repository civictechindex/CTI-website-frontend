import React, { useState,useEffect } from 'react';
import useStyles from './styles.js';
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    Typography,
    Divider,
} from '@material-ui/core';

import {
    ExpandLess,
    ExpandMore,
} from '@material-ui/icons';
import useFaqs from './faqHook'

export default function FAQCard(props) {
    //const faqs = props.faqs
    const classes = useStyles();
    const [faqs] = useFaqs()
    //const [faqs, setFaqs] = React.useState([]);
    console.log(faqs)
    const [openFAQCard, setOpenFAQCard] = useState(true);
    const handleFAQCardClick = () => {
        setOpenFAQCard(!openFAQCard);
    };


    return (
        <div className={classes.card}>
            {faqs.map((faq) => { 
                return(
                    <>
                    <ListItem className={classes.question} color={'white'} onClick={handleFAQCardClick}>
                    <ListItemText
                        className={classes.questionText}
                        disableTypography
                        primary={<h3 style={{ color: '#004364' }}>{faq.question}</h3>}
                    />
                    <div button className={classes.icons}>
                        {openFAQCard ? <ExpandMore htmlColor={'black'} /> : <ExpandLess htmlColor={'black'} />}
                    </div>
                </ListItem>
                <Collapse in={!openFAQCard} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                        <ListItem className={classes.answer}>
                            <ListItemText className={classes.answerText} primary={<Typography customColor={'grey'}>{faq.answer}</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>
                </>
                )  
            })}

        </div >
    );
}