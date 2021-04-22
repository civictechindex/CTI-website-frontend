/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import Link from '../../components/common/Link';
import NavBreadcrumb from '../../components/NavBreadcrumbs';

import FilterSelector from './FilterSelector';
import FilterTag from './FilterTag';
import ProjectCard from './ProjectCard';
import ResultFilters from './ResultFilters';
import ResultHeader from './ResultHeader';
import ResultContainer from './ResultContainer';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  filterSection: {
    backgroundColor: theme.palette.background.secondary,
    padding: theme.spacing(2),
  },
  openSearchTips: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  resultSection: {
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
  { category: 'language', name: 'typescript', label: 'Typescript', selected: false },
  { category: 'language', name: 'c#', label: 'C#', selected: false },
  { category: 'language', name: 'php', label: 'PHP', selected: false },
  { category: 'language', name: 'c++', label: 'C++', selected: false },
  { category: 'language', name: 'c', label: 'C', selected: false },
  { category: 'language', name: 'shell', label: 'Shell', selected: false },
  { category: 'language', name: 'ruby', label: 'Ruby', selected: false },
  { category: 'topic', name: '', label: 'Unaffiliated', selected: false },
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
  const [backupFilterList, setBackupFilterList] = useState([]);
  const [filterList, setFilterList] = useState(defaultFilterList);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterSelector, setFilterSelector] = useState('');
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
      fetchProjects(location.query.search, false);
    }
    fetchTopicTags();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query) {
      fetchProjects(query, false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList, selectedFilters, pageNum, sort]);

  // need to reset page to 1 when paginator count changes to avoid strange paginator states
  useEffect(() => {
    if (query) {
      fetchProjects(query, true);
    }
    setFilterOpen(false);
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

  const fetchProjects = (queryStr, resetPageNum = false) => {
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
          <ResultHeader
            itemLength={res.data.items.length}
            onHeaderClick={handleFilterOpen}
            onSortChange={handleSortChange}
            queryStr={queryStr}
            totalCount={res.data.total_count}
            variant={largeScreen ? 'large' : 'small'}
          />
        );
        setFilterSelector(
          <FilterSelector
            filterList={filterList}
            itemLength={res.data.items.length}
            onFilterChange={handleFilterChange}
            onFilterClose={handleFilterClose}
            queryStr={queryStr}
            totalCount={res.data.total_count}
            variant={largeScreen ? 'large' : 'small'}
          />
        );
        setResults(items);
        setShowResults(true);
      });
  };

  const fetchTopicTags = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
      .then((res) => {
        let tempFilterList = filterList.filter((filter) => filter.category !== 'topic');
        tempFilterList = tempFilterList.concat(res.data.filter((org) => org.org_tag)
          .map((org) => {
            return {
              category: 'topic',
              name: org.org_tag,
              label: org.name,
              selected: false,
            };
          })
        );
        setFilterList(tempFilterList);
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
      } else if (filter.category === flt.category && filter.name === flt.name) {
        return { ...filter, selected: deleteFlt ? false : flt.selected };
      }
      return filter;
    });
    setFilterList(tempList);
    setSelectedFilters(tempList.filter((filter) => filter.selected));
  };

  const handleFilterClose = (restore) => {
    if (restore) {
      setFilterList(backupFilterList);
      setSelectedFilters(backupFilterList.filter((filter) => filter.selected));
    }
    setFilterOpen(false);
  };

  const handleFilterOpen = () => {
    setBackupFilterList(filterList);
    setFilterOpen(true);
  }

  const handlePageChange = (value) => {
    setPageNum(value);
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      if (query) {
        fetchProjects(query, true);
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

  const renderPage = () => {
    if (largeScreen) {
      return (
        <Grid container className='grid242'>
          <Grid item xs={4}>
            {filterSelector}
          </Grid>
          <Grid container item xs={8} className={classes.resultSection}>
            <Grid item xs={12}>
              {resultCountHeader}
              <br />
              <ResultFilters
                filterTags={filterTags}
                show={selectedFilters.length > 0}
                onFilterChange={handleFilterChange} />
            </Grid>
            <Grid item xs={12}>
              <ResultContainer
                results={results}
                pages={pages}
                pageNum={pageNum}
                onPageChange={handlePageChange}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return filterOpen ? (
      <Grid container className={classes.filterSection}>
        <Grid item xs={12}>
          {filterSelector}
        </Grid>
      </Grid>
    ) : (
      <Grid container className='grid242'>
        <Grid container item xs={12} className={classes.resultSection}>
          <Grid item xs={12}>
            {resultCountHeader}
            <br />
            <ResultFilters
              filterTags={filterTags}
              show={selectedFilters.length > 0}
              onFilterChange={handleFilterChange} />
          </Grid>
          <Grid item xs={12}>
            <ResultContainer
              results={results}
              pages={pages}
              pageNum={pageNum}
              onPageChange={handlePageChange}
            />
          </Grid>
        </Grid>
      </Grid>
    )
  };

  return (
    <Box className='containerGray'>
      <Container>
        {!filterOpen &&
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
        }
        {showResults && renderPage()}
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
