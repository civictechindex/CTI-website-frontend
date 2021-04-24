/* eslint-disable react/jsx-key */
import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      maxWidth: 1280,
    },
    cardHeading: {
      color: theme.palette.secondary.dark,
    },
    cardParagraphHeading: {
      color: theme.palette.primary.main,
    },
    largeButton: {
      button: theme.overrides.MuiButton,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,

    },
  })
);
const ShareCardDeskTp = (props) => {
  const items = props.items;
  const classes = useStyles();
  return (
    <>
      {items.map((i, idx) => {
        let card;
        if (i.title === 'img-2') {
          card = <div>
            <Grid item>
              <Paper elevation={0} id='innerTextCardContainer'>
                <Typography className={classes.cardHeading} id='rightCardHeading' gutterBottom variant="h4">
                  {i.heading}
                </Typography>
                <Typography variant="h6" className={classes.cardParagraphHeading} id='rightPHeading'>
                  {i.subHeading}
                </Typography>
                <br></br>
                <Typography id='rightDtpLine1'>
                  {i.dsktpTxtLn1}
                </Typography>
                <Typography id='rightDtpLine2'>
                  {i.dsktpTxtLn2}
                </Typography>
                <Button href='/radicalcollaboration/sharethecti' id='buttonRight'>
                  {i.buttonText}
                </Button>
              </Paper>
            </Grid>
            <Grid item >
              <Card className={classes.root} id='imgCardLeft'>
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
export default ShareCardDeskTp;
