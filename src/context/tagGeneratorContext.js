  
import React, { useState, useReducer } from 'react';
//import TagGeneratorContext from "./tagGeneratorContext.js"

export const TagGeneratorContext = React.createContext({
  orgValue:{ option1: "",
          option2: "",
          showComponent: false,
          showOrgComponent:false},
  queValue:{ option1: "",
          option2: ""},
  projectData:{projectName: "",
              projectRepository: ""},
  owner:"",
  repo:"",
  projectTags:[],
  additionalTags:{atags:[""]},
  topicTags:[],
  btnClick:false,
  showDisplayTag:true,
  sendRequest:false,
  showDisplayNewTags:false,
  updateOrgVaue:()=>{},
  updateQueValue:()=>{},
  updateShowDisplayTag:()=>{},
  updateProjectName: projectName => {},
  updateProjectRepository:projectRepository => {},
  validateUrl:projectRepository =>{},
  updateProjectTag:dataCopy => {},
  updateTopicTags:copytopicTags =>{},
  addTag:()=>{},
  updateTag:()=>{},
  resetAdditionalTags:()=>{},
  handleSendRequest:()=>{},
  handleBtnClick:()=>{},
  handleShowDisplayTags:()=>{},
  handleShowDisplayNewTags:()=>{},
  urlStr:'', 
  updateUrlStr:()=>{},
  error:'',
  updateError:()=>{}
})


 export const TagGeneratorContextProvider = props => {

  const [orgValue, setOrgValue] = useState({
    option1: "",
    option2: "",
    showComponent: false,
    showOrgComponent:false
  });
  const [queValue, setQueValue] = useState({
    option1: "",
    option2: "",
   });
  const [projectData, setProject] = useState({
    projectName: "",
    projectRepository: "",
    })
   
  const [owner,setOwner] =useState("")
  const [repo,setRepo] =useState("")
  const [btnClick, setBtnClick] = useState(false);
  const [showDisplayTag, setShowDisplayTag] = useState(true);
  const [projectTags,setProjectTags] = useState([])
  const [additionalTags,setAdditonalTags] = useState({atags:[""]})
  const [topicTags, setTopicTags] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const [showDisplayNewTags, setShowDisplayNewTags] = useState(false);
  const [urlStr,setUrlStr] = useState("")
  const[error,setError] = useState("")

   const updateOrgValue =(option1,option2,showComponent,showOtgComponent)=>{
    setOrgValue({ option1: option1, option2: option2, showComponent: showComponent,showOrgComponent:showOtgComponent})
   }
  
   const updateQueValue =(option1,option2)=>{
    setOrgValue({ option1: option1, option2: option2})
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
    setAdditonalTags((prevState) => {
      return {
        
        atags: [...prevState.atags, ""],
      };
    });
  };

  const updateTag = (e, index) => {
    const dataCopy = { ...additionalTags };

    dataCopy.atags[index] = e.target.value;
    setAdditonalTags(dataCopy);
  };

  const resetAdditionalTags = () => {
    setAdditonalTags({ atags: [""] });
  }

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

   const handleSendRequest = (req) => {
    setSendRequest(req)
  }

  const handleBtnClick = (btnReq) => {
    setBtnClick(btnReq)
  }

  const handleShowDisplayTags = (req) => {
    setShowDisplayTag(req)
  }

  const handleShowDisplayNewTags = (req) => {
    setShowDisplayNewTags(req)
  }

  const updateUrlStr = (str) => {
    setUrlStr(str)
  }

  const updateError = (er) => {
    setError(er)
  }

  return (
    <TagGeneratorContext.Provider
      value={{
        orgValue:orgValue,
        queValue:queValue,
        projectData:projectData,
        owner:owner,
        repo:repo,
        btnClick:btnClick,
        showDisplayTag:showDisplayTag,
        projectTags:projectTags,
        additionalTags:additionalTags,
        topicTags:topicTags,
        sendRequest:sendRequest,
        showDisplayNewTags:showDisplayNewTags,
        updateOrgValue:updateOrgValue,
        updateQueValue:updateQueValue,
        addTag:addTag,
        updateTag:updateTag,
        resetAdditionalTags:resetAdditionalTags,
        handleSendRequest:handleSendRequest,
        handleBtnClick:handleBtnClick,
        handleShowDisplayTags:handleShowDisplayTags,
        updateProjectName:updateProjectName,
        updateProjectRepository:updateProjectRepository,
        validateUrl:validateUrl,
        updateProjectTag:updateProjectTag,
        updateTopicTags:updateTopicTags,
        handleShowDisplayNewTags:handleShowDisplayNewTags,
        urlStr:urlStr,
        updateUrlStr:updateUrlStr,
        error:error,
        updateError:updateError,
      }}
    >
      {props.children}
    </TagGeneratorContext.Provider>
  );
};

