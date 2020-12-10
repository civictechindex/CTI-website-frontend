import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles((theme) => ({
  firstSectionWrapper: {
    width: "100%",
    background: "#004364",
    color: "#FFE06D",
    boxSizing: "border-box",
    backgroundImage: 'url("/images/CTI-Contributors-BG-1.png")',
    minHeight: "60vh",
    backgroundPositionY: "bottom",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  banner: {
    height: "20px",
    width: "100px",
  },
  projectsLink: {
    margin: "0",
    paddingTop: "70px",
    fontSize: "14px",
    color: "#FEFEFE",
  },
  sectionContainer: {
    fontFamily: theme.primaryFontFamily,
    boxSizing: "border-box",
    margin: "0 auto",
    width: "70%",
    "& p": {
      margin: "0",
    },
  },
  heading: {
    textAlign: "center",
    margin: "1rem auto",
  },
  affiliation: {
    paddingRight: "1rem",
    boxSizing: "border-box",
    color: "#004364",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.3rem",
    "& h2": {
      width: "100%",
    },
  },
  unaffiliatedWrapper: {
    width: "100%",
    "& h2": {
      color: "#004364",
    },
  },
  affiliatedWrapper: {
    width: "100%",
    backgroundColor: "#004364",
    paddingBottom: "1rem",
  },
  chevron: {
    margin: "auto 0 auto auto",
    "&:hover": {
      cursor: "pointer",
    },
  },
  placeholder: {
    backgroundColor: "white",
    height: "90vh",
  },

  input: {
    width: "100%",
    borderRadius: "7px",
    backgroundColor: "white",
  },
}));
