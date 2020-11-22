import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#004364",
    fontFamily: "Work Sans",
  },
  navContainer: {
    paddingLeft: "20px",
  },
  headingContainer: {
    padding: "20px",
  },
  heading: {
    fontSize: "21px",
    lineHeight: "25px",
    fontWeight: "700",
    textAlign: "center",
    maxWidth: "320px",
    margin: "0 auto",
  },
  videoContainer: {
    backgroundColor: "white",
    alignItems: "center",
    height: "180px",
  },

  textContainer: {
    paddingTop: "60px",
    padding: "40px",
  },
  text: {
    color: "#FFFFFF",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "500",
    maxWidth: "320px",
    textAlign: "center",
    margin: "0 auto",
  },
  getStartedContainer: {
    backgroundColor: theme.backgroundColor1,
  },
  getStartedHeading: {
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#042D5F",
    textAlign: "center",
    margin: "32px auto 16px auto",
  },
  getStartedBtn: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "16px",
    color: theme.button1TextColor,
    border: `1px solid ${theme.button1BG}`,
    backgroundColor: theme.button1BG,
    borderRadius: "22.5px",
    width: "200px",
    height: "45px",
    outline: "none",
    cursor: "pointer",
    margin: "auto",
    marginBottom: "40px",
  },
  "@media (min-width: 675px)": {
    navContainer: {
      pddingTop: "40px",
      paddingLeft: "50px",
    },
    heading: {
      fontSize: "28px",
      lineHeight: "32px",
      maxWidth: "430px",
    },
    videoContainer: {
      backgroundColor: "white",
      alignItems: "center",
      margin: "0 auto",
      height: "275px",
    },
    text: {
      maxWidth: "500px",
    },
    getStartedHeading: {
      fontSize: "36px",
      lineHeight: "42px",
      margin: "56px auto 24px auto",
    },
    getStartedBtn: {
      fontSize: "16px",
      lineHeight: "18px",
      marginBottom: "70px",
    },
  },
  "@media (min-width: 900px)": {
    navContainer: {
      paddingLeft: "150px",
    },
    heading: {
      fontSize: "36px",
      lineHeight: "38px",
      maxWidth: "750px",
    },
    videoContainer: {
      backgroundColor: "white",
      alignItems: "center",
      margin: "0 auto",
      height: "440px",
    },
    text: {
      fontSize: "22px",
      lineHeight: "28px",
      maxWidth: "750px",
    },
  },
}));

export default useStyles;