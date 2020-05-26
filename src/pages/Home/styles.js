import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
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
    backgroundColor: theme.backgroundColor1,
  },
  heading: {
    fontFamily: theme.primaryFontFamily,
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
  listItemContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '260px',
    margin: '10px',
  },
  listItemCircle: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#000000',
  },
  listItemText: {
    fontFamily: theme.primaryFontFamily,
    textTransform: 'uppercase',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '500',
    width: '216px',
    marginLeft: '15px',
  },
  btnContainer: {
    width: '100%',
    textAlign: 'center',
  },
  btn: {
    display: 'inline-block',
    fontFamily: theme.primaryFontFamily,
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
  },
  ctiHeading: {
    fontFamily: theme.primaryFontFamily,
    fontSize: '24px',
    fontWeight: 'bold',
    color: theme.primaryTextColor,
    margin: '0',
    padding: '0',
    marginLeft: '52px',
  },
  ctiContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '42px 0'
  },
  ctiImgsContainer: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 20px'
  },
  ctiImgs: {
    display: 'inline-block',
    width: '170px',
    height: '100px',
    objectFit: 'scale-down',
    margin: '20px 20px',
  },
/**********     EMPTY SECTION     **********/
  emptySection: {
    width: '100%',
    height: '200px',
    backgroundColor: theme.backgroundColor3,
    textAlign: 'center',
    '& *': {
      fontSize: '36px',
      paddingTop: '40px',
      margin: '0',
    }
  },
/**********     GET-STARTED SECTION     **********/
  getStartedSection: {
    padding: '60px 0',
    textAlign: 'center',
  },
  getStartedHeading: {
    fontFamily: theme.primaryFontFamily,
    fontWeight: '500',
    fontSize: '36px',
    margin: '0', 
    marginBottom: '30px', 
  },
  getStartedBtn: {
    display: 'inline-block',
    fontFamily: theme.primaryFontFamily,
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
  '@media (max-width: 460px)': {
    mainSection: {
      paddingTop: '40px',
    },
    heading: {
      fontSize: '21px',
      lineHeight: '25px',
      maxWidth: '240px',
    },
    btn: {
      width: '180px',
      height: '30px',
      margin: '5px 20px'
    },
    btnContainer: {
      marginTop: '25px',
    },
    getStartedHeading: {
      fontSize: '30px',
    },
    ctiHeading: {
      fontSize: '20px',
    },
    ctiImgs: {
      width: '34vw',
      height: '20vw',
      margin: '2vw 4vw',
    }
  },
}))

export default useStyles