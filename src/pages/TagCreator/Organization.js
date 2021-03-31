import React, { useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import orgs from './orgs.json';
import Link from '@material-ui/core/Link';


export const OrgNameSection = ({ value,setDisplayState,orgName,setOrgName }) => {
  useEffect(() => {
    if (value === 'no'){
      setOrgName('')
    }
  });
  const handleChangeOrg = () =>{
    if (value === 'yes'){
      setDisplayState('RadioYes')
    }
    if (value === 'no') {
      setDisplayState('InitialState')
    }
  }
  return (
    <Grid container  direction="row" alignItems="center"  spacing={3} style={{ padding:'10px' }}>
      <Grid item>
        <Typography variant='body1'>Affliated Organization:</Typography>
      </Grid>
      {orgName ?
        <Grid item>
          <Typography variant='h3'>{orgName}</Typography>
        </Grid>:<Grid item style={{ paddingRight:'50px' }}>
          <Typography variant='h3'>Unaffliated</Typography>
        </Grid>}
      <Grid item>
        <Typography variant='body1'>
          <Link onClick={handleChangeOrg} >change</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}


export const OrganizationSelectorSection = ({ orgName,setOrgName,setDisplayState,changeValue,setChangeValue,setOrgTags,handleChangeValue }) => {
  const handleSubmitOrg = () =>{
    const topics=[]
    axios.get('https://test-civictechindexadmin.herokuapp.com/api/organizations/'+orgName,)
      .then(res => {
        let po = res.data.parent_organization
        if (res.data.org_tag !== ""){
          topics.push(res.data.org_tag)
        }
        while (po!=null){
          topics.push(po.org_tag)
          po =po.parent_organization
        }
        setOrgTags(topics)
      }).catch(e => {
        /*
         * This should store the error state.
         * Component should check for error state and resolve the correct response.
         */
        console.log(e);
      })
    handleChangeValue()
  }
  return (
    <>
      <Grid item xs={12} sm={12}>
        <p>Which Organization?</p>
        <Autocomplete
          id="organization"
          options={orgs}
          onChange={(e, v) => setOrgName(v)}
          getOptionLabel={(option) => option}
          style={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
      </Grid>
      <Grid item>
        <Typography variant='body1'>Don’t see your organization? Click <Link >here</Link> to add it. </Typography>
      </Grid>
      <Grid item>
        <Grid align='center' style={{ padding:'20px' }}><Button onClick={handleSubmitOrg} id='submitButton'>Submit Organization</Button></Grid>
      </Grid>
    </>
  )
}

export const OrgChange = ({ setDisplayState,changeValue }) =>{
  const handleSubmitOrgChange = () =>{
    if (changeValue === 'TopicTag'){
      setDisplayState('TopicTag')
    }
    else if (changeValue === 'GenerateTags'){
      setDisplayState('GenerateTags')
    }
    else if (changeValue === 'CopyPasteTags'){
      setDisplayState('CopyPasteTags')
    }
    else {
      setDisplayState('SubmitOrg')
    }
  }
  return (
    <Grid item>
      <Grid align='center' style={{ padding:'20px' }}><Button onClick={handleSubmitOrgChange} id='submitButton'>Submit Organization</Button></Grid>
    </Grid>
  )
}
