import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import NavButton from '../../../components/NavButton'

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

const NotableUsersSection = () => {

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
        return <LogoItem key={key} link={image.link} alt={image.alt} src={image.src} />
      })
    )
  }

  const MoreContributors = () => {
    return (
      <Grid item xs={12} style={{ padding: '30px' }}>
        <div align='center'><NavButton href='/contributors/affiliated' variant='blue'>View more contributors</NavButton></div>
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

export default NotableUsersSection
