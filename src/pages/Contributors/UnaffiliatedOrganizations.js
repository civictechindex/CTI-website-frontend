import React from "react";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  unaffiliatedWrapper: {
    marginLeft: '116px',
    marginRight: theme.spacing(-3),
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
    padding: '1rem 0',
    '& *': { color: theme.palette.secondary.dark },
    ' & h2': {
      fontZize: '28px',
      color: '#004364',
      margin: 0,
    },
    '& p': {
      fontSize: '24px',
    },
  },
  sectionContainer: {
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '70%',
    '& p': {
      margin: '0',
    },
  },
  affiliation: {
    textAlign: 'center',
    paddingRight: '1rem',
    boxSizing: 'border-box',
    color: theme.palette.secondary.dark,
    display: 'flex',
    fontSize: '1.3rem',
    '& h2': {
      width: '100%',
    },
  },
  noargText: {
    fontStyle: 'italic',
    paddingRight:'240px',
    paddingTop: '30px',
  },
  unaffiliatedThumbnailsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(49%, 1fr))',
    gap: '0.5rem',
    padding: '1rem 0',
    marginLeft: '74px',
  },
  unaffiliatedThumbnails: {
    border: '1px solid #BCBCBC',
    borderRadius: '4px',
    marginLeft: '-10rem',
    marginRight: '161px',
    backgroundColor: theme.palette.background.default,
    flex: '1 1 23%',
    '& p': {
      fontSize: '24px',
      color: theme.palette.secondary.dark,
    },
  },
}));

export const UnaffiliatedOrganizations = (props) => {
  const { searchCount, unaffiliatedCount, totalunaffiliatedCount, unaffiliatedOpen, organization, checkboxValue } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.unaffiliatedWrapper}>
      <Grid className={classes.sectionContainer}>
        <Box component="div" className={classes.affiliation}>
          <Typography variant='h2' color='primary' component={'span'} style={{ paddingLeft: '82px', fontSize: '28px' }}>

                          Unaffiliated Organizations
            {searchCount ? `(${unaffiliatedCount}/${totalunaffiliatedCount})`  : `(${totalunaffiliatedCount})`   }
          </Typography>
        </Box>
        { checkboxValue ?
          <Box><Typography color='primary' className={classes.noargText}> No organization found </Typography> </Box>
          :
          <Box>
            {unaffiliatedOpen && (
              <Grid className={classes.unaffiliatedThumbnailsWrapper}>
                {organization && organization.map((org, index) => (
                  <Typography className={classes.unaffiliatedThumbnails} key={index} component="div">
                    <ContributorThumbnail
                      organization={org}
                    ></ContributorThumbnail>
                  </Typography>
                ))}
              </Grid>
            )}
          </Box>
        }
      </Grid>
    </Grid>
  );
};
