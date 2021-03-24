import React from "react";
import {
  NavBreadcrumbs,
  TitleSection,
} from "../../components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    paddingBottom:theme.spacing(6),
  },
  mediaImageContainerStyle:{
    marginTop:'50px',
    marginBottom:'100px',
    [theme.breakpoints.down('xs')]: {
      marginTop:'35px',
      marginBottom:'35px',
    },
  },
  mediaImageStyle:{
    maxWidth:'100%',
    [theme.breakpoints.down('xs')]: {
      width: '52px',
      height:'52px',
    },
  },
  imageStyle:{
    maxWidth:'100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
    },
  },
  ctiImageStyle:{
    maxWidth:'100%',
    [theme.breakpoints.down('xs')]: {
      width: '102px',
      height:'62px',
    },
  },
  ctiSquareStyle:{
    maxWidth:'100%',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height:'150px',
    },
  },
  starMediaStyle: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
    },
  },
}))

const HeadingSection = (props)=>{
  return (
    <Grid container>
      <Grid item sm={1}></Grid>
      <Grid item xs={12} sm={11}>
        <Typography variant='h3' color='textPrimary'>{props.caption1}</Typography>
      </Grid>
      <Grid item sm={1}></Grid>
      <Grid item xs={12} sm={11}>
        <Typography variant='h5' color='textSecondary' style={{ fontWeight:'400' }}>{props.caption2}</Typography>
      </Grid>
    </Grid>
  )
}

const SocialMediaImages = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.mediaImageContainerStyle}>
      <Grid item sm={2} md={3}></Grid>
      <Grid item container direction="row" alignItems ='center' justify="space-between"  xs={12} sm={8} md={6}>
        <Grid item >
          <a href='https://www.instagram.com/civictechindex'>
            <img src='/images/instagram.svg'  alt='Instagram logo' className={classes.mediaImageStyle} />
          </a>
        </Grid>
        <Grid item>
          <a href='https://twitter.com/civictechindex'>
            <img src='/images/twitterImage.svg' alt='Twitter logo' className={classes.mediaImageStyle} />
          </a>
        </Grid>
        <Grid item >
          <a href='https://www.facebook.com/civictechindex'>
            <img src='/images/path.svg' alt='Facebook logo' className={classes.mediaImageStyle} />
          </a>
        </Grid>
        <Grid item>
          <a href='https://github.com/civictechindex'>
            <img src='/images/Github_Logo.svg' alt='GitHub logo' className={classes.mediaImageStyle}  />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};


const SocialMediaPostSection = () => {
  const classes = useStyles()
  return (
    <Grid container style={{ marginTop:'24px' }}>
      <Grid item sm={1} ></Grid>
      <Grid item xs={12} sm={5}  >
        <img src='/images/CTI-Twitter-Post-1.png' alt='Facebook logo' className={classes.imageStyle}/>
      </Grid>
      <Grid item xs={12} sm={5} >
        <img src='/images/CTI-Twitter-Post-2.png' alt='Facebook logo' className={classes.imageStyle} />
      </Grid>
      <Grid item sm={1}></Grid>
      <Grid item sm={1}></Grid>
      <Grid item xs={12} sm={5}>
        <img src='/images/CTI-FB-Post-1.png' alt='Facebook logo' className={classes.imageStyle} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <img src='/images/CTI-FB-Post-2.png' alt='Facebook logo' className={classes.imageStyle} />
      </Grid>
      <Grid item sm={1}></Grid>
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
    <Grid container style={{ margin:'40px 0' }}>
      <Grid item sm={1} md={2} ></Grid>
      <Grid item sm={11} md={3} >
        <Typography variant='h3' color='textPrimary'>Brand Assets & Graphics</Typography>
      </Grid>
      <Hidden mdUp>
        <Grid item sm={1} ></Grid>
      </Hidden>
      <Grid item sm={11} md={5} >
        <Typography variant='h5' color='textSecondary' >Use of our logo is encouraged under the following circumstances:</Typography>
        <MediaInfoTypography>• Your have listed your project on Civic Tech Index</MediaInfoTypography>
        <MediaInfoTypography>• You have added the topic tag &quot;civictechindex&quot;to your project repository</MediaInfoTypography>
        <MediaInfoTypography>• You have developed your own interface to search the Index</MediaInfoTypography>
        <MediaInfoTypography >• In articles or social media posts featuring Civic Tech Index.</MediaInfoTypography>
        <MediaInfoTypography>• For all other uses, please contact us for permission.</MediaInfoTypography>
      </Grid>
      <Grid item  md={2} ></Grid>
    </Grid>
  )
}

