import React from "react";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyle } from "./styles.js";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

export const UnaffiliatedOrganizations = (props) => {
  const { searchCount, unaffiliatedCount, totalunaffiliatedCount, unaffiliatedOpen, organization, checkboxValue } = props;
  const classes = useStyle();
  return (
    <Box className={classes.unaffiliatedWrapper}>

      <Box component="div" className={classes.affiliation}>
        <Typography variant='h2' color='primary' component={'span'} className={classes.unAfflText}>

                          Unaffiliated Organizations
          <span style={{ paddingLeft: "1px" }}> {searchCount ? `(${unaffiliatedCount}/${totalunaffiliatedCount})`  : `(${totalunaffiliatedCount})`   } </span>
        </Typography>
      </Box>
      { checkboxValue ?
        <Box><Typography color='primary' className={classes.noargText}> No organization found </Typography> </Box>
        :
        <Box>
          {unaffiliatedOpen && (
            <Typography className={classes.unaffiliatedThumbnailsWrapper}>
              {organization && organization.map((org, index) => (
                <Typography className={classes.unaffiliatedThumbnails} key={index} component="span">
                  <ContributorThumbnail
                    organization={org}
                  ></ContributorThumbnail>
                </Typography>
              ))}
            </Typography>
          )}
        </Box>
      }
    </Box>
  );
};
