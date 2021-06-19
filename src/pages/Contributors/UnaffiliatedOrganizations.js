import React from "react";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyle } from "./styles.js";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";

export const UnaffiliatedOrganizations = (props) => {
  const { searchCount, unaffiliatedCount, totalunaffiliatedCount, unaffiliatedOpen, organization, checkboxValue } = props;
  const classes = useStyle();
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
