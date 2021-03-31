/* eslint-disable max-lines-per-function */
import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBreadcrumbs from '../../components/NavBreadcrumbs'
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import { OrgNameSection,OrganizationSelectorSection,OrgChange } from './Organization'
import { ProjectRepositorySection,ProjectRepositoryInput } from './ProjectRepository'
import { AddTopicTagSection,AddTags,NewTags,CopyPasteTags,AddMoreTags,CurrentTopicTagSection } from './TopicTagSection'
import { TitleSection } from '../../components'
import { makeStyles } from '@material-ui/core/styles'


const crumbs = [{ href: '/home', name: 'Home' }, { href: '/tag-generator', name: 'Tag Generator' }]

const useStyles = makeStyles((theme) => ({

}))

const HeaderSection = () => {
  const classes = useStyles()
  return (
    <Box className='boxBackground'>
      <Container style={{ paddingBottom:'40px' }}>
        <NavBreadcrumbs crumbs={crumbs} color="secondary" />
        <Grid container>
          <Grid item xs={12}><Typography variant='h4' fontFamily='Space Mono' color='textSecondary' className={classes.textStyle}>Civic Tech Index</Typography></Grid>
          <TitleSection>Tag Generator</TitleSection>
          <Grid item xs={12}>
            <Typography variant='h6' color='textSecondary' style={{ fontWeight:'500' , textAlign:'center' }} >Join the Civic Tech Index by submitting your open-source project.<br /> This process takes less than one minute to complete.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

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

const usePrevious =(refValue) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = refValue;
  });
  return ref.current;
}

// eslint-disable-next-line max-lines-per-function
const TagCreator = () => {
  const [displayState, setDisplayState] = useState("InitialState");
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
    setDisplayState('InitialState')
  }

  useEffect(() => {
    if (value === 'yes'){
      setDisplayState('RadioYes')
    }
    if (value === 'no'){
      setDisplayState('SubmitOrg')
    }
  },[value])

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }
  const handleChangeValue = () =>{
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
      setDisplayState('SubmitOrg')
    }
  }
  const prevRefUrl = usePrevious(repositoryUrl)
  // eslint-disable-next-line complexity
  const handleSubmit = (event) => {
    const urlPath = getRepositoryUrlPath(repositoryUrl)
    const patt = /[a-z]+\//g
    const repName = urlPath.replace(patt, '')
    setRepositoryName(repName)
    // Return error message if no url present
    if (urlPath.length === 0){
      return setTopicSearchError(<p style={{ color: 'red' }}>Please enter a URL</p>);
    }
    if (prevRefUrl !== repositoryUrl){
      axios.get('https://api.github.com/repos/' + urlPath + '/topics', {
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
      })
        .then(res => {
          setTopicSearchError()
          if (!res.data.names.includes("civictechindex")) {
            setTagsToAdd(arr=>[...arr,"civictechindex"])
          }
          setNames(res.data.names)
          setChangeValue('TopicTag')
          setDisplayState('TopicTag')
        }).catch(e => {
        /*
         * This should store the error state.
         * Component should check for error state and resolve the correct response.
         */
          console.log(e);
          setTopicSearchError(<p style={{ color: 'red' }}>Cannot find repository. Please check the name and try again</p>)
        })
    }
    handleChangeValue()
  }


  const handleChange = (event) => {
    setValue(event.target.value)
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


  // eslint-disable-next-line complexity
  const renderCurrentState = () => {
    switch (displayState) {
    case "InitialState":
      return (
        <>
          <AffiliationQuestionSection value={value} handleChange={handleChange} question={'Are you affiliated with an organization?'} />
          {(value === 'no' && changeValue !== '')?<OrgChange setOrgName={setOrgName} setDisplayState={setDisplayState}
            changeValue={changeValue} setChangeValue={setChangeValue}/>:null}
        </>
      )
    case "RadioYes":
      return (
        <>
          <AffiliationQuestionSection value={value} handleChange={handleChange} question={'Are you affiliated with an organization?'} />
          <Grid container id='container-affiliated'>
            <OrganizationSelectorSection
              setDisplayState={setDisplayState}
              orgName={orgName}
              setOrgName={setOrgName}
              changeValue={changeValue}
              setChangeValue={setChangeValue}
              setOrgTags={setOrgTags}
              handleChangeValue={handleChangeValue}/>
          </Grid>
        </>
      )
    case "SubmitOrg":
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
          <AddTags setDisplayState={setDisplayState} setChangeValue={setChangeValue} resetForm={resetForm}/>
        </>
      )
    case "ShowAddTopicTags":
      return (
        <>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <AddTopicTagSection
            setDisplayState={setDisplayState}
            setUserTags={setUserTags}
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
            names={names}
            setNames={setNames}
            setTagsToAdd={setTagsToAdd}
            orgTags={orgTags}
            userTags={userTags}
            setChangeValue={setChangeValue}
            resetForm={resetForm}/>
        </>
      )
    case "ShowAddOrgTopicTags":
      return (
        <AddMoreTags userTags={userTags} setUserTags={setUserTags} setDisplayState={setDisplayState} orgTags={orgTags} setTagsToAdd={setTagsToAdd}
          resetForm={resetForm} handleChangeChip={handleChangeChip} />
      )
    case "CopyPasteTags":
      return (
        <>
          <OrgProjSection/>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <CopyPasteTags tagsToAdd={tagsToAdd} setDisplayState={setDisplayState} repositoryName={repositoryName} repositoryUrl={repositoryUrl}/>
        </>
      )
    default:
      return (
        <AffiliationQuestionSection value={value} handleChange={handleChange} question={'Are you affiliated with an organization?'} />
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
