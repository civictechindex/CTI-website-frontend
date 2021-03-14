import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
            button: theme.overrides.MuiButton
        }
    })
);

function PhotoCardDsktp(props) {
    const items = props.items;
    const classes = useStyles();

    return (
        <>
            {items.map((i, idx) => {
                const styles = {
                    cardContainer: {
                        backgroundImage: `linear-gradient(
                            to left,
                            rgba(245, 246, 252, 0.1),
                            rgba(255, 255, 255, 0.9999)
                            ),url(${i.src})`,
                        height: `460px`,
                        backgroundRepeat: `no-repeat`,
                        margin: `0 0 0 495px`

                    }
                };
                return (
                    <Grid item style={{ margin: 'auto' }} align='center' >
                        <Card className={classes.root} style={{ position: 'relative', padding: '0px', marginBottom: '5px', width: '1184px' }}>
                            <Paper elevation={0} style={styles.cardContainer}>
                                <Typography className={classes.cardHeading} style={{ position: 'absolute', left: '69px', top: '94px', fontSize: '42px', lineHeight: '48px' }} gutterBottom variant="h4">
                                    {i.heading}
                                </Typography>
                                <Typography variant="h6" className={classes.cardParagraphHeading} style={{
                                    position: 'absolute', left: '69px', top: '159px'
                                }}>
                                    {i.subHeading}
                                </Typography>
                                <br></br>
                                <Typography style={{ position: 'absolute', left: '69px', top: '197px' }}>
                                    {i.dsktpTxtLn1}
                                </Typography>
                                <Typography style={{ position: 'absolute', left: '69px', top: '220px' }}>
                                    {i.dsktpTxtLn2}
                                </Typography>
                                <Typography style={{ position: 'absolute', left: '69px', top: '243px' }}>
                                    {i.dsktpTxtLn3}
                                </Typography>
                                <Typography variant="h6" style={{ position: 'absolute', left: '69px', top: '280px' }} >
                                    {i.footerText}
                                </Typography>
                                <Button className={classes.largeButton} style={{ position: 'absolute', left: '60px', top: '330px', backgroundColor: '#5fcaf9', width: '225px', margin: '0 auto', padding: '16px' }}>
                                    {i.buttonText}
                                </Button>
                            </Paper>
                        </Card>
                    </Grid>
                )
            })}
        </>
    );
}

export default PhotoCardDsktp;