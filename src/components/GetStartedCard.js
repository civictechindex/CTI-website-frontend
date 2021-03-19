import Grid from "@material-ui/core/Grid";
import NavButton from "./NavButton";
import React from "react";
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
        <Grid container alignItems="center" justify="center" direction="column" style={{ backgroundColor: "#FFFFFF", padding: "30px 30px 60px 30px" }}>
          <TitleSection textVariant='black'>{headerTitle}</TitleSection>
          <NavButton href={buttonHref} variant="blue">
            {buttonText}
          </NavButton>
        </Grid>
      </div>
    </>
  );
}
