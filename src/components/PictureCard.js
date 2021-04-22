import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  textStyle:{
    textAlign:'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
      textAlign:'center',
    },
  },
  item1: {
    [theme.breakpoints.down('md')]: {
      order:4,
    },
  },
  item2: {
    [theme.breakpoints.down('md')]: {
      order:3,
    },
  },
}))


/**
 * Generates marketing cards that contain an image and text. 3 part grid containing multiple card items.
 * @param {*} props.imgSrc
 * @param {*} props.imgAlt
 * @param {*} props.children
 */
export default function PictureCard(props) {
  const items = props.items;
  const classes = useStyles()

  return (
    <>
      <Box className='containerGray'>
        <Container>
          <Grid container display="flex" justify="flex-start">
            <Grid item xs={10} md={6} align='center' >
              <img src={items[0].src} alt={items[0].alt} />
            </Grid>
            <Grid item xs={10} md={5} style={{ margin:'auto' }} >
              <Typography variant='h4' className={classes.textStyle} >{items[0].children}</Typography>
            </Grid>
            <Grid item xs={10} md={5}  style={{ margin:'auto' }} align='center' className={classes.item1} >
              <Typography variant='h4'className={classes.textStyle} >{items[1].children}</Typography>
            </Grid>
            <Grid item xs={10} md={5} align='center' className={classes.item2} >
              <img src={items[1].src} alt={items[1].alt} />
            </Grid>
            <Grid item xs={10} md={5} style={{ margin:'auto' }} align='center' >
              <img src={items[2].src} alt={items[2].alt} />
            </Grid>
            <Grid item xs={10} md={5} style={{ margin:'auto' }} >
              <Typography variant='h4'className={classes.textStyle} >{items[2].children}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
