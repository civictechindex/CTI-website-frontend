/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import Link from '../../components/common/Link';
import NavBreadcrumb from '../../components/NavBreadcrumbs';

import FilterTag from './FilterTag';
import Pagination from '@material-ui/lab/Pagination';
import ProjectCard from './ProjectCard';
import RefineResults from './RefineResults';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    fontSize: '2rem',
  },
  messageIcon: {
    width: '1.75em',
    height: '1.75em',
    marginRight: theme.spacing(1),
    color: theme.palette.text.disabled,
  },
  openSearchTips: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  resultContainer: {
    alignSelf: 'flex-start',
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

const defaultFilterList = [
  { category: 'language', name: 'javascript', label: 'Javascript', selected: false },
  { category: 'language', name: 'python', label: 'Python', selected: false },
  { category: 'language', name: 'java', label: 'Java', selected: false },
  { category: 'language', name: 'go', label: 'Go', selected: false },
  { category: 'language', name: 'typescript', label: 'Typescript', selected: false },
  { category: 'topic', name: 'unaffiliated', label: 'Unaffiliated', selected: false },
  { category: 'topic', name: 'code-for-all', label: 'Code for All', selected: false },
  { category: 'topic', name: 'code-for-america', label: 'Code for America', selected: false },
  { category: 'topic', name: 'hack-for-la', label: 'Hack for LA', selected: false },
  { category: 'topic', name: 'open-oakland', label: 'Open Oakland', selected: false },
  { category: 'topic', name: 'code-for-canada', label: 'Code for Canada', selected: false },
  { category: 'topic', name: 'code-for-japan', label: 'Code for Japan', selected: false },
  { category: 'topic', name: 'open-democracy-labs', label: 'Open Democracy Labs', selected: false },
  { category: 'topic', name: 'yale-openlab', label: 'Yale Openlab', selected: false },
  { category: 'pushed', name: '>=24h', label: 'Within the last 24 hours', selected: false },
  { category: 'pushed', name: '>=7d', label: 'Within the last week', selected: false },
  { category: 'pushed', name: '>=30d', label: 'Within the last 30 days', selected: false },
  { category: 'pushed', name: '1-6m', label: '1 - 6 months', selected: false },
  { category: 'pushed', name: '6-12m', label: '6 - 12 months', selected: false },
  { category: 'pushed', name: '<1y', label: 'More than a year ago', selected: false },
]

const renderCard = (project) => {
  const calculateDaysSince = (updateTime) => {
    const days = new Date() - new Date(updateTime);
    return Math.round(days / (1000 * 3600 * 24));
  };
  return (
    <Box key={project.id} my={1}>
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
    </Box>
  );
};

const Projects = () => {
  const crumbs = [
    { name: 'Home', href: '/home' },
    { name: 'Search', href: '/projects' },
  ];
  const classes = useStyles();
  const location = useLocation();
  const [filterList, setFilterList] = useState(defaultFilterList);
  const [modalOpen, setModalOpen] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [pages, setPages] = useState(1);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [resultCountHeader, setResultCountHeader] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [sort, setSort] = useState('best match');

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  const itemsPerPage = largeScreen ? 10 : 5;

  /*
   * only want to fetch data with query params
   * the first time the page is loaded by nav from other pages
   * (e.g. Trending Topics on home page)
   */
  useEffect(() => {
    if (location.query) {
      setQuery(location.query.search);
      fetchData(location.query.search, false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query) {
      fetchData(query, false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters, pageNum, sort]);

  // need to reset page to 1 when paginator count changes to avoid strange paginator states
  useEffect(() => {
    if (query) {
      fetchData(query, true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPage]);

  const getDateQuery = (dateVal) => {
    const getDateWithOffset = (unit, offset) => {
      const d = new Date();
      switch (unit) {
      case 'h': d.setHours(d.getHours() - offset); break;
      case 'd': d.setDate(d.getDate() - offset); break;
      case 'm': d.setMonth(d.getMonth() - offset); break;
      case 'y': d.setFullYear(d.getFullYear() - offset); break;
      default: return d.toISOString().split('T')[0];
      }
      return d.toISOString().split('T')[0];
    };

    let queryStr = '';
    const unit = dateVal.substring(dateVal.length - 1, dateVal.length);
    if (dateVal.indexOf('<') > -1) {
      const offset = Number(dateVal.substring(1, dateVal.length - 1));
      queryStr = `<${getDateWithOffset(unit, offset)}`
    } else if (dateVal.indexOf('>=') > -1) {
      const offset = Number(dateVal.substring(2, dateVal.length - 1));
      queryStr = `>=${getDateWithOffset(unit, offset)}`
    } else {
      const offsets = dateVal.substring(0, dateVal.length - 1).split('-');
      queryStr = `${getDateWithOffset(unit, Number(offsets[1]))}..${getDateWithOffset(unit, Number(offsets[0]))}`
    }
    return queryStr;
  };

  const fetchData = (queryStr, resetPageNum = false) => {
    const q = ['topic:civictechindex', queryStr];
    for (const filter of selectedFilters) {
      if (filter.category === 'pushed') {
        q.push(`pushed:${getDateQuery(filter.name)}`);
      } else {
        q.push(`${filter.category}:${filter.name}`);
      }
    }
    const params = {
      q: q.join(' '),
      sort: sort,
      order: 'desc',
      page: resetPageNum ? 1 : pageNum,
      per_page: itemsPerPage,
    };
    if (resetPageNum) {
      setPageNum(1);
    }
    axios
      .get(`https://api.github.com/search/repositories`, {
        headers: { Accept: 'application/vnd.github.mercy-preview+json' },
        params: params,
      })
      .then((res) => {
        setPages(Math.ceil(res.data.total_count / itemsPerPage));
        const items = res.data.items.map((i) => renderCard(i));
        setResultCountHeader(
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='span' color='primary'>
              <b>Displaying {res.data.items.length} of {res.data.total_count} results matching: </b>
              <Typography variant='span' color='secondary'><b>“{queryStr}”</b></Typography>
            </Typography>
            <FormControl variant='outlined'>
              <InputLabel id='sort-select-label'>Sort</InputLabel>
              <Select
                labelId='sort-select-label'
                label='Sort'
                defaultValue='best match'
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <MenuItem value='best match'>Best Match</MenuItem>
                <MenuItem value='updated'>Last Updated</MenuItem>
                <MenuItem value='stars'>Stargazer Count</MenuItem>
              </Select>
            </FormControl>
          </Box>
        );
        setResults(items);
        setShowResults(true);
      });

  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleFilterChange = (flt, deleteFlt) => {
    const tempList = filterList.map((filter) => {
      if (flt.category === 'all') {
        return { ...filter, selected: false };
      } else if (filter.category ===  flt.category && filter.name === flt.name) {
        return { ...filter, selected: deleteFlt ? false : flt.selected };
      }
      return filter;
    });
    setFilterList(tempList);
    setSelectedFilters(tempList.filter((filter) => filter.selected));
  };

  const handleSortChange = (value) => {
    setSort(value)
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      if (query) {
        fetchData(query, true);
      } else {
        setShowResults(false);
      }
    }
  };

  const filterTags = selectedFilters.map((filter) => {
    return (
      <FilterTag
        key={`${filter.category}:${filter.name}`}
        label={filter.label}
        data={filter}
        onDelete={handleFilterChange}
      />
    );
  });

  return (
    <Box className='containerGray'>
      <Container>
        <Grid container className='grid241'>
          <Grid item xs={12}>
            <NavBreadcrumb crumbs={crumbs} color='#0F1D2F' />
            <Box style={{ textAlign: 'center' }}>
              <Typography variant='h1' color='textPrimary'>
                Search Projects
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <SearchBar
              dataCy='search-projects'
              onInput={(e) => setQuery(e.target.value)}
              onKeyPress={handleSubmit}
              placeholder='Search the Civic Tech Index'
              value={query}
            />
            <Typography variant='body1' className={classes.openSearchTips} onClick={handleOpen}>
              <u>How to improve your search result</u>
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        {showResults && (
          <Grid container className='grid242'>
            <Grid item xs={4}>
              <RefineResults onFilterChange={handleFilterChange} filterList={filterList} />
            </Grid>
            <Grid container item xs={8} className={classes.resultContainer}>
              <Grid item xs={12}>
                {resultCountHeader}
                <br />
                {selectedFilters.length > 0 &&
                  <Typography variant='span' color='primary'>
                    <b>Filter: </b>
                    {filterTags}
                    <Typography
                      variant='span'
                      color='secondary'
                      onClick={() => handleFilterChange({ category: 'all' }, true)}
                    >
                      <b>Clear all</b>
                    </Typography>
                  </Typography>
                }
              </Grid>
              <Grid item xs={12}>
                {results}
                {results.length === 0 ?
                  (<Box my={12} display='flex' justifyContent='center'>
                    <Typography variant='body1' className={classes.message}>
                      <SearchRoundedIcon className={classes.messageIcon}/>
                      <i>Sorry, no results found.</i>
                    </Typography>
                  </Box>) :
                  (<Box my={3} display='flex' justifyContent='center'>
                    <Pagination
                      color='secondary'
                      count={pages}
                      defaultPage={1}
                      disabled={pages === 1}
                      onChange={(e, val) => setPageNum(val)}
                      page={pageNum}
                    />
                  </Box>)
                }

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
