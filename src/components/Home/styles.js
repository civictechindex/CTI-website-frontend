import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  mainSection: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '75px 10px 50px 10px',
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
  '@media (max-width: 460px)': {
    heading: {
      fontSize: '30px',
      lineHeight: '32px',
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