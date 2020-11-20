import React from 'react'

import '../styles.css'

import { Header, Footer, NavButton } from '../components'
import { Grid, Container, Paper, Chip } from '@material-ui/core';

const TitleSection = () => {
    return (
        <Grid container alignItems="center" justify="center" style={{ paddingTop: '75px' }}>
            <h2 align='center'>Join a worldwide movement to catalog <br />every open source civic tech project.</h2>
        </Grid>
    )
}

const MarketingSection = () => {
    return (
        <Grid container justify = "center" style={{ paddingTop: '35px' }}>
            <Grid item md={4} xs={12}><p className='white'>Requires no coding</p></Grid>
            <Grid item md={4} xs={12}><p className='white'>Make your project more visible with <br />GitHub’s open-source communities</p></Grid>
            <Grid item md={4} xs={12}><p className='white'>The Index is owned by <br />all who use it</p></Grid>
        </Grid>
    )
}

const CallToActionSection = () => {
    return (
        <Grid container style={{ paddingTop: '35px' }} justify="center">
            <Grid item md={3} xs={12} style={{ paddingTop: '20px' }}>
                <div align='center'><NavButton href='/taggenerator' variant='blue'>Tag your project</NavButton></div>
            </Grid>
            <Grid item md={3} xs={12} style={{ paddingTop: '20px' }}>
                <div align='center'><NavButton href='/about'>Learn more</NavButton></div>
            </Grid>
        </Grid>
    )
}


const NotableUsersSection = () => {

    const notableUsers = [
        { alt: "Code for All", link: "#", src: "/images/code-for-all.png" },
        { alt: "Code for America", link: "#", src: "/images/code-for-america.svg" },
        { alt: "DemocracyLab", link: "#", src: "/images/democracy-lab.svg" },
        { alt: "Hack for LA", link: "#", src: "/images/hack-for-la.png" },
        { alt: "OpenOakland", link: "#", src: "/images/open-oakland.svg" },
        { alt: "Open San Diego", link: "#", src: "/images/open-san-diego.svg" },
        { alt: "Open Savannah", link: "#", src: "/images/open-savannah.png" },
        { alt: "Yale OpenLab", link: "#", src: "/images/yale-openlab.svg" },
    ];

    const SectionTitle = () => {
        return (
            <Grid item xs={12}><h3 align='center'>See how the Civic Tech Index is used by:</h3> </Grid>
        )
    }

    const LogoList = () => {

        const LogoItem = (props) => {
            return (
                <Grid item md={3} xs={6} style={{ height: '150px' }}>
                    <div align='center' style={{ height: '100%' }}>
                        <a href={props.link}>
                            <img style={{ top: '50%' }} align='center' alt={props.alt} src={props.src} />
                        </a>
                    </div>
                </Grid>
            )
        }

        return (
            notableUsers.map((image, key) => {
                return <LogoItem key = {key} link={image.link} alt={image.alt} src={image.src} />
            })
        )
    }

    const MoreContributors = () => {
        return (
            <Grid item xs={12} style={{ padding: '30px' }}>
                <div align='center'><NavButton href='/taggenerator' variant='blue'>View more contributors</NavButton></div>
            </Grid>
        )
    }

    return (
        <Grid container alignItems="center" justify="center" style={{ padding: '100px' }}>
            <Paper>
                <Grid container style={{ padding: '30px' }} justify="center">
                    <SectionTitle />
                    <LogoList />
                    <MoreContributors />
                </Grid>
            </Paper>
        </Grid>
    )
}

const TrendingTopicsSection = () => {

    const topicData = [
        { detail: "Covid-19", link: "#" },
        { detail: "Trending Topic 1", link: "#" },
        { detail: "Trending Topic 2", link: "#" },
        { detail: "Trending Topic 3", link: "#" },
        { detail: "Trending Topic 4", link: "#" },
        { detail: "Trending Topic 5", link: "#" },
    ];

    const TrendingTopicList = () => {

        return (
            topicData.map((topic, key) => {
                return <TrendingTopicChip key={key} href={topic.link}>{topic.detail}</TrendingTopicChip>
            })
        )
    }

    const TrendingTopicChip = (props) => {
        return <span><a href={props.href}><Chip style = {{margin: 5}}label={props.children}/></a></span>
    }

    return (
        <Grid container justify="center">
            <Grid item sm={6} style={{ padding: '20px' }}>
                <h2>How are people using the CTI?</h2>
                <h5>Trending Topics:</h5>
                <TrendingTopicList />
            </Grid>
            <Grid item sm={6} style={{ padding: '20px' }}><img width="100%" src="images/mag.svg" alt="Trending topics side"></img></Grid>
        </Grid>
    )
}

const Home = () => {
    return (
        <>
            <Header />
            <div className='world-background' style={{width: '100vw'}}>
            <Container>
                <TitleSection />
                <MarketingSection />
                <CallToActionSection />
                <NotableUsersSection />
                <TrendingTopicsSection />
            </Container>
            </div>
            <Footer />
        </>
    )
}

export default Home