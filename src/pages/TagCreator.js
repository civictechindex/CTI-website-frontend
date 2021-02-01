/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import React, { useState } from 'react';
import NavBreadcrumb from '../components/NavBreadcrumbs'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles.css'
import Radio from '@material-ui/core/Radio';
import orgs from '../components/data/orgs.json'

import axios from 'axios'

import { Chip } from '@material-ui/core'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'


const TagCreator = () => {

  const crumbs = [{ href: '/home', name: 'Home' }, { href: '/taggenerator', name: 'Tag Generator' }]


  const [value, setValue] = useState('');
  const [orgName, setOrgName] = useState('');
  const [topicSearchError, setTopicSearchError] = useState('');
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [topics, setTopics] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const renderTopicTags = (topics) => {
    return topics.map((i) => {
      return <Chip
        key={i}
        size="small"
        style={{ backgroundColor: '#F1F1F1', paddingLeft: '2px' }}
        data-cy='topic-tag'
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
        setTopicSearchError('')
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

        setTopics(
          <>
            <Grid data-cy='current-tags'>
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
              <Grid item xs={6}  sm={6}><img src="/images/step_2.png" alt="Step 2" /></Grid>
              <Grid item xs={6} sm={6}>3. Under &quot;Topics&quot;, paste the topic you want to add to your repository.</Grid>
              <Grid item xs={6}  sm={6}><img src="/images/step_3.png" alt="Step 3" /></Grid>
              <Grid item xs={6} sm={6}>4. Repeat until you have finished adding all of your tags, then click Save Changes.</Grid>
              <Grid item xs={6}  sm={6}><img src="/images/step_4.png" alt="Step 4" /></Grid>
            </Grid>
            {/* <Grid style={{ paddingTop: '30px' }}>
                            Do you want to add more tags specific to your project's subject area to increase visibility?
                        </Grid>
                        <Grid item sm={2} xs={2}>
                            <Radio
                                checked={tagValue === 'addTags'}
                                onChange={handleTagChange}
                                value="addTags"
                                name="addTags"
                                inputProps={{ 'aria-label': 'addTags' }}
                            /> Yes
                            </Grid>
                        <Grid item sm={2} xs={2}>

                            <Radio
                                checked={tagValue === 'noTags'}
                                onChange={handleTagChange}
                                value="noTags"
                                name="noTags"
                                inputProps={{ 'aria-label': 'noTags' }}
                            /> No
                        </Grid>
                        <Grid>
                            <ChipInput
                                defaultValue={['civictechindex', 'bar']}
                                onChange={(chips) => handleChipChange(chips)}
                            />
                        </Grid> */}
          </>)
      }).catch(e => {
        setTopicSearchError('Cannot find repository. Please check the name and try again')
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
          <Grid Container>
            <Grid item xs={12}><h1 style={{ color: '#004364' }}>Civic Tech Index</h1></Grid>
            <Grid item xs={12}><h2 style={{ alignContent: 'center', color: '#004364' }}>Tag Generator</h2>
              <p style={{ textAlign: 'center' }}>Join the Civic Tech Index by submitting your open-source project.<br /> This process takes less than one minute to complete.</p>
            </Grid>
            <Grid container style={{ paddingTop: '30px' }}>

              <Grid item xs={8} sm={8}>Are you affiliated with an organization?</Grid>
              <Grid item sm={2} xs={2}>
                <Radio
                  checked={value === 'affiliated'}
                  data-cy='radio-affiliated'
                  onChange={handleChange}
                  value="affiliated"
                  name="affiliated"
                  inputProps={{ 'aria-label': 'true' }}
                /> Yes
              </Grid>
              <Grid item sm={2} xs={2}>
                <Radio
                  checked={value === 'unaffiliated'}
                  data-cy='radio-unaffiliated'
                  onChange={handleChange}
                  value="unaffiliated"
                  name="unaffiliated"
                  inputProps={{ 'aria-label': 'false' }}
                /> No
              </Grid>
            </Grid>
            <Grid
              container
              id='container-affiliated'
              style={{ display: value === 'affiliated' ? 'block' : 'none' }}
            >
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
                <TextField
                  id='repository-url-affiliated'
                  onKeyPress={handleEnter}
                  value={repositoryUrl}
                  onInput={e => setRepositoryUrl(e.target.value)}
                  variant="outlined"
                  placeholder="hackforla/example"
                  style={{ width: '100%' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">https://github.com/</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} style={{ margin: '0 auto', padding: '20px', width: '100%' }}>
                {topicSearchError}
                <div align='center'><button onClick={handleSubmit} id='submitButton' className="search-button">Find Project</button></div>
              </Grid>
              <Grid>{topics}</Grid>
            </Grid>

            <Grid
              container
              id='container-unaffiliated'
              style={{ display: value === 'unaffiliated' ? 'block' : 'none' }}
            >
              <Grid item xs={12} sm={12}>
                <p>Project Repository URL</p>
                <p style={{ fontSize: '10px' }}></p>
                <TextField
                  id='repository-url-unaffiliated'
                  onKeyPress={handleEnter}
                  value={repositoryUrl}
                  onInput={e => setRepositoryUrl(e.target.value)}
                  variant="outlined"
                  placeholder="hackforla/example"
                  style={{ width: '100%' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">https://github.com/</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
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
