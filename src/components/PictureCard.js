import React from "react";
import { Grid } from "@material-ui/core";


const CardItem = (props) => {
  return (
    <Grid item xs={12} lg={4} style={{margin:'auto'}} align='center' >
        <img src={props.src} alt={props.alt} />
         <p style={{padding:'0 30px 0 30px'}}>{props.children}</p> 
    </Grid>
  )
}

/**
 * Generates marketing cards that contain an image and text. 3 part grid containing multiple card items.
 * @param {*} props.imgSrc
 * @param {*} props.imgAlt
 * @param {*} props.children 
 */
export default function PictureCard(props) {
  const items = props.items;

  const displayCards = items.map((i, idx) => {
    return <CardItem src={i.src} alt={i.alt} key = {idx}>{i.children}</CardItem>
  });

  return (
    <>
      <Grid container style={{ padding:'20px 0 20px 0', maxWidth: '1200px', margin: 'auto', backgroundColor: "#F2F2F2" }}>
        {displayCards}
      </Grid>
    </>
  );
};
