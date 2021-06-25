import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import ParentSelect from './ParentSelect';

const StepOne = (props) => {
  const classes = useStyles();
  const githubTagApiErr = props.apiErrors.org_tag;
  const githubUrlApiErr = props.apiErrors.github_url;
  const orgEmailApiErr = props.apiErrors.organization_email;
  const orgNameApiErr = props.apiErrors.name;
  const websiteUrlApiErr = props.apiErrors.website_url;

  return (
    <>
      <Box className={classes.progress}>
        <Typography variant='subtitle1'>Project Information</Typography>
        <Typography variant='subtitle1'><b>1</b>/2</Typography>
      </Box>
      <LinearProgress variant='determinate' color='secondary' value={50} />
      <Typography variant='h5' className={classes.heading}>Organization Detail</Typography>
      <Typography variant='subtitle1' className={classes.label}>*Organization Email:</Typography>
      <TextField
        type='email'
        placeholder='Name@example.com'
        error={orgEmailApiErr}
        helperText={orgEmailApiErr}
        value={props.orgEmail}
        onChange={(event) => {
          props.onOrgEmail(event.target.value);
          props.setApiErrors({ ...props.apiErrors, organization_email: '' })
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>*Organization Name:</Typography>
      <TextField
        error={orgNameApiErr}
        helperText={orgNameApiErr}
        value={props.orgName}
        onChange={(event) => {
          props.onOrgName(event.target.value);
          props.setApiErrors({ ...props.apiErrors, name: '' });
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>Parent Organization ID:</Typography>
      <ParentSelect orgList={props.parentOrgList} onChange={props.onParentOrgChange}/>
      <Typography variant='h5' className={classes.heading}>Organization URL</Typography>
      <Typography variant='subtitle1' className={classes.label}>*Website URL:</Typography>
      <TextField
        placeholder='http://example.com...'
        error={websiteUrlApiErr}
        helperText={websiteUrlApiErr}
        value={props.websiteUrl}
        onChange={(event) => {
          props.onWebsiteUrl(event.target.value);
          props.setApiErrors({ ...props.apiErrors, website_url: '' });
        }}
      />
      <Typography variant='subtitle1' className={classes.label}>*Github URL:</Typography>
      <TextField
        placeholder='https://github.com/example...'
        error={githubUrlApiErr}
        helperText={githubUrlApiErr}
        value={props.githubUrl}
        onChange={(event) => {
          props.onGithubUrl(event.target.value);
          props.setApiErrors({ ...props.apiErrors, github_url: '' });
        }}
      />
      <Typography variant='h5' className={classes.heading}>Your GitHub Organization Tags</Typography>
      <Typography variant='subtitle2' className={classes.info}>
        This is the GitHub tag that your organization uses such as <br />
        &quot;code-for-america&quot;, &quot;open-oakland&quot; or &quot;hack4la&quot;.
      </Typography>
      <TextField
        placeholder='open-oakland'
        error={githubTagApiErr}
        helperText={githubTagApiErr}
        value={props.githubTag}
        onChange={(event) => {
          props.onGithubTag(event.target.value);
          props.setApiErrors({ ...props.apiErrors, org_tag: '' });
        }}
      />
      <Box className={classes.buttons}>
        <Button variant='contained' color='default' onClick={props.onCancel}>Cancel</Button>
        <Button
          variant='contained'
          color='secondary'
          disabled={!(props.orgEmail && props.orgName && props.githubTag && props.websiteUrl && props.githubUrl)}
          onClick={props.onNext}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default StepOne;
