import React,{ useState } from 'react';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CopyPasteIcon from '../../icons/CopyPasteIcon';
import Grid from '@material-ui/core/Grid';
import { useClipboard } from 'use-clipboard-copy';

const useStyles = makeStyles((theme) => ({
  topicTag: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '24px',
    padding: '0 10px',
    '&.MuiChip-outlined': {
      borderColor: theme.palette.outline.gray,
      [theme.breakpoints.down('md')]: {
        height: '42px',
      },
      [theme.breakpoints.up('md')]: {
        height: '48px',
      },
    },
    '&.MuiChip-deletable svg': {
      color: theme.palette.outline.gray,
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
  const [cValue,setCvalue]=useState()
  const clipboard = useClipboard({
    copiedTimeout: 600,
  });
  const handleDelete = (data,key) => () => {
    clipboard.copy(data);
    setCvalue(key)
  };
  const topicArray = props.topicnames || []
  const ChipArray = topicArray.map((data,key) => {
    return (
      <Grid key={key}>
        <Chip
          key={key}
          label={(clipboard.copied && cValue === key)?'copied':data}
          onDelete={handleDelete(data,key)}
          deleteIcon={<CopyPasteIcon />}
          {...props}
        />
      </Grid>
    );
  })
  return (
    <>
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
