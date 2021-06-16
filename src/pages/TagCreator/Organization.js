
import React,{ useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles'
import AddOrgForm from './AddOrgForm';

const useStyles = makeStyles((theme) => ({
  gridStyle:{
    paddingRight: '8px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '8px',
    },
  },
  typoStyle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  tStyle: {
    fontWeight:'500',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.875rem',
    },
  },
}))

export const OrganizationSelectorSection = ({ orgName, setOrgName, options }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options);

  const loading = open && options.length === 0;

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleNewOrg = (org) => {
    setCurrentOptions([org.name, ...currentOptions]);
  };

  return (
    <>
      <Grid item xs={12} sm={12}>
        <p>Which Organization?</p>
        <Autocomplete
          id="organization"
          style={{ width: '100%' }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => option === value }
          getOptionLabel={(option) => option}
          options={currentOptions}
          autoComplete
          loading={loading}
          value={orgName}
          onChange={(e, v) => setOrgName(v)}
          renderInput={(params) =>(
            <TextField {...params}
              required
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          Don’t see your organization? Click <Link onClick={() => setModalOpen(true)}><b>here</b></Link> to add it.
        </Typography>
      </Grid>
      <Modal open={modalOpen}>
        <DialogContent>
          <AddOrgForm onClose={handleModalClose} onNewOrg={handleNewOrg}/>
        </DialogContent>
      </Modal>
    </>
  )
}

export const OrgNameSection = ({ setDisplayState,orgName,linkStyles }) => {
  const classes = useStyles()
  const handleChangeOrg = () => {
    setDisplayState('')
  }
  return (
    <Grid container direction="row" alignItems="center" style={{ padding: '48px 0px 32px 0px' }}>
      <Grid item xs={12} sm={3} className={classes.gridStyle} >
        <Typography variant='h6' className={classes.tStyle} >Affliated Organization:</Typography>
      </Grid>
      {orgName ?
        <Grid item xs={10} sm={7}>
          <Typography variant='h3' className={classes.typoStyle}>{orgName}</Typography>
        </Grid> : <Grid item xs={7} style={{ paddingRight: '50px' }}>
          <Typography variant='h3'>Unaffliated</Typography>
        </Grid>}
      <Grid item xs={2} >
        <Link id="change-org" component="button" variant='body1' onClick={handleChangeOrg} underline='always' style={linkStyles} >change</Link>
      </Grid>
    </Grid>
  )
}

export const OrgChange = ({ value,orgName,setOrgName, setOrgTags, changeValue, setDisplayState }) => {
  const [orgNameError, setOrgNameError] = useState('');
  const handleChangeOrg = () => {
    if (changeValue === 'TopicTag') {
      setDisplayState('TopicTag')
    }
    else if (changeValue === 'GenerateTags') {
      setDisplayState('GenerateTags')
    }
    else if (changeValue === 'CopyPasteTags') {
      setDisplayState('CopyPasteTags')
    }
    else {
      setDisplayState('ProjectUrl')
    }
  }
  // eslint-disable-next-line complexity
  const handleSubmitOrg = () => {
    const topics = []
    if (value === 'yes' && orgName === ""){
      setOrgNameError(<p style={{ color: 'red' }}> Please select org name</p>)
    }
    else if (value === 'yes' && orgName !== "") {
      let og = orgName.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      og = og.replace(/ /g,"-").toLowerCase()
      axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/${og}`,)
        .then(res => {
          const po = res.data.parents
          if (res.data.org_tag !== "") {
            topics.push(res.data.org_tag)
          }
          if (po.length !== 0){
            po.map(p =>(p.org_tag !== "") ? topics.push(p.org_tag) : null)
          }
          setOrgTags(topics)
        }).catch(e => {
          /*
           * This should store the error state.
           * Component should check for error state and resolve the correct response.
           */
          console.log(e);
        })
      handleChangeOrg()
    }
    else if (value === 'no' && orgName === ''){
      handleChangeOrg()
    }
  }
  return (
    <Grid item xs={12} sm={12}>
      {orgNameError}
      <Grid align='center' style={{ padding: '20px' }}><Button onClick={handleSubmitOrg} id='submitButton'>Submit Organization</Button></Grid>
    </Grid>
  )
}
