import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  main: {
    backgroundColor: theme.backgroundColor2,
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    boxSizing: "border-box",
    width: "100%",
    //minHeight: "520px",
    //height: "auto",
    display:'flex',
    flexDirection:'column',
  },
  headingContainer: {
    width:"auto",
    height:"24px",
    marginTop:"32px",
    marginLeft:"16px",
    marginRight:"16px",
  },
  url: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "24px",
  },
  subHeadingContainer:{
    width:"auto",
    height:"60px",
    marginTop: "12px",
    marginRight: "72px",
    marginBottom: "0px",
    marginLeft: "72px",

  },
  subHeading: {
    fontFamily: theme.secondaryFontFamily,
    color: theme.primaryTextColor,
    fontSize: "22px",
    fontWeight: "bold",
    textAlign:'center',
    margin: 0,
  },
  heading: {
    //fontSize: "16px",
    fontWeight: "bold",
    //lineHeight: "42px",
    textAlign:'center',
    margin: 0,
  },
  info:{
    width:"auto",
    height:"88px",
    marginTop: "28px",
    marginRight: "16px",
    marginBottom: "38px",
    marginLeft: "16px",
  },
  infoPara:{
    width:"328px",
    fontWeight:"500",
    fontSize: "16px",
    lineHeight: "22px",
    textAlign:'center',
    margin:"0"
  },
  projectSection: {
    width:"auto",
    marginRight: "16px",
    marginLeft: "16px",
    //marginBottom: "155px",
  },
  question:{
    width:"328px",
    height:"44px",
    margin:"0px",
    fontWeight:"500",
    fontSize: "16px",
    lineHeight: "22px",
    textAlign:'left',
},
radioDiv:{
  marginTop: "24px",
},
first: {
  
  height:"24px",
  width:"24px",
  marginRight:"15px",

},

lableYes:{
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "14px",
  textAlign:"center"
},
second: {
  height:"24px",
  width:"24px",
  marginLeft: "107px",
  marginRight:"15px",
},

projectInfo: {
  marginRight: "16px",
  marginLeft: "16px",
  
},

pStyle: {
  marginTop: "24px",
  marginLeft: "16px",
  //marginRight:"185px",
  // width: "159px",
  // height: "28px",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "28px",
  border:'none',
},
textBox: {
  width: "328px",
  height: "54px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  
},

generateButton: {
  height: "36px",
  width: "242px",
  backgroundColor: theme.button1BG,
  borderRadius: "22.5px",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  color: theme.button2BG,
  marginTop: "25px",
  marginLeft: "59px",
  marginRight: "59px",
  marginBottom:"30px"
},
hideButton:{
  visibility:"hidden",
},
tagUl:{
  listStyle: 'none',
  display:'flex',
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'spaceAround',
  padding:'0px',
  margin:'0px',
  
},


tagLi:{
  width: '97px',
  height: '44px',
  background: '#D7D7D7',
  // marginTop: "24px",
  // marginLeft: "5px",
  // marginRight: "59px",
  // marginBottom:"33px",
  margin:'10px',
  textAlign:'center',
  paddingTop:'12px',
  paddingBottom:'12px',
  paddingLeft:'10px',
  paddingRight:'10px',
},

'@media only screen and (min-width: 768px)': {

  headingContainer: {
    width:"494px",
    height:"24px",
    marginTop:"73px",
    marginLeft:"53px",
    marginRight:"53px",
  },
  subHeadingContainer:{
    width:"494px",
    height:"71px",
    marginTop: "42px",
    marginRight: "53px",
    marginBottom: "0px",
    marginLeft: "53px",

  },

  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "45px",
    textAlign:'center',
    
  },

  info:{
    width:"auto",
    height:"36px",
    marginTop: "16px",
    marginRight: "52px",
    marginBottom: "42px",
    marginLeft: "53px",
  },
  infoPara:{
    width:"495px",
    //height:"69px",
    fontWeight:"500",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign:'center',
    margin:"0"
  },
  projectSection: {
    display:'flex',
    flexDirection:'row',
    width:"auto",
    marginRight: "53px",
    marginLeft: "52px",
    marginBottom: "33px",
  },
  question:{
    width:"304px",
    height:"40px",
    margin:"0px",
    fontWeight:"500",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign:'left',
},
radioDiv:{
  margin: "0px",
},
first: {
  
  height:"12px",
  width:"12px",
  marginRight:"34px",

},

lableYes:{
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "14px",
  textAlign:"center"
},
second: {
  height:"12px",
  width:"12px",
  marginLeft: "15px",
  marginRight:"53px",
},
projectInfo: {
  display:'flex',
  flexDirection:'column',
  width:"auto",
  marginRight: "52px",
  marginLeft: "52px",
  
},
pStyle: {
  marginTop: "33px",
  width: "398px",
  height:"20px",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "20px",
  border:'none',
},
textBox: {
  width: "496px",
  height: "52px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  
},
},

'@media only screen and (min-width: 992px)': {

  headingContainer: {
    width:"495px",
    height:"24px",
    marginTop:"68px",
    marginLeft:"190px",
  },
  subHeadingContainer:{
    width:"880px",
    height:"96px",
    marginTop: "39px",
    marginRight: "280px",
    marginBottom: "0px",
    marginLeft: "280px",

  },
  subHeading: {
    fontSize: "26px",
    fontWeight: "bold",
    textAlign:'center',
    
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    lineHeight: "45px",
    textAlign:'center',
    
  },
  info:{
    width:"auto",
    height:"69px",
    marginTop: "16px",
    marginRight: "280px",
    marginBottom: "42px",
    marginLeft: "280px",
  },
  infoPara:{
    width:"880px",
    //height:"69px",
    fontWeight:"500",
    fontSize: "22px",
    lineHeight: "28px",
    textAlign:'center',
    margin:"0"
  },
  projectSection: {
    display:'flex',
    flexDirection:'row',
    width:"auto",
    marginRight: "280px",
    marginLeft: "280px",
    marginBottom: "64px",
  },
  question:{
    width:"610px",
    height:"28px",
    margin:"0px",
    fontWeight:"500",
    fontSize: "22px",
    lineHeight: "28px",
    textAlign:'left',
},
radioDiv:{
  margin: "0px",
},
first: {
  
  height:"24px",
  width:"24px",
  marginRight:"15px",

},

lableYes:{
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "14px",
  textAlign:"center"
},
second: {
  height:"24px",
  width:"24px",
  marginLeft: "107px",
  marginRight:"15px",
},
projectInfo: {

  marginRight: "280px",
  marginLeft: "280px",
  
},
pStyle: {
  marginTop: "42px",
  width: "732px",
  height: "28px",
  fontWeight: "500",
  fontSize: "22px",
  lineHeight: "28px",
  border:'none',
},
textBox: {
  width: "880px",
  height: "52px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  
},

}

}));

export default useStyles;
