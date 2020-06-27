import React, { useState,useEffect,useContext } from "react";
import useStyles from "./styles.js";
import {TagGeneratorContext} from "../../context/tagGeneratorContext.js"
import AddTags from "./AddTags";


const ProjectInfo = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext)
  const [btnClick, setBtnClick] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    context.validateUrl(context.projectData.projectRepository)
    console.log(context.projectData.projectName);
    console.log(context.projectData.projectRepository);
    console.log(context.owner)
    console.log(context.repo)
  }, [context]);

  const handleButtonClick = () =>{
    setBtnClick(true);
    setSendRequest(true)
    
  }

  return (
    <main className={classes.main}>
      
      <p>Project Name:</p>
      <input className={classes.textBox} type="text" name="projectName" value={context.projectData.projectName} onChange={e => context.updateProjectName(e)}/>
      <p>Project Repository URL:</p>
      <input className={classes.textBox} type="text" name="projectRepository" value={context.projectData.projectRepository} onChange={e => context.updateProjectRepository(e)} />
      <button
        className={btnClick ? classes.hideButton : classes.generateButton}
        onClick={() => handleButtonClick()}
      >
        Find Project
      </button>
      {sendRequest ? <AddTags/> : null}
    </main>
  );
};

export default ProjectInfo;
