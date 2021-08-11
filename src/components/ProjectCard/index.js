import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

import githubColorDictionary from '../data/gh-colors.json';
import useStyles from './styles.js';

const renderLanguageChip = (language, classes) => {
  if (language === null) {
    return '';
  }
  return (
    <Typography className={classes.tagChipContainerStyle}>
      <span
        className={classes.languageLogoStyle}
        style={{
          backgroundColor: githubColorDictionary[language],
        }}
      />
      <span className={classes.tagChipTextStyle}>{language}</span>
    </Typography>
  );
};

const renderTopicTags = (topics, classes) => {
  if (topics === null) {
    return '';
  }
  return topics.map((topic) => {
    return (
      <Typography key={topic} className={classes.tagChipContainerAltStyle}>
        <span className={classes.tagChipTextStyle}>{topic}</span>
      </Typography>
    );
  });
};

const renderAffiliationsTopicsTags = (topics, classes) => {
  if (topics === null) {
    return '';
  }
  return topics.map((topic) => {
    return (
      <Typography key={topic} className={classes.tagChipContainerStyle}>
        <img
          alt='affiliationTag'
          className={classes.affiliationTopicLogoStyle}
          src='/images/github-topic-tag-logo.png'
        />
        <span className={classes.tagChipTextStyle}>{topic}</span>
      </Typography>
    );
  });
};

const renderGithubInfoComp = (classes, props, iconType) => {
  let count;
  let imageSrc;
  if (iconType === 'Watch') {
    count = props.watchers;
    imageSrc = '/images/GithubEye.jpg';
  } else {
    count = props.stargazers;
    imageSrc = '/images/GithubStar.jpg';
  }
  return (
    <Typography className={classes.githubInfoStyle}>
      <img
        alt='githubInfoTag'
        className={classes.githubInfoTopicLogoStyle}
        src={imageSrc}
      />
      <span className={classes.tagChipTextStyle}>{iconType}</span>
      <span className={classes.githubInfoIconSeparatorStyle}></span>
      <span className={classes.tagChipTextStyle}>{count}</span>
    </Typography>
  );
};

const renderGithubInfoTags = (classes, props) => {
  return (
    <Grid className={classes.githubIconContainerStyle}>
      {renderGithubInfoComp(classes, props, 'Watch')}
      {renderGithubInfoComp(classes, props, 'Star')}
    </Grid>
  );
};

const renderProjectLinkSection = (classes, props, isSmallScreen) => {
  return (
    <>
      <Grid container className={classes.projectLinkSectionStyle}>
        {/* Project Logo */}
        <Grid>
          <Typography component='a' href={props.organizationUrl}>
            <img
              alt='logo'
              className={classes.logoImageStyle}
              src={props.organizationAvatarUrl}
            />
          </Typography>
        </Grid>
        <Grid md={9} className={classes.projectUrlContainerStyle}>
          <Typography
            component='a'
            variant='h6'
            data-cy='project-url'
            className={classes.projectUrlStyle}
            href={props.projectUrl}
          >
            {props.ownerName}/{props.projectName}
          </Typography>
        </Grid>
        {/* Remove the github info tag if it is in small screen */}
        {!isSmallScreen && renderGithubInfoTags(classes, props)}
      </Grid>
      {/* Added github info tags on a new separate line if it is in small screen*/}
      {isSmallScreen && renderGithubInfoTags(classes, props)}
    </>
  );
};

const renderProjectDetailSection = (classes, props) => {
  return (
    <Grid container className={classes.projectDetailsContainerStyle}>
      <Grid className={classes.projectDescGridWidthStyle}>
        <Typography className={classes.projectDescContainerStyle}>
          {props.projectDescription}
        </Typography>
      </Grid>
      <Grid className={classes.projectLinkContainerStyle}>
        <Typography
          component='a'
          href={props.homepage}
          className={classes.projectLinkStyle}
        >
          <img alt='link' src='/images/link.svg' />
          {props.homepage}
        </Typography>
      </Grid>
    </Grid>
  );
};

const renderUpdateIssuesSection = (classes, props) => {
  return (
    <Grid className={classes.updateAndIssuesContainerStyle}>
      <Typography componenet='span' className={classes.issueAndUpdateStyle}>
        Updated {props.lastUpdate} day(s) ago
      </Typography>
      <Typography
        componenet='a'
        href={props.issuesUrl}
        className={classes.issueAndUpdateStyle}
      >
        <span>{props.issueCount} Open Issues</span>
      </Typography>
    </Grid>
  );
};

const renderTopicTagsSection = (classes, props) => {
  return (
    <>
      <Grid className={classes.topicTagGridStyle}>
        <Typography component='span' className={classes.topicTagTitleStyle}>
          Affiliations Topic Tags:
        </Typography>
        <span className={classes.topicTagSpanContainerStyle}>
          {renderAffiliationsTopicsTags(props.projectTags, classes)}
        </span>
      </Grid>
      <Grid className={classes.topicTagGridStyle}>
        <Typography component='span' className={classes.topicTagTitleStyle}>
          Programming Language(s):
        </Typography>
        <span className={classes.topicTagSpanContainerStyle}>
          {renderLanguageChip(props.projectLanguage, classes)}
        </span>
      </Grid>
      <Grid className={classes.topicTagGridStyle}>
        <Typography component='span' className={classes.topicTagTitleStyle}>
          Topic Tags:
        </Typography>
        <span className={classes.topicTagSpanContainerStyle}>
          {renderTopicTags(props.topics, classes)}
        </span>
      </Grid>
    </>
  );
};

/**
 *
 * @param {*} props
 */
export default function ProjectCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  return (
    <Card data-cy='project-card' className={classes.cardContainerStyle}>
      <CardContent>
        {/* Project Title, Link, Watch and Star Tags */}
        {renderProjectLinkSection(classes, props, isSmallScreen)}
        {/* Description & Project Link */}
        {renderProjectDetailSection(classes, props)}
        {/* Update & Issue Count and Affiliation, Programming Language, Topic Tag */}
        <Grid className={classes.projectTagInfoContainerStyle}>
          {renderUpdateIssuesSection(classes, props)}
          {renderTopicTagsSection(classes, props)}
        </Grid>
      </CardContent>
    </Card>
  );
}
