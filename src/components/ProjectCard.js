import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import githubColorDictionary from './data/gh-colors.json';
import { Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  issueAndUpdateStyle: {
    fontFamily: 'Work Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
    color: '#6D6E74',
    paddingRight: '16px',
    display: 'inline',
  },
  logoImageStyle: {
    display: 'block',
    margin: 'auto',
    width: '64px',
  },
  projectLinkSectionStyle: {
    display: 'flex',
    flexWrap: 'nowrap',
    height: '64px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
  cardContainerStyle: {
    padding: '32px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    },
  },
  projectUrlContainerStyle: {
    margin: 'auto 16px auto 16px',
    fontSize: '20px',
    weight: '700',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '417px',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '507px',
      maxWidth: '820px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '456px',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '0px',
    },
  },
  projectUrlStyle: {
    color: '#0F1D2F',
    wordBreak: 'break-word',
  },
  githubIconContainerStyle: {
    margin: 'auto',
    display: 'contents',
    maxWidth: '229px',
    [theme.breakpoints.down('sm')]: {
      margin: '16px auto',
    },
  },
  projectDetailsContainerStyle: {
    minWidth: '742px',
    minHeight: '80px',
    paddingTop: '16px',
    [theme.breakpoints.down('md')]: {
      minWidth: '832px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '536px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '0px',
    },
  },
  projectDescContainerStyle: {
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    color: '#0F1D2F',
  },
  projectLinkContainerStyle: {
    verticalAlign: 'middle',
    paddingTop: '8px',
    wordBreak: 'break-word',
  },
  projectLinkStyle: {
    fontFamily: 'Work Sans',
    fontWeight: '700',
    fontSize: '18px',
    color: '#0D99C6',
  },
  projectTagInfoContainerStyle: {
    minHeight: '154px',
    maxWidth: '742px',
    paddingTop: '24px',
  },
  topicTagTitleStyle: {
    color: '#6D6E74',
    fontFamily: 'Work Sans',
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight:'22px',
    fontSize: '16px',
    clear: 'both',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: '8px',
  },
  tagChipContainerStyle: {
    borderRadius: '4px',
    padding: '4px 8px 4px 8px',
    height: '28px',
    display: 'inline-flex',
    backgroundColor: '#F2F2F2',
    marginRight: '3px',
    whiteSpace: 'nowrap',
  },
  tagChipContainerAltStyle: {
    borderRadius: '4px',
    padding: '6px 8px 6px 8px',
    height: '30px',
    display: 'inline-flex',
    border: '1px solid #6D6E74',
    margin: '2px',
    whiteSpace: 'nowrap',
  },
  tagChipTextStyle:{
    paddingRight: '4px',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    color: '#6D6E74',
    lineHeight: '18px',
  },
  githubInfoStyle:{
    height: '28px',
    borderRadius: '4px',
    border: '0.5px solid #AEAEAE',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px 0px 0px 8px',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    margin: 'auto 4px',
  },
  topicTagSpanContainerStyle:{
    clear: 'both',
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

const renderLanguageChip = (language,classes) => {
  if (language === null){
    return '';
  }
  return <Typography className={classes.tagChipContainerStyle}>
    <span style={{ margin:'auto 4px auto 0px',  width: '11px', height: '11px', borderRadius: '50%', backgroundColor: githubColorDictionary[language] }} />
    <span className={classes.tagChipTextStyle}>{language}</span>
  </Typography>;
};

const renderTopicTags = (topics,classes) => {
  if (topics === null){
    return '';
  }
  return topics.map((topic) => {
    return <Typography key={topic} className={classes.tagChipContainerAltStyle}>
      <span className={classes.tagChipTextStyle}>{topic}</span>
    </Typography>
  });
};

const renderAffiliationsTopicsTags = (topics,classes) => {
  if (topics === null){
    return '';
  }
  return topics.map((topic) => {
    return <Typography key={topic} className={classes.tagChipContainerStyle}>
      <img alt='affiliationTag' style={{ width: '20px', height: '20px', marginRight: '4px' }} src="/images/github-topic-tag-logo.png" />
      <span className={classes.tagChipTextStyle}>{topic}</span>
    </Typography>
  });
};

const renderGithubInfoComp = (classes, props, iconType) => {
  let count;
  let imageSrc;
  if (iconType === "Watch"){
    count = props.watchers;
    imageSrc = "/images/GithubEye.jpg";
  } else {
    count = props.stargazers;
    imageSrc = "/images/GithubStar.jpg";
  }
  return <Typography className={classes.githubInfoStyle}>
    <img alt='githubInfoTag' style={{ width: '13px', height: '13px', marginRight: '8px' }} src={imageSrc}/>
    <span className={classes.tagChipTextStyle}>{iconType}</span>
    <span style={{ marginRight: '4px', marginLeft: '10px', width: '0.5px', backgroundColor: '#AEAEAE',  height: '100%' }}></span>
    <span className={classes.tagChipTextStyle}>{count}</span>
  </Typography>;
}

const renderGithubInfoTags = (classes, props) => {
  return <Grid className={classes.githubIconContainerStyle}>
    {renderGithubInfoComp(classes, props, "Watch")}
    {renderGithubInfoComp(classes, props, "Star")}
  </Grid>;
}
/**
 *
 * @param {*} props
 */
export default function ProjectCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  return (
    <Card data-cy='project-card' className={classes.cardContainerStyle}>
      <CardContent>
        {/* Project Title, Watch and Star buttons */}
        <Grid container className={classes.projectLinkSectionStyle}>
          {/* Project Logo */}
          <Grid>
            <Typography component="a" href={props.organizationUrl} className={classes.projectDescContainerStyle} >
              <img alt='logo' className={classes.logoImageStyle} src={props.organizationAvatarUrl} />
            </Typography>
          </Grid>
          <Grid md={9} className={classes.projectUrlContainerStyle}>
            <Typography component="a" variant="h6" data-cy='project-url' className={classes.projectUrlStyle} href={props.projectUrl} >
              <b>{props.ownerName}/{props.projectName}</b>
            </Typography>
          </Grid>
          {/* Remove the github info tag if it is in small screen */}
          {isSmallScreen ? "" :
            renderGithubInfoTags(classes, props)
          }
        </Grid>
        {/* Added github info tags on a new separate line if it is in small screen */}
        {isSmallScreen ?
          renderGithubInfoTags(classes, props) : ""
        }
        {/* Description & Project Link */}
        <Grid container className={classes.projectDetailsContainerStyle}>
          <Grid style={{ width: '100%' }}>
            <Typography className={classes.projectDescContainerStyle} >{props.projectDescription}</Typography>
          </Grid>
          <Grid className={classes.projectLinkContainerStyle}>
            <Typography componenet="span" className={classes.projectLinkStyle}>
              <img alt='link' src='/images/link.svg' /> <a href={props.homepage}>{props.homepage}</a>
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.projectTagInfoContainerStyle}>
          {/* Update & Issue Count */}
          <Grid style={{ height: '22px', display: 'inline-flex' }}>
            <Typography componenet="span" className={classes.issueAndUpdateStyle}>
                  Updated {props.lastUpdate} day(s) ago
            </Typography>
            <Typography componenet="a" href={props.issuesUrl} className={classes.issueAndUpdateStyle}>
              <span>{props.issueCount} Open Issues</span>
            </Typography>
          </Grid>
          <Grid style={{ paddingTop: '16px' }}>
            <Typography component="span" className={classes.topicTagTitleStyle}>
                    Affiliations Topic Tags:
            </Typography>
            <span className={classes.topicTagSpanContainerStyle}>{renderAffiliationsTopicsTags(props.projectTags, classes)}</span>
          </Grid>
          <Grid style={{ paddingTop: '16px' }}>
            <Typography component="span" className={classes.topicTagTitleStyle}>
                    Programming Language(s):
            </Typography>
            <span className={classes.topicTagSpanContainerStyle}>{renderLanguageChip(props.projectLanguage, classes)}</span>
          </Grid>
          <Grid style={{ paddingTop: '16px' }}>
            <Typography component="span" className={classes.topicTagTitleStyle}>
                    Topic Tags:
            </Typography>
            <span className={classes.topicTagSpanContainerStyle}>{renderTopicTags(props.topics,classes)}</span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
