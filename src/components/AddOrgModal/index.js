import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CountrySelect from './CountrySelect';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import HelpIcon from '@material-ui/icons/Help';
import Fade from '@material-ui/core/Fade';

const AddOrgModal = ({ open, onClose }) => {
  const classes = useStyles();
  const [orgProps, setOrgProps] = useState({});
  const handleClose = (newOrg) => {
    onClose(newOrg);
  };
  const handleSave = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/organizations/`,
        orgProps
      );
      handleClose(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleCountryChange = (country) => {
    setOrgProps({ ...orgProps, country: country });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const isValid = formValidation();
    setOrgProps({ ...orgProps, [name]: value });
  };

  const [orgEmail, setOrgEmail] = useState();
  const [orgEmailErr, setOrgEmailErr] = useState({});

  const formValidation = () => {
    const orgEmailErr = {};
    let isValid = true;

    if (orgEmail.trim().length < 5) {
      orgEmailErr.isInvalid = 'Organization email is invalid.';
      isValid = false;
    }

    setOrgEmailErr(orgEmail);
    return isValid;
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='transition-modal-title'
        className={classes.modal}
      >
        <Fade in={open}>
          <Grid
            container
            style={{ justifyContent: 'center', overflow: 'scroll', height: '100%' }}
            className={classes.AddOrgStyle}
          >
            <Grid item xs={1} />
            <Grid item xs={10} container direction='column'>
              <Typography variant='h1' style={{ textAlign: 'center' }}>
                Add Organization to the Civic Tech Index
              </Typography>

              <Grid item xs={12}>
                <Typography variant='h2'>Organization Detail</Typography>
                <Typography variant='h3'>Organization Name:*</Typography>
                <TextField
                  size='small'
                  id='organization-name'
                  name='name'
                  onChange={handleInputChange}
                ></TextField>
                <Typography variant='h3'>Parent Organization:</Typography>
                <TextField
                  size='small'
                  id='parent-organization'
                  name='parent_organization'
                  onChange={handleInputChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h2'>Project URL</Typography>
                <Typography variant='h3'>Website URL:*</Typography>
                <TextField
                  size='small'
                  id='project-website-url'
                  name='website_url'
                  onChange={handleInputChange}
                ></TextField>
                <Typography variant='h3'>Github URL:*</Typography>
                <TextField
                  size='small'
                  id='project-github-url'
                  name='github_url'
                  onChange={handleInputChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h2'>Social Media URL</Typography>
                <Typography variant='h3'>Facebook URL:</Typography>
                <TextField
                  size='small'
                  id='facebook-url'
                  name='facebook_url'
                  onChange={handleInputChange}
                ></TextField>
                <Typography variant='h3'>Twitter URL:</Typography>
                <TextField
                  size='small'
                  id='twitter-url'
                  name='twitter_url'
                  onChange={handleInputChange}
                ></TextField>
                <Typography variant='h3'>MeetUp URL:</Typography>
                <TextField
                  size='small'
                  id='meetup-url'
                  name='meetup_url'
                  onChange={handleInputChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h2'>Location</Typography>
              </Grid>
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant='h3'>City</Typography>
                  <TextField
                    size='small'
                    id='location-city'
                    name='city'
                    onChange={handleInputChange}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant='h3'>State/Prov./Co.</Typography>
                  <TextField
                    size='small'
                    id='location-state-prov-co'
                    name='state'
                    onChange={handleInputChange}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Typography variant='h3'>Country:</Typography>
                  <CountrySelect style={{ width: '100%' }} onChange={handleCountryChange} />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h2'>Github Tags</Typography>
                <TextField
                  size='small'
                  id='github-tags'
                  name='org_tag'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <HelpIcon style={{ blend: 'pass-through' }} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h2'>Organization Email*</Typography>
                <TextField
                  size='small'
                  id='organization-email'
                  name='orgEmail'
                  onChange={handleInputChange}
                ></TextField>
                {Object.keys(orgEmailErr).map((key) => {
                  return <div style={{ color: 'red' }}>{orgEmailErr[key]}</div>;
                })}
              </Grid>

              {/* //Buttons */}
              <Grid
                container
                justify='center'
                alignItems='center'
                style={{ height: '100px', padding: '40px 0px' }}
              >
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
            <Grid item xs={1} />
          </Grid>
        </Fade>
      </Modal>
    </>
  );
};

export default AddOrgModal;
