/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './Header';
import Error404 from '../Error404';
import { IndvPageContainer } from './IndvPageContainer';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import '../../styles.css';

const IndvOrgPage = (props) => {
  const [showHeaderResults, setShowHeaderResults] = useState(false);
  const [websiteUrlResults, setwebsiteUrlResults] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgGithubName, setOrgGithubName] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [parentOrgs, setParentOrgs] = useState([]);
  const [projectSearchTopicsArr, setProjectSearchTopicsArr] = useState([]);
  const [crumbs, setCrumbs] = useState([]);
  const [crumbsInSmallScreen, setCrumbsInSmallScreen] = useState([]);
  const [isPathChange, setIsPathChange] = useState(false);
  const [notFound, setNotFound] = useState(true);
  const [dropdownTitle, setDropdownTitle] = useState('');

  const pathName = (props.location.pathname)?.toLowerCase()?.replace("/organizations/", "")?.trim();
  const theme = useTheme();

  const largeScreen = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  // Reset variables when the path changes.
  useEffect(() => {
    setNotFound(false);
    setIsPathChange(true);
    setShowHeaderResults(false);
    setProjectSearchTopicsArr([]);
    setOrgName('');
    setImageUrl('');
    setGithubLink('');
    setParentOrgs([]);
    setwebsiteUrlResults('');
    if (pathName === ""){
      setNotFound(true);
      setIsPathChange(false);
    }
  }, [pathName]);

  // Iterate each organization to check if it matches the input org name from the path
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(
        `${process.env.REACT_APP_API_URL}/api/organizations/`
      ).then((res) => {
        for (const x of res.data.values()) {
          if (x === undefined || x === '') {
            continue;
          }
          const name = x.name;
          const alias = x.aliases;
          const orgTag = x.org_tag;
          const githubId = x.github_id;
          const githubName = x.github_name;
          const modifiedName =name?.replaceAll(" ", "").toLowerCase();
          let imageUrl;

          // The matching criteria is matching one of these names from matchingNameArr
          let matchingNameArr = [name, orgTag, githubName, modifiedName, orgTag?.toLowerCase(), githubName?.toLowerCase()];
          matchingNameArr = matchingNameArr.concat(alias);
          matchingNameArr.filter((name) => name);

          if (!matchingNameArr.includes(pathName)) {
            continue;
          }

          // Start grabing matching organization information.
          let projectSearchTopicsArr = [githubName, orgTag];
          projectSearchTopicsArr = projectSearchTopicsArr.concat(alias);
          projectSearchTopicsArr.filter((topic) => topic)
          const { links } = x;
          const webisteLink = links.find(link => link.link_type === 'WebSite')?.url;
          const githubLink = links.find(link => link.link_type === 'GitHub')?.url;

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
            { name: x.name, href: '/contributors/'+x.name?.replaceAll(" ", "").toLowerCase() },
          ];

          // Get the Parent organization list for breadcrumbs and Affiliations Topic Tags.
          let po = x.parent_organization;

          parentOrgs.push(x.name);
          setDropdownTitle(x.name + " projects appear in other organization's repositories");

          while (po != null) {
            parentOrgs.push(po.name);
            po = po.parent_organization;
          }
          for (let i = parentOrgs.length - 1; i >= 0; --i) {
            const parentOrg = parentOrgs[i];
            let parentOrgPathName = parentOrg;
            parentOrgPathName = parentOrg.replaceAll(" ", "").toLowerCase();
            const newCrumb = { name: `${parentOrg}`, href: `/organizations/${parentOrgPathName}` };
            crumbs.push(newCrumb);
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
          setShowHeaderResults(true);
          setProjectSearchTopicsArr(projectSearchTopicsArr);
          return false;
        }
        return true;
      })
        .then((isNotFound) => {
          setNotFound(isNotFound);
        })
        .catch(err => {
          setNotFound(true);
        })
    };
    if (isPathChange) {
      fetchData();
    }

  }, [isPathChange, pathName]);

  return (
    (!notFound) ? (
      <Box className='containerGray'>
        <Header crumbs={largeScreen ? crumbs : crumbsInSmallScreen}
          showHeaderResults={showHeaderResults} githubLink={githubLink}
          imageUrl={imageUrl} websiteUrlResults={websiteUrlResults} orgName={orgName}
        />
        <IndvPageContainer
          orgGithubName={orgGithubName}
          projectSearchTopicsArr={projectSearchTopicsArr}
          largeScreen={projectSearchTopicsArr}
          dropdownTitle={dropdownTitle}
          parentOrgs={parentOrgs}
          pathName={pathName}
        />
      </Box>
    ) : (<Error404 />))
};

export default IndvOrgPage;
