import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CopyPasteIcon from '../../icons/CopyPasteIcon';
import Grid from '@material-ui/core/Grid';
import { useClipboard } from 'use-clipboard-copy';
import ChipInput from 'material-ui-chip-input';

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
  addTag: {
    paddingBottom: '10px',
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
}));

export const GeneratedTopicTag = (props) => {
  const classes = useStyles();
  const topicArray = props.topicnames || [];
  return topicArray.map((data, key) => {
    return (
      <Grid key={key} data-cy='generated-topic-tag'>
        <Chip variant='outlined' className={classes.topicTag} label={data} />
      </Grid>
    );
  });
};

export const ClickableTopicTag = (props) => {
  return <Chip {...props} />;
};

export const CopyPasteTopicTag = (props) => {
  const classes = useStyles();
  const [cValue, setCvalue] = useState();
  const clipboard = useClipboard({
    copiedTimeout: 600,
  });
  const handleDelete = (data, key) => () => {
    clipboard.copy(data);
    setCvalue(key);
  };
  const topicArray = props.topicnames || [];
  const ChipArray = topicArray.map((data, key) => {
    return (
      <Grid key={key} data-cy='copy-paste-topic-tag'>
        <Chip
          key={key}
          variant='outlined'
          className={classes.topicTag}
          label={clipboard.copied && cValue === key ? 'copied' : data}
          onDelete={handleDelete(data, key)}
          deleteIcon={<CopyPasteIcon />}
          {...props}
        />
      </Grid>
    );
  });
  return <>{ChipArray}</>;
};

export const DeletableTopicTag = ({ userTags, handleDelete }) => {
  const classes = useStyles();
  const topicArray = userTags || [];
  return topicArray.map((data, key) => {
    return (
      <Grid key={key} data-cy='deletable-topic-tag'>
        <Chip
          key={key}
          variant='outlined'
          className={classes.topicTag}
          label={data}
          onDelete={() => handleDelete(data)}
        />
      </Grid>
    );
  });
};

export const ChipInputSection = ({ handleAdd, handleDelete, userTags }) => {
  const chipKeys = ['Enter', ' '];
  const chipKeyCodes = [13, 32];
  const classes = useStyles();
  return (
    <ChipInput
      fullWidth
      placeholder='| Add topic tag'
      alwaysShowPlaceholder={true}
      onAdd={(chip) => handleAdd(chip)}
      onDelete={(deletedChip) => handleDelete(deletedChip)}
      value={userTags}
      className={classes.addTag}
      newChipKeys={chipKeys}
      newChipKeyCodes={chipKeyCodes}
    />
  );
};
