import React from 'react';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
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

const GeneratedTopicTag = (props) => {
  return <Chip {...props} />;
};

const HomeTopicTag = (props) => {
  return <Chip {...props} />;
}

const ClickableTopicTag = (props) => {
  return <Chip onDelete={handleDelete} {...props} />;
};



const TopicTag = ({ label, variant }) => {
  const classes = useStyles();

  let Component = ClickableTopicTag;
  let className = classes.topicTag;
  let clickable = false;
  if (variant === 'generated') {
    Component = GeneratedTopicTag;
    clickable = true;
  } else if (variant === 'home') {
    Component = HomeTopicTag;
    className = classes.homeTag;
    clickable = true;
  }

  return (
    <Component
      label={label}
      clickable={clickable}
      variant='outlined'
      className={className}
      data-cy='topic-tag'
    />
  );
};

export default TopicTag;
