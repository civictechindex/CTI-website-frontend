import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CountrySelect from '../components/CountrySelect';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import HelpIcon from '@material-ui/icons/Help';
import makeStyles from '@material-ui/core/styles/makeStyles'


const useStyles = makeStyles(theme => ({
  card245: {
    backgroundColor: theme.palette.background.primary,
    backgroundImage: 'url(/images/world-view.png)',
    backgroundRepeat: 'no-repeat',
    padding: '40px 0 71px 0',
    alignItems: 'center',
    textAlign: 'left',
  '& h1': {
    color: theme.palette.text.bright,
    fontSize: '36px',
    padding: '0',
    margin: '40',
  },
  '& h2': {
    color: theme.palette.text.secondary,
    fontSize: '24px',
    padding: "0 ",
    margin: "8",
  },
  '& h3': {
    color: theme.palette.text.secondary,
    fontSize: '20px',
    padding: "0 ",
    margin: "8",
  },
  '& label': {
    fontSize: '30px',
    color: theme.palette.text.secondary,
  },
  maxWidth: "905px",
},
}));

function AddOrganization() {
  const classes = useStyles();
  return (
    <Grid container style={{ justifyContent: "center" }} item xs={12}>
      <Grid 
        className={classes.card245}
        container 
        item
        spacing={2} 
        direction="column"
      >
        <Grid container item xs={10} style={{ textAlign: "center" }}>
          <h1>Add Organization to the Civic Tech Index</h1>
        </Grid>
        <Grid container item xs={10} direction="column">
          <h2>Organization Detail</h2>
          <h3>Organization Name:*</h3>
          <TextField id="filled-basic"></TextField>
          <h3>Parent Organization:</h3>
          <TextField id="filled-basic"></TextField>
        </Grid>
        <Grid container item xs={10} direction="column">
          <h2>Project URL</h2>
          <h3>Website URL:*</h3>
          <TextField id="filled-basic"></TextField>
          <h3>Github URL:*</h3>
          <TextField id="filled-basic"></TextField>
        </Grid>
        <Grid container item xs={10} direction="column">
          <h2>Social Media URL</h2>
          <h3>Facebook URL:</h3>
          <TextField id="filled-basic"></TextField>
          <h3>Twitter URL:</h3>
          <TextField id="filled-basic"></TextField>
          <h3>MeetUp URL:</h3>
          <TextField id="filled-basic"></TextField>
        </Grid>
        <Grid container item xs={10}>
          <h2>Location</h2>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid item xs={3} direction="column">
            <h3>City</h3>
            <TextField id="filled-basic"></TextField>
          </Grid>
          <Grid item xs={3} direction="column">
            <h3>State/Prov/Co</h3>
            <TextField id="filled-basic"></TextField>
          </Grid>
          <Grid item xs={4} direction="column">
            <h3>Country:</h3>
            <CountrySelect></CountrySelect>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid container item xs={10} direction="column">
          <h2>Github Tags</h2>
          <TextField 
            id="filled-basic"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <HelpIcon style={{ blend: "pass-through" }}/>
                </InputAdornment>
              )
            }}
          >
          </TextField>
        </Grid>
        <Grid container item xs={10} direction="column">
          <h2>Organization Email*</h2>
          <TextField id="filled-basic"></TextField>
        </Grid>
        {/* //Buttons */}
        <Grid container justify="center" alignItems="center" style={{ height: "100px" }}>
          <Grid style={{ textAlign: "center" }}>
            <Button style={{ width: "270px", padding: "10px", margin: "12px" }} variant="contained" color="default">
              Cancel
            </Button>
          </Grid>
          <Grid style={{ textAlign: "center" }}>
            <Button style={{ width: "270px", padding: "10px", margin: "12px" }} variant="contained" color="secondary">
              Save
            </Button>
          </Grid>    
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AddOrganization;