import React from 'react';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CopyPasteIcon from '../../icons/CopyPasteIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useClipboard } from 'use-clipboard-copy';

const useStyles = makeStyles((theme) => ({
  topicTag: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '24px',
    padding: '0 10px',
    '&.MuiChip-outlined': {
      borderColor: theme.palette.outline.gray,
    },
    '&.MuiChip-deletable svg': {
      color: theme.palette.outline.gray,
    },
    [theme.breakpoints.down('md')]: {
      height: '42px',
    },
    [theme.breakpoints.up('md')]: {
      height: '48px',
    },
  },
}));


const GeneratedTopicTag = (props) => {
  const topicArray = props.topicnames || []
  return topicArray.map((data,key) =>  {
    return (
      <Grid key={key}>
        <Chip label={data} {...props} />
      </Grid>
    );
  })
}


const ClickableTopicTag = (props) => {
  return <Chip {...props} />;
};

const CopyPasteTopicTag = (props) => {
  const clipboard = useClipboard({
    copiedTimeout: 600,
  });
  const handleDelete = (data) => () => {
    clipboard.copy(data);
  };
  const topicArray = props.topicnames || []
  const ChipArray = topicArray.map((data,key) => {
    return (
      <Grid key={key}>
        <Chip
          label={data}
          onDelete={handleDelete(data)}
          deleteIcon={<CopyPasteIcon />}
          {...props}
        />
      </Grid>
    );
  })
  return (
    <>
      <Grid item xs={10}>
        <Typography variant='body1' style={{ textAlign:'center' }}>{clipboard.copied ? 'Copied' : null}</Typography>
      </Grid>
      {ChipArray}
    </>
  )

};


const TopicTag = ({ topicnames, variant,label }) => {
  const classes = useStyles();

  let Component = ClickableTopicTag;
  let clickable = false;
  if (variant === 'generated') {
    Component = GeneratedTopicTag;
    clickable = true;
  } else if (variant === 'copypaste') {
    Component = CopyPasteTopicTag;
  }

  return (
    <Component
      topicnames={topicnames}
      clickable={clickable}
      variant='outlined'
      className={classes.topicTag}
      data-cy='topic-tag'
    />
  );
};

export default TopicTag;
