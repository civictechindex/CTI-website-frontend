import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { DropdownArrow } from '../../components/DropdownArrow.js';
import Grid from '@material-ui/core/Grid';
import { AffiliatedOrganizations } from './AffiliatedOrganizations';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    color: theme.palette.secondary.dark,
    textAlign: 'center',
  },
  gpGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    backgroundColor: theme.palette.background.default,
    borderRadius: '6px',
    padding: '8px 16px',
    '& h4': {
      paddingLeft: '24px',
      color: theme.palette.secondary.dark,
    },
    '& a:link': {
      color: theme.palette.secondary.dark,
    },
    '& a:visited': {
      color: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down('xs')]: {
      height: '64px',
    },
  },
  open: {
    backgroundColor: theme.palette.secondary.dark,
    '& h4': {
      color: theme.palette.text.secondary,
    },
    '& a:link': {
      color: theme.palette.text.secondary,
    },
    '& a:visited': {
      color: theme.palette.text.secondary,
    },
  },
  flexGrid: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  dropDownGrid: {
    margin: 'auto',
    backgroundColor: theme.palette.background.default,
    padding: '1px 0px',
  },
  contributorIcon: {
    marginTop: '24%',
    width: '42px',
    height: '42px',
    marginLeft: '29%',
  },
  contributorItem: {
    display: 'grid',
    justifyContent: 'right',
    marginRight: '2%',
    marginTop: '18%',
  },
}));
/* eslint complexity: [0, 0]*/
export const Affiliated = (props) => {
  const {
    organizations,
    inputValue,
    classes,
    organizationData,
    searchCount,
    affiliatedCount,
    totalaffiliatedCount,
    checkboxValue,
  } = props;
  const classesLocal = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Grid>
      <Grid style={{ padding: '40px' }}>
        <Typography variant='h4' className={classesLocal.titleStyle}>
          Affiliated Organizations
          {searchCount
            ? `(${affiliatedCount}/${totalaffiliatedCount})`
            : `(${totalaffiliatedCount})`}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        className={clsx(classesLocal.gpGrid, {
          [classesLocal.open]: dropdownOpen,
        })}
      >
        <Grid>
          <img src='/images/code_for_All.png' alt='code for all logo' />
        </Grid>
        <Grid>
          <Typography variant='h4' noWrap>
            <Link
              href='https://codeforall.org'
              target='_blank'
              rel='noreferrer noopener'
            >
              Code for All
            </Link>
            {searchCount
              ? `(${affiliatedCount}/${totalaffiliatedCount})`
              : ` (${totalaffiliatedCount})`}
          </Typography>
        </Grid>
        <Grid>
          {checkboxValue ? (
            <Typography>
              <img
                className={classesLocal.contributorIcon}
                src='/images/Gparent_contributed.svg'
                alt='contributor-icon'
              />
            </Typography>
          ) : (
            ' '
          )}
        </Grid>
        <Grid
          item
          container
          className={classesLocal.flexGrid}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <DropdownArrow open={dropdownOpen} handleArrow={() => setDropdownOpen(!dropdownOpen)} />
        </Grid>
      </Grid>
      <Grid>
        {dropdownOpen && (
          !organizations['Code for All'] ? (
            !inputValue ? (
              <h3 className={classes.loaders}>Loading...</h3>
            ) : (
              <h3 className={classes.loaders}>No Results</h3>
            )
          ) : (
            <Grid item xs={12} sm={10} className={classesLocal.dropDownGrid}>
              <AffiliatedOrganizations
                organizations={organizations}
                inputValue={inputValue}
                organizationData={organizationData}
                checkboxValue={checkboxValue}
              />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default Affiliated;
