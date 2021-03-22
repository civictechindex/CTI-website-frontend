import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import AccordionSection from './accordionSection';

const useStyles = makeStyles((theme) => ({
  faqTitleContainer: {
    paddingBottom: '25px',
  },
  faqTitle: {
    color: theme.palette.secondary.dark,
  },
}));

const FAQCard = (props) => {
  const classes = useStyles();

  return (
    <Box className="containerGray" py={6} px={1}>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} lg={11} className={classes.faqTitleContainer}>
          <Typography variant="h5" className={classes.faqTitle}>{props.title}</Typography>
        </Grid>
        <AccordionSection faqs={props.faqs}/>
        <Grid item xs={12} sm={9} lg={11}>
          <Box my={3} display="flex" justifyContent="center">
            <Pagination color="secondary" count={props.pages} onChange={props.onChange} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQCard;
