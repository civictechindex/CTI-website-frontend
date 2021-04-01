
import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import { HeaderSection } from './HeaderSection'
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import { OrgNameSection,OrganizationSelectorSection,OrgChange } from './Organization'
import { ProjectRepositorySection,ProjectRepositoryInput } from './ProjectRepository'
import { AddTopicTagSection,AddTagsQuestion,NewTags,CopyPasteTags,AddMoreTags,CurrentTopicTagSection } from './TopicTagSection'



/**
 * By removing matched text, we allow leeway in entering repository URL,
 * including how it might be pasted from GitHub. All these would work:
 * https://github.com/civictechindex/CTI-website-frontend.git
 * git@github.com:civictechindex/CTI-website-frontend.git
 * github.com/civictechindex/CTI-website-frontend
 * civictechindex / CTI-website-frontend
 */
const getRepositoryUrlPath = (repositoryUrl) => {
  let result = repositoryUrl.replace(/ /g, '')
  const prefix = /^(?:https?:\/\/)?github\.com\/|git@github\.com:/
  const suffix = /\.git$/
  result = result.replace(prefix, '')
  result = result.replace(suffix, '')
  return result
}

// checks if URL is deifferent
const usePrevious =(refValue) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = refValue;
  });
  return ref.current;
}


// eslint-disable-next-line max-lines-per-function
const TagCreator = () => {
  const [displayState, setDisplayState] = useState("");
  const [value, setValue] = useState('');
  const [orgName, setOrgName] = useState('');
  const [changeValue, setChangeValue] = useState('');
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [topicSearchError, setTopicSearchError] = useState('');
  const [tagsToAdd, setTagsToAdd] = useState([]);
  const [names, setNames] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const [orgTags, setOrgTags] = useState([]);

  const resetForm = () => {
    setValue('')
    setOrgName('')
    setRepositoryUrl('')
    setRepositoryName('')
    setTopicSearchError('')
    setTagsToAdd([])
    setNames([])
    setUserTags([])
    setOrgTags([])
    setChangeValue('')
    setDisplayState('')
  }

  useEffect(() => {
    const civicName = []
    if (!names.includes("civictechindex")) {
      civicName.push("civictechindex")
    }
    if (orgTags.length !== 0 && names.length !== 0){
      const result = orgTags.filter(ot => !names.includes(ot))
      setTagsToAdd([...userTags,...result,...civicName])
    }
    else
      setTagsToAdd([...userTags,...orgTags,...civicName])
  },[orgTags, names, setTagsToAdd, userTags])

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleChangeProjectRepository = () =>{
    if (changeValue === 'TopicTag'){
      setDisplayState('TopicTag')
    }
    else if (changeValue === 'GenerateTags'){
      setDisplayState('GenerateTags')
    }
    else if (changeValue === 'CopyPasteTags'){
      setDisplayState('CopyPasteTags')
    }
    else {
      setChangeValue('TopicTag')
      setDisplayState('TopicTag')
    }
  }
  const prevRefUrl = usePrevious(repositoryUrl)

  const handleSubmit = (event) => {
    const urlPath = getRepositoryUrlPath(repositoryUrl)
    // Setting Repository Name
    const patt = /[a-z]+\//g
    const repName = urlPath.replace(patt, '')
    setRepositoryName(repName)
    // Return error message if no url present
    if (urlPath.length === 0){
      return setTopicSearchError(<p style={{ color: 'red' }}>Please enter a URL</p>);
    }
    // Fetches Tags from API only if URL is changed
    if (prevRefUrl !== repositoryUrl){
      axios.get('https://api.github.com/repos/' + urlPath + '/topics', {
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
      })
        .then(res => {
          setTopicSearchError()
          setNames(res.data.names)
        }).catch(e => {
        /*
         * This should store the error state.
         * Component should check for error state and resolve the correct response.
         */
          console.log(e);
          setTopicSearchError(<p style={{ color: 'red' }}>Cannot find repository. Please check the name and try again</p>)
        })
    }
    handleChangeProjectRepository()
  }
  const handleChangeChip = (chips) =>{
    let chipsArr = []
    chipsArr = chips.map(chip => chip.toLowerCase().trim().replaceAll(" ", "-"))
    setUserTags(chipsArr)
  }

  const OrgProjSection = () => {
    return (
      <>
        <OrgNameSection displayState={displayState} setDisplayState={setDisplayState} value={value} orgName={orgName} changeValue={changeValue}
          setChangeValue={setChangeValue}
          setOrgName={setOrgName}/>
        <ProjectRepositorySection repositoryUrl={repositoryUrl} setDisplayState={setDisplayState}/>
      </>
    )
  }

  const RadioYes = ({ setOrgName }) =>{
    return (
      <>
        <OrganizationSelectorSection
          setDisplayState={setDisplayState}
          orgName={orgName}
          setOrgName={setOrgName}
          changeValue={changeValue}
          setChangeValue={setChangeValue}
          setOrgTags={setOrgTags}/>
        <OrgChange orgName={orgName} setOrgTags={setOrgTags} changeValue={changeValue} setDisplayState={setDisplayState}/>
      </>
    )
  }


  // eslint-disable-next-line complexity
  const renderCurrentState = () => {
    switch (displayState) {
    case "ProjectUrl":
      return (
        <>
          <OrgNameSection displayState={displayState} setDisplayState={setDisplayState} value={value} orgName={orgName} changeValue={changeValue}
            setChangeValue={setChangeValue}
            setOrgName={setOrgName}/>
          <ProjectRepositoryInput
            repositoryUrl={repositoryUrl}
            handleEnter={handleEnter}
            setRepositoryUrl={setRepositoryUrl}
            topicSearchError={topicSearchError}
            setTopicSearchError={setTopicSearchError}
            handleSubmit={handleSubmit}
          />
        </>
      )
    case "TopicTag":
      return (
        <>
          <OrgProjSection/>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <AddTagsQuestion setDisplayState={setDisplayState} setChangeValue={setChangeValue} resetForm={resetForm}/>
        </>
      )
    case "AddTopicTags":
      return (
        <>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <AddTopicTagSection
            setDisplayState={setDisplayState}
            setChangeValue={setChangeValue}
            resetForm={resetForm}
            handleChangeChip={handleChangeChip}/>
        </>
      )
    case "GenerateTags":
      return (
        <>
          <OrgProjSection/>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <NewTags tagsToAdd={tagsToAdd}
            setDisplayState={setDisplayState}
            setChangeValue={setChangeValue}
            resetForm={resetForm}
            orgTags={orgTags}
            names={names}
            userTags={userTags}
            setTagsToAdd={setTagsToAdd}/>
        </>
      )
    case "AddMoreTags":
      return (
        <AddMoreTags userTags={userTags} setUserTags={setUserTags} setDisplayState={setDisplayState} orgTags={orgTags} setTagsToAdd={setTagsToAdd}
          resetForm={resetForm} handleChangeChip={handleChangeChip} changeValue={changeValue} />
      )
    case "CopyPasteTags":
      return (
        <>
          <OrgProjSection/>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <CopyPasteTags tagsToAdd={tagsToAdd} setDisplayState={setDisplayState} repositoryName={repositoryName} repositoryUrl={repositoryUrl}
            orgTags={orgTags}
            names={names}
            userTags={userTags}
            setTagsToAdd={setTagsToAdd}/>
        </>
      )
    default:
      return (
        <>
          <AffiliationQuestionSection value={value} handleChange={handleChange}
            question={'Are you affiliated with an organization?'} />
          {(value === 'yes')?<RadioYes setOrgName={setOrgName}/>:null}
          {(value === 'no')?<OrgChange orgName={orgName} setOrgTags={setOrgTags} changeValue={changeValue} setDisplayState={setDisplayState}/>:null}
        </>
      )
    }

  }

  return (
    <Box>
      <HeaderSection/>
      <Box className='containerGray'>
        <Container >
          {renderCurrentState()}
        </Container>
      </Box>
    </Box>
  )
}

export default TagCreator
