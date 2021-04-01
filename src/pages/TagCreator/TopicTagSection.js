import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import TopicTag from './TopicTag';
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ChipInput from "material-ui-chip-input";

const useStyles = makeStyles((theme) => ({
  chipInputRoot: {
    border: 'borderColor: theme.palette.outline.gray',
    borderRadius: 24,
    cursor: 'pointer',
    height: 48,
    margin: '0 8px 8px 0',
  },
  chipInputInput:{
    color:'textSecondary',
  },
  chip: {
    backgroundColor: theme.palette.background.default,
  },
}))

const TopicTags = ({ topicNames,variant }) => {
  const topicArray = topicNames || []
  return topicArray.map((name, key) => <TopicTag key={key} label={name} variant={variant} />);
}


export const CurrentTopicTagSection = ({ names, repositoryName }) => {
  return (
    <>
      {names.length !== 0 ?<Grid>
        <Grid style={{ padding:'20px' }}>
          <Typography variant='body1'>Current topic tags on {repositoryName}:</Typography>
        </Grid>
        <Grid data-cy='current-tags' style={{ padding:'30px' }}>
          <TopicTags topicNames={names} variant='generated' />
        </Grid> </Grid>: <Grid item md={8} style={{ margin:'auto', padding:'30px' }}>
        <Typography variant='h5' style={{ textAlign:'center' }}>There are currently no topic tags in your project’s repository. Add tags to increase your project visibility.</Typography>
      </Grid> }
      <Grid>
        <Divider />
      </Grid>
    </>
  )
}

export const AddTagsQuestion = ({ resetForm,setDisplayState,setChangeValue }) =>{
  const [addTagValue, setAddTagValue] = useState('');
  const handleChangeTag = (event) => {
    setAddTagValue(event.target.value)
  }
  const showAddTopicTag = () =>{
    if (addTagValue === 'yes'){
      setDisplayState('AddTopicTags')
    }
    if (addTagValue === 'no'){
      setChangeValue('GenerateTags')
      setDisplayState('GenerateTags')
    }
  }
  const handleResetForm = () => {
    resetForm()
  }
  return (
    <>
      <AffiliationQuestionSection value={addTagValue} handleChange={handleChangeTag} question={"Do you want to add more tags specific to your project's subject area to increase visibility?"} />
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item style={{ padding:'10px' }}><Button onClick={showAddTopicTag}>Generate Tags</Button></Grid>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleResetForm}>Reset Form</Button></Grid>
      </Grid>
    </>
  )
}

export const AddTopicTagSection = ({ setDisplayState,setChangeValue,resetForm,handleChangeChip }) =>{
  const classes = useStyles();

  const handleGenerateTag = () =>{
    setChangeValue('GenerateTags')
    setDisplayState('GenerateTags')
  }
  const handleResetForm = () => {
    resetForm()
  }
  return (
    <>
      <Grid style={{ padding:'20px' }}>
        <Typography variant='body1'>What topic(s), cause(s), or civic issue(s) does your project address?</Typography>
      </Grid>
      <Grid>
        <ChipInput
          fullWidth
          placeholder='Add topic tag'
          onChange={(chips) => handleChangeChip(chips)}
          classes={{
            root: classes.chipInputRoot,
            input: classes.chipInputInput,
            chip: classes.chip,
          }}
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleGenerateTag}>Generate Tags</Button></Grid>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleResetForm}>Reset Form</Button></Grid>
      </Grid>
    </>
  )
}

export const NewTags =({ resetForm,setDisplayState,tagsToAdd,setChangeValue })=>{

  const handleResetForm = () => {
    resetForm()
  }
  const handleAddTags = () =>{
    setChangeValue('CopyPasteTags')
    setDisplayState('CopyPasteTags')
  }
  return (
    <>
      <Grid>
        <Grid style={{ padding:'20px' }}>
          <Typography variant='body1'>New tags to add to your repository:</Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item md={8} data-cy='tags-to-add' style={{ padding:'30px' }}>
            <TopicTags topicNames={tagsToAdd} variant='generated' />
          </Grid>
          <Grid item md={4}>
            <Typography variant='body1'><Link onClick={()=>setDisplayState('AddMoreTags')} >Add More tags</Link></Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleAddTags}>Add these tags to your repo</Button></Grid>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleResetForm}>Reset Form</Button></Grid>
      </Grid>
    </>
  )
}

export const CopyPasteTags = ({ tagsToAdd,setDisplayState,repositoryName,repositoryUrl }) =>{

  return (
    <>
      <Grid style={{ padding:'20px' }}>
        <Typography variant='h5'>How to add your tags to your project’s repository</Typography>
      </Grid>
      <Grid style={{ padding:'10px' }}>
        <Typography variant='h6' style={{  fontWeight: '400' }} >We recommend having your <Link href={repositoryUrl} >project’s repository</Link> open in another browser for ease of convenience. </Typography>
      </Grid>
      <Grid style={{ padding:'20px' }}>
        <Typography variant='h6' style={{  fontWeight: '400' }}>If you don’t see the (Github Gear icon) button it means you don’t have “edit repository settings” privileges (and can’t perform the steps below). Please click here to copy this page link and send it to your repository admin.</Typography>
      </Grid>
      <Grid>
        <Grid style={{ padding:'20px' }}>
          <Typography variant='h6'>Here are the Topic Tags to add to {repositoryName}:</Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item md={8} data-cy='tags-to-add' style={{ padding:'30px' }}>
            <TopicTags topicNames={tagsToAdd} variant='copypaste' />
          </Grid>
          <Grid item md={4}>
            <Typography variant='body1'><Link onClick={()=>setDisplayState('AddMoreTags')} >Add More tags</Link></Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}


export const AddMoreTags = ({ userTags,setUserTags,setDisplayState,setTagsToAdd,orgTags,resetForm,handleChangeChip,changeValue }) =>{
  const classes = useStyles();
  const handleAddMoreTags = () =>{
    if (changeValue === 'CopyPasteTags'){
      setDisplayState('CopyPasteTags')
    }
    else
      setDisplayState('GenerateTags')
  }

  const handleResetForm = () => {
    resetForm()
  }
  return (
    <>
      <Grid style={{ padding:'20px' }}>
        <Typography variant='body1'>What topic(s), cause(s), or civic issue(s) does your project address?</Typography>
      </Grid>
      <Grid>
        <ChipInput
          defaultValue={userTags}
          fullWidth
          placeholder='Add topic tag'
          onChange={(chips) => handleChangeChip(chips)}
          classes={{
            root: classes.chipInputRoot,
            input: classes.chipInputInput,
            chip: classes.chip,
          }}
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleAddMoreTags}>Generate Tags</Button></Grid>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleResetForm}>Reset Form</Button></Grid>
      </Grid>
    </>
  )
}
