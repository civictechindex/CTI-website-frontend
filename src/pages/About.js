import React from "react";
import "../styles.css";
import { Header, Footer, PictureCard, NavBreadcrumbs} from "../components";
import GetStartedCard from "../components/GetStartedCard"
import TitleSection from "../components/TitleSection"
import { Grid, Container, Card,CardMedia} from "@material-ui/core";

const About = () => {
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
  ];

  const VideoSection = () => {
    return (
      <Grid container alignItems="center" justify="center" style={{ margin:'auto',  width:'70%', backgroundColor: 'white'}}>
        <Card>
        <CardMedia component="video" image='/images/CTI V1.mp4' title='Overview of CTI' controls/>  
        </Card>
      </Grid>
    )
  }

  const MarketingSection = () => {
    return (
      <Grid container justify="center" alignItems="center" >
        <Grid item xs={12} md={8}>
          <p className='white' style={{ padding: '55px 30px 55px 30px', margin: 'auto' }}>
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
