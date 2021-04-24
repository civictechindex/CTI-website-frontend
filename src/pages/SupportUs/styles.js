import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({

  largeButton: {
    button: theme.overrides.MuiButton,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
  },
  innerTextCardContainer: {
    height: '448px',
    width: '608px',
  },
  faqCardHeading: {
    color: theme.palette.secondary.dark,
    position: 'absolute',
    top: '94px',
    right: '330px',
    fontSize: '42px',
    lineHeight:'48px',
  },
  faqPHeading: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '159px',
    right: '164px',
  },
  faqRightDtpLine1: {
    position: 'absolute',
    top: '197px',
    right: '180px',
  },
  faqRightDtpLine2: {
    position: 'absolute',
    top: '220px',
    right: '357px',
  },
  faqLinkText: {
    position: 'absolute',
    top: '255px',
    right: '218px',
  },
  inLineLinkText: {
    color: '#6df',
  },
  faqButton: {
    position: 'absolute',
    border: '2px solid black',
    backgroundColor: 'white',
    borderColor: '#0F1D2F',
    color: 'black',
    margin: '0 auto',
    padding: '16px',
    top: '312px',
    right: '287px',
    width: '278px',
  },
  imgCard: {
    top: '33px',
    position: 'absolute',
    height: '382px',
    width: '544px',
    left: '608px',


  },
  imgCardLeft: {
    maxWidth: 1280,
    position: 'absolute',
    height: '382px',
    width: '544px',
    top: '33px',
    right: '608px',
  },
  cardMedia: {
    height: '382px',
    width: '544px',
  },
  gridCont: {
    margin: 'auto',
  },
  outerCard: {
    position: 'relative',
    padding: '0px',
    width: '1184px',
    margin: '0 auto',
    marginBottom: '10px',
    maxWidth: 1280,
  },
  cardHeading: { // does this happen outside of vol card?
    position: 'absolute',
    top: '94px',
    left: '69px',
    fontSize: '42px',
    lineHeight: '48px',
  },
  cardParaHeading:{
    position: 'absolute',
    left: '69px',
    top: '159px',
  },
  dtpLine1: {
    position: 'absolute',
    left: '69px',
    top: '197px',
  },
  dtpLine2: {
    position: 'absolute',
    left: '69px',
    top: '220px',

  },
  dtpLine3: {
    position: 'absolute',
    left: '69px',
    top: '243px',
  },
  volButton: {
    position: 'absolute',
    border: '2px solid black',
    backgroundColor: 'white',
    borderColor: '#0F1D2F',
    color: 'black',
    margin: '0 auto',
    padding: '16px',
    width: '225px',
    top: '288px',
    left: '60px',
  },
  shareCardHeading: {
    color: theme.palette.secondary.dark,
    position: 'absolute',
    top: '94px',
    right: '300px',
    fontSize: '42px',
    lineHeight:'48px',
  },
  shareCardPHeading: {
    position: 'absolute',
    top: '159px',
    right: '250px',
  },
  rightDtpLine1: {
    position: 'absolute',
    top: '197px',
    right: '146px',
  },
  rightDtpLine2:{
    position: 'absolute',
    top: '220px',
    right: '210px',
  },
  buttonRight: {
    position: 'absolute',
    border: '2px solid black',
    backgroundColor: 'white',
    borderColor: '#0F1D2F',
    color: 'black',
    margin: '0 auto',
    padding: '16px',
    top: '268px',
    right: '307px',
    width: '278px',
  },
  footerTxt: {
    position: 'absolute',
    left: '69px',
    top: '280px',
  },
  donateButton: {
    position: 'absolute',
    border: '2px solid black',
    backgroundColor: 'white',
    borderColor: '#0F1D2F',
    color: 'black',
    margin: '0 auto',
    padding: '16px',
    top: '330px',
    left: '69px',
    width: '225px',
  },
}))
export default useStyles
