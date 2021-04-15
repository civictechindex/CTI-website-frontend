import React from 'react';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CopyPasteIcon from '../../icons/CopyPasteIcon';
import Grid from '@material-ui/core/Grid';

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

const handleDelete = (data) => () => {
  navigator.clipboard.writeText(data)
};

const GeneratedTopicTag = (props) => {
  const topicArray = props.topicNames || []
  return topicArray.map((data,key) =>  {
    return (
      <Grid key={key}>
        <Chip label={data} {...props} />
      </Grid>
    );
  })
}


const ClickableTopicTag = (props) => {
  return <Chip onDelete={handleDelete} {...props} />;
};

const CopyPasteTopicTag = (props) => {
  const topicArray = props.topicNames || []
  return topicArray.map((data,key) => {
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
};


const TopicTag = ({ topicNames, variant,label }) => {
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
      topicNames={topicNames}
      clickable={clickable}
      variant='outlined'
      className={classes.topicTag}
      data-cy='topic-tag'
    />
  );
};

export default TopicTag;
