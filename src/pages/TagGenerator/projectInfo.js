import React, { useState,useEffect,useContext } from "react";
import useStyles from "./styles.js";
import {TagGeneratorContext} from "../../context/tagGeneratorContext.js"
import TagGeneratorContext1 from '../../context/tagGeneratorContext1.js'


const ProjectInfo = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext)
  const context1 = useContext(TagGeneratorContext1)
  //const [btnClick, setBtnClick] = useState(false);
  //const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    context.validateUrl(context.projectData.projectRepository)
    console.log(context.projectData.projectName);
    console.log(context.projectData.projectRepository);
    console.log(context.owner)
    console.log(context.repo)
    console.log(context1);
  }, [context,context1]);

  const handleButtonClick = () =>{
    context.handleBtnClick(true);
    context.handleSendRequest(true)
    context.handleShowDisplayTags(true);
  }

  return (
    <div className={classes.projectInfo}>
      
      <p className={classes.pStyle}>Project Name:</p>
      {/* ?<input className={classes.textBox} type="text" name="projectName" value={context.projectData.projectName} onChange={e => context.updateProjectName(e)}/> */}
      <input className={classes.textBox} type="text" name="projectName" value={context1.projectName} onChange={e => context1.updateProjectName(e)}/>
      <p className={classes.pStyle}>Project Repository URL:</p>
      <input className={classes.textBox} type="text" name="projectRepository" value={context.projectData.projectRepository} onChange={e => context.updateProjectRepository(e)} />
      <div className={context.btnClick ? classes.hideButton: classes.divError}><span>{context.error}</span></div>
      <button
        className={context.btnClick ? classes.hideButton : classes.generateButton}
        onClick={() => handleButtonClick()}
      >
        Find Project
      </button>
      
      
      {/* {sendRequest ? <AddTags/> : null} */}
    </div>
  );
};

export default ProjectInfo;
