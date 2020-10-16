import React, { useContext } from "react";
import useStyles from "./styles.js";
import ProjectOrg from "./projectOrg";
import ProjectInfo from "./projectInfo";
import { TagGeneratorContext } from "../../context/tagGeneratorContext.js";
import AddTags from "./AddTags";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const TagGenerator = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext);
  return (
    <>
    <Header />
    <main className={classes.main}>
     
        <div className={classes.headingContainer}>
          <p className={classes.url}>Home / Join the Index / Tag Generator</p>
          </div>
          <div className={classes.subHeadingContainer}>
          <p className={classes.subHeading}>Civic Tech Index</p>
          <h1 className={classes.heading}>Tag Generator</h1>
          </div>
     <div className={classes.info} ><p className={classes.infoPara}>Join the Civic Tech Index by submitting 
     your completed project.</p>
     <p className={classes.infoPara}>This process takes less than one minute 
       to complete.</p></div>
      <div className={classes.projectSection}>
        <p className={classes.question}>
          Is your project affliated with an organization?
        </p>
        <div className={classes.radioDiv}>
          <input
          className={classes.first}
            type="radio"
            value="Yes"
            checked={context.orgValue.option1 === "Yes"}
            onChange={() =>
              context.updateOrgValue("Yes","",false,true)
            }
          />
          Yes
          
       
        
        
          <input
          className={classes.second}
            type="radio"
            value="No"
            checked={context.orgValue.option2 === "No"}
            onChange={() =>
              context.updateOrgValue("","No",true,false)
            }
          />
           No
        </div>
        </div>
        {context.orgValue.showOrgComponent ? <ProjectOrg /> : null}
         {context.orgValue.showComponent ? <ProjectInfo /> : null} 
        {/* {value.showComponent ? <FindProject /> : null} */}
        {context.sendRequest ? <AddTags/> : null}
        
      
    </main>
    <Footer />
    </>
  );
};

export default TagGenerator;
