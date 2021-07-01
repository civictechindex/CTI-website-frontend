import React,{ useState } from "react";
import Typography from "@material-ui/core/Typography";
import { DropdownArrow } from "../../components/DropdownArrow.js";
import Grid from '@material-ui/core/Grid';
import { AffiliatedOrganizations } from "./AffiliatedOrganizations";
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    color: theme.palette.secondary.dark,
    textAlign: 'center',
  },
  gpGrid:{
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    margin: 'auto',
    width: '1005px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '6px',
    padding:'8px 16px',
    '& h4': {
      paddingLeft:'24px',
      color: theme.palette.secondary.dark,
    },
    '& a:visited': {
      color: theme.palette.secondary.dark,
    },
  },
  blueColor:{
    backgroundColor: theme.palette.secondary.dark,
    '& h4': {
      color: theme.palette.text.secondary,
    },
    '& a:visited': {
      color: theme.palette.text.secondary,
    },
  },
  dropDownGrid:{
    margin: 'auto',
    width: '1005px',
    backgroundColor: theme.palette.background.default,
  }
}));
/* eslint complexity: [0, 0]*/
export const Affiliated = (props) => {
  const { organizations, inputValue, classes, organizationData, affiliatedSepOpen,  searchCount, affiliatedCount, totalaffiliatedCount, setAfflnSepOpen, checkboxValue } = props
  const classesLocal = useStyles()
  const [gp, setGp] = useState(true);

  return (
    <Grid>
      <Grid style={{ padding:'40px' }}>
        <Typography variant='h4' className={classesLocal.titleStyle}>
          Affiliated Organizations
          { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : `(${totalaffiliatedCount})`   }
        </Typography>
      </Grid>
      <Box className={clsx(classesLocal.gpGrid, {
        [classesLocal.blueColor]: affiliatedSepOpen === true,
      })} >
        <Box>
          <img src="/images/Code_for_All.png" alt="code for all logo" />
        </Box>
        <Box>
          <Typography variant='h4'>
            <Link href="https://codeforall.org"  target="_blank"  rel="noreferrer noopener">Code for All</Link>
            { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : ` (${totalaffiliatedCount})` }
          </Typography>
        </Box>
        <Box flexGrow={1}><DropdownArrow affiliatedSepOpen={affiliatedSepOpen} setAfflnSepOpen={setAfflnSepOpen} gp={gp} setGp={setGp} /></Box>
      </Box>
      <Grid className={classesLocal.dropDownGrid}>
        {affiliatedSepOpen && (
          !organizations['Code for All'] ? !inputValue ? <h3 className={classes.loaders}>Loading...</h3> : <h3 className={classes.loaders}>No Results</h3>
            : <AffiliatedOrganizations organizations={organizations} inputValue={inputValue} data={organizationData} checkboxValue={checkboxValue}  />
        )}
      </Grid>
    </Grid>
  )};

export default Affiliated;
