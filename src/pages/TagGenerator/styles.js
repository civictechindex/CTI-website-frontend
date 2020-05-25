import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  main: {
    backgroundColor: theme.backgroundColor2,
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    "& section": {
      boxSizing: "border-box",
    },
  },
  /**********     HEADING SECTION      **********/
  headingSection: {
    width: "100%",
    height: "750px",
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
  question: {
    display: "inline",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "28px",
  },
  label: {
    marginLeft: "10px",
  },
}));

export default useStyles;
