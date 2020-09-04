import React, { useState } from 'react';
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

export default function FAQCard() {
    const classes = useStyles();
    const [openFAQCard, setOpenFAQCard] = useState(true);
    const handleFAQCardClick = () => {
        setOpenFAQCard(!openFAQCard);
    };

    return (
        <div className={classes.card}>
            <ListItem className={classes.question} color={'white'} onClick={handleFAQCardClick}>
                <ListItemText
                    className={classes.questionText}
                    disableTypography
                    primary={<h2>How are projects added to the Civic Tech Index?</h2>}
                />
                <div button className={classes.icons}>
                    {openFAQCard ? <ExpandMore htmlColor={'black'} /> : <ExpandLess htmlColor={'black'} />}
                </div>
            </ListItem>
            <Collapse in={!openFAQCard} timeout="auto" unmountOnExit>
                <Divider />
                <List component="div" disablePadding>
                    <ListItem className={classes.answer}>
                        <ListItemText className={classes.answerText} primary={<Typography customColor={'grey'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra. Nulla aliquet enim tortor at. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nisl pretium fusce id velit ut tortor pretium. Congue nisi vitae suscipit tellus mauris a diam. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.</Typography>} />
                    </ListItem>
                </List>
            </Collapse>
        </div >
    );
}