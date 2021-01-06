import TagGeneratorContext1 from './tagGeneratorContext1.js'
import React, { useReducer } from 'react';
import { tagGeneratorReducer , UPDATE_PROJECTNAME } from './reducer'

export const TagGeneratorContextProvider1 = props => {
  const initialState = {
    additionalTags:{atags:[""]},
    owner:"",
    projectName: "",
    projectRepository: "",
    projectTags:[],
    repo:"",
    topicTags:[],
  }
  const [projectState, dispatch] = useReducer(tagGeneratorReducer , initialState);

  const updateProjectName = projectName => {
    dispatch({ projectName: projectName.target.value, type: UPDATE_PROJECTNAME });
  };

  const updateProjectRepository = projectRepository => {
    dispatch({ projectName: projectRepository.target.value, type: UPDATE_PROJECTNAME });
  };

  /*
   * const updateOwner = owner => {
   * dispatch({ type: UPDATE_OWNER, owner: owner });
   * };
   */

  /*
   * const validateUrl = (projectRepository) =>{
   * let ownerRepo= projectRepository.replace(/https*:\/\/github.com\//, '').split('/')
   * // if (!owner || !repo) throw Error(`${projectRepository} is not a valid GitHub repository URL`)
   * setOwner(ownerRepo[0])
   * setRepo(ownerRepo[1])
   *}
   */

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
