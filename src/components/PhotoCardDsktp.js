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
                            <Paper elevation={0} style={styles.cardContainer}></Paper>
                        </Card>
                    </Grid>
                )
            })}
        </>
    );
}

export default PhotoCardDsktp;