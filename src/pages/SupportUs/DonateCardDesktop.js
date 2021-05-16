import React from 'react';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';
import { Link } from 'react-router-dom/';

const DonateCardDeskTp = (props) => {
  const items = props.items;
  const classes = useStyles();
  return (
    <>
      {items.map((i) => {
        let card;
        if (i.title === 'img-1') {
          card = <div>
            <Grid item>
              <Paper elevation={0} className={classes.innerTextCardContainer}>
                <Typography className={classes.cardHeading} gutterBottom variant='h4'>
                  {i.heading}
                </Typography>
                <Typography variant="h6" className={classes.cardParaHeading}>
                  {i.subHeading}
                </Typography>
                <br></br>
                <Typography className={classes.dtpLine1}>
                  {i.dsktpTxtLn1}
                </Typography>
                <Typography className={classes.dtpLine2}>
                  {i.dsktpTxtLn2}
                </Typography>
                <Typography className={classes.dtpLine3}>
                  {i.dsktpTxtLn3}
                </Typography>
                <Typography variant="h6" className={classes.footerTxt}>
                  {i.footerText}
                </Typography>
                <Link to="/donate">
                  <Button className={classes.donateButton}>
                    {i.buttonText}
                  </Button>
                </Link>

              </Paper>
            </Grid>
            <Grid item >
              <Card className={classes.imgCard}>
                <CardMedia
                  className={classes.cardMedia}
                  image={i.src}
                />
              </Card>
            </Grid>
          </div>
        }
        return (
          <Grid container className={classes.gridCont} align='center' key='#' >
            <Card className={classes.outerCard}>
              {card}
            </Card>
          </Grid>
        )
      })}
    </>
  );
}
export default DonateCardDeskTp;
