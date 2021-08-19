import React from 'react';
import { ContributorThumbnail } from '../../components/ContributorThumbnail';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  unAfflText: {
    color: theme.palette.secondary.dark,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '28px',
    },
  },
  noargText: {
    fontSize: '24px',
    marginLeft: '18%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
      marginLeft: '0',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '17px',
      marginLeft: '0',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '24px',
      marginLeft: '0',
    },
  },
  unaffiliatedThumbnails: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    margin: '16px auto',
    height: '80px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    [theme.breakpoints.down('sm')]: {
      height: '47px',
    },
  },
}));

export const UnaffiliatedOrganizations = (props) => {
  const {
    filtersActive,
    organization,
    showIndexContrib,
    totalunaffiliatedCount,
    unaffiliatedCount,
  } = props;
  const classes = useStyles();
  const isChildThumbnail = false;

  return (
    <Grid>
      <Grid style={{ padding: '24px 0px 32px' }}>
        <Typography variant='h4' className={classes.unAfflText}>
          Unaffiliated Organizations
          <span style={{ paddingLeft: '1px' }}>
            {' '}
            {filtersActive
              ? `(${unaffiliatedCount}/${totalunaffiliatedCount})`
              : `(${totalunaffiliatedCount})`}{' '}
          </span>
        </Typography>
      </Grid>
      {showIndexContrib ? (
        <Grid item xs={12}  sm={12} md={12} container direction="row" justify="center" alignItems="center">
          <Typography color='primary' className={classes.noargText}>
            {' '}
            No organization found{' '}
          </Typography>{' '}
        </Grid>
      ) : (
        <Grid>
          <Grid>
            {organization &&
              organization.map((org, index) => (
                <Grid
                  item
                  xs={12}
                  sm={10}
                  className={classes.unaffiliatedThumbnails}
                  key={index}
                >
                  <ContributorThumbnail
                    organization={org}
                    isChildThumbnail={isChildThumbnail}
                  ></ContributorThumbnail>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
