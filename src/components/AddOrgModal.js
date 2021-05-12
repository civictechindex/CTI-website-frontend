import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CountrySelect from './CountrySelect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import HelpIcon from '@material-ui/icons/Help';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  AddOrgStyle: {
    backgroundColor: theme.palette.background.primary,
    backgroundImage: 'url(/images/world-view.png)',
    backgroundRepeat: 'no-repeat',
    padding: '40px 0 71px 0',
    alignItems: 'center',
    textAlign: 'left',
  '& input': {
    [theme.breakpoints.down('md')]: {
      height: '1px',
    },
    [theme.breakpoints.up('md')]: {
      height: '5px',
    },
  },
  '& h1': {
    color: theme.palette.text.bright,
    padding: '0px',
    margin: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
    },
  },
  '& h2': {
    color: theme.palette.text.secondary,
    margin: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      padding: '20px 0px 4px 0px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      padding: '30px 0px 10px 0px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
      padding: '40px 0px 16px 0px',
    },
  },
  '& h3': {
    color: theme.palette.text.secondary,
    margin: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      padding: '4px 0px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '17px',
      padding: '6px 0px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
      padding: '8px 0px',
    },
  },
  '& label': {
    fontSize: '30px',
    color: theme.palette.text.secondary,
  },
  maxWidth: '905px',
},
}));

const AddOrgModal = ({ open, onClose }) => {
  const classes = useStyles();
  const [orgProps, setOrgProps] = useState({});

  const handleClose = (newOrg) => {
    onClose(newOrg)
  }

  const handleSave = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/organizations/`, orgProps);
      handleClose(response.data);
    } catch(error) {
      console.log(error.response);
    }
  }

  const handleCountryChange = (country) => {
    setOrgProps({ ...orgProps, country: country })
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrgProps({ ...orgProps, [name]: value });
  };

  return (
    <>
      <Modal
        open={open}
        style={{ overflow:'scroll' }}
      >
        <Grid container style={{ justifyContent: 'center' }} className={classes.AddOrgStyle}>
          <Grid item xs={1} />
          <Grid 
            item xs={10}
            container
            direction='column'
          >

            <Typography variant='h1' style={{ textAlign: 'center' }}>Add Organization to the Civic Tech Index</Typography>
            
            <Grid item xs={12}>
              <Typography variant='h2'>Organization Detail</Typography>
              <Typography variant='h3'>Organization Name:*</Typography>
              <TextField id='organization-name' name='name' onChange={handleInputChange}></TextField>
              <Typography variant='h3'>Parent Organization:</Typography>
              <TextField id='parent-organization' name='parent_organization' onChange={handleInputChange}></TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h2'>Project URL</Typography>
              <Typography variant='h3'>Website URL:*</Typography>
              <TextField id='project-website-url' name='website_url' onChange={handleInputChange}></TextField>
              <Typography variant='h3'>Github URL:*</Typography>
              <TextField id='project-github-url' name='github_url' onChange={handleInputChange}></TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h2'>Social Media URL</Typography>
              <Typography variant='h3'>Facebook URL:</Typography>
              <TextField id='facebook-url' name='facebook_url' onChange={handleInputChange}></TextField>
              <Typography variant='h3'>Twitter URL:</Typography>
              <TextField id='twitter-url' name='twitter_url' onChange={handleInputChange}></TextField>
              <Typography variant='h3'>MeetUp URL:</Typography>
              <TextField id='meetup-url' name='meetup_url' onChange={handleInputChange}></TextField>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant='h2'>Location</Typography>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant='h3'>City</Typography>
                <TextField id='location-city' name='city' onChange={handleInputChange}></TextField>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant='h3'>State/Prov./Co.</Typography>
                <TextField id='location-state-prov-co' name='state' onChange={handleInputChange}></TextField>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant='h3'>Country:</Typography>
                <CountrySelect style={{ width: '100%' }} onChange={handleCountryChange}/>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h2'>Github Tags</Typography>
              <TextField
              id='github-tags'
              name='org_tag'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <HelpIcon style={{ blend: 'pass-through' }}/>
                  </InputAdornment>
                ),
              }}
              onChange={handleInputChange}
            >
            </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h2'>Organization Email*</Typography>
              <TextField id='organization-email' name='organization_email' onChange={handleInputChange}></TextField>
            </Grid>

            {/* //Buttons */}
            <Grid container justify='center' alignItems='center' style={{ height: '100px', padding: '40px 0px' }}>
              <Grid style={{ textAlign: 'center' }}>
                <Button
                  style={{ width: '270px', padding: '10px', margin: '12px' }}
                  variant='contained'
                  color='default'
                  onClick={() => handleClose(null)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid style={{ textAlign: 'center' }}>
                <Button
                  style={{ width: '270px', padding: '10px', margin: '12px' }}
                  variant='contained'
                  color='secondary'
                  onClick={() => handleSave()}
                >
                  Save
                </Button>
              </Grid>    
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default AddOrgModal;
