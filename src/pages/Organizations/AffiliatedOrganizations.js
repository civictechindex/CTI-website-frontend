import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OrgDropdown from './OrgDropdown';
import OrgTile from './OrgTile';

const useStyles = makeStyles((theme) => ({
  unaffiliatedOrgs: {
    width: '100%',
  },
}));

const UnaffiliatedOrganizations = (props) => {
  const { organizations } = props;
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const lastChildIsOdd = organizations.length % 2 === 1;
  const org = { name: "Code for All" }
  return (
    <div className={classes.thumbnailGrid}>
      <OrgDropdown
        organization={org}
        isOpen={dropdownOpen}
      >
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
    </div>
  );
};

export default UnaffiliatedOrganizations;
