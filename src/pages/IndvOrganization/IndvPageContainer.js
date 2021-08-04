/* eslint-disable max-lines-per-function */
import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box'
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PriorityQueue from 'js-priority-queue';
import { renderCard } from './RenderProjectCard';
import { OtherProjectsDropdown } from './OtherProjectsDropdown'
import ResultContainer from '../SearchProjects/ResultContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

const calculateDaysSince = (updateTime) => {
  const days = new Date() - new Date(updateTime);
  return Math.round(days / (1000 * 3600 * 24));
};

const renderListItem = (project) => {
  const urlText = project.html_url.replaceAll("https://github.com/", "");
  return (
    <ListItem key={project.id}>
      <a href={project.html_url} style={{ fontWeight: 'bold', textAlign: 'center' }}>{urlText}</a>
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({

  select: {
    [theme.breakpoints.down('xs')]: {
      width: '55vw',
    },
  },
}));


export const IndvPageContainer = (props) => {
  const [projects, setProjects] = useState([]);
  const [bestMatchProjects, setBestMatchProjects] = useState([]);
  const [lastUpdatedProjects, setLastUpdatedProjects] = useState([]);
  const [stargazerProjects, setStargazerProjects] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [pages, setPages] = useState(1);
  const [results, setResults] = useState('');
  const [dropDownListItem, setDropDownListItem] = useState('');
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('best match');
  const [isProjectSearchFinish, setIsProjectSearchFinish] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const projectsPerPage = 4;
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    setErrorState(false);
    setIsProjectSearchFinish(false);
    setProjects([]);
    setBestMatchProjects([]);
    setLastUpdatedProjects([]);
    setStargazerProjects([]);
    setResults('');
    setDropDownListItem('');
    setSort('best match');
  }, [props.pathName]);

  // Fetching the data for 'other repo' dropdown elements
  useEffect(() => {
    if (props.orgGithubName !== null && props.orgGithubName !== '') {
      axios
        .get(`https://api.github.com/search/repositories`, {
          headers: { Accept: "application/vnd.github.mercy-preview+json" },
          params: {
            q: "topic:" + props.orgGithubName,
            sort: "updated",
            order: "desc",
            per_page: 100,
          },
        })
        .then((res) => {
          const resList = [];
          res.data.items.filter((filter) => !filter.full_name.includes(props.orgGithubName) && filter.full_name !== undefined)
            .map((i) => {
              resList.push(renderListItem(i));
              return null;
            });

          setDropDownListItem(resList);
        })
        .catch(err => {
          setErrorState(true);
        })
    }

  }, [props.orgGithubName]);

  // Loading the Submitted projects searched by element from its projectSearchTopicsArr
  useEffect(() => {
    const repoMap = new Map();
    if (props.projectSearchTopicsArr.length > 0) {
      // remove duplicate search topics
      let filteredArray = props.projectSearchTopicsArr
      filteredArray = filteredArray.filter((x) => x);
      const topicSet = new Set(filteredArray);
      topicSet.forEach(async (x) =>
        await axios
          .get(`https://api.github.com/search/repositories`, {
            headers: { Accept: "application/vnd.github.mercy-preview+json" },
            params: {
              q: 'topic:civictechindex ' + x,
              sort: 'best match',
              order: 'desc',
              per_page: 100,
            },
          })
          .then((res) => {
            repoMap.set(x, res.data.items);
            if (repoMap.size === topicSet.size) {
              const repoKeyArr = [];
              const bestMatchSortedProjectsArr = [];
              topicSet.forEach(element => {
                const repoArr = repoMap.get(element);
                repoArr.forEach(org => {
                  if (!repoKeyArr.includes(org.name)) {
                    repoKeyArr.push(org.name);
                    org.parentOrgs = props.parentOrgs;
                    bestMatchSortedProjectsArr.push(org);
                  }
                })
              });

              const lastUpdatedSortedProjectsArr = getSortedProjectsArr("lastUpdated", bestMatchSortedProjectsArr);
              const stargazerSortedProjectsArr = getSortedProjectsArr("stargazer", bestMatchSortedProjectsArr);
              setProjects(bestMatchSortedProjectsArr);
              setBestMatchProjects(bestMatchSortedProjectsArr);
              setStargazerProjects(stargazerSortedProjectsArr);
              setLastUpdatedProjects(lastUpdatedSortedProjectsArr);
              setPages(Math.ceil(bestMatchSortedProjectsArr.length / projectsPerPage));
              setIsProjectSearchFinish(true);
            }
          })
          .catch(err => {
            setErrorState(true);
          })
      );
    }
  }, [props.parentOrgs, props.projectSearchTopicsArr]);

  // Update the submitted projects list if the path, sort method or page number is changed.
  useEffect(() => {
    setPageNum(1);
    const indexOfLastProject = 1 * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const items = currentProjects.map((i) => renderCard(i));
    setResults(items);
    if (isProjectSearchFinish) {
      setLoading(false);
    }
  }, [projects, isProjectSearchFinish]);

  // Using priorityQueue to sort result list.
  const getSortedProjectsArr = (sortMethod, bestMatchSortedProjectsArr) => {
    let priorityQueue;
    const sortedProjectsArr = [];
    if (sortMethod === "lastUpdated") {
      priorityQueue = new PriorityQueue({ comparator: function (a, b) { return (calculateDaysSince(a.updated_at) - calculateDaysSince(b.updated_at)) } });
    } else if (sortMethod === "stargazer") {
      priorityQueue = new PriorityQueue({ comparator: function (a, b) { return (b.stargazers_count - a.stargazers_count) } });
    }

    bestMatchSortedProjectsArr.map((i) => priorityQueue.queue(i));
    const lengthOfPriorityQueue = priorityQueue.length;
    for (let index = 0; index < lengthOfPriorityQueue; ++index) {
      const project = priorityQueue.dequeue();
      sortedProjectsArr.push(project);
    }
    return sortedProjectsArr;
  }

  const handlePageChange = (pageNum) => {
    setPageNum(pageNum);
    const indexOfLastProject = pageNum * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const items = currentProjects.map((i) => renderCard(i));
    setResults(items);
  };


  const handleSortChange = (value) => {
    if (value === "best match") {
      setProjects(bestMatchProjects);
    } else if (value === "updated") {
      setProjects(lastUpdatedProjects);
    } else {
      setProjects(stargazerProjects);
    }
    setSort(value);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8} >
          <Container fixed maxWidth={props.largeScreen ? "lg" : "md"}>
            <Grid >
              <OtherProjectsDropdown dropdownTitle={props.dropdownTitle} dropDownListItem={dropDownListItem} />
            </Grid>
            <Box display='flex' justifyContent='space-between' alignItems='center' style={{ paddingTop: "2rem" }}>
              <Typography variant='h5'>
                All Submitted Projects:
              </Typography>
              <FormControl variant='outlined'>
                <InputLabel id='sort-select-label'>Sort</InputLabel>
                <Select
                  labelId='sort-select-label'
                  label='Sort'
                  defaultValue='best match'
                  value={sort}
                  className={classes.select}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <MenuItem value='best match'>Best Match</MenuItem>
                  <MenuItem value='updated'>Last Updated</MenuItem>
                  <MenuItem value='stars'>Stargazer Count</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {!loading ? (
              <ResultContainer
                results={results}
                pages={pages}
                pageNum={pageNum}
                onPageChange={handlePageChange}
              />
            ) : errorState ? (
              <Box my={12} display='flex' justifyContent='center'>
                <Typography variant='body1' className={classes.message}>
                  <i>We are experiencing technical issues. Please try again later.</i>
                </Typography>
              </Box>
            ) : (
              <Box my={12} display='flex' justifyContent='center'>
                <CircularProgress color='secondary' />
              </Box>
            )}
          </Container>
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </>
  )
}
