import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  main: {
    backgroundColor: theme.backgroundColor2,
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    boxSizing: "border-box",

    width: "100%",
    height: "auto",
  },
  /**********     HEADING SECTION      **********/
  headingSection: {
    marginTop: 0,
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    display:'flex',
    flexDirection:'column',
  },
  headingContainer: {
    width: "fit-content",
    paddingTop: "60px",
    paddingLeft: "220px",
  },
  url: {
    margin: 0,

    fontSize: "14px",
    lineHeight: "24px",
  },
  subHeading: {
    fontFamily: theme.secondaryFontFamily,
    color: theme.primaryTextColor,
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: 0,
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    lineHeight: "42px",
    marginTop: 0,
  },
  projectSection: {
    paddingLeft: "215px",
 
  },
  question: {
    width: "770px",
    height: "28px",
    display: "inline",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "28px",
  },
  labelYes: {
    marginLeft: "60px",
  },

  labelNo: {
    marginLeft: "60px",
  },
  textBox: {
    width: "770px",
    height: "52px",
    fontSize: "16px",
    lineHeight: "19px",
    paddingLeft: "10px",
    border:'none',
  },

  orgTextBox: {
    width: "770px",
    height: "52px",
    fontSize: "16px",
    lineHeight: "19px",
    paddingLeft: "10px",
    outline:'none',
    borderTop:'none',
    borderRight:'none',
    borderLeft:'none',
    borderBottom:'1px solid #979797',
  },

  autoCompleteText:{
    marginBottom:'15px',
  },

  autoCompleteUl:{
    listStyle: 'none',
    textAlign:'left',
    padding:'0px',
    margin:'0px',
},

autoCompleteLi:{
  width: "770px",
  height: "22px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "10px",
  paddingTop: "15px",
  paddingBottom: "15px",
  borderBottom:'1px solid #979797',
  borderTop:'none',
  backgroundColor: theme.backgroundColor1,
  outline:'none',
  '&:hover':{
    textDecoration:'underline blue',
    outline:'2px solid blue',
    border:'none',
  }
},

  topicBox: {
    width: "710px",
    height: "52px",
    marginTop: "16px",
  },

  addButton: {
    height: "58px",
    marginLeft: "15px",
    marginTop: "15px",
    border:'none',
  },

  vector: {
    height: "38px",
    width: "38px",
  },

  buttonDiv:{
    marginBottom:'50px',
  },

hideButton:{
  visibility:"hidden",
},

  generateButton: {
    
    height: "45px",
    width: "270px",
    backgroundColor: theme.button1BG,
    borderRadius: "22.5px",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "16px",
    color: theme.button2BG,
    marginTop: "41px",
    marginLeft: "100px",
  },

  tagDiv:{
width:"80%",
  },

  tagUl:{
    listStyle: 'none',
    display:'flex',
    flexDirection:'row',
    flexWrap:"wrap",
    padding:'0px',
    margin:'0px',
},

tagLi:{
  width: '166px',
  height: '44px',
  background: '#FFFFFF',
  margin:'10px',
  textAlign:'center',
  paddingTop:'20px',
},

copyImg: {
  height: "51px",
  width: "44px",
  margin:'10px',
},

  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    
  },

  flexItem: {
    display: "inline",
    height: "396px",
    width: "370px",
    background: "#FFFFFF",
    margin:'10px',
    textAlign:'center',
  },

  pHeading:{
    fontWeight: '500',
    fontSize: '22px',
    lineHeight: '28px',
    textAlign:'center',
    marginTop:'32px',
  },

pTag:{
  fontSize: '18px',
  lineHeight: '21px',
  textAlign:'center',
  marginTop:'18px',
}

}));

export default useStyles;
