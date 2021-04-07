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
        },
        largeButton: {
            button: theme.overrides.MuiButton
        },
    })
);

function PhotoCardMobile(props) {
    const items = props.items;
    const classes = useStyles();

    return (
        <>
            {items.map((i, idx) => {
                return (
                    <Grid item xs={12} lg={4} style={{ margin: 'auto' }} align='center' >
                        <Card className={classes.root} style={{ padding: '0px', marginBottom: '5px' }}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img style={{ width: '328px', height: '192px' }} src={i.src} alt={i.alt} />
                                </CardMedia>
                                <CardContent>
                                    <Typography className={classes.cardHeading} style={{ position: 'absolute', left: '16px', top: '203px', fontSize: '28px', lineHeight: '38px' }} gutterBottom variant="h4">
                                        {i.heading}
                                    </Typography>
                                    <Typography variant="h6" className={classes.cardParagraphHeading} style={{
                                        marginTop: '50px', textAlign: 'left', marginLeft: '16px', marginRight: '16px'
                                    }}>
                                        {i.subHeading}
                                    </Typography>
                                    <br></br>
                                    <Typography style={{ textAlign: 'left', marginLeft: '16px', marginRight: '0px', size: '20px', lineHeight: '21px', marginTop: '5px', marginBottom: '8px' }}>
                                        {i.textBody}
                                    </Typography>
                                    <Typography variant="h6" >
                                        {i.footerText}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className={classes.largeButton} style={{ backgroundColor: '#5fcaf9', width: '225px', margin: '0 auto', padding: '16px' }}>
                                    {i.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </>
    );
}

export default PhotoCardMobile;