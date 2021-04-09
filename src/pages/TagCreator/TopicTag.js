import React from 'react';
import Chip from '@material-ui/core/Chip';
import ChipInput from "material-ui-chip-input";
import makeStyles from '@material-ui/core/styles/makeStyles';
import CopyPasteIcon from '../../icons/CopyPasteIcon';

const useStyles = makeStyles((theme) => ({
  addTag: {
    '& .MuiChip-clickable': {
      backgroundColor: theme.palette.background.default,
      border: '1px solid',
      borderColor: theme.palette.outline.gray,
      borderRadius: '24px',
      padding: '0 10px',
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
  },
  homeTag: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    padding: '0 4px',
    '&.MuiChip-outlined': {
      borderColor: theme.palette.outline.gray,
    },
    [theme.breakpoints.down('md')]: {
      height: '36px',
    },
    [theme.breakpoints.up('md')]: {
      height: '42px',
    },
  },
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

const handleDelete = () => {};

const handleChangeChip = (chips) =>{
  // setUserTags (chips)
}

const GeneratedTopicTag = (props) => {
  return <Chip {...props} />;
};

const HomeTopicTag = (props) => {
  return <Chip {...props} />;
}

const ClickableTopicTag = (props) => {
  return <Chip onDelete={handleDelete} {...props} />;
};

const CopyPasteTopicTag = (props) => {
  return <Chip onDelete={handleDelete} deleteIcon={<CopyPasteIcon />} {...props} />;
};

const AddTopicTag = (props) => {
  return (
    <ChipInput
      fullWidth
      placeholder='Add topic tag'
      onChange={handleChangeChip}
      {...props}
    />
  );
};

const TopicTag = ({ label, variant }) => {
  const classes = useStyles();

  let Component = ClickableTopicTag;
  let className = classes.topicTag;
  let clickable = false;
  let styleVariant = 'outlined'
  if (variant === 'generated') {
    Component = GeneratedTopicTag;
    clickable = true;
  } else if (variant === 'home') {
    Component = HomeTopicTag;
    className = classes.homeTag;
    clickable = true;
  } else if (variant === 'copypaste') {
    Component = CopyPasteTopicTag;
  } else if (variant === 'add') {
    Component = AddTopicTag;
    className = classes.addTag;
    styleVariant = 'standard'
  }

  return (
    <Component
      label={label}
      clickable={clickable}
      variant={styleVariant}
      className={className}
      data-cy='topic-tag'
    />
  );
};

export default TopicTag;
