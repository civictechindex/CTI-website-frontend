import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyle = makeStyles((theme) => ({
  firstSectionWrapper: {
    background: theme.palette.secondary.dark,
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
   [theme.breakpoints.up('md')]: {
      minHeight: '25vh',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      minHeight: '28vh',
    },
    [theme.breakpoints.down('xl')]: {
      minHeight: '16vh',
    },
  },
 
  banner: {
    height: '20px',
    width: '100px',
  },
  textStyle: {
    color:theme.palette.text.secondary,
    fontSize: '24px',
    textAlign:'center',
    marginTop: '-1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
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

  afflText: {
     paddingLeft: '363px', 
     fontSize: '28px', 
     paddingBottom: '20px',
     color: theme.palette.secondary.dark,
     [theme.breakpoints.down('md')]: {
      paddingLeft: '255px',
      fontSize: '24px',
      paddingBottom: '20px',
    },
    [theme.breakpoints.down('sm')]: {
     fontSize:'20px',
     paddingLeft:'120px',
    },
  },
  unAfflText: {
    paddingLeft: '366px', 
    fontSize: '28px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '255px',
      fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      paddingLeft: '123px',
    },
  },
 
  
  unaffiliatedWrapper: {
   
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
    padding: '1rem 0',
    '& *': { color: theme.palette.secondary.dark },
    ' & h2': {
      fontZize: '28px',
      color: theme.palette.secondary.dark,
      margin: 0,
    },
    '& p': {
      fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '476px',
    },
    
  },
  unaffiliatedThumbnailsWrapper: {
    display: 'flex',
    gridTemplateColumns: 'repeat(auto-fill,minmax(49%, 1fr))',
    gap: '1.5rem',
    padding: '1rem 0',
    marginLeft: '44px', //dfdf
    paddingTop: '31px', //dfdfdfd
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '30px',
      marginLeft: '-34px',
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
       marginLeft: '-30px',
    },
   
  },
  unaffiliatedThumbnails: {
    border: '1px solid #BCBCBC',
    borderRadius: '4px',
    // paddingLeft: '10px', //it has in the incomming branch
    backgroundColor: theme.palette.background.default,
    width: '496px',
    // height: '80px',

    flex: '1 1 23%',
    '& p': {
      fontSize: '24px',
      color: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down('md')]: {
      width:'408px',
      height: '80px',
     },
    [theme.breakpoints.down('sm')]: {
     width:'276px',
     height: '56px',
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
    marginLeft: '64px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '1px',
      rowGap: '0.44rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-71px',
      rowGap: '0.44rem',
    },
  },
  afflnThumbnails: {
    border: "1px solid #bcbcbc",
    width:"375px",
    height:"64px",
    [theme.breakpoints.down('md')]: {
      width: '270px',
      height: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '220px',
      height:'48px',
    },
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
    color:theme.palette.secondary.dark,
  },
  contributorsContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.7rem',
    alignContent: 'flex-start',
  },
  noargText: {
     fontStyle: 'italic',
     paddingRight:'100px', //paddingRight:'240px',
     paddingTop: '30px',
  },


  loaders: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: 0,
  },
  thumbnailWrapper: {
    minHeight: '5rem',
  //   width: '375px',
  //   height: '64px',
  // },

    width: '496px',
    height: '80px', 
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
    paddingTop: '5px',
  },
  thumbnailImage: {
    width: '48px',
    height: '48px',
    marginLeft: '-20px',
     [theme.breakpoints.down('sm')]: {
      width: '32px',
      height: '32px',
    },
    [theme.breakpoints.down('md')]: {
      width: '48px',
      height: '48px',
    },
  },
  thumbnailOpenImage: {
    width: '32px',
    height: '32px',
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
    paddingTop: '15px',
    paddingLeft: '3px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15px',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '22px',
    },
  },
  orgText: {
    color:theme.palette.secondary.dark,
    fontSize:'24px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      fontSize:'18px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'20px',
    },
  },
  childThumbnails: {
    marginLeft: '-2rem',
  },

  blueColorText: {
    color: theme.palette.text.secondary,
    fontSize:'24px',
    [theme.breakpoints.down('md')]: {
      fontSize:'18px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'20px',
    },
  },
  textWrapperWithoutImage: {
    display: 'grid',
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
      marginLeft:'5px',
      [theme.breakpoints.up('sm')]: {
         fontSize: '20px',
      },
      [theme.breakpoints.up('xs')]: {
        fontSize: '24px',
     },
    },
    '& h4': {
      paddingLeft:'24px',
      color: theme.palette.secondary.dark,
    },
    width: '1139px',
    margin: '1rem auto',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    marginLeft: '3rem',
    height:'80px',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      width: '885px',
      marginLeft: '-1.25rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-25px',
      width:'568px',
      height: '64px',
    },

  },

  blueColor: {
   backgroundColor: theme.palette.secondary.dark,
    '& h4': {
      color: theme.palette.text.secondary,
    },
    
  },
  
  codeforallImg: {
   width:'56px',
   height:'56px',
   [theme.breakpoints.up('sm')]: {
    width:'48px',
    height: '48px',
  },
  },
  indicator: {
    backgroundColor: '#006B95',
  },
  tabVal: {
   color: "theme​.palette.​text.disabled",
   [theme.breakpoints.down('sm')]: {
     fontSize: '18px',
  },  
  [theme.breakpoints.up('md')]: {
      fontSize: '28px',
  },
  
    "&:hover": {
      color: "#006B95",
      opacity: 1,
    },

  },
 
  button: {
    width: '211px',
    height: '44px',
    borderRadius: '31px',
    border: '1px solid',
    borderColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.dark,
    fontSize: '16px',
    marginLeft: '-118px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
      [theme.breakpoints.down('md')]: {
        width: '118px',
        height: '31px',
        marginLeft: '-143.5px',
    },  
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-93.5px',
  }, 

    }, 

  chkBoxStyle: {
    color: '#6D6E74',
    paddingLeft: '59rem',
    '&:hover': {
      background: 'transparent',
    },
    '&:selected': {
      background: 'transparent',
    },
    [theme.breakpoints.down('md')]: {
     paddingLeft: '45rem',
    },  
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '23rem',
     }, 
  },


  formControlLabel: {

    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
  },

  // blueColor: {
  //   backgroundColor: "#004364",
  //   color:"theme​.palette.​text.secondary",
  //   '& img': {
  //     marginRight: '0.5rem',
  //     maxWidth: '6rem',
  //   },
  //   '& p': {
  //     display: 'flex',
  //     color: "white",
  //     fontSize: '28px',
  //     marginLeft:'13px',
  //   },
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: '1rem',
  //   height:'80px',

  // },

  altThumbnailWrapper: {
    height: '64px',
    backgroundColor: "white",
    borderRadius: '6px',
    border: '1px solid #6D6E74',
  },
  unaffiliatedSectionContainer: {
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '100%',
    '& p': {
      margin: '0',
    },
  },
  contributorThumbnailImage: {
    width: '24px',
    height: '24px',
  },
  contributorThumbnailWrapper: {
    float: 'right',
    marginRight: '-24px',
  },
  childAffiliated: {
    marginLeft: '100px',
 },
}));
