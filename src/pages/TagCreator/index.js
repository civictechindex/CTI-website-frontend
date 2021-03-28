/* eslint-disable max-lines-per-function */
import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NavBreadcrumbs from '../../components/NavBreadcrumbs'
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import TopicTag from './TopicTag';
import orgs from './orgs.json';
import { TitleSection } from '../../components'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ChipInput from "material-ui-chip-input";
import Chip from '@material-ui/core/Chip';

const crumbs = [{ href: '/home', name: 'Home' }, { href: '/tag-generator', name: 'Tag Generator' }]

const useStyles = makeStyles((theme) => ({
  chipInputRoot: {
    border: 'borderColor: theme.palette.outline.gray',
    borderRadius: 24,
    cursor: 'pointer',
    height: 48,
    margin: '0 8px 8px 0',
  },
  chipInputInput:{
    color:'textSecondary',
  },
  chip: {
    backgroundColor: theme.palette.background.default,
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

const AddTopicTagSection = ({ orgName,userTags,setUserTags,orgTags,setOrgTags,setDisplayState,setTagsToAdd,names }) =>{
  const classes = useStyles();

  const handleChangeChip = (chips) =>{
    setUserTags (chips)
  }

  const handleGenerateTag = () =>{
    setTagsToAdd(arr=>[...arr,...userTags])
    const topics=[]
    if (orgName){
      axios.get('https://test-civictechindexadmin.herokuapp.com/api/organizations/'+orgName,)
        .then(res => {
          let po = res.data.parent_organization
          if (!names.includes(res.data.org_tag) && res.data.org_tag !== '') {
            topics.push(res.data.org_tag)
          }
          while (po!=null){
            if (!names.includes(po.org_tag)) {
              topics.push(po.org_tag)
            }
            po =po.parent_organization
          }
          setOrgTags(topics)
          setTagsToAdd(arr=>[...arr,...topics])
          setDisplayState('GenerateTags')
        }).catch(e => {
        /*
         * This should store the error state.
         * Component should check for error state and resolve the correct response.
         */
          console.log(e);
        })
    }
    else {
      setDisplayState('GenerateTags')
    }
  }
  return (
    <>
      <Grid style={{ padding:'20px' }}>
        <Typography variant='body1'>What topic(s), cause(s), or civic issue(s) does your project address?</Typography>
      </Grid>
      <Grid>
        <ChipInput
          fullWidth
          placeholder='Add topic tag'
          onChange={(chips) => handleChangeChip(chips)}
          classes={{
            root: classes.chipInputRoot,
            input: classes.chipInputInput,
            chip: classes.chip,
          }}
        />
      </Grid>
      <Grid container direction="row" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item><Button onClick={handleGenerateTag}>Generate Tags</Button></Grid>
        <Grid item><Button>Reset Form</Button></Grid>
      </Grid>
      {/* <TopicTags topicNames={userTags} /> */}
    </>
  )
}

const AddTags = ({ setDisplayState,setValue,setOrgName,setRepositoryUrl,setRepositoryName,setTopicSearchError,setTagsToAdd,setNames }) =>{
  const [addTagValue, setAddTagValue] = useState('');
  const handleChangeTag = (event) => {
    setAddTagValue(event.target.value)
  }
  const showAddTopicTag = () =>{
    if (addTagValue === 'yes'){
      setDisplayState('ShowAddTopicTags')
    }
    if (addTagValue === 'no'){
      setDisplayState('GenerateTags')
    }
  }
  const handleResetForm = () => {
    setValue('')
    setOrgName('')
    setRepositoryUrl('')
    setRepositoryName('')
    setTopicSearchError('')
    setTagsToAdd([])
    setNames([])
    setDisplayState('InitialState')
  }
  return (
    <>
      <AffiliationQuestionSection value={addTagValue} handleChange={handleChangeTag} question={"Do you want to add more tags specific to your project's subject area to increase visibility?"} />
      <Grid container direction="row" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Button onClick={showAddTopicTag}>Generate Tags</Button>
        <Button onClick={handleResetForm}>Reset Form</Button>
      </Grid>
    </>
  )
}

const NewTags =({ setDisplayState,setValue,setOrgName,setRepositoryUrl,setRepositoryName,setTopicSearchError,setTagsToAdd,setNames,tagsToAdd })=>{
  const handleResetForm = () => {
    setValue('')
    setOrgName('')
    setRepositoryUrl('')
    setRepositoryName('')
    setTopicSearchError('')
    setTagsToAdd([])
    setNames([])
    setDisplayState('InitialState')
  }
  return (
    <>
      <Grid>
        <Grid style={{ padding:'20px' }}>
          <Typography variant='body1'>New tags to add to your repository:</Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item md={8} data-cy='current-tags' style={{ padding:'30px' }}>
            <TopicTags topicNames={tagsToAdd} variant='clickable' />
          </Grid>
          <Grid item md={4}>
            <Typography variant='body1'><Link onClick={()=>setDisplayState('ShowAddTopicTags')} >Add More tags</Link></Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Button>Add these tags to your repo</Button>
        <Button onClick={handleResetForm}>Reset Form</Button>
      </Grid>
    </>
  )
}

const TopicTags = ({ topicNames,variant }) => {
  const topicArray = topicNames || []
  return topicArray.map((name, key) => <TopicTag key={key} label={name} variant={variant} />);
}

const CurrentTopicTagSection = ({ names, repositoryName }) => {
  return (
    <>
      {names.length !== 0 ?<Grid>
        <Grid style={{ padding:'20px' }}>
          <Typography variant='body1'>Current topic tags on {repositoryName}:</Typography>
        </Grid>
        <Grid data-cy='current-tags' style={{ padding:'30px' }}>
          <TopicTags topicNames={names} variant='generated' />
        </Grid> </Grid>: <Grid item md={8} style={{ margin:'auto', padding:'30px' }}>
        <Typography variant='h5' style={{ textAlign:'center' }}>There are currently no topic tags in your project’s repository. Add tags to increase your project visibility.</Typography>
      </Grid> }
      <Grid>
        <Divider />
      </Grid>
    </>
  )
}

const OrgNameSection = ({ value,setDisplayState,orgName }) => {
  const handleChangeOrg = () =>{
    if (value === 'yes'){
      setDisplayState('RadioYes')
    }
    else {
      setDisplayState('InitialState')
    }
  }
  return (
    <Grid container  direction="row" alignItems="center"  spacing={3} style={{ padding:'10px' }}>
      <Grid item>
        <Typography variant='body1'>Affliated Organization:</Typography>
      </Grid>
      {orgName ?
        <Grid item>
          <Typography variant='h3'>{orgName}</Typography>
        </Grid>:<Grid item style={{ paddingRight:'50px' }}>
          <Typography variant='h3'>Unaffliated</Typography>
        </Grid>}
      <Grid item>
        <Typography variant='body1'>
          <Link onClick={handleChangeOrg} >change</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

const ProjectRepositorySection = ({ repositoryUrl,setDisplayState }) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={3} style={{ padding:'10px' }}>
      <Grid item>
        <Typography variant='body1'>Project Repository URL:</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'><Link href={repositoryUrl} >{repositoryUrl}</Link></Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          <Link onClick={()=>setDisplayState('SubmitOrg')}>change</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}


const ProjectRepositoryInput = ({ handleEnter, repositoryUrl, setRepositoryUrl, topicSearchError, handleSubmit }) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <p>Project Repository URL</p>
        <p style={{ fontSize: '10px' }}></p>
        <TextField id="repository-url" onKeyPress={handleEnter} value={repositoryUrl} onInput={e => setRepositoryUrl(e.target.value)} variant="outlined" placeholder="https://github.com/hackforla/example" fullWidth />
      </Grid>
      <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
        {topicSearchError}
        <Grid align='center'><Button onClick={handleSubmit} id='submitButton'>Find Project</Button></Grid>
      </Grid>
    </>
  )
}

const OrganizationSelectorSection = ({ setOrgName,setDisplayState }) => {
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
      <Grid item>
        <Typography variant='body1'>Don’t see your organization? Click <Link >here</Link> to add it. </Typography>
      </Grid>
      <Grid item>
        <Grid align='center' style={{ padding:'20px' }}><Button onClick={()=>setDisplayState('SubmitOrg')} id='submitButton'>Submit Organization</Button></Grid>
      </Grid>
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
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [topicSearchError, setTopicSearchError] = useState('');
  const [tagsToAdd, setTagsToAdd] = useState([]);
  const [names, setNames] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const [orgTags, setOrgTags] = useState([]);



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
  const prevRefUrl = usePrevious(repositoryUrl)
  const handleSubmit = (event) => {
    if (prevRefUrl !== repositoryUrl){
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
            setTagsToAdd(arr=>[...arr,"civictechindex"])
          }
          setNames(res.data.names)
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
    else {
      setDisplayState('TopicTag')
    }
  }


  const handleChange = (event) => {
    setValue(event.target.value)
  }

  // eslint-disable-next-line complexity
  // eslint-disable-next-line complexity
  const renderCurrentState = () => {
    switch (displayState) {
    case "InitialState":
      return <AffiliationQuestionSection value={value} handleChange={handleChange} question={'Are you affiliated with an organization?'} />
    case "RadioYes":
      return (
        <>
          <AffiliationQuestionSection value={value} handleChange={handleChange} question={'Are you affiliated with an organization?'} />
          <Grid container id='container-affiliated'>
            <OrganizationSelectorSection
              displayState={displayState}
              setDisplayState={setDisplayState}
              setOrgName={setOrgName}
              handleEnter={handleEnter}
              setRepositoryUrl={setRepositoryUrl}
              topicSearchError={topicSearchError}
              handleSubmit={handleSubmit}/>
          </Grid>
        </>
      )
    case "SubmitOrg":
      return (
        <>
          <OrgNameSection displayState={displayState} setDisplayState={setDisplayState} value={value} orgName={orgName}/>
          <ProjectRepositoryInput displayState={displayState} setDisplayState={setDisplayState}
            value={value}
            orgName={orgName}
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
          <OrgNameSection displayState={displayState} setDisplayState={setDisplayState} value={value} orgName={orgName}/>
          <ProjectRepositorySection repositoryUrl={repositoryUrl} setDisplayState={setDisplayState}/>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <AddTags setDisplayState={setDisplayState}
            setValue={setValue}
            setOrgName={setOrgName}
            setRepositoryUrl={setRepositoryUrl}
            setRepositoryName={setRepositoryName}
            setTopicSearchError={setTopicSearchError}
            setNames={setNames}
            setTagsToAdd={setTagsToAdd}
            setUserTags={setUserTags}
          />
        </>
      )
    case "ShowAddTopicTags":
      return (
        <>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <AddTopicTagSection
            setDisplayState={setDisplayState}
            orgName={orgName}
            setTagsToAdd={setTagsToAdd}
            names={names}
            userTags={userTags}
            setUserTags={setUserTags}
            setOrgTags={setOrgTags}
          />
        </>
      )
    case "GenerateTags":
      return (
        <>
          <OrgNameSection displayState={displayState} setDisplayState={setDisplayState} value={value} orgName={orgName}/>
          <ProjectRepositorySection repositoryUrl={repositoryUrl} setDisplayState={setDisplayState}/>
          <CurrentTopicTagSection names={names} repositoryName={repositoryName}/>
          <NewTags tagsToAdd={tagsToAdd}
            setDisplayState={setDisplayState}
            setValue={setValue}
            setOrgName={setOrgName}
            setRepositoryUrl={setRepositoryUrl}
            setRepositoryName={setRepositoryName}
            setTopicSearchError={setTopicSearchError}
            setNames={setNames}
            setTagsToAdd={setTagsToAdd}/>
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
