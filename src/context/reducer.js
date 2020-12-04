export const UPDATE_PROJECTNAME = "UPDATE_PROJECTNAME"
export const UPDATE_PROJECTREPOSITORY = "UPDATE_PROJECTRepository"


const updateProjectName = (projectName,state) => {
return{
  ...state,
  projectName: projectName
}
};

const updateProjectRepository = (projectRepository,state) => {
  return{
    ...state,
    projectRepository: projectRepository
  }
  };

export const tagGeneratorReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROJECTNAME:
      return updateProjectName(action.projectName,state)
    case 'updateProjectRepository':
      return updateProjectRepository(action.projectRepository,state)
    default:
      return state;
  }
};