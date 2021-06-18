import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DropdownArrow } from "../../components/DropdownArrow.js";
import Grid from '@material-ui/core/Grid';
import { AffiliatedOrganizations } from "./AffiliatedOrganizations";

/* eslint complexity: [0, 0]*/
export const Affiliated = (props) => {
  const { organizations, inputValue, classes, organizationData, affiliatedSepOpen,  searchCount, affiliatedCount, totalaffiliatedCount, setAfflnSepOpen, checkboxValue } = props
  return <Grid className={classes.affiliatedWrapper}>
    <Grid className={classes.sectionContainer}>
      <Box className={classes.affiliation}>
        <Typography variant='h2' color='primary' component={'span'} style={{ paddingLeft: '166px', color: '#004364',fontSize: '28px' }}>

          Affiliated Organizations
          { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : `(${totalaffiliatedCount})`   }
        </Typography>

      </Box>
      <Grid>
        <Box className={affiliatedSepOpen ? `${classes.blueColor} ` : `${classes.codeForAllWrapper}`}>
          <img
            src="/images/Code_for_All.png"
            alt="code for all logo"
          />
          <a style={{ textDecoration: "none" }}href={"https://codeforall.org"}  target="_blank"  rel="noreferrer noopener">
            <Typography variant='body2' className={classes.codeforAllText}>
                  Code for All

              { searchCount ? `(${affiliatedCount}/${totalaffiliatedCount})`  : `(${totalaffiliatedCount})`   }

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
