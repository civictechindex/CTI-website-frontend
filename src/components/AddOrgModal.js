import React from 'react';
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
    <>
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

            <Typography variant='h1' style={{ textAlign: 'center' }}>Add Organization to the Civic Tech Index</Typography>
            
            <Grid item xs={12}>
              <Typography variant='h2'>Organization Detail</Typography>
              <Typography variant='h3'>Organization Name:*</Typography>
              <TextField id='organization-name'></TextField>
              <Typography variant='h3'>Parent Organization:</Typography>
              <TextField id='parent-organization'></TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h2'>Project URL</Typography>
              <Typography variant='h3'>Website URL:*</Typography>
              <TextField id='project-website-url'></TextField>
              <Typography variant='h3'>Github URL:*</Typography>
              <TextField id='project-github-url'></TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h2'>Social Media URL</Typography>
              <Typography variant='h3'>Facebook URL:</Typography>
              <TextField id='facebook-url'></TextField>
              <Typography variant='h3'>Twitter URL:</Typography>
              <TextField id='twitter-url'></TextField>
              <Typography variant='h3'>MeetUp URL:</Typography>
              <TextField id='meetup-url'></TextField>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant='h2'>Location</Typography>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant='h3'>City</Typography>
                <TextField id='location-city'></TextField>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant='h3'>State/Prov./Co.</Typography>
                <TextField id='location-state-prov-co'></TextField>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant='h3'>Country:</Typography>
                <CountrySelect  style={{ width: '100%' }}/>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h2'>Github Tags</Typography>
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
              <Typography variant='h2'>Organization Email*</Typography>
              <TextField id='organization-email'></TextField>
            </Grid>

            {/* //Buttons */}
            <Grid container justify='center' alignItems='center' style={{ height: '100px', padding: '40px 0px' }}>
              <Grid style={{ textAlign: 'center' }}>
                <Button style={{ width: '270px', padding: '10px', margin: '12px' }} variant='contained' color='default'>
                  Cancel
                </Button>
              </Grid>
              <Grid style={{ textAlign: 'center' }}>
                <Button style={{ width: '270px', padding: '10px', margin: '12px' }} variant='contained' color='secondary'>
                  Save
                </Button>
              </Grid>    
            </Grid>

          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Modal>
    </>
  );
}