import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  picturesContainer: {
    backgroundColor: "#F2F2F2",
    fontFamily: "Work Sans",
    margin: "auto",
  },

  projectsText: {
    width: "250px",
    textAlign: "center",
    margin: "auto",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "500",
    paddingBottom: "50px",
  },

  "@media (min-width: 675px)": {
    projectsText: {
      fontSize: "18px",
      lineHeight: "24px",
      //paddingBottom: "50px",
    },
  },

  "@media (min-width: 900px)": {
    picturesContainer: {
      justifyContent: "spaceAround",
      maxWidth: "1200px",
      margin: "0 auto 50px auto",
    },

    // projectsText: {
    //   paddingBottom: "50px",
    // },
  },
}));

export default useStyles;