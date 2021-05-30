import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyle = makeStyles((theme) => ({
  firstSectionWrapper: {
    background: '#004364',
    color: '#FFE06D',
    boxSizing: 'border-box',
    backgroundImage: 'url("/images/CTI-Contributors-BG-1.png")',
    minHeight: '35vh',
    backgroundPositionY: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    '& h1': {
      fontSize: '3rem',
    },
  },
  banner: {
    height: '20px',
    width: '100px',
  },
  textStyle: {
    color:'#FEFEFE',
    fontSize: '24px',
    textAlign:'center',
    marginTop: '-1rem',
  },
  
  projectsLink: {
    margin: '0',
    paddingTop: '70px',
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  sectionContainer: {
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '70%',
    '& p': {
      margin: '0',
    },
  },
  affiliation: {
    textAlign: 'center',
    paddingRight: '1rem',
    boxSizing: 'border-box',
    color: theme.palette.secondary.dark,
    display: 'flex',
    fontSize: '1.3rem',
    '& h2': {
      width: '100%',
    },
  },
  unaffiliatedWrapper: {
    marginLeft: '116px',
    marginRight: theme.spacing(-3),
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
    padding: '1rem 0',
    '& *': { color: theme.palette.secondary.dark },
    ' & h2': {
      fontZize: '28px',
      color: '#004364',
      margin: 0,
    },
    '& p': {
     fontSize: '24px',
    },
  },
  unaffiliatedThumbnailsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(49%, 1fr))',
    gap: '0.5rem',
    padding: '1rem 0',
    marginLeft: '74px',
  },
  unaffiliatedThumbnails: {
    border: '1px solid #BCBCBC',
    borderRadius: '4px',
    marginLeft: '-10rem',
    marginRight: '161px',

    flex: '1 1 23%',
    '& p': {
      fontSize: '24px',
      color: theme.palette.secondary.dark,
    },
  },
  affiliatedWrapper: {
    width: '100%',
    padding: '1rem 0',
    textAlign: 'center',
    '& h2': {
      margin: 0,
      fontZize: '28px',
      color: theme.palette.secondary.dark,
    },
  },
  affiliatedThumbnailsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 0.45fr)',
    margin: '1.5rem 0',
    columnGap: '20px',
    rowGap: '1.54rem',
    marginLeft: '47px',
  },
  afflnThumbnails: {
    border: "1px solid #bcbcbc",
    width:"375px",
    height:"64px",
  },
  affiliatedOrgsContainer: {
    '&h2, & h3': {
      color: theme.palette.warning.main,
    },
  },
  chevron: {
    margin: 'auto 0 auto auto',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  placeholder: {
    backgroundColor: theme.palette.background.default,
    height: '90vh',
  },

  unafflCount: {
    fontSize: '28px',
    paddingTop: '6px',
    paddingLeft: '10px',
    color:'#004364',
  },
  contributorsContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.7rem',
    alignContent: 'flex-start',
  },
  loaders: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: 0,
  },
  thumbnailWrapper: {
    minHeight: '5rem',
    width: '375px',
    height: '64px'  
  },
 
  thumbnails: {
    color: theme.palette.common.black,
    display: 'flex',
    textDecoration: 'none',
    borderRadius: '4px',
    flexGrow: '1',
  },
  imageWrapper: {
    display: 'grid',
    paddingTop: '4px',
  },
  thumbnailImage: {
     width: '48px',
     height: '48px',
     paddingTop: '16px',
     paddingLeft: '16px',
     marginLeft: '-20px',
  },
  thumbnailImageresize: {
    width: '30px',
    height: '30px',
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: '3 1 75%',
    minHeight: '6rem',
    "&:visited": {
      color: "theme​.palette.​text.secondary",
     },
  },
 
  thumbnailText: {
    alignItems: 'center',
    minHeight: '6rem',
    paddingTop: '21px',
    paddingLeft: '3px',
  },
  orgText: {
    color:"#004364",
    fontSize:'24px',
    
  },

  blueColorText: {
    color: "#FEFEFE",
    fontSize:'24px',
  },
  textWrapperWithoutImage: {
    display: 'grid',
    //placeItems: 'center',
    width: '100%',
  },
  thumbnailTextWithoutImage: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.5rem',
    minHeight: '6rem',
    color: theme.palette.secondary.dark,
    paddingLeft: '46px',
    marginTop:'-11px',

  },
  codeForAllWrapper: {
    '& a': {
      alignItems: 'center',
      marginRight: '0.5rem',
      display: 'flex',
      textDecoration: 'none',
      '& p': {
        color: theme.palette.secondary.dark,
      },
      '& img': {
        marginRight: '0.5rem',
        maxWidth: '6rem',
      },
    },
    '& p': {
      display: 'flex',
      color: theme.palette.secondary.dark,
      fontSize: '28px',
      marginLeft:'13px',
    },
    width: '1005px',
    margin: '1rem auto',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    marginLeft: '-3rem',
    height:'80px',
    backgroundColor:'theme​.palette.​background.default',
  },
 
  indicator: {
    backgroundColor: '#006B95'
  },
  tabVal: {
   color: "theme​.palette.​text.disabled",
    "&:hover": {
      color: "#006B95",
      opacity: 1
    },
    
  },
  
  button: {
    width: '211px',
    height: '44px',
    borderRadius: '31px',
    border: '1px solid',
    borderColor: '#004364',
    color: "#004364",
    fontSize: '16px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    }, 

  chkBoxStyle: {
    color: '#6D6E74',
    paddingLeft: '59rem',
  },

  
  formControlLabel: {

    color: '#004364',
    fontWeight: 'bold',
  },
 
 blueColor: {
   backgroundColor: "#004364",
   color:"theme​.palette.​text.secondary",
   '& img': {
    marginRight: '0.5rem',
    maxWidth: '6rem',
    },
    '& p': {
      display: 'flex',
      color: "white",
      fontSize: '28px',
      marginLeft:'13px',
    },
    width: '1005px',
    margin: '2rem auto',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    marginLeft: '-6rem',
    height:'80px',
 
  },

 
}));
