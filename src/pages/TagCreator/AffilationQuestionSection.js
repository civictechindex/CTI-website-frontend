import React from 'react';

import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'


export const AffiliationQuestionSection = ({ value, handleChange,question }) => {
  return (
    <Grid container style={{ paddingTop: '50px' }}>
      <Grid item xs={8} sm={8}><Typography variant='h6' style={{ fontWeight:'500' }}>{question}</Typography></Grid>
      <Grid item  xs={8}>
        <Radio
          checked={value === 'yes'}
          data-cy='radio-yes'
          onChange={handleChange}
          value="yes"
          name="yes"
          inputProps={{ 'aria-label': 'true' }}
        /> Yes
      </Grid>
      <Grid item xs={8}>
        <Radio
          checked={value === 'no'}
          data-cy='radio-no'
          onChange={handleChange}
          value="no"
          name="no"
          inputProps={{ 'aria-label': 'false' }}
        /> No
      </Grid>
    </Grid>
  )
}
