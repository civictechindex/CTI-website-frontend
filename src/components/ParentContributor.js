import React from "react";
import { useStyle } from "../pages/Contributors/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const ParentContributor = ({ dropdownLength, children }) => {
  const classes = useStyle();

  return (
    <>
      <Box className={classes.codeForAllWrapper}>
        <a
          href={"https://codeforall.org"}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={"https://codeforall.org/assets/images/homepage/logo.png"}
            onError={(e) =>
              // eslint-disable-next-line no-console
              console.log(
                e,
                `error with 'Code For All' ParentContributor Component`
              )
              // Before MVP: Refactor as on-website error message / generic case.
            }
            alt="code for all logo"
            loading="lazy"
          />
          <Typography variant='body2'>Code for All</Typography>
        </a>
        <Typography variant='body2'>({dropdownLength})</Typography>
      </Box>
      {children}
    </>
  );
};
