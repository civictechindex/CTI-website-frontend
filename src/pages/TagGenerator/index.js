import React, { useState } from "react";
import useStyles from "./styles.js";
import ProjectOrg from "./projectOrg";
import ProjectInfo from "./projectInfo";
//import FindProject from "./findProject";

const TagGenerator = () => {
  const classes = useStyles();

  const [value, setValue] = useState({
    option1: "",
    option2: "",
    showComponent: false,
    showOrgComponent:false
  });

  return (
    <main className={classes.main}>
      <section className={classes.headingSection}>
        <div className={classes.headingContainer}>
          <p className={classes.url}>Home / Tag Generator</p>
          <p className={classes.subHeading}>Civic Tech Index</p>
          <h1 className={classes.heading}>Tag Generator</h1>
        </div>
      </section>
      <section className={classes.projectSection}>
        <p className={classes.question}>
          Is your project affliated with any organization?
        </p>
        <label className={classes.labelYes}>
          <input
            type="radio"
            value="Yes"
            checked={value.option1 === "Yes"}
            onChange={() =>
              setValue({ option1: "Yes", option2: "", showComponent: false,showOrgComponent:true })
            }
          />
          Yes
        </label>
        
        <label className={classes.labelNo}>
          <input
            type="radio"
            value="No"
            checked={value.option2 === "No"}
            onChange={() =>
              setValue({ option1: "", option2: "No", showComponent: true, showOrgComponent:false })
            }
          />
          No
        </label>
        {value.showOrgComponent ? <ProjectOrg value={value}/> : null}
         {value.showComponent ? <ProjectInfo /> : null} 
        {/* {value.showComponent ? <FindProject /> : null} */}
      </section>
    </main>
  );
};

export default TagGenerator;
