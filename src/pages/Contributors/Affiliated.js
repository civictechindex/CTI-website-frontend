/* eslint-disable max-lines-per-function */
import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DropdownArrow } from "../../components/DropdownArrow.js";
import Grid from '@material-ui/core/Grid';
import { AffiliatedOrganizations } from "./AffiliatedOrganizations";
import makeStyles from '@material-ui/core/styles/makeStyles'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
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
  affiliatedWrapper: {
    width: '100%',
    padding: '1rem 0',
    textAlign: 'center',
    '& h2': {
      margin: 0,
      fontZize: '28px',
      color: theme.palette.secondary.dark,
    },
  },
  loaders: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: 0,
  },
  codeForAllWrapper: {
    width: '1005px',
    margin: '2rem auto',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    marginLeft: '-6rem',
    height:'80px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '6px',
    '& a': {
      textDecoration: 'none',
    },
    '& img': {
      marginRight: '0.5rem',
      maxWidth: '6rem',
    },
    '& h4': {
      paddingLeft:'24px',
      color: theme.palette.secondary.dark,
    },
  },
  blueColor:{
    backgroundColor: theme.palette.secondary.dark,
    '& h4': {
      color: theme.palette.text.secondary,
    },
  },
}));


/* eslint complexity: [0, 0]*/
export const Affiliated = (props) => {
  const classes = useStyles();

  const { organizations, inputValue,organizationData, affiliatedSepOpen,  searchCount, affiliatedCount, totalaffiliatedCount, setAfflnSepOpen, checkboxValue } = props
  return <Grid className={classes.affiliatedWrapper}>
    <Grid className={classes.sectionContainer}>
      <Box className={classes.affiliation}>
        <Typography variant='h2' color='primary' component={'span'} style={{ paddingLeft: '166px', color: '#004364',fontSize: '28px' }}>

          Affiliated Organizations
          { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : `(${totalaffiliatedCount})`   }
        </Typography>

      </Box>
      <Grid>
        <Box className={clsx(classes.codeForAllWrapper, {
          [classes.blueColor]: affiliatedSepOpen === true,
        })}>
          <img
            src="/images/Code_for_All.png"
            alt="code for all logo"
          />
          <a style={{ textDecoration: "none" }}href={"https://codeforall.org"}  target="_blank"  rel="noreferrer noopener">
            <Typography variant='h4'>
                  Code for All { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : `(${totalaffiliatedCount})` }
            </Typography>
          </a>
          <DropdownArrow setOpenFunction={setAfflnSepOpen}  />
        </Box>
        <Box style={{ marginLeft: '-46px',width: '928px' }}>

          {affiliatedSepOpen && (
            !organizations['Code for All'] ? !inputValue ? <h3 className={classes.loaders}>Loading...</h3> : <h3 className={classes.loaders}>No Results</h3>
              : <AffiliatedOrganizations organizations={organizations} inputValue={inputValue} data={organizationData} checkboxValue={checkboxValue} />
          )}
        </Box>
      </Grid>
    </Grid>
  </Grid>
};

export default Affiliated;
