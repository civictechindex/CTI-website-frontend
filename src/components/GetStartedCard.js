import React from "react";
import { Grid } from "@material-ui/core";
import NavButton from "./NavButton";
import TitleSection from "./TitleSection";

export default function GetStartedCard(props) {
  const title = props.title;

  /**
   * 
   * @param {*} props.title
   */

  return (
    <>
      <Grid container alignItems="center" justify="center" direction="column"
        style={{ padding: "30px 30px 60px 30px", backgroundColor: "#FFFFFF" }}>
        <TitleSection title={title} textVariant='black' style={{color:'#0F1D2F'}}/>
        <NavButton href="/taggenerator" variant="blue">
          Tag your project
        </NavButton>
      </Grid>
    </>
  );
}
