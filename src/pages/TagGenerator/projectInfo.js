import React, { useState } from "react";
import useStyles from "./styles.js";
import AddTopic from "./addTopic";
import GenerateTag from "./generateTag.js";


const ProjectInfo= () => {
  const classes = useStyles();
  const[project,setProject] = useState({org:'',projectName:'',projectRepository:''})
  const [showGenerateTag, setShowGenerateTag] = useState(false);

  return (
    <main className={classes.main}>
      <p>Which Organization?</p>
      <input className={classes.textBox} type="text" name="org"/>
      <p>Project Name:</p>
      <input className={classes.textBox} type="text" name="projectName"/>
      <p>Project Repository URL:</p>
      <input className={classes.textBox} type="text" name="projectRepository"/>
      <p>
        What topic(s), cause(s), or civic issue(s) does your project address?
      </p>
      {/* <button>Add Tag</button> */}
      <AddTopic />
      <button className={classes.generateButton} onClick={()=>setShowGenerateTag(true)}>Generate Tags</button>
      <button className={classes.generateButton}>Reset</button>
      {showGenerateTag ? <GenerateTag /> : null}
    </main>
  );
};

export default ProjectInfo;
