/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { DropdownArrow } from '../../components/DropdownArrow.js';
import Grid from '@material-ui/core/Grid';
import { AffiliatedOrganizations } from './AffiliatedOrganizations';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line max-lines-per-function
const useStyles = makeStyles((theme) => ({
  titleStyle: {
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
  gpGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    backgroundColor: theme.palette.background.default,
    borderRadius: '6px',
    padding: '8px 16px',
    '& h4': {
      paddingLeft: '10px',
      color: theme.palette.secondary.dark,
      [theme.breakpoints.between('xs','sm')]: {
        fontSize: '15px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '24px',
        paddinglLeft: '10px',
      },
    },
    '& a:link': {
      color: theme.palette.secondary.dark,
    },
    '& a:visited': {
      color: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down('sm')]: {
      height: '43px',
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
  codeforAllIcon: {
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    },
  },
  codeforallText: {
    fontSize:'24px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '24px',
    },
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
    [theme.breakpoints.down('sm')]: {
      width: '23px',
      height: '23px',
    },
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
    classes,
    inputValue,
    organizations,
    organizationData,
    filtersActive,
    affiliatedCount,
    totalaffiliatedCount,
    showIndexContrib,
  } = props;
  const classesLocal = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Grid>
      <Grid style={{ padding: '40px' }}>
        <Typography variant='h4' className={classesLocal.titleStyle}>
          Affiliated Organizations
          <span style={{ paddingLeft: '9px' }}>
            {filtersActive
              ? `(${affiliatedCount}/${totalaffiliatedCount})`
              : `(${totalaffiliatedCount})`}
          </span>
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
          <img src='/images/code_for_All.png' alt='code for all logo' className={classesLocal.codeforAllIcon}/>
        </Grid>
        <Grid>
          <Typography variant='h4' noWrap className={classesLocal.codeforallText}>
            <Link
              href='/organization/code-for-all'
              target='_blank'
              rel='noreferrer noopener'
            >
              Code for All
            </Link>
            <span style={{ paddingLeft: '5px' }}>
              {filtersActive
                ? `(${affiliatedCount}/${totalaffiliatedCount})`
                : ` (${totalaffiliatedCount})`}
            </span>
          </Typography>
        </Grid>
        <Grid>
          {showIndexContrib ? (
            <Typography>
              <img
                alt='contributor-icon'
                data-cy='contributor-icon'
                className={classesLocal.contributorIcon}
                src='/images/Gparent_contributed.svg'
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
          data-cy='code-for-all-chevron'
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
                showIndexContrib={showIndexContrib}
                filtersActive={filtersActive}
              />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default Affiliated;
