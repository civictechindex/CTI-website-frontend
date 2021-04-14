import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const useStyles = makeStyles(
    (theme) => ({
        root: {
            maxWidth: 1280,
        },
        cardHeading: {
            color: theme.palette.secondary.dark
        },
        cardParagraphHeading: {
            color: theme.palette.primary.main
        },
        largeButton: {
            button: theme.overrides.MuiButton,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,

        }
    })
);
function VolunteerCardDeskTp(props) {
    const items = props.items;
    const classes = useStyles();
    return (
        <>
            {items.map((i, idx) => {
                let card;
                if (i.title === 'img-3') {
                    card = <div>
                        <Grid item>
                            <Paper elevation={0} id='innerTextCardContainer'>
                                <Typography className={classes.cardHeading} id='cardHeading' gutterBottom variant="h4">
                                    {i.heading}
                                </Typography>
                                <Typography variant="h6" className={classes.cardParagraphHeading} id='pHeading'>
                                    {i.subHeading}
                                </Typography>
                                <br></br>
                                <Typography id='dtpLine1'>
                                    Please <a id='linkText' href="https://www.hackforla.org/#about">complete this application</a> if you would like
                                </Typography>
                                <Typography style={{ position: 'absolute', left: '69px', top: '220px' }}>
                                    {i.dsktpTxtLn2}
                                </Typography>
                                <Typography style={{ position: 'absolute', left: '69px', top: '243px' }}>
                                    <a id='linkText' href="https://www.hackforla.org/projects/civic-tech-index">project team page.</a>
                                </Typography>
                                <Button href='/radicalcollaboration/faq' style={{ border: '2px solid black', backgroundColor: 'white', borderColor: '#0F1D2F', color: 'black', position: 'absolute', left: '60px', top: '288px', width: '225px', margin: '0 auto', padding: '16px' }}>
                                    {i.buttonText}
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item >
                            <Card className={classes.root} id='imgCard'>
                                <CardMedia
                                    id='cardMedia'
                                    className={classes.media}
                                    image={i.src}
                                />
                            </Card>
                        </Grid>
                    </div>
                }
                return (
                    <Grid container id='gridCont' align='center' >
                        <Card className={classes.root} id='outerCard'>
                            {card}
                        </Card>
                    </Grid>
                )
            })}
        </>
    );
}
export default VolunteerCardDeskTp;