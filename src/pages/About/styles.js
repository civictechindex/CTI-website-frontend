import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    fontFamily: theme.primaryFontFamily,
      boxSizing: 'border-box',
      width: '100%',
  },
/**********     ABOUT SECTION      **********/
  aboutSection: {
    width: '100%',
    backgroundColor: '#004364',
    //margin:'0px',
      
  },
  urlDiv:{
    paddingTop:'24px',
    paddingLeft: '16px',
  },
  url: {
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: '400',
    color:'#FEFEFE',
    margin:'0px',
  },
  headingDiv:{
    width:'300px',
    margin:'auto',
    paddingTop:'8px',
    // paddingRight: '10px',
    // paddingLeft: '10px',
    // paddingBottom: '10px',
  },
  heading: {
    fontSize: '21px',
    fontWeight: '700',
    lineHeight: '25px',
    textAlign: 'center',
  },
  videoDiv:{
    backgroundColor: '#F2F2F2',
    width:'300px',
    height:'128px',
    marginTop:'10px',
    margin:'auto',
    paddingTop:'18px',
    //paddingRight: '10px',
    //paddingLeft: '10px',
  },
  playButtonImg: {
    //transform: 'translate(0, 40px)',
    marginLeft:'110px',
    marginTop:'30px',
    //margin:'auto',
  },
/**********     TEXT SECTION      **********/
  textSection: {
    color: theme.secondaryTextColor,
    paddingTop:'64px',
    paddingBottom:'41px',
    textAlign: 'center',
    width: '300px',
    margin:'auto',
  },
  text: {
    display: 'inline-block',
    //width: '300px',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '500',
    //margin:'auto',
  },
/**********     PROJCETS SECTION      **********/
  projectSection: {
    backgroundColor: '#F2F2F2',
  },
  // projectsHeading: {
  //   fontSize: '24px',
  //   lineHeight: '32px',
  //   //maxWidth: '470px',
  //   margin: '0',
  //   padding: '60px 20px'
  // },
  projectsContainer: {
    display: 'flex',
    flexDirection:'column',
    // justifyContent: 'space-around',
    // flexWrap: 'wrap',
    textAlign: 'center',
    paddingBottom: '40px',
  },
  // projectsCard: {
  //   height: '293px',
  //   margin: '15px'
  // },
  projectsImg1: {
    marginTop:'25px',
    width: '230px',
    height: '218px',
    //transform: 'translate(0, 40px)',
  },
  projectsImg2: {
    width: '287px',
    height: '167px',
    marginTop:'47px',
    //transform: 'translate(0, 40px)',
  },
  projectsImg3: {
    width: '315px',
    height: '212px',
    marginTop:'20px',
    //transform: 'translate(0, 10px)',
  },
  projectsText: {
    width: '250px',
    textAlign: 'center',
    margin:'auto',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '500',
  },
  // projectsText2: {
  //   width: '303px',
  //   transform: 'translate(0, 42px)',
  // },
  projectsText3: {
    width: '200px',
    textAlign: 'center',
    margin:'auto',
    marginBottom:'10px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '500',
    //transform: 'translate(13%, 11px)',
  },
/**********     GET-STARTED SECTION     **********/
  getStartedSection: {
    backgroundColor: theme.backgroundColor1,
    // paddingTop: '31px',
    // paddingBottom:'40px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
    margin: 'auto',
    height: '176px',
  },
  getStartedHeading: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    color:'#042D5F',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '32px', 
    marginBottom: '16px', 
  },
  getStartedBtn: {
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '16px',
    color: theme.button1TextColor,
    border: `1px solid ${theme.button1BG}`,
    backgroundColor: theme.button1BG,
    borderRadius: '22.5px',
    width: '200px',
    height: '45px',
    outline: 'none',
    cursor: 'pointer',
    margin: 'auto',
    marginBottom: '40px', 
  },
