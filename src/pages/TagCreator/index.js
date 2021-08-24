/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import React, { useState, useEffect, useRef } from 'react';
import {
  useQueryParam,
  StringParam,
  ArrayParam,
  withDefault,
} from 'use-query-params';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GenericHeaderSection } from '../../components/';
import { AffiliationQuestionSection } from './AffilationQuestionSection';
import {
  OrgNameSection,
  OrganizationSelectorSection,
  OrgChange,
} from './Organization';
import {
  ProjectRepositorySection,
  ProjectRepositoryInput,
} from './ProjectRepository';
import {
  AddTopicTagSection,
  AddTagsQuestion,
  NewTags,
  CopyPasteTags,
  CurrentTopicTagSection,
} from './TopicTagSection';
import useTheme from '@material-ui/core/styles/useTheme';
import BottomSection from './BottomSection';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  containerPadding: {
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px 16px',
    },
  },
}));

/**
 * By removing matched text, we allow leeway in entering repository URL,
 * including how it might be pasted from GitHub. All these would work:
 * https://github.com/civictechindex/CTI-website-frontend.git
 * git@github.com:civictechindex/CTI-website-frontend.git
 * github.com/civictechindex/CTI-website-frontend
 * civictechindex / CTI-website-frontend
 */
const getRepositoryUrlPath = (repositoryUrl) => {
  let result = repositoryUrl.replace(/ /g, '');
  const prefix = /^(?:https?:\/\/)?github\.com\/|git@github\.com:/;
  const suffix = /\.git$/;
  result = result.replace(prefix, '');
  result = result.replace(suffix, '');
  return result;
};

// checks if URL is deifferent
const usePrevious = (refValue) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = refValue;
  });
  return ref.current;
};

