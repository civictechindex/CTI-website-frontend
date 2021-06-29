import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DropdownArrow } from "../../components/DropdownArrow.js";
import Grid from '@material-ui/core/Grid';
import { AffiliatedOrganizations } from "./AffiliatedOrganizations";
import { useStyle } from "./styles.js";
import clsx from 'clsx';


/* eslint complexity: [0, 0]*/
export const Affiliated = (props) => {

  const { organizations, inputValue,organizationData, affiliatedSepOpen,  searchCount, affiliatedCount, totalaffiliatedCount, setAfflnSepOpen, checkboxValue } = props
  const classes = useStyle();

  return <Grid className={classes.affiliatedWrapper}>

    <Box className={classes.affiliation}>
      <Typography variant='h2' color='primary' component={'span'} className={classes.afflText}>

          Affiliated Organizations
        <span style={{ paddingLeft: "1px" }}>  { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : `(${totalaffiliatedCount})`   } </span>
      </Typography>

    </Box>
    <Grid>
      <Box className={clsx(classes.codeForAllWrapper, { [classes.blueColor]: affiliatedSepOpen === true })}>
        <img
          src="/images/Code_for_All.png"
          alt="code for all logo"
          className={classes.codeforallImg}
        />
        <a style={{ textDecoration: "none" }}href={"https://codeforall.org"}  target="_blank"  rel="noreferrer noopener">
          <Typography variant='h4' className={classes.codeforAllText}>
                  Code for All

            <span style={{ paddingLeft: "5px" }}>   { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : `(${totalaffiliatedCount})`   } </span>

          </Typography>
        </a>
        <DropdownArrow setOpenFunction={setAfflnSepOpen}  />
      </Box>
      <Box className={classes.childAffiliated}>

        {affiliatedSepOpen && (
          !organizations['Code for All'] ? !inputValue ? <h3 className={classes.loaders}>Loading...</h3> : <h3 className={classes.loaders}>No Results</h3>
            : <AffiliatedOrganizations organizations={organizations} inputValue={inputValue} data={organizationData} checkboxValue={checkboxValue} />
        )}
      </Box>

    </Grid>
  </Grid>
};

export default Affiliated;
