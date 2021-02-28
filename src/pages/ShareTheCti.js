
import React from "react";
import {
  NavBreadcrumbs,
  TitleSection,
} from "../components";
import { Container,Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import NavButton from '../components/NavButton'



const useStyles = makeStyles(theme => ({
  containerStyle: {
    backgroundColor: theme.palette.secondary.dark,
    paddingBottom:theme.spacing(6),
  },
  imageStyle:{
    margin:'auto',
    paddingTop:theme.spacing(6),
    paddingBlockStart:theme.spacing(12),
  },
  starMediaStyle: {
    backgroundColor: theme.palette.background.default,
    height:"280px",
    margin:'auto',
  },
}))

const SocialMediaImages = () => {
  const classes = useStyles()
  return (
    <Grid item container direction="row" alignItems ='center' justify="space-between" lg={6} md={8} sm={12} className={classes.imageStyle}>
      <Grid item >
        <a href='https://www.instagram.com/civictechindex'>
          <img src='/images/instagram.svg' alt='Instagram logo' />
        </a>
      </Grid>
      <Grid item>
        <a href='https://twitter.com/civictechindex'>
          <img src='/images/twitterImage.svg' alt='Twitter logo' />
        </a>
      </Grid>
      <Grid item >
        <a href='https://www.facebook.com/civictechindex'>
          <img src='/images/path.svg' alt='Facebook logo' />
        </a>
      </Grid>
      <Grid item>
        <a href='https://github.com/civictechindex'>
          <img src='/images/Github_Logo.svg' alt='GitHub logo' />
        </a>
      </Grid>
    </Grid>
  );
};

const SocialMediaPostSection = () => {
  return (
    <Grid item container direction="column" alignItems ='center' lg={10} style={{ margin:'auto',padding:'25px 0px 90px' }}>
      <Grid item container direction="row" alignItems ='center' justify="center">
        <Grid item lg={5} >
          <img src='/images/CTI-Twitter-Post-1.png' alt='Facebook logo' />
        </Grid>
        <Grid item lg={5}>
          <img src='/images/CTI-Twitter-Post-2.png' alt='Facebook logo' />
        </Grid>
      </Grid>
      <Grid item container direction="row" alignItems ='center' justify="center">
        <Grid item lg={5}>
          <img src='/images/CTI-FB-Post-1.png' alt='Facebook logo' />
        </Grid>
        <Grid item lg={5}>
          <img src='/images/CTI-FB-Post-2.png' alt='Facebook logo' />
        </Grid>
      </Grid>
    </Grid>
  );
};
const MediaInfoTypography = (props) =>{
  const title = props.children
  return (
    <Typography variant='body1' color='textSecondary' style={{ paddingBottom:'15px' }}>{title}</Typography>
  )
}

const MediaInfo = ()=>{
  return (
    <Grid item container direction="row" justify="space-around" lg={8}  style={{ margin:'auto',paddingBottom:'50px' }}>
      <Grid item lg={3} >
        <Typography variant='h3' color='textPrimary'>Brand Assets & Graphics</Typography>
      </Grid>
      <Grid item lg={5} >
        <Typography variant='h5' color='textSecondary' style={{ paddingBottom:'10px' }} >Use of our logo is encouraged under the following circumstances:</Typography>
        <MediaInfoTypography >• Your have listed your project on Civic Tech Index</MediaInfoTypography>
        <MediaInfoTypography >• You have added the topic tag &quot;civictechindex&quot;to your project repository</MediaInfoTypography>
        <MediaInfoTypography >• You have developed your own interface to search the Index</MediaInfoTypography>
        <MediaInfoTypography >• In articles or social media posts featuring Civic Tech Index.</MediaInfoTypography>
        <MediaInfoTypography >• For all other uses, please contact us for permission.</MediaInfoTypography>
      </Grid>
    </Grid>
  )
}
const CtiImageSection = () => {
  return (
    <Grid item container direction="column" lg={8} style={{ margin:'auto' }}>
      <Grid item container direction="row" alignItems ='center' justify="center" style={{ paddingBottom:'16px' }} >
        <Grid item style={{ paddingLeft:'16px' }} >
          <img src='/images/Rectangle53.png' alt='CTI logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }}>
          <img src='/images/Rectangle55.png' alt='CTI  logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }}>
          <img src='/images/Rectangle55.png' alt='CTI  logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }}>
          <img src='/images/Rectangle55.png' alt='CTI  logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }} >
          <img src='/images/Rectangle55.png' alt='Facebook logo' />
        </Grid>
      </Grid>
      <Grid item container direction="row" alignItems ='center' justify="center">
        <Grid item style={{ paddingLeft:'16px' }} >
          <img src='/images/Rectangle51.png' alt='Facebook logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }} >
          <img src='/images/Rectangle51.png' alt='CTI logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }} >
          <img src='/images/Rectangle51.png' alt='CTI  logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }} >
          <img src='/images/Rectangle51.png' alt='Facebook logo' />
        </Grid>
        <Grid item style={{ paddingLeft:'16px' }}>
          <img src='/images/Rectangle51.png' alt='CTI  logo' />
        </Grid>
      </Grid>
    </Grid>
  );
};

const ButtonSection = () => {
  return (
    <Grid item container direction="column" alignItems='center'  lg={10} style={{ margin:'auto',padding:'30px' }}>
      <Grid item>
        <NavButton variant="blue" href='/sharethecti'>
          Download the CTI Assets Kit
        </NavButton>
      </Grid>
      <Grid item style={{ padding:'15px' }}>
        <Typography variant='body1' color='textSecondary'  > (All sizes & formats listed above in a .zip file)</Typography>
      </Grid>
    </Grid>

  )
}

const StarMediaSection = () => {
  const classes = useStyles()
  return (
    <Grid item container direction="row" alignItems ='center' justify="space-around" lg={10} className={classes.starMediaStyle}>
      <Grid item container direction="column" alignItems ='center' lg={3}>
        <Grid item style={{ paddingBottom:'50px' }}>
          <img src='/images/image3.svg' alt='StarCount logo' />
        </Grid>
        <Grid item>
          <Typography variant='body1' >Don’t forget to star our repository</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems ='center' justify="space-around" lg={3} >
        <Grid item style={{ paddingBottom:'30px' }}>
          <img src='/images/Medium_logo_Monogram.svg' alt='Medium logo' />
        </Grid>
        <Typography variant='body1'>  Mention or write about us on Medium</Typography>
      </Grid>
      <Grid item container direction="column" alignItems ='center'  lg={3}>
        <Grid item style={{ paddingBottom:'40px' }}>
          <img src='/images/mail.png' alt='Mail logo' style={{ margin:'auto' }} />
        </Grid>
        <Grid item>
          <Typography variant='body1' align='center' >Send an email to your project admin with suggested tags for your repository</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function ShareTheCti() {
  const classes = useStyles()
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "/radicalcollaboration/faq" },
  ];

  return (
    <Container className={classes.containerStyle}>
      <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
      <TitleSection>Share the CTI</TitleSection>
      <Typography variant='h3' color='textPrimary' style={{ paddingLeft: '150px' }}>Follow us on Social Media</Typography>
      <Typography variant='h5' color='textSecondary' style={{ paddingLeft: '150px' }}>#civictechindex</Typography>
      <SocialMediaImages/>
      <Typography variant='h3' color='textPrimary' style={{ paddingLeft: '150px' }}>Tell others about us!</Typography>
      <Typography variant='h5' color='textSecondary' style={{ paddingLeft: '150px',  fontWeight:'400' }}>Here are some suggested content to share with your networks.</Typography>
      <SocialMediaPostSection/>
      <MediaInfo/>
      <CtiImageSection/>
      <ButtonSection/>
      <StarMediaSection/>
    </Container>
  );
}