// eslint-disable-next-line max-lines-per-function
const TagCreator = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [changeValue, setChangeValue] = useQueryParam(
    'changeValue',
    withDefault(StringParam, '')
  );
  const [currentTags, setCurrentTags] = useQueryParam(
    'currentTags',
    withDefault(ArrayParam, [])
  );
  const [displayState, setDisplayState] = useQueryParam(
    'displayState',
    withDefault(StringParam, '')
  );
  const [orgName, setOrgName] = useQueryParam(
    'orgName',
    withDefault(StringParam, '')
  );
  const [orgTags, setOrgTags] = useQueryParam(
    'orgTags',
    withDefault(ArrayParam, [])
  );
  const [repositoryName, setRepositoryName] = useQueryParam(
    'repositoryName',
    withDefault(StringParam, '')
  );
  const [repositoryUrl, setRepositoryUrl] = useQueryParam(
    'repositoryUrl',
    withDefault(StringParam, '')
  );
  const [tagsToAdd, setTagsToAdd] = useQueryParam(
    'tagsToAdd',
    withDefault(ArrayParam, [])
  );
  const [topicSearchError, setTopicSearchError] = useQueryParam(
    'topicSearchError',
    withDefault(StringParam, '')
  );
  const [userTags, setUserTags] = useQueryParam(
    'userTags',
    withDefault(ArrayParam, [])
  );
  const [value, setValue] = useQueryParam(
    'value',
    withDefault(StringParam, '')
  );
  const [loadingTags, setLoadingTags] = useState(false);
  const [options, setOptions] = useState([]);
  const [repoChangeAlert, setRepoChangeAlert] = useState('');
  const breadCrumbLinks = [
    { href: '/home', name: 'Home' },
    { href: '/join-index', name: 'Tag Your Project' },
  ];

  const resetForm = () => {
    setValue('');
    setOrgName('');
    setRepositoryUrl('');
    setRepositoryName('');
    setTopicSearchError('');
    setTagsToAdd([]);
    setCurrentTags([]);
    setUserTags([]);
    setOrgTags([]);
    setChangeValue('');
    setDisplayState('');
    setRepoChangeAlert('');
  };

  useEffect(() => {
    let active = true;
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
      .then((res) => {
        const orgs = res.data.map((org) => org.name);
        if (active) {
          setOptions(orgs);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const civicName = [];
    if (!currentTags.includes('civictechindex')) {
      civicName.push('civictechindex');
    }
    if (orgTags.length !== 0 && currentTags.length !== 0) {
      const result = orgTags.filter((ot) => !currentTags.includes(ot));
      setTagsToAdd([...civicName, ...result]);
    } else {
      setTagsToAdd([...civicName, ...orgTags]);
    }
  }, [orgTags, currentTags, setTagsToAdd]);

  useEffect(() => {
    if (value === 'no') {
      setOrgName('');
      setOrgTags([]);
    }
  }, [setOrgName, setOrgTags, value]);

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeProjectRepository = () => {
    if (changeValue === 'TopicTag') {
      setDisplayState('TopicTag');
    } else if (changeValue === 'GenerateTags') {
      setDisplayState('GenerateTags');
    } else if (changeValue === 'CopyPasteTags') {
      setDisplayState('CopyPasteTags');
    } else {
      setChangeValue('TopicTag');
      setDisplayState('TopicTag');
    }
  };
  const prevRefUrl = usePrevious(repositoryUrl);

  const handleSubmit = (event) => {
    const urlPath = getRepositoryUrlPath(repositoryUrl);
    // Setting Repository Name
    const patt = /[a-z]+\//g;
    const repName = urlPath.replace(patt, '');
    setRepositoryName(repName);
    // Return error message if no url present
    if (urlPath.length === 0) {
      return setTopicSearchError('Please enter a URL');
    }
    // Fetches Tags from API only if URL is changed
    if (prevRefUrl !== repositoryUrl) {
      setLoadingTags(true);
      axios
        .get('https://api.github.com/repos/' + urlPath + '/topics', {
          headers: { Accept: 'application/vnd.github.mercy-preview+json' },
        })
        .then((res) => {
          setCurrentTags(res.data.names);
          setTopicSearchError('');
        })
        .catch((e) => {
          /*
           * This should store the error state.
           * Component should check for error state and resolve the correct response.
           */
          if (e) {
            setCurrentTags([]);
            setTopicSearchError(
              'Cannot find repository. Please check the name and try again'
            );
            setDisplayState('ProjectUrl');
          }
        })
        .finally(() => {
          setLoadingTags(false);
        });
      if (userTags.length !== 0) {
        setRepoChangeAlert(
          'It looks like you have changed your repository, please check your tags'
        );
        setDisplayState('ChangeTags');
      } else {
        handleChangeProjectRepository();
      }
    } else if (
      topicSearchError ===
      'Cannot find repository. Please check the name and try again'
    ) {
      setDisplayState('ProjectUrl');
    } else {
      handleChangeProjectRepository();
    }
  };

  const handleAdd = (chip) => {
    chip = chip.toLowerCase();
    chip = chip.replace(/['`~!@#$%^&*()_|+=?;:'".<>\\{\\}\\[\]\\\\/]/gi, '');
    while (chip.startsWith('-')) {
      chip = chip.slice(1);
    }
    while (chip.endsWith('-')) {
      chip = chip.slice(0, -1);
    }
    if (chip.includes(',')) {
      let inputChipArr = chip.split(',');
      inputChipArr = inputChipArr.filter((i) => i);
      setUserTags([...new Set([...userTags, ...inputChipArr])]);
    } else setUserTags([...new Set([...userTags, chip])]);
  };

  const handleDelete = (deletedChip) => {
    setUserTags(userTags.filter((c) => c !== deletedChip));
  };

  const linkStyles = {
    fontWeight: '400',
    color: theme.palette.secondary.main,
  };

  const OrgProjSection = () => {
    return (
      <>
        <OrgNameSection
          setDisplayState={setDisplayState}
          orgName={orgName}
          linkStyles={linkStyles}
        />
        <ProjectRepositorySection
          repositoryUrl={repositoryUrl}
          setDisplayState={setDisplayState}
          linkStyles={linkStyles}
        />
      </>
    );
  };

  const RadioYes = ({ value, setOrgName }) => {
    return (
      <Grid container id='container-affiliated'>
        <OrganizationSelectorSection
          orgName={orgName}
          setOrgName={setOrgName}
          options={options}
          setOptions={setOptions}
        />
        <OrgChange
          value={value}
          orgName={orgName}
          setOrgName={setOrgName}
          setOrgTags={setOrgTags}
          changeValue={changeValue}
          setDisplayState={setDisplayState}
          linkStyles={linkStyles}
        />
      </Grid>
    );
  };

  // eslint-disable-next-line complexity
  const renderCurrentState = () => {
    switch (displayState) {
    case 'ProjectUrl':
      return (
        <>
          <OrgNameSection
            setDisplayState={setDisplayState}
            orgName={orgName}
            linkStyles={linkStyles}
          />
          <ProjectRepositoryInput
            repositoryUrl={repositoryUrl}
            handleEnter={handleEnter}
            setRepositoryUrl={setRepositoryUrl}
            topicSearchError={topicSearchError}
            setTopicSearchError={setTopicSearchError}
            handleSubmit={handleSubmit}
          />
        </>
      );
    case 'TopicTag':
      return (
        <>
          <OrgProjSection />
          {loadingTags ? (
            <Box display='flex' alignItems='center' justifyContent='center'>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <CurrentTopicTagSection
                currentTags={currentTags}
                repositoryName={repositoryName}
              />
              <AddTagsQuestion
                userTags={userTags}
                displayState={displayState}
                setDisplayState={setDisplayState}
                changeValue={changeValue}
                setChangeValue={setChangeValue}
                resetForm={resetForm}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                repoChangeAlert={repoChangeAlert}
                setRepoChangeAlert={setRepoChangeAlert}
              />
            </>
          )}
        </>
      );
    case 'GenerateTags':
      return (
        <>
          <OrgProjSection />
          <CurrentTopicTagSection
            currentTags={currentTags}
            repositoryName={repositoryName}
          />
          <NewTags
            tagsToAdd={tagsToAdd}
            setDisplayState={setDisplayState}
            setChangeValue={setChangeValue}
            resetForm={resetForm}
            linkStyles={linkStyles}
            userTags={userTags}
            setUserTags={setUserTags}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
        </>
      );
    case 'ChangeTags':
      return (
        <>
          <OrgProjSection />
          <CurrentTopicTagSection
            currentTags={currentTags}
            repositoryName={repositoryName}
          />
          <AddTopicTagSection
            userTags={userTags}
            displayState={displayState}
            setDisplayState={setDisplayState}
            changeValue={changeValue}
            setChangeValue={setChangeValue}
            resetForm={resetForm}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            repoChangeAlert={repoChangeAlert}
            setRepoChangeAlert={setRepoChangeAlert}
          />
        </>
      );
    case 'CopyPasteTags':
      return (
        <>
          <OrgProjSection />
          <CurrentTopicTagSection
            currentTags={currentTags}
            repositoryName={repositoryName}
          />
          <CopyPasteTags
            tagsToAdd={tagsToAdd}
            setDisplayState={setDisplayState}
            userTags={userTags}
            repositoryName={repositoryName}
            repositoryUrl={repositoryUrl}
            linkStyles={linkStyles}
          />
        </>
      );
    default:
      return (
        <>
          <AffiliationQuestionSection
            value={value}
            handleChange={handleChange}
            question={'Are you affiliated with an organization?'}
          />
          {value === 'yes' ? (
            <RadioYes value={value} setOrgName={setOrgName} />
          ) : null}
          {value === 'no' ? (
            <OrgChange
              value={value}
              orgName={orgName}
              setOrgName={setOrgName}
              setOrgTags={setOrgTags}
              changeValue={changeValue}
              setDisplayState={setDisplayState}
            />
          ) : null}
        </>
      );
    }
  };

  return (
    <Box>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='Tag Generator'
            breadCrumbLinks={breadCrumbLinks}
          >
            <Typography
              variant='h6'
              color='textSecondary'
              style={{ fontWeight: '500', textAlign: 'center' }}
            >
              Join the Civic Tech Index by submitting your open-source project.
              <br /> This process takes less than one minute to complete.
            </Typography>
          </GenericHeaderSection>
        </Container>
      </Box>
      <Box className='containerGray' style={{ paddingBottom: '30px' }}>
        <Container className={classes.containerPadding}>
          {renderCurrentState()}
        </Container>
      </Box>
      {displayState === 'CopyPasteTags' ? <BottomSection /> : null}
    </Box>
  );
};

export default TagCreator;
