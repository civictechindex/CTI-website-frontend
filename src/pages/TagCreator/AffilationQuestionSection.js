import React from 'react';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';

export const AffiliationQuestionSection = ({ value, handleChange }) => {
  return (
    <Grid container style={{ paddingTop: '30px' }}>
      <Grid item xs={8} sm={8}>Are you affiliated with an organization?</Grid>
      <Grid item sm={2} xs={2}>
        <Radio
          checked={value === 'affiliated'}
          data-cy='radio-affiliated'
          onChange={handleChange}
          value="affiliated"
          name="affiliated"
          inputProps={{ 'aria-label': 'true' }}
        /> Yes
      </Grid>
      <Grid item sm={2} xs={2}>
        <Radio
          checked={value === 'unaffiliated'}
          data-cy='radio-unaffiliated'
          onChange={handleChange}
          value="unaffiliated"
          name="unaffiliated"
          inputProps={{ 'aria-label': 'false' }}
        /> No
      </Grid>
    </Grid>
  )
}
