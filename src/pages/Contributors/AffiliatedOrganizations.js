/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import React, { useState, useEffect } from 'react';
import { ArrayParam, useQueryParam, withDefault } from 'use-query-params';
import { Dropdown } from '../../components/Dropdown';
import { ContributorThumbnail } from '../../components/ContributorThumbnail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  thumbnailGrid: {
    paddingBottom: '24px',
  },
  affiliatedThumbnailsWrapper: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '10px',
    justifyContent: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: '0',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
  },
  afflnThumbnails: {
    height: '64px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    margin: '8px',
    width: '392px',
    [theme.breakpoints.down('lg')]: {
      height: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '36px',
    },
  },
  button: {
    width: '211px',
    height: '44px',
    margin: 'auto',
    borderRadius: '31px',
    border: '1px solid',
    borderColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.dark,
    fontSize: '16px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    [theme.breakpoints.down('md')]: {
      width: '74px',
      height: '19px',
      fontSize: '13px',
    },
  },
}));

export const AffiliatedOrganizations = ({
  expandedOrgs,
  filtersActive,
  inputValue,
  onOrgClick,
  orgTree,
  setOrgTree,
  showIndexContrib,
}) => {
  const classes = useStyles();

  const isChildThumbnail = true;
  const [viewAllChildren, setViewAllChildren] = useState([]);

  const handleViewAllClick = (i) => {
    const viewAll = [...viewAllChildren];
    const idx = viewAll.indexOf(orgTree[i].id.toString());
    if (idx > -1) {
      viewAll.splice(idx, 1);
    } else {
      viewAll.push(orgTree[i].id.toString());
    }
    setViewAllChildren(viewAll);
  };

  let childSort;
  let childNode;
  if (!filtersActive) {
    return (
      <Grid
        className={classes.thumbnailGrid}
        dropdownlength={orgTree.length}
        data-cy='affiliated-organizations'
      >
        {orgTree.map((org, i) => {
          childSort = org.childNodes;
          childNode = viewAllChildren.includes(org.id.toString())
            ? childSort
            : childSort.slice(0, 6);
          return (
            <Dropdown
              checkboxValue={showIndexContrib}
              dropdownLength={org.childNodes.length}
              filtersActive={filtersActive}
              isOpen={expandedOrgs.includes(org.id.toString())}
              key={`affiliatedThumbnailsWrapper_${i}`}
              onClick={onOrgClick}
              organization={org}
            >
              <Grid
                container
                style={{ justifyContent: 'center' }}
                alignItems='center'
              >
                {childNode.length > 0 ? (
                  <Grid
                    item
                    container
                    xs={10}
                    className={classes.affiliatedThumbnailsWrapper}
                  >
                    {childNode.map((child, idx) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={5}
                          lg={5}
                          className={classes.afflnThumbnails}
                          key={`affiliatedThumbnail_child_${i}_${idx}`}
                        >
                          <ContributorThumbnail
                            organization={child}
                            isChildThumbnail={isChildThumbnail}
                            checkboxValue={showIndexContrib}
                            inputValue={inputValue}
                            filtersActive={filtersActive}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  <ContributorThumbnail
                    isChildThumbnail={isChildThumbnail}
                    organization={org}
                    checkboxValue={showIndexContrib}
                    inputValue={inputValue}
                    filtersActive={filtersActive}
                  />
                )}
                {org.childNodes.length > 6 ? (
                  <Grid
                    item
                    container
                    xs={10}
                    style={{ margin: 'auto', paddingTop: '16px' }}
                  >
                    <Button
                      data-cy='viewBtnClick'
                      id='viewAllButton'
                      className={classes.button}
                      onClick={() => {
                        handleViewAllClick(i);
                      }}
                    >
                      {viewAllChildren.includes(org.id.toString())
                        ? 'View Less'
                        : 'View All'}
                    </Button>
                  </Grid>
                ) : null}
              </Grid>
            </Dropdown>
          );
        })}
      </Grid>
    );
  } else {
    return (
      <Grid
        className={classes.thumbnailGrid}
        data-cy='affiliated-organizations'
      >
        {orgTree.map((org, i) => {
          return (
            <Dropdown
              checkboxValue={showIndexContrib}
              dropdownLength={org.childNodes.length}
              filtersActive={filtersActive}
              isOpen={expandedOrgs.includes(org.id.toString())}
              onClick={onOrgClick}
              key={`affiliatedThumbnailsWrapper_${i}`}
              organization={org}
            >
              <Box className={classes.affiliatedThumbnailsWrapper}>
                {org.childNodes.length === 0 ? (
                  ' '
                ) : (
                  <>
                    {org.childNodes.map((child, idx) => {
                      return (
                        <Typography
                          component='div'
                          className={classes.afflnThumbnails}
                          key={`affiliatedThumbnail_child_${i}_${idx}`}
                        >
                          <ContributorThumbnail
                            organization={child}
                            isChildThumbnail={isChildThumbnail}
                            inputValue={inputValue}
                            filtersActive={filtersActive}
                          />
                        </Typography>
                      );
                    })}
                  </>
                )}
              </Box>
            </Dropdown>
          );
        })}
      </Grid>
    );
  }
};