const CtiImageSection = () => {
  const classes = useStyles()
  return (
    <Grid container >
      <Grid item xs={false} sm={1} md={2} ></Grid>
      <Grid item container xs={12} sm={10} md={8} justify='space-evenly' >
        <Grid item  >
          <img src='/images/Rectangle53.png' alt='CTI logo' className={classes.ctiImageStyle} />
        </Grid>
        <Grid item >
          <img src='/images/Rectangle55.png' alt='CTI  logo' className={classes.ctiImageStyle} />
        </Grid>
        <Grid item >
          <img src='/images/Rectangle55.png' alt='CTI  logo' className={classes.ctiImageStyle} />
        </Grid>
        <Hidden smDown>
          <Grid item >
            <img src='/images/Rectangle55.png' alt='CTI  logo' className={classes.ctiImageStyle} />
          </Grid>
        </Hidden>
      </Grid>
      <Grid item xs={false} sm={1} md={2} ></Grid>
      <Grid item xs={false} sm={1} md={2} ></Grid>
      <Grid item container xs={12} sm={10} md={8} justify='space-evenly' >
        <Grid item  >
          <img src='/images/Rectangle51.png' alt='Facebook logo' className={classes.ctiSquareStyle} />
        </Grid>
        <Grid item  >
          <img src='/images/Rectangle51.png' alt='CTI logo' className={classes.ctiSquareStyle}/>
        </Grid>
        <Hidden xsDown>
          <Grid item  >
            <img src='/images/Rectangle51.png' alt='CTI  logo' className={classes.ctiSquareStyle} />
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item  >
            <img src='/images/Rectangle51.png' alt='Facebook logo' className={classes.ctiSquareStyle} />
          </Grid>
        </Hidden>
      </Grid>
      <Grid item xs={false} sm={1} md={2} ></Grid>
    </Grid>
  );
};


const ButtonSection = () => {
  return (
    <Grid item container direction="column" alignItems='center'  lg={10} style={{ margin:'auto',padding:'30px' }}>
      <Grid item>
        <Button href='https://drive.google.com/drive/folders/1EORoPWmALLXJCfHyDXJemYpO5HvnMzPN' target='blank' >
        Download the CTI Assets Kit
        </Button>
      </Grid>
      <Grid item style={{ padding:'15px' }}>
        <Typography variant='body1' color='textSecondary'  > (All sizes & formats listed above in a .zip file)</Typography>
      </Grid>
    </Grid>
  )
}
const StarMediaTypogrphy = (props) =>{
  return (
    <Grid item style={{ paddingBottom:'32px' }}>
      <Typography variant='body1' align='center'  >{props.children}</Typography>
    </Grid>
  )
}

const StarMediaSection = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={1} ></Grid>
      <Grid item container direction="column" alignItems ='center' xs={10} md={3} className={classes.starMediaStyle}>
        <Grid item style={{ padding:' 32px 0 32px' }}>
          <img src='/images/image3.svg' alt='StarCount logo' />
        </Grid>
        <StarMediaTypogrphy>Don’t forget to star our repository</StarMediaTypogrphy>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={1} ></Grid>
        <Grid item xs={1} ></Grid>
      </Hidden>
      <Grid item container direction="column" alignItems ='center' justify="space-around" xs={10} md={4} className={classes.starMediaStyle} >
        <Grid item  >
          <img src='/images/Medium_logo_Monogram.svg' alt='Medium logo' />
        </Grid>
        <StarMediaTypogrphy>Mention or write about us on Medium</StarMediaTypogrphy>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={1} ></Grid>
        <Grid item xs={1} ></Grid>
      </Hidden>
      <Grid item container direction="column" alignItems ='center'  xs={10} md={3} className={classes.starMediaStyle}>
        <Grid item style={{ padding:' 16px 0 32px' }}>
          <img src='/images/mail.png' alt='Mail logo' />
        </Grid>
        <StarMediaTypogrphy>Send an email to your project admin with suggested tags for your repository</StarMediaTypogrphy>
      </Grid>
      <Grid item xs={1} ></Grid>
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
    <Box className='boxBackground'>
      <Container className={classes.containerStyle}>
        <NavBreadcrumbs crumbs={crumbs}/>
        <TitleSection>Share the CTI</TitleSection>
        <HeadingSection caption1={"Follow us on Social Media"} caption2={"#civictechindex"}/>
        <SocialMediaImages/>
        <HeadingSection caption1={"Tell others about us!"} caption2={"Here are some suggested content to share with your networks."}/>
        <SocialMediaPostSection/>
        <MediaInfo/>
        <CtiImageSection/>
        <ButtonSection/>
        <StarMediaSection/>
      </Container>
    </Box>
  );
}
