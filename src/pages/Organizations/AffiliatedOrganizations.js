import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OrgDropdown from './OrgDropdown';
import OrgTile from './OrgTile';

const useStyles = makeStyles((theme) => ({
  affiliatedOrgs: {
    width: '100%',
  },
  affiliatedText: {
    color: theme.palette.secondary.dark,
    paddingTop: 24,
    paddingBottom: 32,
    textAlign: 'center',
  },
}));

const UnaffiliatedOrganizations = (props) => {
  const { organizations } = props;
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const lastChildIsOdd = organizations.length % 2 === 1;
  const org = { name: 'Code for All' };
  return (
    <div className={classes.affiliatedOrgs}>
      <Typography variant='h4' className={classes.affiliatedText}>
        Aaffiliated Organizations ({organizations.length})
      </Typography>
      <OrgDropdown organization={org} isOpen={dropdownOpen}>
        {organizations.length > 0 ? (
          <Grid container className={classes.affiliatedThumbnailsWrapper}>
            {organizations.map((org, idx) => {
              return (
                <Grid
                  item
                  className={classes.afflnThumbnails}
                  key={`affiliated-org-${org.id}`}
                >
                  <OrgTile organization={org}></OrgTile>
                </Grid>
              );
            })}
          </Grid>
        ) : null}
      </OrgDropdown>
      <Grid container spacing={1}>
        {organizations.map((org, index) => (
          <Grid item key={org.id} xs={4}>
            <OrgTile key={org.id} organization={org} size='medium' />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UnaffiliatedOrganizations;
