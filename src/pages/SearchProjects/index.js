import React, { useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NavBreadcrumb from '../../components/NavBreadcrumbs';
import ProjectCard from '../../components/ProjectCard';
import SearchBar from '../../components/SearchBar';

import RefineResults from './RefineResults';

import '../../styles.css';

const crumbs = [
  { name: 'Home', href: '/home' },
  { name: 'Search', href: '/projects' },
];

const calculateDaysSince = (updateTime) => {
  const days = new Date() - new Date(updateTime);
  return Math.round(days / (1000 * 3600 * 24));
};

const renderCard = (i) => {
  return (
    <Grid item style={{ paddingTop: '10px' }}>
      {' '}
      <ProjectCard
        projectUrl={i.html_url}
        organizationUrl={i.owner.html_url}
        organizationAvatarUrl={i.owner.avatar_url}
        ownerName={i.owner.login}
        projectName={i.name}
        projectDescription={i.description}
        homepage={i.homepage} /* TODO: Fan out */
        lastUpdate={calculateDaysSince(i.updated_at)}
        issueCount={i.open_issues}
        projectLanguage={i.language}
        topics={i.topics}
        watchers={i.watchers_count}
        stargazers={i.stargazers_count}
      />
    </Grid>
  );
};

const Projects = () => {
  const [showResults, setShowResults] = useState(true);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [resultCount, setResultCount] = useState('');

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(`https://api.github.com/search/repositories`, {
          headers: { Accept: 'application/vnd.github.mercy-preview+json' },
          params: { q: 'topic:civictechindex ' + query, sort: 'updated', order: 'desc', per_page: 100 },
        })
        .then((res) => {
          const items = res.data.items.map((i) => renderCard(i));
          setResultCount(
            <Grid item>
              Displaying {res.data.items.length} of {res.data.total_count} results matching: <b>&quot;{query}&quot;</b>
            </Grid>
          );
          setResults(items);
          setShowResults(true);
        });
    }
  };

  return (
    <Container className='containerGray'>
      <NavBreadcrumb crumbs={crumbs} color='#0F1D2F' />
      <Grid container className='card241'>
        <Grid item xs={12}>
          <Typography variant='h1' color='textPrimary'>
            Search Projects
          </Typography>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <SearchBar value={query} onInput={(e) => setQuery(e.target.value)} placeholder='Search the Civic Tech Index' onKeyPress={handleSubmit} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid container className='card243'>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid item xs={3}></Grid>
          <Grid item xs={1} />
          <Grid item xs={6}>
            {resultCount}
          </Grid>
          <Grid item xs={1} />
        </Grid>
        {showResults && (
          <Grid container item xs={12}>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <RefineResults />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={6}>
              {results}
            </Grid>
            <Grid item xs={1} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Projects;
