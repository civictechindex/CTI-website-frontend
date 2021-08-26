import React from 'react';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  containerPadding: {
    paddingTop: '30px',
  },
  gridPadding: {
    padding: '10px',
  },
}));

export const AffiliationQuestionSection = ({
  value,
  handleChange,
  question,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.containerPadding}>
        <Grid item xs={12} className={classes.gridPadding}>
          <Typography variant='body1'>{question}</Typography>
        </Grid>
        <Grid item xs={4} sm={8}>
          <Radio
            checked={value === 'yes'}
            data-cy='radio-yes'
            onChange={handleChange}
            value='yes'
            name='yes'
            inputProps={{ 'aria-label': 'true' }}
          />{' '}
          Yes
        </Grid>
        <Grid item xs={4} sm={8}>
          <Radio
            checked={value === 'no'}
            data-cy='radio-no'
            onChange={handleChange}
            value='no'
            name='no'
            inputProps={{ 'aria-label': 'false' }}
          />{' '}
          No
        </Grid>
      </Grid>
    </>
  );
};
