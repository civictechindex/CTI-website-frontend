import React, { useState, useReducer } from 'react';

import TagGeneratorContext1 from './tagGeneratorContext1.js'
import {tagGeneratorReducer,UPDATE_PROJECTNAME} from './reducer'

export const TagGeneratorContextProvider1 = props => {
const initialState = {
projectName: "",
projectRepository: "",
owner:"",
repo:"",
projectTags:[],
additionalTags:{atags:[""]},
topicTags:[],
}
  const [projectState, dispatch] = useReducer(tagGeneratorReducer,initialState );
  
  const updateProjectName = projectName => {
      dispatch({ type: UPDATE_PROJECTNAME, projectName: projectName.target.value });
    
  };

  const updateProjectRepository = projectRepository => {
    dispatch({ type: UPDATE_PROJECTNAME, projectName: projectRepository.target.value });
  
};

// const updateOwner = owner => {
//   dispatch({ type: UPDATE_OWNER, owner: owner });

// };

// const validateUrl = (projectRepository) =>{
//   let ownerRepo= projectRepository.replace(/https*:\/\/github.com\//, '').split('/')
//   // if (!owner || !repo) throw Error(`${projectRepository} is not a valid GitHub repository URL`)
//   setOwner(ownerRepo[0])
//   setRepo(ownerRepo[1])
// }


  return (
    <TagGeneratorContext1.Provider
      value={{
        projectName: projectState.projectName,
        updateProjectName:updateProjectName,
        updateProjectRepository:updateProjectRepository,
        // validateUrl:validateUrl,
      }}
    >
      {props.children}
    </TagGeneratorContext1.Provider>
  );
};

