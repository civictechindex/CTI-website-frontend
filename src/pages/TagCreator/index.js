import React, { useState } from 'react';
import axios from 'axios';
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

const crumbs = [{ href: '/home', name: 'Home' }, { href: '/tag-generator', name: 'Tag Generator' }]

const TitleSection = () => {
  return (
    <Grid container>
      <Grid item xs={12}><Typography variant='h1'>Civic Tech Index</Typography></Grid>
      <Grid item xs={12}><Typography variant='h2' color='secondary'>Tag Generator</Typography>
        <Typography variant='body1'>Join the Civic Tech Index by submitting your open-source project.<br /> This process takes less than one minute to complete.</Typography>
      </Grid>
    </Grid>
  )
}

const TopicTags = ({ topicNames }) => {
  const topicArray = topicNames || []
  return topicArray.map((name, key) => <TopicTag key={key} label={name} variant='generated' />);
}

const TopicTagSection = ({ names, tagsToAdd }) => {
  return (
    <>
      <Grid>
        <Typography variant='body1'>These are your repository’s current topic tags:</Typography>
      </Grid>
      <Grid data-cy='current-tags'>
        <TopicTags topicNames={names} />
      </Grid>
      <Grid>
        <p>Add these topic tags to your repository:</p>
        {tagsToAdd.length === 0 ? <p color='dark-green'>You have already added all the necessary topic tags</p> : <TopicTags topics={tagsToAdd} />}
      </Grid>
      <Grid style={{ paddingTop: '30px' }}><h3>How to add your tags to your project’s repository</h3><p>We recommend having your project’s repository open in another browser for ease of convenience.</p></Grid>
      <Grid>
        <p>1. Navigate to your project’s repository in another browser to add your generated tags.</p>
      </Grid>
      <Grid container>
        <Grid item xs={6} sm={6}>2. Under your project’s repository, click  to paste your tags.</Grid>
        <Grid item xs={6} sm={6}><img src="/images/step_2.png" alt="Step 2" /></Grid>
        <Grid item xs={6} sm={6}>3. Under &quot;Topics&quot;, paste the topic you want to add to your repository.</Grid>
        <Grid item xs={6} sm={6}><img src="/images/step_3.png" alt="Step 3" /></Grid>
        <Grid item xs={6} sm={6}>4. Repeat until you have finished adding all of your tags, then click Save Changes.</Grid>
        <Grid item xs={6} sm={6}><img src="/images/step_4.png" alt="Step 4" /></Grid>
      </Grid>
    </>
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
const getRepositoryUrlPath = (url) => {
  let result = url.replace(/ /g, '')
  const prefix = /^(?:https?:\/\/)?github\.com\/|git@github\.com:/
  const suffix = /\.git$/
  result = result.replace(prefix, '')
  result = result.replace(suffix, '')
  return result
}

const TagCreator = () => {
  const [value, setValue] = useState('');
  const [orgName, setOrgName] = useState('');
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [topics, setTopics] = useState('');
  const [topicSearchError, setTopicSearchError] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const tagsToAdd = []

  const handleSubmit = (event) => {
    const urlPath = getRepositoryUrlPath(repositoryUrl)
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
          tagsToAdd(null)
        }

        const names = res.data.names;

        setTopics(<TopicTagSection names={names} tagsToAdd={tagsToAdd} />)
      }).catch(e => {
        /*
         * This should store the error state.
         * Component should check for error state and resolve the correct response.
         */
        setTopicSearchError(<p style={{ color: 'red' }}>Cannot find repository. Please check the name and try again</p>)
      })
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <Container className='containerGray'>
      <NavBreadcrumbs crumbs={crumbs} color="secondary" />
      <TitleSection />
      <Grid container>
        <AffiliationQuestionSection value={value} handleChange={handleChange} />
        <Grid container id='container-affiliated' style={{ display: value === 'affiliated' ? 'block' : 'none' }}>
          <OrganizationSelectorSection orgs={orgs}
            setOrgName={setOrgName}
            handleEnter={handleEnter}
            setRepositoryUrl={setRepositoryUrl}
            topicSearchError={topicSearchError}
            handleSubmit={handleSubmit}
            topics={topics} />
        </Grid>
        <Grid container id='container-unaffiliated' style={{ display: value === 'unaffiliated' ? 'block' : 'none' }}>
          <ProjectRepositoryInput handleEnter={handleEnter}
            repositoryUrl={repositoryUrl}
            setRepositoryUrl={setRepositoryUrl}
            topicSearchError={topicSearchError}
            handleSubmit={handleSubmit}
            topics={topics} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default TagCreator
