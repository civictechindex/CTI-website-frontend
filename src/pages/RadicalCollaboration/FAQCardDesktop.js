/* eslint-disable react/jsx-key */
import React from 'react';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';

const FAQCardDesktop = (props) => {
  const items = props.items;
  const classes = useStyles();
  return (
    <>
      {items.map((i) => {
        let card;
        if (i.title === 'img-4') {
          card = <div>
            <Grid item>
              <Paper elevation={0} className={classes.innerTextCardContainer}>
                <Typography className={classes.faqCardHeading} gutterBottom variant="h4">
                  {i.heading}
                </Typography>
                <Typography variant="h6" className={classes.faqPHeading}>
                  {i.subHeading}
                </Typography>
                <br></br>
                <Typography className={classes.faqRightDtpLine1}>
                  {i.dsktpTxtLn1}
                </Typography>
                <Typography className={classes.faqRightDtpLine2}>
                  {i.dsktpTxtLn2}
                </Typography>

                <Typography className={classes.faqLinkText}>
                  View our  <Link to="/faq">FAQ</Link>
                   to find answers or <a className={classes.inLineLinkText} href='/contact'>contact us.</a>
                </Typography>
                <Button component={Link} to='/faq' className={classes.faqButton}>
                  {i.buttonText}
                </Button>

              </Paper>
            </Grid>
            <Grid item >
              <Card className={classes.imgCardLeft}>
                <CardMedia
                  className={classes.cardMedia}
                  image={i.src}
                />
              </Card>
            </Grid>
          </div>
        }
        return (
          <Grid container className={classes.gridCont} align='center' >
            <Card className={classes.outerCard}>
              {card}
            </Card>
          </Grid>
        )
      })}
    </>
  );
}

export default FAQCardDesktop;
