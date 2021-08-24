import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { AffiliationQuestionSection } from './AffilationQuestionSection';
import {
  GeneratedTopicTag,
  CopyPasteTopicTag,
  DeletableTopicTag,
  ChipInputSection,
} from './TopicTag';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { useClipboard } from 'use-clipboard-copy';
import SettingsGearIcon from '../../icons/SettingsGearIcon';
import ImageComponent from '../../components/ImageComponent';

const useStyles = makeStyles((theme) => ({
  tagGridStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  chipGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typoStyle: {
    fontWeight: '400',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  gridLinkStyle: {
    '& a:link': {
      fontWeight: '700',
      color: theme.palette.secondary.main,
    },
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
  },
  lStyle: {
    fontWeight: '700',
    color: theme.palette.secondary.main,
  },
  repoChangeGrid: {
    paddingTop: '10px',
    paddingLeft:'10px',
  },
  addTopicGridPadding: {
    padding: '20px 10px 10px',
  },
  newTopicGridPadding: {
    padding: '20px 20px 0px 0px',
  },
}));

export const CurrentTopicTagSection = ({ currentTags, repositoryName }) => {
  return (
    <>
      {currentTags.length !== 0 ? (
        <Grid>
          <Grid style={{ padding: '24px 0px' }}>
            <Typography variant='body1'>
              Current topic tags on{' '}
              <Box component='span' style={{ fontWeight: '700' }}>
                {repositoryName}:
              </Box>
            </Typography>
          </Grid>
          <Grid
            container
            direction='row'
            alignItems='center'
            data-cy='current-tags'
          >
            <GeneratedTopicTag topicnames={currentTags} variant='generated' />
          </Grid>{' '}
        </Grid>
      ) : (
        <Grid item md={8} style={{ margin: 'auto', padding: '30px' }}>
          <Typography variant='h5' style={{ textAlign: 'center' }}>
            There are currently no topic tags in your project’s repository. Add
            tags to increase your project visibility.
          </Typography>
        </Grid>
      )}
      <Grid style={{ padding: '24px 0px' }}>
        <Divider />
      </Grid>
    </>
  );
};

export const AddTagsQuestion = ({
  resetForm,
  setDisplayState,
  setChangeValue,
  userTags,
  handleAdd,
  handleDelete,
}) => {
  const [addTagValue, setAddTagValue] = useState('');
  const handleChangeTag = (event) => {
    setAddTagValue(event.target.value);
  };
  const showAddTopicTag = () => {
    setChangeValue('GenerateTags');
    setDisplayState('GenerateTags');
  };

  return (
    <>
      <AffiliationQuestionSection
        value={addTagValue}
        handleChange={handleChangeTag}
        question={
          "Do you want to add more tags specific to your project's subject area to increase visibility?"
        }
      />
      {addTagValue === 'yes' ? (
        <AddTopicTagSection
          setDisplayState={setDisplayState}
          setChangeValue={setChangeValue}
          resetForm={resetForm}
          userTags={userTags}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
        />
      ) : null}
      {addTagValue === 'no' ? showAddTopicTag() : null}
    </>
  );
};

export const AddTopicTagSection = ({
  userTags,
  displayState,
  setDisplayState,
  resetForm,
  changeValue,
  setChangeValue,
  handleAdd,
  handleDelete,
  repoChangeAlert,
  setRepoChangeAlert,
}) => {
  const classes = useStyles();
  const handleGenerateTag = () => {
    setChangeValue('GenerateTags');
    setDisplayState('GenerateTags');
    setRepoChangeAlert('');
  };
  const handleAddMoreTags = () => {
    if (changeValue === 'CopyPasteTags') {
      setDisplayState('CopyPasteTags');
      setRepoChangeAlert('');
    } else {
      setDisplayState('GenerateTags');
      setRepoChangeAlert('');
    }
  };
  const handleResetForm = () => {
    resetForm();
  };
  return (
    <>
      <Grid className={classes.repoChangeGrid}>
        <Typography variant='body1' color='error'>
          {repoChangeAlert}
        </Typography>
      </Grid>
      <Grid className={classes.addTopicGridPadding}>
        <Typography variant='body1'>
          What topic(s), cause(s), or civic issue(s) does your project address?
        </Typography>
        <Typography variant='body1' style={{ padding: '30px 0px' }}>
          Separate tags by spaces and dashes for hyphenation. You can edit your
          tags later if you need too.
        </Typography>
      </Grid>
      <Grid style={{ paddingLeft: '10px' }} data-cy='add-topic-tags'>
        <ChipInputSection
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          userTags={userTags}
        />
      </Grid>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={3}
        style={{ padding: '10px' }}
      >
        <Grid item style={{ padding: '10px' }}>
          <Button
            onClick={
              displayState === 'ChangeTags'
                ? handleAddMoreTags
                : handleGenerateTag
            }
            id='addTagsButton'
          >
            Add Tag(s)
          </Button>
        </Grid>
        <Grid item style={{ padding: '10px' }}>
          <Button onClick={handleResetForm} id='reset-form-button'>
            Reset Form
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export const NewTags = ({
  resetForm,
  setDisplayState,
  tagsToAdd,
  setChangeValue,
  linkStyles,
  handleDelete,
  userTags,
}) => {
  const classes = useStyles();
  const handleResetForm = () => {
    resetForm();
  };
  const handleAddTags = () => {
    setChangeValue('CopyPasteTags');
    setDisplayState('CopyPasteTags');
  };
  return (
    <>
      <Grid>
        <Grid className={classes.addTopicGridPadding}>
          <Typography variant='body1'>
            New tags to add to your repository:
          </Typography>
        </Grid>
        <Grid container className={classes.tagGridStyle}>
          <Grid container className={classes.chipGrid} data-cy='new-tags'>
            <GeneratedTopicTag topicnames={tagsToAdd} />
            <DeletableTopicTag
              userTags={userTags}
              handleDelete={handleDelete}
            />
            <Link
              component='button'
              variant='body1'
              onClick={() => setDisplayState('ChangeTags')}
              underline='always'
              style={linkStyles}
            >
              Add More/Change Tags
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={3}
        style={{ padding: '10px' }}
      >
        <Grid item style={{ padding: '10px' }}>
          <Button onClick={handleAddTags} id='add-tags-button'>
            Add Tag(s) to Repository
          </Button>
        </Grid>
        <Grid item style={{ padding: '10px' }}>
          <Button onClick={handleResetForm} id='reset-form-button'>
            Reset Form
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const TagGeneratorInstructions = ({
  copyPasteTopicTags,
  linkStyles,
  repositoryUrl,
}) => {
  const classes = useStyles();
  const clipboard = useClipboard({
    copiedTimeout: 600,
  });
  const handleQueryParamLink = () => {
    clipboard.copy(window.location.href);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} style={{ padding: '24px 0px' }}>
          <Typography variant='h4'>
            How to add your tags to your project’s repository
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridLinkStyle}>
          <Typography variant='body1' className={classes.typoStyle}>
            1. Under your{' '}
            <Link target='_blank' href={repositoryUrl} underline='always'>
              project’s repository,
            </Link>{' '}
            click <SettingsGearIcon /> to paste your tags.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: '24px 16px 0' }}>
          <Typography variant='body1' className={classes.typoStyle}>
            If you don’t see the <SettingsGearIcon /> button it means you don’t
            have “edit repository settings” privileges (and can’t perform the
            steps below). Please click{' '}
            <Link
              component='button'
              variant='body1'
              onClick={() => handleQueryParamLink()}
              underline='always'
              className={classes.lStyle}
            >
              {clipboard.copied ? 'Copied' : 'here'}
            </Link>{' '}
            to copy this page link and send it to your repository admin.
          </Typography>
        </Grid>
        <ImageComponent src='/images/instructions-step1.png' alt='Step 1' />
        <Grid item xs={12}>
          <Typography variant='body1' className={classes.typoStyle}>
            2. Under{' '}
            <Box component='span' style={{ fontWeight: '700' }}>
              &quot;Topics&quot;
            </Box>
            , paste the topic you want to add to your repository.{' '}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: '20px' }}>
          <Typography variant='body1' className={classes.typoStyle}>
            Click each individual generated topic tag to copy it one at a time.
            Paste selected tag into your repository.
          </Typography>
        </Grid>
        <Grid container style={{ paddingLeft: '20px' }}>
          <Grid item xs={12}>
            <Grid container direction='row' alignItems='center'>
              <CopyPasteTopicTag
                topicnames={copyPasteTopicTags}
                variant='outlined'
              />
            </Grid>
          </Grid>
        </Grid>
        <ImageComponent src='/images/instructions-step2.png' alt='Step 2' />
        <Grid item xs={12}>
          <Typography variant='body1' className={classes.typoStyle}>
            3. After you have finished adding your tags, click{' '}
            <Box component='span' style={{ fontWeight: '700' }}>
              Save Changes
            </Box>{' '}
          </Typography>
        </Grid>
        <ImageComponent src='/images/instructions-step3.png' alt='Step 3' />
      </Grid>
    </>
  );
};

export const CopyPasteTags = ({
  tagsToAdd,
  userTags,
  setDisplayState,
  repositoryName,
  repositoryUrl,
  linkStyles,
}) => {
  const copyPasteTopicTags = [...tagsToAdd, ...userTags];

  return (
    <>
      <Grid>
        <Grid style={{ padding: '20px 0px' }}>
          <Typography variant='h6'>
            Here are the Topic Tags to add to {repositoryName}:
          </Typography>
        </Grid>
        <Grid container>
          <Grid item data-cy='copy-paste-tags'>
            <Grid container direction='row' alignItems='center'>
              <CopyPasteTopicTag
                topicnames={copyPasteTopicTags}
                variant='outlined'
              />
              <Grid item style={{ padding: '8px' }}>
                <Link
                  component='button'
                  variant='body1'
                  onClick={() => setDisplayState('ChangeTags')}
                  underline='always'
                  style={linkStyles}
                >
                  Add More tags
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <TagGeneratorInstructions
        copyPasteTopicTags={copyPasteTopicTags}
        linkStyles={linkStyles}
        repositoryUrl={repositoryUrl}
      />
    </>
  );
};
