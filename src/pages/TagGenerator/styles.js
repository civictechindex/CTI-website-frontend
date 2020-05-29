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
  },

  vector: {
    height: "38px",
    width: "38px",
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

  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },

  flexTags: {
    flex: "1",
    height: "150px",
    width: "100%",
  },

  flexItem: {
    display: "inline",
    height: "396px",
    width: "50%",
    background: "#FFFFFF",
  },
}));

export default useStyles;
