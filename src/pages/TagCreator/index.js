import React, { useState } from 'react';
import NavBreadcrumb from '../../components/NavBreadcrumbs'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles.css'

import orgs from './orgs.json'

import axios from 'axios'

import { Chip } from '@material-ui/core'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { AffiliationQuestionSection } from "./AffilationQuestionSection";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'


const TitleSection = () => {
  return (
    <Grid Container>
      {/* TODO: Use Typography component with MUI Styles */}
      <Grid item xs={12}><h1 style={{ color: '#004364' }}>Civic Tech Index</h1></Grid>
      <Grid item xs={12}><h2 style={{ alignContent: 'center', color: '#004364' }}>Tag Generator</h2>
        <p style={{ textAlign: 'center' }}>Join the Civic Tech Index by submitting your open-source project.<br /> This process takes less than one minute to complete.</p>
      </Grid>
    </Grid>
  )
}

const OrganizationSelectorSection = ({ orgs, setOrgName, handleEnter, repositoryUrl, setRepositoryUrl }) => {
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
      <Grid item xs={12} sm={12}>
        <p>Project Repository URL</p>
        <p style={{ fontSize: '10px' }}></p>
        <TextField id="outlined-basic" onKeyPress={handleEnter} value={repositoryUrl} onInput={e => setRepositoryUrl(e.target.value)} variant="outlined" placeholder="hackforla/example" style={{ width: '100%' }} InputProps={{
          startAdornment: <InputAdornment position="start">https://github.com/</InputAdornment>,
        }} />
      </Grid>
    </>
  )
}


const TagCreator = () => {


  /*
   * AffiliationQuestion
   * OrganizationSelector
   * RepositoryQuestion
   * Find Button
   */


  /*
   * TagGeneratorResultComponent
   * Affiliated Organization
   * Project Repository URL
   * TopicTagsSection
   * TopicCips
   */






  const crumbs = [{ name: 'Home', href: '/home' }, { name: 'Tag Generator', href: '/taggenerator' }]


  const [value, setValue] = useState('');
  const [orgName, setOrgName] = useState('');
  const [topicSearchError, setTopicSearchError] = useState('');
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [topics, setTopics] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  function renderTopicTags(topics) {
    return topics.map((i) => {
      return <Chip
        size="small"
        style={{ backgroundColor: '#F1F1F1', paddingLeft: '2px' }}
        label={i}
        icon={<AssignmentTurnedInIcon />} />
    })
  }

  const tagsToAdd = []

  const handleSubmit = (event) => {
    axios.get('https://api.github.com/repos/' + repositoryUrl + '/topics', {
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

        const TopicTagSection = () => {
          <>
            <Grid>
              <p>These are your repository’s current topic tags:</p>
              {renderTopicTags(res.data.names)}
            </Grid>
            <Grid>
              <p>Add these topic tags to your repository:</p>
              {tagsToAdd.length === 0 ? <p color='dark-green'>You have already added all the necessary topic tags</p> : renderTopicTags(tagsToAdd)}
            </Grid>
            <Grid style={{ paddingTop:'30px' }}><h3>How to add your tags to your project’s repository</h3><p>We recommend having your project’s repository open in another browser for ease of convenience.</p></Grid>
            <Grid>
              <p>1. Navigate to your project’s repository in another browser to add your generated tags.</p>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} sm={6}>2. Under your project’s repository, click  to paste your tags.</Grid>
              <Grid item xs={6} sm={6}><img src="/images/step_2.png" alt="Step 2" /></Grid>
              <Grid item xs={6} sm={6}>3. Under "Topics", paste the topic you want to add to your repository.</Grid>
              <Grid item xs={6} sm={6}><img src="/images/step_3.png" alt="Step 3" /></Grid>
              <Grid item xs={6} sm={6}>4. Repeat until you have finished adding all of your tags, then click Save Changes.</Grid>
              <Grid item xs={6} sm={6}><img src="/images/step_4.png" alt="Step 4" /></Grid>
            </Grid>
          </>
        }

        setTopics(<TopicTagSection/>
          )
      }).catch(e => {
        setTopicSearchError(<p style={{ color: 'red' }}>Cannot find repository. Please check the name and try again</p>)
      })
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <Container maxWidth='lg' style={{ padding: '50px' }}>
          <NavBreadcrumb crumbs={crumbs} color="#0F1D2F" />
          <TitleSection/>
          <Grid Container>
            <AffiliationQuestionSection value={value} handleChange={handleChange} />
            <Grid container id="organizationTrue" style={{ display: value === 'affiliated' ? 'block' : 'none' }}>
              <OrganizationSelectorSection orgs= {orgs} setOrgName = {setOrgName} handleEnter = {handleEnter} setRepositoryUrl = {setRepositoryUrl} />
              <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
              // 
                {topicSearchError}
                <div align='center'><button onClick={handleSubmit} id='submitButton' className="search-button">Find Project</button></div>
              </Grid>
              <Grid>{topics}</Grid>
            </Grid>

            <Grid container style={{ display: value === 'unaffiliated' ? 'block' : 'none' }}>
              <Grid item xs={12} sm={12}>
                <p>Project Repository URL</p>
                <p style={{ fontSize: '10px' }}></p>
                <TextField id="outlined-basic" onKeyPress={handleEnter} value={repositoryUrl} onInput={e => setRepositoryUrl(e.target.value)} variant="outlined" placeholder="hackforla/example" style={{ width: '100%' }} InputProps={{
                  startAdornment: <InputAdornment position="start">https://github.com/</InputAdornment>,
                }} />
              </Grid>
              <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
                {topicSearchError}
                <div align='center'><button onClick={handleSubmit} id='submitButton' className="search-button">Find Project</button></div>
              </Grid>
              <Grid>{topics}</Grid>
            </Grid>

          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default TagCreator
