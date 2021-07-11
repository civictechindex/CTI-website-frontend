import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import OrgTile from './OrgTile';

const useStyles = makeStyles((theme) => ({
  unaffiliatedOrgs: {
    width: '100%',
  },
}));

const UnaffiliatedOrganizations = (props) => {
  const { organizations } = props;
  const classes = useStyles();
  const lastChildIsOdd = organizations.length % 2 === 1;
  return (
    <div className={classes.unaffiliatedOrgs}>
      <Grid container spacing={1}>
        {organizations.map((org, index) => (
          <Grid
            item
            key={org.id}
            xs={index === organizations.length && lastChildIsOdd ? 12 : 6}
          >
            <OrgTile key={org.id} organization={org} size='large' />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UnaffiliatedOrganizations;
