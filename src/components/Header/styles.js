import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "relative",
    height: "100px",
    backgroundColor: theme.palette.background.default,
    fontSize: "16px",
    fontFamily: theme.typography.fontFamily,
    zIndex: "900",
  },
  flexContainer: {
    position: "relative",
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: "240px",
  },
  circle: {
    position: "absolute",
    width: "336px",
    height: "180px",
    borderRadius: "180px 180px 0 0",
    backgroundColor: theme.palette.grey[100],
    transform: "translate(-100px, -80px)",
  },
  logo: {
    position: "absolute",
    width: "150px",
    top: "26px",
    left: "30px",
  },
  searchContainer: {
    width: "250px",
  },
  /** ********     MOBILE SECTION     **********/
  mobileContainer: {
    display: "none",
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    marginLeft: "220px",
  },
  /** ********     MEDIA-QUERIES SECTION     **********/
  "@media (max-width: 1000px)": {
    background: {
      position: "absolute",
      height: "100px",
      width: "100%",
      backgroundColor: theme.palette.grey[300],
    },
    circle: {
      display: "none",
    },
    flexContainer: {
      display: "flex",
      position: "absolute",
      bottom: "0px",
      left: "-240px",
      transform: "translateY(0)",
      backgroundColor: theme.palette.grey[100],
      width: "100%",
      height: "fit-content",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "30px 20px 40px 20px",
      zIndex: "-10",
      "& $searchContainer": {
        display: "none",
      },
    },
    showMobileNav: {
      transform: "translateY(100%)",
      transition: "transform 1s",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    mobileContainer: {
      display: "flex",
      marginRight: "2rem",
    },
  },
}));

export default useStyles;
