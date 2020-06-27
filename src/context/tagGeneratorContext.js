  
import React, { useState, useReducer } from 'react';
//import TagGeneratorContext from "./tagGeneratorContext.js"

export const TagGeneratorContext = React.createContext({
  projectData:{projectName: "",
              projectRepository: ""},
  owner:"",
  repo:"",
  projectTags:[],
  additionalTags:{atags:[""]},
  topicTags:[],
  showDisplayTag:true,
  updateShowDisplayTag:()=>{},
  updateProjectName: projectName => {},
  updateProjectRepository:projectRepository => {},
  validateUrl:projectRepository =>{},
  updateProjectTag:dataCopy => {},
  updateTopicTags:copytopicTags =>{},
  addTag:()=>{}
})


 export const TagGeneratorContextProvider = props => {
  const [projectData, setProject] = useState({
    projectName: "",
    projectRepository: "",
    })
    const [owner,setOwner] =useState("")
    const [repo,setRepo] =useState("")
    const [showDisplayTag, setShowDispalyTag] = useState(true);
  const [projectTags,setProjectTags] = useState([])
  const [additionalTags,setAdditonalTags] = useState({atags:[""]})
  const [topicTags, setTopicTags] = useState([]);

 const updateShowDisplayTag = () => {
   setShowDispalyTag(false)
 }

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

  const validateUrl = (projectRepository) =>{
    let ownerRepo= projectRepository.replace(/https*:\/\/github.com\//, '').split('/')
    // if (!owner || !repo) throw Error(`${projectRepository} is not a valid GitHub repository URL`)
    setOwner(ownerRepo[0])
    setRepo(ownerRepo[1])
  }

  const addTag = () => {
    setProjectTags((prevState) => {
      return {
        
        ptags: [...prevState.ptags, ""],
      };
    });
  };

  const updateProjectTag = (dataCopyTags) => {
    const pt = [...projectTags]
    if(pt.includes("civictechindex")){
    setProjectTags((prevState) => [...prevState, ...dataCopyTags])
    }else{
      setProjectTags((prevState) => ["civictechindex",...prevState, ...dataCopyTags])
    }
  };

  const updateTopicTags = (copyTopicTags) => {
    setTopicTags(copyTopicTags)
  }

  return (
    <TagGeneratorContext.Provider
      value={{
        projectData:projectData,
        owner:owner,
        repo:repo,
        showDisplayTag:showDisplayTag,
        projectTags:projectTags,
        additionalTags:additionalTags,
        topicTags:topicTags,
        updateShowDisplayTag:updateShowDisplayTag,
        updateProjectName:updateProjectName,
        updateProjectRepository:updateProjectRepository,
        validateUrl:validateUrl,
        addTag:addTag,
        updateProjectTag:updateProjectTag,
        updateTopicTags:updateTopicTags
      }}
    >
      {props.children}
    </TagGeneratorContext.Provider>
  );
};

