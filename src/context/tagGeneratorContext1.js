
import React from 'react';


export default React.createContext({
  projectName: "",
  projectRepository: "",
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
