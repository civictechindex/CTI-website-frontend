import React, { useState } from 'react';
import NavBreadcrumb from '../components/NavBreadcrumbs'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import '../styles.css'

import axios from 'axios'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'


const crumbs = [{ name: 'Home', href: '/home' }, { name: 'Search', href: '/projects' }]

const calculateDaysSince = (updateTime) => {
  const days = new Date() - new Date(updateTime);
  return Math.round(days / (1000 * 3600 * 24))
}

const renderCard = (i) => {
  return <Grid item style={{ paddingTop: '10px' }}> <ProjectCard projectUrl={i.html_url}
    organizationUrl={i.owner.html_url} organizationAvatarUrl={i.owner.avatar_url}
    ownerName={i.owner.login}
    projectName={i.name} projectDescription={i.description}
    homepage={i.homepage} /* TODO: Fan out */
    lastUpdate={calculateDaysSince(i.updated_at)}
    issueCount={i.open_issues}
    projectLanguage={i.language}
    topics={i.topics}
    watchers={i.watchers_count} stargazers={i.stargazers_count} />
  </Grid>
}

const Projects = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [resultCount, setResultCount] = useState('');

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.github.com/search/repositories`, {
        headers: { 'Accept': 'application/vnd.github.mercy-preview+json' },
        params: { q: 'topic:civictechindex ' + query, sort: 'updated', order: 'desc', per_page: 100 },
      })
        .then(res => {
          const items = res.data.items.map((i) => renderCard(i));
          setResultCount(<Grid item>Displaying {res.data.items.length} of {res.data.total_count} results matching: <b>"{query}"</b></Grid>)
          setResults(items);
        })
    }
  }

  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <Container maxWidth='lg' style={{ padding: '50px' }}>
          <NavBreadcrumb crumbs={crumbs} color="#0F1D2F" />
          <Grid Container>
            <Grid item xs={12}><h1 style={{ color:'#004364' }}>Search Projects</h1></Grid>
            <Grid item xs={12}>
              <SearchBar value={query} onInput={e => setQuery(e.target.value)} placeholder="Search the Civic Tech Index" onKeyPress={handleSubmit} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Grid container={9}>
                  <div style={{ width: '70%' }}>{resultCount}</div>
                  {results}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Projects
