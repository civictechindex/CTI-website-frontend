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
const FAQCardDeskTp = (props) => {
  const items = props.items;
  const classes = useStyles();
  return (
    <>
      {items.map((i, idx) => {
        let card;
        if (i.title === 'img-4') {
          card = <div>
            <Grid item>
              <Paper elevation={0} id='innerTextCardContainer'>
                <Typography className={classes.cardHeading} id='faqCardHeading' gutterBottom variant="h4">
                  {i.heading}
                </Typography>
                <Typography variant="h6" className={classes.cardParagraphHeading} id='faqPHeading'>
                  {i.subHeading}
                </Typography>
                <br></br>
                <Typography id='faqRightDtpLine1'>
                  {i.dsktpTxtLn1}
                </Typography>
                <Typography id='faqRightDtpLine2'>
                  {i.dsktpTxtLn2}
                </Typography>
                <Typography id='faqLinkText'>
                                    View our <a id='linkText' href="/faq">FAQ</a> to find answers or <a id='linkText' href="mailto:civictechindex@hackforla.org">contact us.</a>
                </Typography>
                <Button href='/faq' id='faqButton'>
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
export default FAQCardDeskTp;
