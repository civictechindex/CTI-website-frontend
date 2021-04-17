import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  MuiTypography: {
    root: {
      '& a': {
        fontWeight: 400,
        underline:'always',
        color: '#0D99C6',
      },
      '& a:link': {
        color: '#0D99C6',
      },
    },
  },

}))

export const ProjectRepositorySection = ({ repositoryUrl,setDisplayState,linkStyles }) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center" spacing={3} style={{ padding:'10px' }}>
      <Grid item>
        <Typography variant='body1'>Project Repository URL:</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'><Link href={repositoryUrl} >{repositoryUrl}</Link></Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' classes={{ root: classes.root }}>
          <Link onClick={()=>setDisplayState('ProjectUrl')} underline='always' style={linkStyles} >change</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}


export const ProjectRepositoryInput = ({ handleEnter, repositoryUrl, setRepositoryUrl, topicSearchError, handleSubmit }) => {
  return (
    <>
      <Grid data-cy='grid-repository' item xs={12} sm={12}>
        <p>Project Repository URL</p>
        <p style={{ fontSize: '10px' }}></p>
        <TextField id="repository-url" onKeyPress={handleEnter} value={repositoryUrl} onInput={e => setRepositoryUrl(e.target.value)} variant="outlined" placeholder="https://github.com/hackforla/example" fullWidth />
      </Grid>
      <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
        {topicSearchError}
        <Grid align='center'><Button onClick={handleSubmit} id='projectButton'>Find Project</Button></Grid>
      </Grid>
    </>
  )
}
