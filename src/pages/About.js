import React from "react";
import "../styles.css";
import { Header, Footer, PictureCard, NavBreadcrumbs} from "../components";
import GetStartedCard from "../components/GetStartedCard"
import TitleSection from "../components/TitleSection"
import { Grid, Container, Paper} from "@material-ui/core";

const About = () => {
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
  ];

  

  
  const VideoSection = () => {
    return (
      <Grid container alignItems="center" justify="center" style={{ padding: '100px', margin:'auto',  width:'70%', backgroundColor: 'white'}}>
        <Paper>
          <Grid container style={{ padding: '30px' }} justify="center">
            <img src="/images/playButton.png" alt="Video play button" />
          </Grid>
        </Paper>
      </Grid>
    )
  }

  const MarketingSection = () => {
    return (
      <Grid container justify="center" alignItems="center" >
        <Grid item xs={12} md={8}>
          <h3 className='white' style={{ padding: '55px 30px 55px 30px', margin: 'auto' }}>
            With your help, we can create a continuously updated repository for all civic
            tech enthusiasts to find open source projects to model, connect with, and learn from.
        </h3>
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Header />
      <div className='default-background' style={{ width: '100vw' }}>
        <Container>
          <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
          <TitleSection title={"A movement to index every open source civic tech project on GitHub"} />
          <VideoSection />
          <MarketingSection />
        </Container>
         <PictureCard />
         <div className='getStartedCardDivStyle'>
         <GetStartedCard title={"Ready to get started?"} />
         </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
