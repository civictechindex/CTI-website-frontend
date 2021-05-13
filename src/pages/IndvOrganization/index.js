/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './Header';
import Error404 from '../Error404';
import PriorityQueue from 'js-priority-queue';
import { renderCard } from './RenderProjectCard';
import { OtherProjectsDropdown } from './OtherProjectsDropdown'
import ResultContainer from '../SearchProjects/ResultContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import '../../styles.css';


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



const IndvOrgPage = (props) => {
  const [showHeaderResults, setShowHeaderResults] = useState(false);
  const [results, setResults] = useState('');
  const [websiteUrlResults, setwebsiteUrlResults] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgGithubName, setOrgGithubName] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [parentOrgs, setParentOrgs] = useState([]);
  const [crumbs, setCrumbs] = useState([]);
  const [crumbsInSmallScreen, setCrumbsInSmallScreen] = useState([]);
  const [projects, setProjects] = useState([]);
  const [bestMatchProjects, setBestMatchProjects] = useState([]);
  const [lastUpdatedProjects, setLastUpdatedProjects] = useState([]);
  const [stargazerProjects, setStargazerProjects] = useState([]);
  const [projectSearchTopicsArr, setProjectSearchTopicsArr] = useState([]);
  const [projectSearchFinished, setProjectSearchFinished] = useState(false);
  const [isPathChange, setIsPathChange] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState('');
  const [dropDownListItem, setDropDownListItem] = useState('');
  const [notFound, setNotFound] = useState(true);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [pages, setPages] = useState(1);
  const projectsPerPage = 4;

  const pathName = (props.location.pathname).toLowerCase().replace("/organizations/", "");
  const classes = useStyles();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  // Reset variables when the path changes.
  useEffect(() => {

    setLoading(true);
    setNotFound(true);
    setIsPathChange(true);
    setProjectSearchFinished(false);
    setShowHeaderResults(false);
    setProjectSearchTopicsArr([]);
    setResults('');
    setOrgName('');
    setImageUrl('');
    setGithubLink('');
    setParentOrgs(['']);
    setDropDownListItem('');
    setwebsiteUrlResults('');
  }, [pathName]);

  // Iterate each organization to check if it matches the input org name from the path
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(
        `${process.env.REACT_APP_API_URL}/api/organizations/`
      ).then((res) => {
        for (const x of res.data.values()) {
          if (x !== undefined || x !== '') {
            const name = x.name;
            const alias = x.aliases;
            const orgTag = x.org_tag;
            const githubId = x.github_id;
            const githubName = x.github_name;
            const modifiedName = name.includes(" ") ? name.replaceAll(" ", "").toLowerCase() : name;

            let matchingNameArr = [name, orgTag, githubName, modifiedName];
            let projectSearchTopicsArr = (githubName !== orgTag) ? [githubName, orgTag] : [githubName];
            let webisteLink;
            let githubLink;
            let imageUrl;

            // The matching criteria is matching one of these names from matchingNameArr
            if (alias.length > 0) {
              matchingNameArr = matchingNameArr.concat(alias);
              projectSearchTopicsArr = projectSearchTopicsArr.concat(alias);
            }
            matchingNameArr.forEach((name, index) =>
            {
              if (matchingNameArr[index] === undefined){
                matchingNameArr[index] = '';
              }
            });
            if (matchingNameArr.includes(pathName)) {
              const { links } = x;

              if (typeof (links.find(link => link.link_type === 'WebSite')) !== 'undefined') {
                webisteLink = links.find(link => link.link_type === 'WebSite').url;
              }

              if (typeof (links.find(link => link.link_type === 'GitHub')) !== 'undefined') {
                githubLink = links.find(link => link.link_type === 'GitHub').url;
              }

              if (githubId === null) {
                imageUrl = x.image_url;
              } else {
                imageUrl = `https://avatars1.githubusercontent.com/u/${githubId}?s=100&v=4`;
              }

              // Create the breadcrums on the Individual Organization Page
              const parentOrgs = [];
              const crumbs = [
                { name: 'Home', href: '/home' },
                { name: 'Organization', href: '/contributors/all' },
              ];
              const crumbsInSmallScreen = [
                { name: 'Home', href: '/home' },
                { name: '...', href: '/contributors/all' },
              ];
              let po = x.parent_organization;
              if (x.name !== "") {
                parentOrgs.push(x.name);
                setDropdownTitle(x.name + " projects appear in other organization's repositories");
              }
              while (po != null) {
                parentOrgs.push(po.name);
                po = po.parent_organization;
              }
              if (parentOrgs.length > 0) {
                for (let i = parentOrgs.length - 1; i >= 0; --i) {
                  const parentOrg = parentOrgs[i];
                  let parentOrgPathName = parentOrg;
                  if (parentOrg.includes(" ")) {
                    parentOrgPathName = parentOrg.replaceAll(" ", "").toLowerCase();
                  }
                  const newCrumb = { name: `${parentOrg}`, href: `/organizations/${parentOrgPathName}` };
                  if (i === 0) {
                    crumbsInSmallScreen.push(newCrumb);
                  }
                  crumbs.push(newCrumb);
                }
              }

              setCrumbs(crumbs);
              setOrgName(orgTag);
              setNotFound(false);
              setImageUrl(imageUrl);
              setIsPathChange(false);
              setParentOrgs(parentOrgs)
              setGithubLink(githubLink);
              setOrgGithubName(githubName);
              setwebsiteUrlResults(webisteLink);
              setCrumbsInSmallScreen(crumbsInSmallScreen);
              setShowHeaderResults(crumbs.length > 0 ? true : false);
              projectSearchTopicsArr = projectSearchTopicsArr.filter(x => x !== "");
              setProjectSearchTopicsArr(projectSearchTopicsArr);
              return false;
            }
          }
        }
        return true;
      })
        .then((isNotFound) => {
          if (!isNotFound) {
            setNotFound(false);
          } else {
            setNotFound(true);
            setLoading(false);
          }
        })
        .catch(err => {
          setNotFound(true);
          setLoading(false);
        })
    };
    if (isPathChange) {
      fetchData();
    }
  }, [isPathChange, pathName]);

  // Fetching the data for 'other repo' dropdown elements
  useEffect(() => {
    if (orgGithubName !== null && orgGithubName !== ''){
      axios
        .get(`https://api.github.com/search/repositories`, {
          headers: { Accept: "application/vnd.github.mercy-preview+json" },
          params: {
            q: "topic:" + orgGithubName,
            sort: "updated",
            order: "desc",
            per_page: 100,
          },
        })
        .then((res) => {
          const resList = [];
          res.data.items.filter((filter) => !filter.full_name.includes(orgGithubName) && filter.full_name !== undefined)
            .map((i) => {
              resList.push(renderListItem(i));
              return null;
            });

          setDropDownListItem(resList);
        })
        .catch(err => {
          setNotFound(true);
          setLoading(false);
        })
    }

  }, [orgGithubName]);

  // Loading the Submitted projects searched by element from its projectSearchTopicsArr
  useEffect(() => {
    const repoMap = new Map();
    if (projectSearchTopicsArr.length > 0){
      projectSearchTopicsArr.forEach(async (x) =>
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
            if (repoMap.size === projectSearchTopicsArr.length) {
              const repoKeyArr = [];
              const bestMatchSortedProjectsArr = [];
              projectSearchTopicsArr.forEach(element => {
                const repoArr = repoMap.get(element);
                repoArr.forEach(org => {
                  if (!repoKeyArr.includes(org.name)) {
                    repoKeyArr.push(org.name);
                    org.parentOrgs = parentOrgs;
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
              setProjectSearchFinished(true);
            }
          })
          .catch(err => {
            setNotFound(true);
            setLoading(false);
          })
      );
    }
  }, [parentOrgs, projectSearchTopicsArr]);

  // Update the submitted projects list if the path, sort method or page number is changed.
  useEffect(() => {
    if (projectSearchFinished) {
      setPageNum(1);
      const indexOfLastProject = 1 * projectsPerPage;
      const indexOfFirstProject = indexOfLastProject - projectsPerPage;
      const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
      const items = currentProjects.map((i) => renderCard(i));
      setResults(items);
      setLoading(false);
      setProjectSearchFinished(false)
    }
  }, [projectSearchFinished, projects]);

  // Using priorityQueue to sort result list.
  const getSortedProjectsArr = (sortMethod, bestMatchSortedProjectsArr)=>{
    let priorityQueue;
    const sortedProjectsArr = [];
    if (sortMethod === "lastUpdated"){
      priorityQueue = new PriorityQueue({ comparator: function (a, b) { return (calculateDaysSince(a.updated_at) - calculateDaysSince(b.updated_at)) } });
    } else if (sortMethod === "stargazer"){
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
    setProjectSearchFinished(true);
  };

  return (
    (loading || !notFound) ? (
      <Box className='containerGray'>
        <Header crumbs={largeScreen ? crumbs : crumbsInSmallScreen}
          showHeaderResults={showHeaderResults} githubLink={githubLink}
          imageUrl={imageUrl} websiteUrlResults={websiteUrlResults} orgName={orgName}
        />
        <Grid container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8} >
            {!loading ? (
              <Container fixed maxWidth={largeScreen ? "lg" : "md"}>
                <Grid >
                  <OtherProjectsDropdown dropdownTitle={dropdownTitle} dropDownListItem={dropDownListItem} />
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
                      className={classes.select}
                      onChange={(e) => handleSortChange(e.target.value)}
                    >
                      <MenuItem value='best match'>Best Match</MenuItem>
                      <MenuItem value='updated'>Last Updated</MenuItem>
                      <MenuItem value='stars'>Stargazer Count</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <ResultContainer
                  results={results}
                  pages={pages}
                  pageNum={pageNum}
                  onPageChange={handlePageChange}
                />
              </Container>) : (<CircularProgress color="secondary" />)}
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Box>
    ) : (<Error404 />))
};

export default IndvOrgPage;
