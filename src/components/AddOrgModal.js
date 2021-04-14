import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CountrySelect from './CountrySelect';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import HelpIcon from '@material-ui/icons/Help';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  AddOrgStyle: {
    backgroundColor: theme.palette.background.primary,
    backgroundImage: 'url(/images/world-view.png)',
    backgroundRepeat: 'no-repeat',
    padding: '40px 0 71px 0',
    alignItems: 'center',
    textAlign: 'left',
  '& h1': {
    color: theme.palette.text.bright,
    fontSize: '36px',
    padding: '0px 0px 0px 0px',
    margin: '0px',
  },
  '& h2': {
    color: theme.palette.text.secondary,
    fontSize: '24px',
    padding: '40px 0px 16px 0px',
    margin: '0px',
  },
  '& h3': {
    color: theme.palette.text.secondary,
    fontSize: '20px',
    padding: '8px 0px 8px 0px',
    margin: '0px',
  },
  '& label': {
    fontSize: '30px',
    color: theme.palette.text.secondary,
  },
  maxWidth: '905px',
},
}));

export default function AddOrgModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        Add Organization
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{ overflow:'scroll' }}
      >
        <Grid container style={{ justifyContent: 'center' }} className={classes.AddOrgStyle}>
          <Grid item xs={1} />
          <Grid 
            item xs={10}
            container
            direction='column'
          >

            <h1 style={{ textAlign: 'center' }}>Add Organization to the Civic Tech Index</h1>
            
            <Grid item xs={12}>
              <h2>Organization Detail</h2>
              <h3>Organization Name:*</h3>
              <TextField id='organization-name'></TextField>
              <h3>Parent Organization:</h3>
              <TextField id='parent-organization'></TextField>
            </Grid>

            <Grid item xs={12}>
              <h2>Project URL</h2>
              <h3>Website URL:*</h3>
              <TextField id='project-website-url'></TextField>
              <h3>Github URL:*</h3>
              <TextField id='project-github-url'></TextField>
            </Grid>

            <Grid item xs={12}>
              <h2>Social Media URL</h2>
              <h3>Facebook URL:</h3>
              <TextField id='facebook-url'></TextField>
              <h3>Twitter URL:</h3>
              <TextField id='twitter-url'></TextField>
              <h3>MeetUp URL:</h3>
              <TextField id='meetup-url'></TextField>
            </Grid>
            
            <Grid item xs={12}>
              <h2>Location</h2>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={4}>
                <h3>City</h3>
                <TextField id='location-city'></TextField>
              </Grid>
              <Grid item xs={3}>
                <h3>State/Prov/Co</h3>
                <TextField id='location-state-prov-co'></TextField>
              </Grid>
              <Grid item xs={5}>
                <h3>Country:</h3>
                <CountrySelect  style={{ width: '100%' }}/>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <h2>Github Tags</h2>
              <TextField 
                id='github-tags'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <HelpIcon style={{ blend: 'pass-through' }}/>
                    </InputAdornment>
                  )
                }}
              >
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <h2>Organization Email*</h2>
              <TextField id='organization-email'></TextField>
            </Grid>

            {/* //Buttons */}
            <Grid container justify='center' alignItems='center' style={{ height: '100px' }}>
              <Grid style={{ textAlign: 'center', padding: '40px 0px 0px 0px' }}>
                <Button style={{ width: '270px', padding: '10px', margin: '12px' }} variant='contained' color='default'>
                  Cancel
                </Button>
              </Grid>
              <Grid style={{ textAlign: 'center', padding: '40px 0px 0px 0px' }}>
                <Button style={{ width: '270px', padding: '10px', margin: '12px' }} variant='contained' color='secondary'>
                  Save
                </Button>
              </Grid>    
            </Grid>

          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Modal>
    </div>
  );
}