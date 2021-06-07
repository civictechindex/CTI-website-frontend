import React from 'react';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    fontSize: '2rem',
  },
  messageIcon: {
    width: '1.75em',
    height: '1.75em',
    marginRight: theme.spacing(1),
    color: theme.palette.text.disabled,
  },
}));

const ResultContainer = ({ results, pages, pageNum, onPageChange, errorState }) => {
  const classes = useStyles();
  return (
    <>
      {results}
      {errorState ?
        (<Box my={12} display='flex' justifyContent='center'>
          <Typography variant='body1' className={classes.message}>
            <i>We are experiencing technical issues. Please try again later.</i>
          </Typography>
        </Box>) :
        results.length === 0 ?
          (<Box my={12} display='flex' justifyContent='center'>
            <Typography variant='body1' className={classes.message}>
              <SearchRoundedIcon className={classes.messageIcon}/>
              <i>Sorry, no results found.</i>
            </Typography>
          </Box>) :
          (<Box my={3} display='flex' justifyContent='center'>
            <Pagination
              color='secondary'
              count={pages}
              defaultPage={1}
              disabled={pages === 1}
              onChange={(e, val) => onPageChange(val)}
              page={pageNum}
            />
          </Box>)
      }
    </>
  );
};

export default ResultContainer;
