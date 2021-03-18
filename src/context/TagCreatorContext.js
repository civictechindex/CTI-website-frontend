import React, { useState } from 'react';

export const TagCreatorContext = React.createContext({
  displayState:'',
  orgName:'',
  repositoryUrl:'',
  repositoryName:'',
  topics:'',
  topicSearchError:'',
  tagsToAdd:[],
  names:[],
  updateDisplayState:()=>{},
  updateOrgName:()=>{},
  updateRepositoryUrl:()=>{},
  updateRepositoryName:()=>{},
  updateTopics:()=>{},
  updateTopicSearchError:()=>{},
  updateTagsToAdd:()=>{},
  updateNames:()=>{},
})


export const TagCreatorContextProvider = props => {

  const [displayState, setDisplayState] = useState("State1");
  const [orgName, setOrgName] = useState('');
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [topics, setTopics] = useState('');
  const [topicSearchError, setTopicSearchError] = useState('');
  const [tagsToAdd, setTagsToAdd] = useState([]);
  const [names, setNames] = useState([]);

  const updateDisplayState =(displayState)=>{
    setDisplayState(displayState)
  }

  const updateOrgName =(orgName)=>{
    setOrgName(orgName)
  }

  const updateRepositoryUrl =(repositoryUrl)=>{
    setRepositoryUrl(repositoryUrl)
  }
  const updateRepositoryName =(repositoryName)=>{
    setRepositoryName(repositoryName)
  }

  const updateTopics =(topics)=>{
    setTopics(topics)
  }

  const updateTopicSearchError =(topicSearchError)=>{
    setTopicSearchError(topicSearchError)
  }

  const updateTagsToAdd =(tagsToAdd)=>{
    setTagsToAdd([...tagsToAdd])
  }

  const updateNames =(names)=>{
    setNames([...names])
  }

  return (
    <TagCreatorContext.Provider
      value={{
        displayState:displayState,
        orgName:orgName,
        repositoryUrl:repositoryUrl,
        repositoryName:repositoryName,
        topics:topics,
        topicSearchError:topicSearchError,
        updateDisplayState :updateDisplayState,
        updateOrgName:updateOrgName,
        updateRepositoryUrl:updateRepositoryUrl,
        updateRepositoryName:updateRepositoryName,
        updateTopicSearchError:updateTopicSearchError,
        updateTopics:updateTopics,
        updateTagsToAdd:updateTagsToAdd,
        updateNames:updateNames,
      }}
    >
      {props.children}
    </TagCreatorContext.Provider>
  );
};
