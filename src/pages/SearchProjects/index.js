import React, { useState } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CloseIcon from '@material-ui/icons/Close';

import Link from '../../components/common/Link';
import NavBreadcrumb from '../../components/NavBreadcrumbs';

import ProjectCard from './ProjectCard';
import SearchBar from './SearchBar';
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

const renderCard = (project) => {
  return (
    <Grid item style={{ paddingTop: '10px' }} key={project.id}>
      {' '}
      <ProjectCard
        projectUrl={project.html_url}
        organizationUrl={project.owner.html_url}
        organizationAvatarUrl={project.owner.avatar_url}
        ownerName={project.owner.login}
        projectName={project.name}
        projectDescription={project.description}
        homepage={project.homepage} /* TODO: Fan out */
        lastUpdate={calculateDaysSince(project.updated_at)}
        issueCount={project.open_issues}
        projectLanguage={project.language}
        topics={project.topics}
        watchers={project.watchers_count}
        stargazers={project.stargazers_count}
      />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  openSearchTips: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  searchTips: {
    width: '686px',
    height: '381px',
    margin: '322px auto',
    padding: '32px',
    backgroundColor: theme.palette.background.default,
    '& h4': {
      textAlign: 'center',
      color: theme.palette.secondary.dark,
    },
    '& p': {
      color: theme.palette.primary.main,
    },
    '& a': {
      color: theme.palette.secondary.light,
    },
    '& a:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      float: 'right',
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [resultCount, setResultCount] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Box className='containerGray'>
      <Container>
        <Grid container className='card241'>
          <Grid item xs={12}>
            <NavBreadcrumb crumbs={crumbs} color='#0F1D2F' />
            <Typography variant='h1' color='textPrimary'>
              Search Projects
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <SearchBar value={query} onInput={(e) => setQuery(e.target.value)} placeholder='Search the Civic Tech Index' onKeyPress={handleSubmit} />
            <Typography className={classes.openSearchTips} onClick={handleOpen}>
              <u>How to improve your search result</u>
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        {showResults && (
          <Grid container className='grid242'>
            <Grid container item xs={12}>
              <Grid item xs={4}></Grid>
              <Grid item xs={1} />
              <Grid item xs={7}>
                {resultCount}
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <RefineResults />
              </Grid>
              <Grid item xs={1} />
              <Grid container item xs={7}>
                {results}
              </Grid>
            </Grid>
          </Grid>
        )}
        <Modal aria-labelledby='search-tips-title' className={classes.modal} open={modalOpen} onBackdropClick={handleClose}>
          <Box className={classes.searchTips}>
            <Typography variant='h4' id='search-tips-title'>
              Search Tips
              <CloseIcon onClick={handleClose} />
            </Typography>
            <br />
            <br />
            <Typography variant='body2'>Need more search results?</Typography>
            <Typography variant='body1'>
              The repository search uses &apos;&amp;&apos; for multiple search terms. In order to get more results try reducing the number of search terms.
            </Typography>
            <br />
            <Typography variant='body2'>Want to search outside of the Civic Tech Index?</Typography>
            <Typography variant='body1'>
              All searches from this page include the tag &apos;civictechindex&apos;. Go to <a href='https://github.com/search'>GitHub’s repository search tool</a> to search
              outside of the civictechindex.
            </Typography>
            <br />
            <Typography variant='body2'>Don&apos;t see your project repository in the search results?</Typography>
            <Typography variant='body1'>
              Use the{' '}
              <Link to='/tag-generator' underline='always'>
                tag generator tool
              </Link>{' '}
              to add your project to the Civic Tech Index.
            </Typography>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Projects;
