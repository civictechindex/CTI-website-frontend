import React from 'react'
import '../../styles.css'

import { Footer, GetStartedCard, Header, NavButton, TitleSection } from '../../components'

import NotableUsersSection from './sections/NotableUsersSection'
import TrendingTopicsSection from './sections/TrendingTopicsSection'

import { Container, Grid } from '@material-ui/core';

const MarketingSection = () => {

  const MarketingPoint = (props) => {
    return <Grid item md={4} xs={12}><p className='white'>{props.children}</p></Grid>
  }
  return (
    <Grid container justify="center" style={{ paddingTop: '35px' }}>
      <MarketingPoint>Requires no coding</MarketingPoint>
      <MarketingPoint>Make your project more visible with <br />GitHub’s open-source communities</MarketingPoint>
      <MarketingPoint>The Index is owned by <br />all who use it</MarketingPoint>
    </Grid>
  )
}

const CallToActionSection = () => {
  return (
    <Grid container style={{ paddingTop: '35px' }} justify="center">
      <Grid item md={3} xs={12} style={{ paddingTop: '20px' }}>
        <div align='center'><NavButton href='/tag-generator' variant='blue'>Tag your project</NavButton></div>
      </Grid>
      <Grid item md={3} xs={12} style={{ paddingTop: '20px' }}>
        <div align='center'><NavButton href='/about'>Learn more</NavButton></div>
      </Grid>
    </Grid>
  )
}

const Home = () => {
  return (
    <>
      <Header />
      <div className='world-background' style={{ width: '100vw' }}>
        <Container>
          <TitleSection>Join a worldwide movement to catalog every open source civic tech project.</TitleSection>
          <MarketingSection />
          <CallToActionSection />
          <NotableUsersSection />
          <TrendingTopicsSection />
        </Container>
      </div>
      <GetStartedCard headerTitle="Ready to get started?" buttonText="Tag your Project" buttonHref="/tag-generator" />
      <Footer />
    </>
  )
}

export default Home
