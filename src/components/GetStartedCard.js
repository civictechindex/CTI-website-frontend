import React from 'react';
import { Grid } from "@material-ui/core";
import NavButton from "./NavButton"
import TitleSection from "./TitleSection"



export default function GetStartedCard (props) {
    const title = props.title
  
    const CardTitle = () => {
      return (
          <Grid container alignItems="center" justify="center" style={{ paddingTop: '75px' }}>
              <h2 align='center'>Join a worldwide movement to catalog <br />every open source civic tech project.</h2>
          </Grid>
      )
  }
 

  return (
    <>
      <Grid container alignItems="center" justify="center" direction="column" style={{padding: '30px 30px 60px 30px',backgroundColor: "#FFFFFF"}}>
        <CardTitle title={title} textVariant='black' style={{color:'#0F1D2F'}}/>
        <NavButton href='/taggenerator' variant='blue'>Tag your project</NavButton>
      </Grid>
    </>
  );
};


