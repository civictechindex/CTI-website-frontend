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
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
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
   [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
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
    fontSize: '28px', 
     paddingBottom: '20px',
     color: theme.palette.secondary.dark,
     marginLeft:'31%',
     [theme.breakpoints.down('md')]: {
      fontSize: '24px',
      paddingBottom: '20px',
      marginLeft:'23%',
    },
    [theme.breakpoints.down('sm')]: {
     fontSize:'22px',
     marginLeft:'23%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
      marginLeft: '27%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
      marginLeft: '32%',
    },
  },
  unAfflText: {
    marginLeft: '31%',
    fontSize: '28px',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      marginLeft: '23%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21px',
      marginLeft: '22%',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
      marginLeft: '27%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
      marginLeft: '32%',
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
      display: 'flex',
      marginLeft: '4px',
    },
  
  },
  unaffiliatedThumbnails: {
    borderRadius: '4px',
    width: '496px',

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
    marginLeft: '7%',
    /*[theme.breakpoints.only('sm')]: {
      marginLeft: '5%',
      rowGap: '1.44rem',
    },*/
    [theme.breakpoints.only('md')]: {
      marginLeft: '17%',
      rowGap: '1.44rem',
    },
  },
  afflnThumbnails: {
    height:"64px",
    width: "375px",
   
    [theme.breakpoints.down('md')]: {
      width: '270px',
      height: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '220px',
      height:'55px',
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
     paddingRight:'100px', 
     paddingTop: '30px',
  },


  loaders: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: 0,
  },
  thumbnailWrapper: {
    minHeight: '5rem',
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
    paddingTop: '13px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '13px',
    },
  },
  thumbnailImage: {
    width: '48px',
    height: '48px',
    marginLeft: '2px',
    marginRight: '5px',
     [theme.breakpoints.down('sm')]: {
      width: '32px',
      height: '32px',
    },
    [theme.breakpoints.down('md')]: {
      width: '32px',
      height: '32px',
      marginLeft: '-14px',
    },
  },
  thumbnailOpenImage: {
    width: '32px',
    height: '32px',
    paddingTop: '16px',
    paddingLeft: '16px',
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
    paddingLeft: '6px',
    fontSize:'24px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15px',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '9px',
    },
  },
  orgText: {
    color:theme.palette.secondary.dark,
    fontSize:'22px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      fontSize:'13px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'13px',
    },
  },
 
  blueColorText: {
    color: theme.palette.text.secondary,
    fontSize:'24px',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize:'18px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'15px',
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
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    height:'80px',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      height: '64px',
    },
   },

  blueColor: {
   backgroundColor: theme.palette.secondary.dark,
    '& h4': {
      color: theme.palette.text.secondary,
    },
    
  },
  affiliatedorgWrapper: {
    backgroundColor: theme.palette.background.default,
    marginLeft: '3%',
    paddingBottom: '1.5px',
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
    color: "#006B95",
  },
  tabVal: {
   color: "theme​.palette.​text.disabled",
   fontWeight: 'bold',
   textTransform: 'none',
   fontSize: '32px',
   "&:hover": {
    color: "#006B95",
    opacity: 1,
  },
 
},


tabRoot: {
  color: "theme​.palette.​text.disabled",
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '32px',
  [theme.breakpoints.down('md')]: {
    fontSize: '19px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
 },  
 [theme.breakpoints.down('xs')]: {
   fontSize: '13px',
},
  "&:hover": {
    color: "#006B95",
    opacity: 1
  },
  "&$tabSelected": {
    color: "#006B95",
  },
},
tabSelected: {},


  button: {
    width: '211px',
    height: '44px',
    borderRadius: '31px',
    border: '1px solid',
    borderColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.dark,
    fontSize: '16px',
    backgroundColor: 'transparent',
    marginLeft: '38%',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
     [theme.breakpoints.down('md')]: {
        width: '118px',
        height: '31px',
        marginRight: '10px',
    }, 
   
    }, 

  chkBoxStyle: {
    color: '#6D6E74',
    marginLeft: '84%',
     '&:hover': {
      background: 'transparent',
    },
    '&:selected': {
      background: 'transparent',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '67%',
    },  
    [theme.breakpoints.down('sm')]: {
     // paddingLeft: '28rem',

     }, 
     
  },


  formControlLabel: {

    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize:'12px',
     }, 
     [theme.breakpoints.down('md')]: {
      fontSize:'15px',
     }, 
  },

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
  },
  childAffiliated: {
    marginLeft: '100px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0%',
     }, 
 },
 unaffiliatedThumbnailImage: {
  width: '56px',
  height: '56px',
},
dropdownThumbnailText: {
  alignItems: 'center',
  minHeight: '6rem',
  paddingTop: '24px',
  paddingLeft: '6px',
  margin: 'auto',
  position: 'absolute',
  fontSize: '20px',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '15px',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: '22px',
  },
  dropdownTextWrapper:{
    display: 'flex',
    alignItems: 'center',
    flex: '3 1 75%',
    minHeight: '6rem',
    marginTop: '30px'
  }
},
}));
