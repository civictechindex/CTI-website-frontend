import { makeStyles } from "@material-ui/core/styles";

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
  linksContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",
    "&:hover $subLinksContainer": {
      display: "flex",
    },
  },
  links: {
    textDecoration: "none",
    color: theme.palette.common.black,
    margin: "10px",
  },
  linksWithArrows: {
    cursor: "pointer",
  },
  linksArrows: {
    display: "none",
  },
  searchContainer: {
    width: "250px",
  },
  black: {
    color: theme.button1TextColor,
    backgroundColor: theme.palette.info.main,
    border: `1px solid ${theme.palette.info.main}`,
  },
  search: {
    width: "180px",
    height: "30px",
    padding: "15px",
    borderRadius: "22.5px",
    border: "1px solid #C3C3C3",
    background: "#FFFFFF url(images/search.svg) no-repeat scroll 8px 5.5px",
    paddingLeft: "36px",
    fontFamily: theme.typography.fontFamily,
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "width .8s",
    "&:focus": {
      width: "97%",
      position: "absolute",
      top: "35px",
      right: "10px",
    },
  },
  subLinksContainer: {
    display: "none",
    flexDirection: "column",
    position: "absolute",
    top: "38px",
    left: "8px",
    width: "168px",
    borderRadius: "4px",
    boxShadow:
      "0px 4px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)",
    zIndex: "1000",
    "& $subLinks:first-child": {
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    "& $subLinks:last-child": {
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      borderBottom: "none",
    },
  },
  subLinks: {
    fontSize: "14px",
    textDecoration: "none",
    color: theme.palette.grey[600],
    padding: "10px",
    backgroundColor: theme.palette.background.default,
    borderBottom: "1px solid #DEDEDE",
    "&:hover": {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.grey[300],
    },
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
  mobileSearch: {
    width: "8px",
    height: "30px",
    padding: "20px 12px",
    borderRadius: "22.5px",
    border: "none",
    background: "url(images/mobile-search.svg) no-repeat scroll 8px 5.5px",
    backgroundSize: "30px",
    paddingLeft: "50px",
    fontFamily: theme.typography.fontFamily,
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "width .8s",
    "&:focus": {
      width: "100%",
    },
  },
  displayNone: {
    display: "none",
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
    links: {
      position: "relative",
      display: "inline-block",
      margin: "8px 0",
      outline: "none",
      "&:focus $linksArrows": {
        transform: "scaleY(1)",
        top: "5px",
      },
    },
    linksWithArrows: {
      paddingRight: "35px",
    },
    linksArrows: {
      display: "inline",
      position: "absolute",
      top: "6px",
      right: "0",
      width: "fit-content",
      transform: "scaleY(-1)",
      outline: "none",
      zIndex: "-1",
    },
    linksContainer: {
      display: "block",
      "& $links:focus ~ $subLinksContainer": {
        maxHeight: "1000px",
        transition: "max-height 1s ease-in-out",
      },
    },
    subLinksContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "static",
      width: "fit-content",
      maxHeight: "0px",
      transition: "max-height 0s ease-in-out",
      overflow: "hidden",
      borderRadius: "none",
      boxShadow: "none",
      zIndex: "1000",
      "& $subLinks:first-child": {
        padding: "4px 10px 6px 20px",
      },
      "&:hover": {
        maxHeight: "1000px",
      },
    },
    subLinks: {
      fontWeight: "normal",
      color: theme.palette.common.black,
      padding: "6px 10px 6px 20px",
      backgroundColor: "inherit",
      border: "none",
      "&:hover": {
        color: "inherit",
        backgroundColor: "inherit",
      },
    },
    showMobileNav: {
      transform: "translateY(100%)",
      transition: "transform 1s",
      display: "flex",
    },
    mobileContainer: {
      display: "flex",
      marginRight: "2rem",
    },
  },
}));

export default useStyles;
