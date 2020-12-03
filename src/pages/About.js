import React from "react";
import "../styles.css";
import { Header, Footer, PictureCard, NavBreadcrumbs} from "../components";
import GetStartedCard from "../components/GetStartedCard"
import { Grid, Container, Paper } from "@material-ui/core";

const About = () => {
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
  ];

  const TitleSection = () => {
    return (
      <Grid container alignItems="center" justify="center" style={{ paddingTop: '10px' }}>
        
        <h2 align='center'>A movement to index every open source<br /> civic tech project on GitHub</h2>
        
      </Grid>
    )
  }

  const VideoSection = () => {
    return (
      <Grid container alignItems="center" justify="center" style={{ padding: '100px', margin:'auto', height: '440px', width:'70%', backgroundColor: 'white'}}>
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
        <Grid item>
          <p className='white' style={{ padding: '55px', width: '60%', margin: 'auto' }}>
            With your help, we can create a continuously updated repository for all civic
            tech enthusiasts to find open source projects to model, connect with, and learn from.
        </p>
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Header />
      <div className='default-background' style={{ width: '100vw' }}>
        <Container style={{ padding:'0px'}}>
          <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
          <TitleSection />
          <VideoSection />
          <MarketingSection />
          <PictureCard />
          <GetStartedCard title={"Ready to get started?"} />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
