import React from "react";
import { Grid } from "@material-ui/core";
import NavButton from "./NavButton";
import TitleSection from "./TitleSection";

export default function GetStartedCard(props) {
  const headerTitle = props.headerTitle;
  const buttonHref = props.buttonHref;
  const buttonText = props.buttonText;

  /**
   * A footer call to action. Takes in a Title, Button Text and URL
   * @param {*} props.headerTitle
   * @param {*} props.buttonHref
   * @param {*} props.buttonText
   */
  return (
    <>
      <div className='getStartedCardDivStyle'>
        <Grid container alignItems="center" justify="center" direction="column" style={{ padding: "30px 30px 60px 30px", backgroundColor: "#FFFFFF" }}>
          <TitleSection textVariant='black' style={{ color: '#0F1D2F' }}>{headerTitle}</TitleSection>
          <NavButton href={buttonHref} variant="blue">
            {buttonText}
          </NavButton>
        </Grid>
      </div>
    </>
  );
}
