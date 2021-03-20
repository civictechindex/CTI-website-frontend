import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Modal from "@material-ui/core/Modal";
import makeStyles from '@material-ui/core/styles/makeStyles';
import CloseIcon from '@material-ui/icons/Close';

import NavBreadcrumbs from '../components/NavBreadcrumbs'
import ProjectCard from '../components/ProjectCard'
import SearchBar from '../components/SearchBar'

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

  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [resultCount, setResultCount] = useState('');
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.github.com/search/repositories`, {
        headers: { 'Accept': 'application/vnd.github.mercy-preview+json' },
        params: { q: 'topic:civictechindex ' + query, sort: 'updated', order: 'desc', per_page: 100 },
      })
        .then(res => {
          const items = res.data.items.map((i) => renderCard(i));
          setResultCount(<Grid item>Displaying {res.data.items.length} of {res.data.total_count} results matching: <b>&quot;{query}&quot;</b></Grid>)
          setResults(items);
        })
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className='containerGray'>
      <NavBreadcrumbs crumbs={crumbs} color="secondary" />
      <Grid Container>
        <Grid item xs={12}>
          <h1 style={{ color: "#004364" }}>Search Projects</h1>
        </Grid>
        <Grid item xs={12}>
          <SearchBar
            value={query}
            onInput={(e) => setQuery(e.target.value)}
            placeholder="Search the Civic Tech Index"
            onKeyPress={handleSubmit}
          />
          <Typography className={classes.openSearchTips} onClick={handleOpen}><u>How to improve your search result</u></Typography>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Grid container={9}>
              <div style={{ width: "70%" }}>{resultCount}</div>
              {results}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal aria-labelledby='search-tips-title' className={classes.modal} open={open} onBackdropClick={handleClose}>
        <Box className={classes.searchTips}>
          <Typography variant='h4' id='search-tips-title'>Search Tips<CloseIcon onClick={handleClose}/></Typography>
          <br/><br/>
          <Typography variant='body2'>Need more search results?</Typography>
          <Typography variant='body1'>
            The repository search uses &apos;&amp;&apos; for multiple search terms.
            In order to get more results try reducing the number of search terms.
          </Typography>
          <br/>
          <Typography variant='body2'>Want to search outside of the Civic Tech Index?</Typography>
          <Typography variant='body1'>
            All searches from this page include the tag &apos;civictechindex&apos;.
            Go to <a href='https://github.com/search'>GitHub’s repository search tool</a> to search outside of the civictechindex.
          </Typography>
          <br/>
          <Typography variant='body2'>Don&apos;t see your project repository in the search results?</Typography>
          <Typography variant='body1'>Use the <Link to='/tag-generator' underline='always'>tag generator tool</Link> to add your project to the Civic Tech Index.</Typography>
        </Box>
      </Modal>
    </Container>
  );
}

export default Projects
