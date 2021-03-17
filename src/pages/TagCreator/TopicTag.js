import React from 'react';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CopyPasteIcon from '../../icons/CopyPasteIcon';

const useStyles = makeStyles((theme) => ({
  topicTag: {
    backgroundColor: theme.palette.background.default,
    '&.MuiChip-outlined': {
      borderColor: theme.palette.outline.gray,
    },
    '&.MuiChip-deletable svg': {
      color: theme.palette.outline.gray,
    },
  },
}));

const handleDelete = () => {};

const GeneratedTopicTag = (props) => {
  return <Chip {...props} clickable={true} />;
};

const ClickableTopicTag = (props) => {
  return <Chip onDelete={handleDelete} {...props} />;
};

const CopyPasteTopicTag = (props) => {
  return <Chip onDelete={handleDelete} deleteIcon={<CopyPasteIcon />} {...props} />;
};

const TopicTag = (props) => {
  const { label, variant } = props;
  const classes = useStyles();

  let Component = CopyPasteTopicTag;
  if (variant === 'generated') {
    Component = GeneratedTopicTag;
  } else if (variant === 'clickable') {
    Component = ClickableTopicTag;
  }

  return <Component label={label} clickable={false} variant='outlined' className={classes.topicTag} data-cy='topic-tag' />;
};

export default TopicTag;
