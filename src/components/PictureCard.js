import React from "react";
import { Grid } from "@material-ui/core";

const PictureCard = () => {
  /**
   * 
   * @param {*} props.imgSrc
   * @param {*} props.imgAlt
   * @param {*} props.children 
   */
  const CardItem = (props) => {
    return (
      <Grid item xs={12} lg={4}  >
        <div align='center' style={{height: '50%'}}>
          <img src={props.src} alt={props.alt} style={{width:'300px', height:'220px'}}/> <p>{props.children}</p>
        </div>
      </Grid>
    )
  }

  return (
    <>
      <Grid container style={{padding: '20px',maxWidth: '1200px', margin: 'auto', backgroundColor: "#F2F2F2"}}>
        <CardItem src="/images/girlCoding.png" alt="girl coding on her computer">No coding experience needed to submit your project!</CardItem>
        <CardItem src="/images/girlandguyCoding.png" alt="girl and guy coding">Make your project more visible with GitHub’s open-source communities</CardItem>
        <CardItem src="/images/groupCodingColor.png" alt="group coding">The Index is owned by all who contribute to it</CardItem>
      </Grid>
    </>
  );
};

export default PictureCard;