/**********     MEDIA-QUERIES     **********/
'@media (min-width: 675px)': {
  url: {
    fontSize: '12px',
  },
  headingDiv:{
    width:'432px',
  },
  heading: {
    fontSize: '28px',
    lineHeight: '32px',
  },
  videoDiv:{
    backgroundColor: '#F2F2F2',
    width:'500px',
    height:'275px',
    marginTop:'55px',
    margin:'auto',
    //paddingTop:'18px',
    //paddingRight: '10px',
    //paddingLeft: '10px',
  },
  playButtonImg: {
    height:'85px',
    width:'85px',
    //transform: 'translate(0, 40px)',
    marginLeft:'206px',
    marginTop:'95px',
    //margin:'auto',
  },
  /**********     TEXT SECTION      **********/
  textSection: {
    paddingTop:'56px',
    paddingBottom:'83px',
    width: '500px',
    margin:'auto',
  },
  projectsImg1: {
    marginTop:'40px',
    width: '273px',
    height: '259px',
    //transform: 'translate(0, 40px)',
  },
  projectsImg2: {
    width: '327px',
    height: '191px',
    marginTop:'58px',
    //transform: 'translate(0, 40px)',
  },
  projectsImg3: {
    width: '380px',
    height: '256px',
    marginTop:'36px',
    //transform: 'translate(0, 10px)',
  },
  projectsText: {
    width: '340px',
    textAlign: 'center',
    margin:'auto',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '500',
  },
  // projectsText2: {
  //   width: '303px',
  //   transform: 'translate(0, 42px)',
  // },
  projectsText3: {
    width: '270px',
    textAlign: 'center',
    margin:'auto',
    marginBottom:'10px',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '500',
    //transform: 'translate(13%, 11px)',
  },
  // getStartedSection: {
  //   height: '240px',
  // },
  getStartedHeading: {
    fontWeight: '500',
    fontSize: '36px',
    lineHeight: '42px',
    color:'#042D5F',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '56px', 
    marginBottom: '24px', 
  },
  getStartedBtn: {
    display: 'inline-block',
    width: '250px',
    height: '48px',
    marginBottom: '70px', 
  },
},

'@media (min-width: 900px)': {
  urlDiv:{
    paddingTop:'40px',
    paddingLeft: '152px',
  },
  url: {
    fontSize: '14px',
    
  },
  headingDiv:{
    width:'944px',
  },
  heading: {
    fontSize: '36px',
    lineHeight: '38px',
    //paddingRight: '248px',
    //paddingLeft: '248px',
  },
  videoDiv:{
    //backgroundColor: '#F2F2F2',
    width:'944px',
    height:'440px',
    marginTop:'32px',
    margin:'auto',
    //paddingTop:'18px',
    //paddingRight: '10px',
    //paddingLeft: '10px',
  },
 
  playButtonImg: {
    height:'121px',
    width:'121px',
    //transform: 'translate(0, 40px)',
    marginLeft:'412px',
    marginTop:'160px',
    //margin:'auto',
  },
 
  textSection: {
    width:'750px',
  },
  text: {
    display: 'inline-block',
    //width: '300px',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '500',
    //margin:'auto',
  },
    projectSection: {
    backgroundColor: '#004364',
    paddingBottom:'56px',
    
  },
  projectsContainer: {
    margin:'auto',
    width: '1182px',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    //flexWrap: 'wrap',
    textAlign: 'center',
    //paddingBottom: '40px',
    backgroundColor: '#FEFEFE',
  },
  projectsImg1: {
    marginTop:'25px',
    width: '230px',
    height: '218px',
    //transform: 'translate(0, 40px)',
  },
  projectsImg2: {
    width: '287px',
    height: '167px',
    marginTop:'47px',
    //transform: 'translate(0, 40px)',
  },
  projectsImg3: {
    width: '315px',
    height: '212px',
    marginTop:'20px',
    //transform: 'translate(0, 10px)',
  },
  projectsText: {
    width: '250px',
    textAlign: 'center',
    margin:'auto',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '500',
  },
  // projectsText2: {
  //   width: '303px',
  //   transform: 'translate(0, 42px)',
  // },
  projectsText3: {
    width: '200px',
    textAlign: 'center',
    margin:'auto',
    marginBottom:'10px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '500',
    //transform: 'translate(13%, 11px)',
  },
}
}))

export default useStyles