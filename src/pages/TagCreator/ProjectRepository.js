import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  typoStyle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
}))

export const ProjectRepositorySection = ({ repositoryUrl,setDisplayState,linkStyles }) => {
  const classes = useStyles()
  return (
    <Grid container direction="row" alignItems="center" spacing={3} style={{ padding:'10px' }}>
      <Grid item xs={12} sm={2}>
        <Typography variant='body1' className={classes.typoStyle} >Project Repository URL:</Typography>
      </Grid>
      <Grid item data-cy='grid-repository-url' xs={10} sm={6}>
        <Link variant='body1' className={classes.typoStyle} href={repositoryUrl} >{repositoryUrl}</Link>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Link id="change-url" component="button" variant='body1' onClick={()=>setDisplayState('ProjectUrl')} underline='always' style={linkStyles} >change</Link>
      </Grid>
    </Grid>
  )
}

export const ProjectRepositoryInput = ({ handleEnter, repositoryUrl,setRepositoryUrl, topicSearchError, handleSubmit }) => {
  return (
    <>
      <Grid data-cy='grid-repository' item xs={12} sm={12}>
        <p>Project Repository URL</p>
        <p style={{ fontSize: '10px' }}></p>
        <TextField id="repository-url" onKeyPress={handleEnter} value={repositoryUrl} onChange={e => setRepositoryUrl(e.target.value)} variant="outlined" placeholder="https://github.com/hackforla/example" fullWidth />
      </Grid>
      <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
        {topicSearchError}
        <Grid align='center'><Button onClick={handleSubmit} id='projectButton'>Find Project</Button></Grid>
      </Grid>
    </>
  )
}

