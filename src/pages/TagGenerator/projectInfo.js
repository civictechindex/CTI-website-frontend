import React, { useState, useEffect } from "react";
import useStyles from "./styles.js";
import vector from "./Vector.png";
import GenerateTag from "./generateTag.js";



const ProjectInfo = () => {
  const classes = useStyles();

  const initialState ={
    org: "",
    projectName: "",
    projectRepository: "",
    tags:[""],
  }

  const [projectData, setProject] = useState({
    org: "",
    projectName: "",
    projectRepository: "",
    tags:[""],
  });

  const [showGenerateTag, setShowGenerateTag] = useState(false);

  const clearState = () =>{
    
    setProject({...initialState})
    setShowGenerateTag(false)
  }

  const updateOrg = (e) => {
    const dataCopy = { ...projectData };
    dataCopy.org = e.target.value;
    setProject(dataCopy);
  };

  const updateProjectName = (e) => {
    const dataCopy = { ...projectData };
    dataCopy.projectName = e.target.value;
    setProject(dataCopy);
  };

  const updateProjectRepository = (e) => {
    const dataCopy = { ...projectData };
    dataCopy.projectRepository = e.target.value;
    setProject(dataCopy);
  };

  const createTags = () => {
    return projectData.tags.map((tag, idx) => {
      return (
        <div key={idx}>
          <input className={classes.topicBox}
          placeholder="topic(s), cause(s), or civic issue(s) "
           value={tag} 
            
           onChange={e => updateTag(e, idx)} />
          {/* <button className={classes.addButton} onClick={() => removeTag(idx)}>-</button> */}
          <button onClick={addTag}>
          <img className={classes.vector} src={vector} alt="vector" />
          </button>
        </div>
      );
    });
  };

  const updateTag = (e, index) => {
    const dataCopy = { ...projectData };
    dataCopy.tags[index] = e.target.value;
    setProject(dataCopy);
  };

  const removeTag = index => {
    const dataCopy = { ...projectData };
    const dataCopyTags=[...dataCopy.tags];

    dataCopyTags.splice(index,1)

    setProject({
      ...dataCopy,
      tags: [...dataCopyTags]
    });
  };  useEffect(() => {
    console.log(projectData);
  }, [projectData]);

  const addTag = () => {
    setProject(prevState => {
      return {
        ...prevState.data,
        tags:[...prevState.tags, ""]
      };
    });
  };




  return (
    <main className={classes.main}>
      
      <p>Project Name:</p>
      <input className={classes.textBox} type="text" name="projectName" value={projectData.projectName} onChange={e => updateProjectName(e)}/>
      <p>Project Repository URL:</p>
      <input className={classes.textBox} type="text" name="projectRepository" value={projectData.projectRepository} onChange={e => updateProjectRepository(e)} />
      <p>
        What topic(s), cause(s), or civic issue(s) does your project address?
      </p>
      
      {/* <AddTags projectData={projectData} /> */}
      <div>{createTags()}</div>
      <div className={classes.buttonDiv}>
      <button
        className={classes.generateButton}
        onClick={() => setShowGenerateTag(true)}
      >
        Generate Tags
      </button>
      <button className={classes.generateButton} onClick={() => clearState()}>Reset</button>
      </div> 
      {showGenerateTag ? <GenerateTag projectData={projectData} /> : null}
    </main>
  );
};

export default ProjectInfo;
