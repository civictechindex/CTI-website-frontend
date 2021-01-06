import React from 'react';

export default React.createContext({
  additionalTags:{atags:[""]},
  addTag:()=>{}
  owner:"",
  projectName: "",
  projectRepository: "",
  projectTags:[],
  repo:"",
  showDisplayTag:true,
  topicTags:[],
  updateProjectName: projectName => {},
  updateProjectRepository:projectRepository => {},
  updateProjectTag:dataCopy => {},
  updateShowDisplayTag:()=>{},
  updateTopicTags:copytopicTags =>{},
  validateUrl:projectRepository =>{},
})
