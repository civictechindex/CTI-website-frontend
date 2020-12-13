import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles((theme) => ({
  firstSectionWrapper: {
      display:'grid',
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
  affiliation: {
      textAlign: 'center',
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
    paddingBottom: "1rem",
    "& >*, & h2": {
      color: "#004364",
      textAlign: 'center'
    },
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2'
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
  contributorsContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.7rem",
    // alignItems: 'stretch'
  }
}));
