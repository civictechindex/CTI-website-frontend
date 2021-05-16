import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  textStyle:{
    textAlign:'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      textAlign:'center',
    },
  },
  item2_img: {
    order:4,
    [theme.breakpoints.down('sm')]: {
      order: 3,
    },
  },
  item2_txt: {
    order:3,
    [theme.breakpoints.down('sm')]: {
      order: 4,
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
      <Box className='containerGray' pt='30px' pb='115px' >
        <Container>
          <Grid container display="flex" justify="flex-start" >
            <Grid item xs={10} md={5} style={{ margin:'auto', order:1 }} align='center' >
              <img src={items[0].src} alt={items[0].alt} />
            </Grid>
            <Grid item xs={10} md={5} style={{ margin:'auto', order:2 }} >
              <Typography variant='h4' className={classes.textStyle} >{items[0].children}</Typography>
            </Grid>
            <Grid item xs={10} md={5} style={{ margin:'auto' }} align='center' className={classes.item2_img} >
              <img src={items[1].src} alt={items[1].alt} />
            </Grid>
            <Grid item xs={10} md={5}  style={{ margin:'auto' }} className={classes.item2_txt} >
              <Typography variant='h4' className={classes.textStyle} >{items[1].children}</Typography>
            </Grid>
            <Grid item xs={10} md={5} style={{ margin:'auto', order:5 }} align='center'>
              <img src={items[2].src} alt={items[2].alt} />
            </Grid>
            <Grid item xs={10} md={5} style={{ margin:'auto', order:6 }} >
              <Typography variant='h4' className={classes.textStyle} >{items[2].children}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
