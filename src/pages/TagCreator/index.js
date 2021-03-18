import React, { useState } from 'react';
import axios from 'axios';
import { Box,Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NavBreadcrumbs from '../../components/NavBreadcrumbs'
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import TopicTag from './TopicTag';
// import TopicTagSection from './TopicTagSection'
import orgs from './orgs.json';
import { TitleSection } from '../../components'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";

const crumbs = [{ href: '/home', name: 'Home' }, { href: '/tag-generator', name: 'Tag Generator' }]

const useStyles = makeStyles((theme) => ({
  textStyle:{
    color:'textSecondary',
    textAlign:'center',
  },
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

const TopicTags = ({ topicNames }) => {
  const topicArray = topicNames || []
  return topicArray.map((name, key) => <TopicTag key={key} label={name} variant='generated' />);
}

const defaultValue = ['Add Topic Tag'];
const AddTopicTagSection = () =>{

  const chipRenderer = ({ chip, className, handleClick, handleDelete }, key) => (
    <Chip
      className={className}
      key={key}
      label={chip}
      onClick={handleClick}
      onDelete={handleDelete}
    />
  );
  return (
    <Grid>
      <Grid>
        <Typography variant='body1'>What topic(s), cause(s), or civic issue(s) does your project address?</Typography>
      </Grid>
      <ChipInput chipRenderer={chipRenderer} defaultValue={defaultValue} />
    </Grid>
  )
}


const TopicTagSection = ({ names, tagsToAdd,orgName,repositoryUrl,repositoryName }) => {
  const [addTagValue, setAddTagValue] = useState('');
  const handleChange = (event) => {
    setAddTagValue(event.target.value)
  }
  return (
    <>
      <Grid container md={8} direction="row" alignItems="center"  spacing={3} style={{ padding:'10px' }}>
        {orgName ?<> <Grid item>
          <Typography variant='body1'>Affliated Organization:</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h3'>{orgName}</Typography>
        </Grid></>:<Grid item style={{ paddingRight:'50px' }}>
          <Typography variant='h3'>Unaffliated</Typography>
        </Grid>}
        <Grid item>
          <Typography variant='body1'>
            <Link >change</Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid container md={8} direction="row" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item>
          <Typography variant='body1'>Project Repository URL:</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'><Link href={repositoryUrl}>{repositoryUrl}</Link></Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            <Link>change</Link>
          </Typography>
        </Grid>
      </Grid>
      {names.length !== 0 ?<Grid>
        <Grid style={{ padding:'20px' }}>
          <Typography variant='body1'>Current topic tags on {repositoryName}:</Typography>
        </Grid>
        <Grid data-cy='current-tags' style={{ padding:'30px' }}>
          <TopicTags topicNames={names} />
        </Grid> </Grid>: <Grid md={8} style={{ margin:'auto', padding:'30px' }}>
        <Typography variant='h5' style={{ textAlign:'center' }}>There are currently no topic tags in your project’s repository. Add tags to increase your project visibility.</Typography>
      </Grid> }
      <Grid>
        <Divider />
      </Grid>
      <AffiliationQuestionSection value={addTagValue} handleChange={handleChange} question={"Do you want to add more tags specific to your project's subject area to increase visibility?"} />
      <Grid container id='container-addTags'  style={{ display: addTagValue === 'yes' ? 'block' : 'none',padding:'20px' }}>
        <AddTopicTagSection/>
      </Grid>
      <Grid container id='container-addNoTags' style={{ display: addTagValue === 'no' ? 'block' : 'none' }}>

      </Grid>
    </>
  )
}

const UnaffliatedSection = ({ handleEnter, repositoryUrl, setRepositoryUrl, topics, topicSearchError, handleSubmit }) =>{
  return (
    <Grid container direction="row" alignItems="center" spacing={3}>
      <Grid item>
        <Typography variant='h3'>Unaffiliated Project</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          <Link >change</Link>
        </Typography>
      </Grid>
      <ProjectRepositoryInput handleEnter={handleEnter}
        repositoryUrl={repositoryUrl}
        setRepositoryUrl={setRepositoryUrl}
        topicSearchError={topicSearchError}
        handleSubmit={handleSubmit}
        topics={topics} />
    </Grid>
  )
}

const ProjectRepositoryInput = ({ handleEnter, repositoryUrl, setRepositoryUrl, topics, topicSearchError, handleSubmit }) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <p>Project Repository URL</p>
        <p style={{ fontSize: '10px' }}></p>
        <TextField id="repository-url" onKeyPress={handleEnter} value={repositoryUrl} onInput={e => setRepositoryUrl(e.target.value)} variant="outlined" placeholder="https://github.com/hackforla/example" fullWidth />
      </Grid>
      <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
        {topicSearchError}
        <div align='center'><Button onClick={handleSubmit} id='submitButton'>Find Project</Button></div>
      </Grid>
      <Grid>{topics}</Grid>
    </>
  )
}

const OrganizationSelectorSection = ({ orgs, setOrgName, handleEnter, repositoryUrl, setRepositoryUrl, topics, topicSearchError, handleSubmit }) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <p>Which Organization?</p>
        <Autocomplete
          id="organization"
          options={orgs}
          onChange={(e, v) => setOrgName(v)}
          getOptionLabel={(option) => option}
          style={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
      </Grid>
      <ProjectRepositoryInput handleEnter={handleEnter}
        repositoryUrl={repositoryUrl}
        setRepositoryUrl={setRepositoryUrl}
        topics={topics}
        topicSearchError={topicSearchError}
        handleSubmit={handleSubmit}
      />
    </>
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
const InitialWizard = ({ setOrgName,setRepositoryUrl,setDisplayState,topics,setTopics,topicSearchError,handleEnter,handleSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Grid container id='mainContainer'>
      <AffiliationQuestionSection value={value} handleChange={handleChange} question={'Are you affiliated with an organization?'} />
      <Grid container id='container-affiliated' style={{ display: value === 'yes' ? 'block' : 'none' }}>
        <OrganizationSelectorSection orgs={orgs}
          setOrgName={setOrgName}
          handleEnter={handleEnter}
          setRepositoryUrl={setRepositoryUrl}
          topicSearchError={topicSearchError}
          handleSubmit={handleSubmit}
          topics={topics} />
      </Grid>
      <Grid container id='container-unaffiliated' style={{ display: value === 'no' ? setDisplayState('StateUnaffliated') : 'none' }}>
        <UnaffliatedSection/>
      </Grid>
    </Grid>
  )
}

// eslint-disable-next-line max-lines-per-function
const TagCreator = () => {
  const [displayState, setDisplayState] = useState("State1");
  const [orgName, setOrgName] = useState('');
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [topics, setTopics] = useState('');
  const [topicSearchError, setTopicSearchError] = useState('');
  const [tagsToAdd, setTagsToAdd] = useState([]);
  const [names, setNames] = useState([]);

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }
  const handleSubmit = (event) => {
    const urlPath = getRepositoryUrlPath(repositoryUrl)
    setRepositoryName(urlPath)
    // Return error message if no url present
    if (urlPath.length === 0){
      return setTopicSearchError(<p style={{ color: 'red' }}>Please enter a URL</p>);
    }
    axios.get('https://api.github.com/repos/' + urlPath + '/topics', {
      headers: { Accept: "application/vnd.github.mercy-preview+json" },
    })
      .then(res => {
        setTopicSearchError()
        document.getElementById('submitButton').style.display = 'none'
        if (!res.data.names.includes("civictechindex")) {
          tagsToAdd.push("civictechindex");
        }
        if (orgName != null && !res.data.names.includes(orgName.toLowerCase().replaceAll(" ", "-"))) {
          tagsToAdd.push(orgName.toLowerCase().replaceAll(" ", "-"))
        }
        if (tagsToAdd.length === 0) {
          // tagsToAdd(null)
        }
        setNames(res.data.names)
        setDisplayState('State2')
        setTopics(<TopicTagSection names={names} tagsToAdd={tagsToAdd} orgName={orgName} repositoryUrl={repositoryUrl} repositoryName={repositoryName} />)

      }).catch(e => {
        /*
         * This should store the error state.
         * Component should check for error state and resolve the correct response.
         */
        console.log(e);
        setTopicSearchError(<p style={{ color: 'red' }}>Cannot find repository. Please check the name and try again</p>)
      })
  }


  const renderCurrentState = () => {
    switch (displayState) {
    case "State1":
      return <InitialWizard displayState={displayState} setDisplayState={setDisplayState}
        orgName={orgName}
        setOrgName={setOrgName}
        repositoryUrl={repositoryUrl}
        setRepositoryUrl={setRepositoryUrl}
        repositoryName={repositoryName}
        setRepositoryName={setRepositoryName}
        names={names}
        setNames={setNames}
        topicSearchError={topicSearchError}
        setTopicSearchError={setTopicSearchError}
        topics={topics}
        setTopics={setTopics}
        handleSubmit={handleSubmit}/>
    case "State2":
      return <TopicTagSection displayState={displayState} setDisplayState={setDisplayState}
        names={names}
        tagsToAdd={tagsToAdd}
        setTagsToAdd={setTagsToAdd}
        orgName={orgName}
        repositoryUrl={repositoryUrl}
        repositoryName={repositoryName}
        setRepositoryName={setRepositoryName}/>
    case "StateUnaffliated":
      return <UnaffliatedSection handleEnter={handleEnter}
        repositoryUrl={repositoryUrl}
        setRepositoryUrl={setRepositoryUrl}
        topicSearchError={topicSearchError}
        handleSubmit={handleSubmit}
        topics={topics}/>
    default:
      return <div/>
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
