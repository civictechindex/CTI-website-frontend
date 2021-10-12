/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './Header';
import Error404 from '../Error404';
import { IndvPageContainer } from './IndvPageContainer';
import Box from '@material-ui/core/Box';
import '../../styles.css';
import { getOrganizationLinks } from '../../components/getOrganizationLinks.js';

const IndvOrgPage = ({ match }) => {
  const [showHeaderResults, setShowHeaderResults] = useState(false);
  const [websiteUrlResults, setwebsiteUrlResults] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgGithubName, setOrgGithubName] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [parentOrgs, setParentOrgs] = useState([]);
  const [affiliationsOrgTags, setAffiliationsOrgTags] = useState([]);
  const [projectSearchTopicsArr, setProjectSearchTopicsArr] = useState([]);
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [isPathChange, setIsPathChange] = useState(false);
  const [notFound, setNotFound] = useState(true);
  const [dropdownTitle, setDropdownTitle] = useState('');

  const pathName = match.params.name?.toLowerCase()?.trim();

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
    if (pathName === '') {
      setNotFound(true);
      setIsPathChange(false);
    }
  }, [pathName]);

  // Iterate each organization to check if it matches the input org name from the path
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
        .then((res) => {
          // Extract affiliations org tags
          const affiliations = [];
          res.data.forEach((org) => {
            if (org.org_tag.length > 0) {
              affiliations.push(org.org_tag);
            }
          });
          setAffiliationsOrgTags(affiliations);

          // Extract organization info
          for (const org of res.data.values()) {
            if (org === undefined || org === '') {
              continue;
            }
            const name = org.name;
            const slug = org.slug;
            const orgTag = org.org_tag;
            const githubName = org.github_name;
            const url = org.url;
            const modifiedName = name?.replaceAll(' ', '').toLowerCase();

            // The matching criteria is matching one of these names from matchingNameArr
            const matchingNameArr = [
              name,
              slug,
              orgTag,
              githubName,
              modifiedName,
              orgTag?.toLowerCase(),
              githubName?.toLowerCase(),
            ];
            matchingNameArr.filter((name) => name);

            if (!matchingNameArr.includes(pathName)) {
              continue;
            }

            // Start grabing matching organization information.
            let projectSearchTopicsArr = [githubName, orgTag];
            projectSearchTopicsArr = projectSearchTopicsArr.concat(slug);
            projectSearchTopicsArr.filter((topic) => topic);
            const { links } = org;
            const webisteLink = links.find(
              (link) => link.link_type === 'WebSite'
            )?.url;
            const githubLink = links.find(
              (link) => link.link_type === 'GitHub'
            )?.url;

            const imageUrl = getOrganizationLinks(org).imageUrl;
            // Create the breadcrums on the Individual Organization Page
            const parentOrgs = [];
            const crumbs = [
              { href: '/', name: 'Home' },
              { href: '/organizations/all', name: 'View Organization' },
              {
                name: name,
                href:
                  '/organization/' + name?.replaceAll(' ', '').toLowerCase(),
              },
            ];

            // Get the Parent organization list for breadcrumbs and Affiliations Topic Tags.
            const setupBreadCrumbs = async () => {
              await axios.get(url).then((res) => {
                const parentOrgArr = res?.data.parents;
                parentOrgs.push(name);
                setDropdownTitle(
                  name + " projects appear in other organization's repositories"
                );

                for (let j = parentOrgArr.length - 1; j >= 0; --j) {
                  parentOrgs.push(parentOrgArr[j].name);
                }

                setBreadCrumbs(crumbs);
                setParentOrgs(parentOrgs);
                setShowHeaderResults(true);
              });
            };
            setupBreadCrumbs();

            document.title = `Civic Tech Index — ${name}`
            setOrgName(name);
            setNotFound(false);
            setImageUrl(imageUrl);
            setIsPathChange(false);
            setGithubLink(githubLink);
            setOrgGithubName(githubName);
            setwebsiteUrlResults(webisteLink);
            setProjectSearchTopicsArr(projectSearchTopicsArr);
            return false;
          }
          return true;
        })
        .then((isNotFound) => {
          setNotFound(isNotFound);
        })
        .catch((err) => {
          setNotFound(true);
        });
    };
    if (isPathChange) {
      fetchData();
    }
  }, [isPathChange, pathName]);

  return !notFound ? (
    <Box className='containerGray'>
      <Header
        crumbs={breadCrumbs}
        showHeaderResults={showHeaderResults}
        githubLink={githubLink}
        imageUrl={imageUrl}
        websiteUrlResults={websiteUrlResults}
        orgName={orgName}
      />
      <IndvPageContainer
        orgGithubName={orgGithubName}
        projectSearchTopicsArr={projectSearchTopicsArr}
        largeScreen={projectSearchTopicsArr}
        dropdownTitle={dropdownTitle}
        parentOrgs={parentOrgs}
        pathName={pathName}
        affiliationsOrgTags={affiliationsOrgTags}
      />
    </Box>
  ) : (
    <Error404 />
  );
};

export default IndvOrgPage;
