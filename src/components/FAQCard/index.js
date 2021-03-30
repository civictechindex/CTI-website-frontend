import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles } from '@material-ui/core/styles';
import AccordionSection from './accordionSection';

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    marginTop: theme.spacing(12),
    fontSize: '2rem',
    color: theme.palette.secondary.dark,
  },
  messageIcon: {
    width: '1.75em',
    height: '1.75em',
    marginRight: theme.spacing(1),
    color: theme.palette.text.disabled,
  },
  title: {
    color: theme.palette.secondary.dark,
  },
  titleContainer: {
    paddingBottom: '25px',
  },
}));

const FAQCard = (props) => {
  const classes = useStyles();

  return (
    <Box className="containerGray" py={4} px={1}>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} lg={11} className={classes.titleContainer}>
          <Typography variant="h6" className={classes.title}>{props.title}</Typography>
        </Grid>
        {
          props.faqs.length > 0 ? (
            <>
              <AccordionSection faqs={props.faqs}/>
              <Grid item xs={12}>
                <Box my={3} display="flex" justifyContent="center">
                  <Pagination
                    color="secondary"
                    defaultPage={1}
                    disabled={props.pages <= 1}
                    count={props.pages}
                    onChange={props.onPageChange}
                  />
                </Box>
              </Grid>
            </>
          ) : (
            <Typography variant='body1' className={classes.message}>
              <SearchRoundedIcon className={classes.messageIcon}/>
              <i>Sorry, no results found.</i>
            </Typography>
          )
        }
      </Grid>
    </Box>
  );
};

export default FAQCard;
