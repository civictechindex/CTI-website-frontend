import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OrgTile from './OrgTile';

const useStyles = makeStyles((theme) => ({
  unaffiliatedOrgs: {
    width: '100%',
  },
  unaffiliatedText: {
    color: theme.palette.secondary.dark,
    paddingTop: 24,
    paddingBottom: 32,
    textAlign: 'center',
  },
}));

const UnaffiliatedOrganizations = (props) => {
  const { organizations } = props;
  const classes = useStyles();

  const l = organizations.length;
  const xs = (index) => {
    return index === l && l % 2 === 1 ? 12 : 6;
  };

  return (
    <div className={classes.unaffiliatedOrgs}>
      <Typography variant='h4' className={classes.unaffiliatedText}>
        Unaffiliated Organizations ({organizations.length})
      </Typography>
      <Grid container spacing={1}>
        {organizations.map((org, index) => (
          <Grid item key={org.id} xs={xs(index)}>
            <OrgTile key={org.id} organization={org} size='large' />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UnaffiliatedOrganizations;
