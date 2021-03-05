import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme) => ({
        root: {
            maxWidth: 328,
        },
        media: {
            height: 192,
        },
        cardHeading: {
            color: theme.palette.secondary.dark
        },
        cardParagraphHeading: {
            color: theme.palette.primary.main
        }
    })
);

const CardItem = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} lg={4} style={{ margin: 'auto' }} align='center' >
            <Card className={classes.root} style={{ border: '2px solid red', padding: '0px', marginBottom: '5px' }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                    >
                        <img style={{ width: '328px', height: '192px' }} src={props.src} alt={props.alt} />
                    </CardMedia>
                    <CardContent>
                        <Typography className={classes.cardHeading} style={{ position: 'absolute', height: '38px', left: '16px', top: '203px', fontSize: '28px', lineHeight: '38px' }} gutterBottom variant="h4">
                            Donate
                        </Typography>

                        <Typography variant="h6" className={classes.cardParagraphHeading} style={{
                            height: '169px', marginTop: '50px', textAlign: 'left', marginLeft: '16px', marginRight: '16px'
                        }}>
                            Every gift helps us continue our work.
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
              </Button>
                    <Button size="small" color="primary">
                        Learn More
              </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default function PhotoCard(props) {

    const items = props.items;


    return (
        <>
            {items.map((i, idx) => {
                return <CardItem src={i.src} alt={i.alt} key={idx} />
            })}
        </>
    );
}
