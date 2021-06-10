import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const StepOne = (props) => {
  return (
    <>
      <Box style={{ justifyContent: 'center' }}>
        <Container style={{ maxWidth: '600px' }}>
          <Grid container>
            <Grid item style={{ textAlign: 'left', width: '50%', padding: '47px 0 0 0' }}>
              <Typography variant='subtitle1'>Project Information</Typography>
            </Grid>
            <Grid item style={{ textAlign: 'right', width: '50%', padding: '47px 0 0 0' }}>
              <Typography variant='subtitle1' style={{ color: '#004364' }}>
                <b>1</b>/2
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction='column'>
            <LinearProgress variant='determinate' color='secondary' value={50} />
            <Typography variant='h5' style={{ color: '#004364', padding: '27px 0 0 0' }}>
              Organization Detail
            </Typography>
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Organization Email
            </Typography>
            <TextField
              placeholder='Name@example.com'
              name='orgEmail'
              value={props.orgEmail}
              onChange={(event) => {
                props.onOrgEmail(event.target.value);
              }}
            />
            {/* {Object.keys(props.orgEmailErr).map((key) => {
              return <div style={{ color: 'red' }}>{props.orgEmailErr[key]}</div>;
            })} */}
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Organization Name:
            </Typography>
            <TextField
              name='orgName'
              value={props.orgName}
              onChange={(event) => {
                props.onOrgName(event.target.value);
              }}
            />
            {/* {Object.keys(props.orgNameErr).map((key) => {
              return <div style={{ color: 'red' }}>{props.orgNameErr[key]}</div>;
            })} */}
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Parent Organization:
            </Typography>
            <TextField />
            <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
              Organization URL
            </Typography>
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Website URL:*
            </Typography>
            <TextField
              name='websiteURL'
              placeholder='http://example.com...'
              value={props.websiteURL}
              onChange={(event) => {
                props.onWebsiteURL(event.target.value);
              }}
            />
            {/* {Object.keys(props.websiteURLErr).map((key) => {
              return <div style={{ color: 'red' }}>{props.websiteURLErr[key]}</div>;
            })} */}
            <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
              Github URL:*
            </Typography>
            <TextField
              name='githubURL'
              placeholder='http://github.com/example...'
              value={props.githubURL}
              onChange={(event) => {
                props.onGithubURL(event.target.value);
              }}
            />
            {/* {Object.keys(props.githubURLErr).map((key) => {
              return <div style={{ color: 'red' }}>{props.githubURLErr[key]}</div>;
            })} */}
            <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
              Your GitHub Organization Tags
            </Typography>
            <Typography variant='subtitle2' style={{ fontStyle: 'italic' }}>
              This is the GitHub tag that your organization uses such as <br />
              "code-for-america", "open-oakland" or "hack4la".
            </Typography>
            <TextField
              name='githubTag'
              placeholder='open-oakland'
              value={props.githubTag}
              onChange={(event) => {
                props.onGithubTag(event.target.value);
              }}
            />
            {/* {Object.keys(props.githubTagErr).map((key) => {
              return <div style={{ color: 'red' }}>{props.githubTagErr[key]}</div>;
            })} */}
          </Grid>
          {/* //Buttons */}
          <Grid container justify='center' alignItems='center' style={{ padding: '40px 0 60px 0' }}>
            <Grid item style={{ textAlign: 'center' }}>
              <Button
                style={{ width: '250px', padding: '10px', margin: '12px' }}
                variant='contained'
                color='default'
                href='/tag-generator'
              >
                Cancel
              </Button>
            </Grid>
            <Grid item style={{ textAlign: 'center' }}>
              <Button
                style={{ width: '250px', padding: '10px', margin: '12px' }}
                variant='contained'
                color='secondary'
                // onClick={onEnter}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default StepOne;
