import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import githubColorDictionary from './data/gh-colors.json';

const useStyles = makeStyles((theme) => ({
  select : {
    [theme.breakpoints.down('xs')]: {
      width: '55vw',
    },
  },
  chipStyle : {
    backgroundColor: '#F1F1F1',
    paddingLeft: '2px',
  },
  issueStyles : {
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '400',
  },
}));

const renderLanguageChip = (language,classes) => {
  return <Chip size='small' className={classes.chipStyle} label={language} icon={<FiberManualRecordRoundedIcon style={{ color: githubColorDictionary[language] }} />} />;
};

const renderTopicTags = (topics,classes) => {
  return topics.map((i) => {
    return <Chip key={i} size='small' className={classes.chipStyle}  label={i} />;
  });
};

const renderAffiliationsTopicsTags = (topics,classes) => {
  if (topics === null){
    return '';
  }
  return topics.map((i) => {
    return <Chip key={i} size='small' avatar={<Avatar alt="Natacha" src="/images/github-topic-tag-logo.png" />} className={classes.chipStyle} label={i} />;
  });
};

/**
 *
 * @param {*} props
 */
export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card data-cy='project-card' variant='outlined'>
      <CardContent>
        <Grid container>
          <Grid item container xs={12} >
            {/* Project Title, Watch and Star buttons */}
            <Grid container>
              {/* Project Logo */}
              <Grid>
                <a href={props.organizationUrl}>
                  <img alt='logo' style={{ display: 'block', margin: 'auto' }} src={props.organizationAvatarUrl} width='72px' />
                </a>
              </Grid>
              <Grid style={{ marginTop: '25px' }}>
                <a data-cy='project-url' href={props.projectUrl} style={{ color: 'black' }}>
                  <span>
                    <u>
                      {props.ownerName}/<b>{props.projectName}</b>
                    </u>
                  </span>
                </a>
              </Grid>
              <Grid item xs={0} />
              <Grid item xs={12} sm={6} style={{ marginLeft: '10px', marginTop: '25px' }}>
                <Chip
                  variant="outlined"
                  size="small"
                  avatar={<Avatar alt="Natacha" src="/images/GithubEye.jpg" />}
                  label={"Watch " + props.watchers}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  avatar={<Avatar alt="Natacha" src="/images/GithubStar.jpg" />}
                  label={"Star " +props.stargazers}
                />
              </Grid>
            </Grid>
            {/* Description & Project Link */}
            <Grid container>
              <Grid item xs={12} sm={12} style={{ paddingTop: '10px' }}>
                <span>{props.projectDescription}</span>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: '10px' }}>
                <span className='project' style={{ verticalAlign: 'middle' }}>
                  <img alt='link' src='/images/link.svg' /> <a href={props.homepage}>{props.homepage}</a>
                </span>
              </Grid>
              {/* Update & Issue Count */}
              <Grid container style={{ paddingTop: '10px' }}>
                <Grid item xs={12} sm={4}>
                  <span>Updated {props.lastUpdate} day(s) ago</span>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <span className={classes.issueStyles}>
                    <a href={props.issuesUrl}>
                      <b>{props.issueCount}</b> Open Issues
                    </a>
                  </span>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} style={{ paddingTop: '10px' }}>
                <span>
                  <b>Affiliations Topic Tags:</b> {renderAffiliationsTopicsTags(props.projectTags, classes)}
                </span>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: '10px' }}>
                <span>
                  <b>Programming Language(s):</b> {renderLanguageChip(props.projectLanguage, classes)}{' '}
                </span>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: '10px' }}>
                <span>
                  <b>Topic Tags:</b> {renderTopicTags(props.topics,classes)}
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
