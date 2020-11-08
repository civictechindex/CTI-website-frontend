import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    fontFamily: theme.primaryFontFamily,
    '& section': {
      boxSizing: 'border-box',
      paddingRight: '20px',
      paddingLeft: '20px',
    },
  },
/**********     MAIN SECTION     **********/
  mainSection: {
    width: '100%',
    padding: '75px 0 50px 0',
    // backgroundColor: theme.backgroundColor1,
  },
  heading: {
    fontSize: '36px',
    lineHeight: '38px',
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: '750px',
    margin: '0 auto',
  },
  listContainer: {
    display: 'flex',
    margin: '0 auto 50px auto',
    paddingTop: '55px',
    width: 'fit-content',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  listItemCircle: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#000000',
  },
  listItemText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',
    margin: '2vw 2.5vw',
    textAlign:'center',
    width: '216px',
  },
  btnContainer: {
    textAlign: 'center',
    width: '100%',
  },
  btn: {
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '16px',
    color: theme.button2TextColor,
    border: `1px solid ${theme.button2TextColor}`,
    backgroundColor: theme.button2BG,
    borderRadius: '22.5px',
    width: '270px',
    height: '45px',
    margin: '10px 18px 18px 18px',
    outline: 'none',
    cursor: 'pointer',
  },
  black: {
    color: theme.button1TextColor,
    backgroundColor: theme.button1BG,
    border: `1px solid ${theme.button1BG}`,
  },
/**********     CTI SECTION     **********/
  ctiSection: {
    width: '100%',
    minHeight: '380px',
    backgroundColor: theme.backgroundColor2,
    padding: '0 !important',
  },
  ctiHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: theme.primaryTextColor,
    margin: '0',
    paddingLeft: '20px',
  },
  ctiContainer: {
    maxWidth: '850px',
    margin: '0 auto',
    padding: '42px 0',
  },
  ctiImgsContainer: {
    textAlign: 'center',
    width: '100%',
  },
  ctiImgs: {
    display: 'inline-block',
    width: '170px',
    height: '100px',
    objectFit: 'scale-down',
    margin: '20px 20px',
  },
/**********     TRENDING-TOPICS SECTION     **********/
  trendingTopicsSection: {
    backgroundColor: theme.backgroundColor3,
  },
  trendingTopicsHeader: {
    fontSize: '42px',
    lineHeight: '45px',
    margin: '0',
    padding: '3vw 0 0.5vw',
  },
  allTopicsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto',
    width: '60%',
  },
  topicContainer: {
    backgroundColor: theme.backgroundColor6,
    boxSizing: 'border-box',
    display: 'inline-block',
    margin: '1vw 2% 0',
    padding: '3vw 3vw',
    paddingTop: '13.5%',
    position: 'relative',
    textAlign: 'center',
    width: '46%',
  },
  trendingTopicsDetails: {
    color: theme.primaryTextColor,
    cursor: 'pointer',
    fontSize: '1.75vw',
    fontWeight: 'bold',
    left: '50%',
    margin: '0',
    position: 'absolute',
    textDecoration: 'underline',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
  },
/**********     GET-STARTED SECTION     **********/
  getStartedSection: {
    padding: '60px 0',
    textAlign: 'center',
  },
  getStartedHeading: {
    fontWeight: '500',
    fontSize: '36px',
    margin: '0', 
    marginBottom: '30px', 
  },
  getStartedBtn: {
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '16px',
    color: theme.button1TextColor,
    border: `1px solid ${theme.button1BG}`,
    backgroundColor: theme.button1BG,
    borderRadius: '22.5px',
    width: '270px',
    height: '45px',
    outline: 'none',
    cursor: 'pointer',
  },
/**********     MEDIA-QUERIES     **********/
  '@media (max-width: 900px)': {
    listContainer: {
      display: 'none',
    },
    btnContainer: {
      marginTop: '50px',
    },
  },
  '@media (max-width: 675px)': {
    allTopicsContainer: {
      width: '100%',
    },
    trendingTopicsHeader: {
      fontSize: '21px',
      lineHeight: '26px',
      width: '260px'
    },
    trendingTopicsDetails: {
      fontSize: '14px',
    },
    mainSection: {
      paddingTop: '40px',
    },
    heading: {
      fontSize: '21px',
      lineHeight: '25px',
      maxWidth: '240px',
      margin: '0 auto'
    },
    btn: {
      width: '180px',
      height: '30px',
      margin: '5px 0',
    },
    btnContainer: {
      margin: '0 auto',
      width: '180px',
      marginTop: '25px',
    },
    ctiHeading: {
      fontSize: '21px',
      lineHeight: '26px',
      width: '180px',
    },
    ctiImgs: {
      width: '35vw',
      height: '20vw',
      margin: '2vw 5vw',
    },
    getStartedHeading: {
      fontSize: '21px',
      fontWeight: 'bold',
    },
    getStartedBtn: {
      width: '180px',
      height: '30px',
    },
  },
}))

export default useStyles
