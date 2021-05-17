/* eslint-disable react/jsx-key */
import React from 'react';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';

const PhotoCardMobile = (props) => {
  const items = props.items;
  const classes = useStyles();

  return (
    <>
      {items.map((i) => {
        return (
          <Grid item xs={12} lg={4} className={classes.innerTextCardContainerMobile} align='center' >
            <Card className={classes.innerCardMobile} >
              <CardActionArea>
                <CardMedia className={classes.cardMediaMobile}>
                  <img className={classes.mobileImg} src={i.src} alt={i.alt} />
                </CardMedia>
                <CardContent>
                  <Typography className={classes.mobileCardHeading} gutterBottom variant="h4">
                    {i.heading}
                  </Typography>
                  <Typography variant="h6" className={classes.mobileParaHeading}>
                    {i.subHeading}
                  </Typography>
                  <br></br>
                  <Typography className={classes.mobileParaText}>
                    {i.textBody}
                  </Typography>
                  <Typography variant="h6" >
                    {i.footerText}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.mobileCardActions}>
                <Button className={classes.mobileButton}>
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
