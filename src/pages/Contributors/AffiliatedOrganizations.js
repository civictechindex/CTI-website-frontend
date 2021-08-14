/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import React, { useState, useEffect } from 'react';
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
    margin: 'auto',
  },
  afflnThumbnails: {
    width: '375px',
    height: '64px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    margin: '8px',
    [theme.breakpoints.down('md')]: {
      width: '270px',
      height: '60px',
      '& p': {
        fontSize: '20px',
        fontWeight: '500',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '220px',
      height: '54px',
      '& p': {
        fontWeight: '500',
        fontSize: '14px',
      },
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
      width: '118px',
      height: '31px',
    },
  },
}));

export const AffiliatedOrganizations = ({
  organizations,
  inputValue,
  organizationData,
  checkboxValue,
}) => {
  const classes = useStyles();

  const isChildThumbnail = true;
  let organizationArray;
  let parentdata;
  let parentChildobj;
  let mapsearchedChildParent;

  const sortFn = (sortKey) => {
    return function (a, b) {
      if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) {
        return 1;
      } else if (a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) {
        return -1;
      }
      return 0;
    };
  };

  const getParentData = () => {
    organizationArray = organizations['Code for All'].filter((item) => item);

    parentdata = [];

    organizationArray.forEach((org) => {
      if (org.depth === 3) {
        org['childNodes'] = [];
        org['isOpen'] = false;
        parentdata.push(org);
      }
      if (org.depth === 4) {
        parentChildobj = parentdata.find((d) => org.path.includes(d.path));

        mapsearchedChildParent = organizationData.find(
          (d) => org.path.includes(d.path) && d.depth === 3
        );

        const exist = parentdata.find(
          (d) => mapsearchedChildParent.path === d.path
        );

        if (!exist) {
          mapsearchedChildParent['childNodes'] = [];
          mapsearchedChildParent['isOpen'] = false;
          parentChildobj = mapsearchedChildParent;
          parentdata.push(mapsearchedChildParent);
        } else {
          parentChildobj = exist;
        }

        if (parentChildobj) {
          if (checkboxValue && org['cti_contributor']) {
            parentChildobj.childNodes.push(org);
          }
          if (!checkboxValue) {
            parentChildobj.childNodes.push(org);
          }
        } else {
          org['childNodes'] = [];
          org['isOpen'] = false;
          parentdata.push(org);
        }
      }
    });
    parentdata.sort(sortFn('name'));
    return parentdata;
  };

  const [currentThumbnails, setCurrentThumbnails] = useState(getParentData);

  useEffect(() => {
    setCurrentThumbnails(getParentData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, organizations, organizationData, checkboxValue]);

  let childSort;
  let childNode;
  if (currentThumbnails && inputValue.length === 0) {
    return (
      <Grid
        className={classes.thumbnailGrid}
        dropdownlength={currentThumbnails.length}
      >
        {currentThumbnails.map((org, i) => {
          childSort = org.childNodes.sort(sortFn('name'));
          childNode = org.isOpen ? childSort : childSort.slice(0, 8);
          return (
            <Dropdown
              checkboxValue={checkboxValue}
              organization={org}
              key={`affiliatedThumbnailsWrapper_${i}`}
              dropdownLength={org.childNodes.length}
              isOpen={false}
            >
              <Grid container alignItems='center'>
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
                          className={classes.afflnThumbnails}
                          key={`affiliatedThumbnail_child_${i}_${idx}`}
                        >
                          <ContributorThumbnail
                            organization={child}
                            isChildThumbnail={isChildThumbnail}
                            checkboxValue={checkboxValue}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  <ContributorThumbnail
                    isChildThumbnail={isChildThumbnail}
                    organization={org}
                    checkboxValue={checkboxValue}
                  />
                )}
                {org.childNodes.length > 8 ? (
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
                        const data = [...currentThumbnails];
                        data[i].isOpen = !data[i].isOpen;
                        setCurrentThumbnails(data);
                      }}
                    >
                      {currentThumbnails[i].isOpen ? 'View Less' : 'View All'}
                    </Button>
                  </Grid>
                ) : null}
              </Grid>
            </Dropdown>
          );
        })}
      </Grid>
    );
  } else if (
    currentThumbnails &&
    inputValue !== null &&
    inputValue.length > 0 &&
    inputValue !== ''
  ) {
    return (
      <Grid className={classes.thumbnailGrid}>
        {currentThumbnails.map((org, i) => {
          return (
            <Dropdown
              organization={org}
              key={`affiliatedThumbnailsWrapper_${i}`}
              dropdownLength={org.childNodes.length}
              isOpen={org.childNodes.length <= 5 ? true : false}
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
                          ></ContributorThumbnail>
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
