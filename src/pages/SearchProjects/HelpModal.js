import React from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';

import Link from '../../components/common/Link';

const useStyles = makeStyles((theme) => ({
  close: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  searchTips: {
    margin: '20rem auto',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    '& h4': {
      textAlign: 'center',
      color: theme.palette.secondary.dark,
    },
    '& p': {
      color: theme.palette.primary.main,
    },
    '& a': {
      color: theme.palette.secondary.light,
    },
    '& a:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      float: 'right',
    },
    [theme.breakpoints.up('md')]: {
      height: '22rem',
      width: '50vw',
    },
    [theme.breakpoints.down('md')]: {
      height: '24rem',
      width: '60vw',
    },
    [theme.breakpoints.down('sm')]: {
      height: '26rem',
      width: '70vw',
    },
    [theme.breakpoints.down('xs')]: {
      height: '28rem',
      width: '90vw',
    },
  },
}));

const HelpModal = ({ modalOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Modal aria-labelledby='search-tips-title' className={classes.modal} open={modalOpen} onBackdropClick={onClose}>
      <Box className={classes.searchTips}>
        <Typography variant='h4' id='search-tips-title'>
          Search Tips
          <CloseIcon className={classes.close} onClick={onClose} />
        </Typography>
        <br />
        <br />
        <Typography variant='body2'>Need more search results?</Typography>
        <Typography variant='body1'>
          The repository search uses &apos;&amp;&apos; for multiple search terms. In order to get more results try reducing the number of search terms.
        </Typography>
        <br />
        <Typography variant='body2'>Want to search outside of the Civic Tech Index?</Typography>
        <Typography variant='body1'>
          All searches from this page include the tag &apos;civictechindex&apos;. Go to <a href='https://github.com/search'>GitHub’s repository search tool</a> to search
          outside of the civictechindex.
        </Typography>
        <br />
        <Typography variant='body2'>Don&apos;t see your project repository in the search results?</Typography>
        <Typography variant='body1'>
          Use the{' '}
          <Link to='/tag-generator' underline='always'>
            tag generator tool
          </Link>{' '}
          to add your project to the Civic Tech Index.
        </Typography>
      </Box>
    </Modal>
  );
};

export default HelpModal;
