import { createUseStyles } from "react-jss";
import AutoManualTags from "./autoManualTags";

const useStyles = createUseStyles((theme) => ({
  main:{
    width: "100%",
    height: "auto",
    backgroundColor: theme.backgroundColor2,
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns:"repeat(4, minmax(0, 1fr))",
    gridTemplateRows:"56px 96px 128px auto",
    columnGap:"16px",
    paddingLeft:"16px",
    paddingRight:"16px",
  },

  headingContainer:{
    gridColumn:"1/5",
    gridRow: "1",
    alignSelf: "end",
  },
  url: {
    margin: 0,
    fontStyle:"regular",
    fontSize: "12px",
    lineHeight: "24px",
    textAlign:'left',
  },
  subHeadingContainer:{
    gridColumn:"1/5",
    gridRow: "2",
    alignSelf: "center",
    margin:"auto",
  },
  subHeading: {
    fontFamily: theme.secondaryFontFamily,
    color: theme.primaryTextColor,
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: 0,
    textAlign:'center',
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "42px",
    textAlign:'center',
    marginTop: 0,
  },
  info:{
    gridColumn:"1/5",
    gridRow: "3",
  },
  infoPara:{
    fontWeight:"500",
    fontSize: "16px",
    //fontWeight: "bold",
    lineHeight: "22px",
    textAlign:'center',
  },

  projectSection:{
    gridColumn:"1/5",
    gridRow: "4",
  },
  question:{
    fontWeight:"500",
    fontSize: "16px",
    //fontWeight: "bold",
    lineHeight: "22px",
    textAlign:'left',
},
first: {
  display:"inline",
  height:"24px",
  width:"24px",
  marginRight:"15px",

},

second: {
  height:"24px",
  width:"24px",
  marginLeft: "107px",
  marginRight:"15px",
},
lableYes:{
  display:"inline",
   width:"26px",
  // width:"14px",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "14px",
  textAlign:"center"
},

divError:{
  color:"red",
},

'@media only screen and (min-width: 992px)': {
main:{
  gridTemplateColumns:"repeat(12, minmax(0, 1fr))",
  gridTemplateRows:"92px 135px 127px auto",
  columnGap:"16px",
  paddingLeft:"190px",
  paddingRight:"190px",
  height:"564px"
},
headingContainer:{
  gridColumn:"1/13",
},
url: {
   fontSize: "14px",
 },
 subHeadingContainer:{
  gridColumn:"1/13",
},
subHeading: {

  fontSize: "26px",

},
heading: {
  fontSize: "26px",
  lineHeight: "45px",

},
info:{
  gridColumn:"1/13",
  gridRow: "3",
  // height:"880px",
  // width:"24px",
  margin:"auto"
},
infoPara:{
  fontSize: "22px",
  lineHeight: "28px",
  width:"880px",
  height:"64px",
 },

// projectSection:{
//   gridColumn:"1/13",
//   gridRow: "4",
// },
question:{
  gridRow: "3/4",
  gridColumn: "2 / 9",
  fontSize: "22px",
  //fontWeight: "bold",
  lineHeight: "28px",
  
},
radioDiv:{
  gridRow: "3/4",
  gridColumn: "10 /13",
},
first: {
display:"inline",
height:"24px",
width:"24px",
marginRight:"15px",

},

second: {
height:"24px",
width:"24px",
marginLeft: "107px",
marginRight:"15px",
},
lableYes:{
display:"inline",
 width:"26px",
// width:"14px",
fontWeight: "500",
fontSize: "16px",
lineHeight: "14px",
textAlign:"center"
},
}

}))

export default useStyles;
