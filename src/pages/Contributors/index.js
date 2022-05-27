/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
  ArrayParam,
  BooleanParam,
  StringParam,
  useQueryParam,
  withDefault,
} from 'use-query-params';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NavBreadcrumbs from '../../components/NavBreadcrumbs';
import { useStyle } from './styles.js';
import GetStartedCard from '../../components/GetStartedCard';
import { TitleSection } from '../../components';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Affiliated } from './Affiliated';
import { UnaffiliatedOrganizations } from './UnaffiliatedOrganizations';
import OrganizationSearch from './OrganizationSearch';
import CircularProgress from '@material-ui/core/CircularProgress';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: '24px 0 24px 0' }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Grid>
  );
};

export default function Contributors() {
  const classes = useStyle();
  const location = useLocation();
  const [affiliatedCount, setAffiliatedCount] = useState(0);
  const [affiliatedOrganizations, setAffiliatedOrganizations] = useState([]);
  const [expandedOrgs, setExpandedOrgs] = useState([]);
  const [fromLink, setFromLink] = useState(true);
  const [organizations, setOrganizations] = useState([]);
  const [organizationNames, setOrganizationNames] = useState([]);
  const [orgStatus, setOrgStatus] = useState('any');
  const [filtersActive, setFiltersActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showIndexContrib, setShowIndexContrib] = useState(false);
  const [totalAffiliatedCount, setTotalAffiliatedCount] = useState(0);
  const [totalUnaffiliatedCount, setTotalUnaffiliatedCount] = useState(0);
  const [unaffiliatedCount, setUnaffiliatedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [unaffiliatedOrganizations, setUnaffiliatedOrganizations] = useState(
    []
  );
  const [, setQExpandedOrgs] = useQueryParam(
    'opened',
    withDefault(ArrayParam, [])
  );
  const [, setQOrgStatus] = useQueryParam(
    'status',
    withDefault(StringParam, 'any')
  );
  const [, setQSearchQuery] = useQueryParam(
    'query',
    withDefault(StringParam, '')
  );
  const [, setQShowIndexContrib] = useQueryParam(
    'contrib',
    withDefault(BooleanParam, false)
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/organizations/`
      );
      const sortedOrgs = result.data.sort((a, b) => a.name - b.name);
      sortedOrgs.forEach((org) => {
        org.totalCount = 0;
      });
      sortedOrgs.forEach((org) => {
        if (org.depth === 3) {
          org.totalCount += sortedOrgs.reduce((count, item) => {
            const isChildren = item.depth === 4 && item.path.includes(org.path);
            return (isChildren ? 1 : 0) + count;
          }, 0);
          if (org.totalCount === 0) org.totalCount = 1;
        }
      });
      let totalAfflCount = 0;
      sortedOrgs.forEach((org) => {
        if (org.depth === 2) {
          org.totalCount += sortedOrgs.reduce((count, item) => {
            const isChildren = item.depth === 3 && item.path.includes(org.path);
            return (isChildren ? item.totalCount : 0) + count;
          }, 0);
          totalAfflCount += org.totalCount;
        }
      });
      const names = [];
      let totalUnafflCount = 0;
      for (const org of sortedOrgs) {
        names.push(org.name);
        if (!org.affiliated) {
          totalUnafflCount++;
        }
      }
      setOrganizations(sortedOrgs);
      setOrganizationNames(names.sort());
      setTotalAffiliatedCount(totalAfflCount);
      setTotalUnaffiliatedCount(totalUnafflCount);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!location.search) {
      // handle case of navigating from menu item
      if (location.query) {
        setQOrgStatus(location.query.status);
        setQShowIndexContrib(location.query.contrib);
      }
      // handle case of user entering bookmarked URL directly
    } else if (fromLink) {
      const expanded = [];
      const queryParams = {};
      decodeURIComponent(location.search)
        .replace('?', '')
        .split('&')
        .forEach((param) => {
          const [key, val] = param.split('=');
          if (key === 'opened') {
            expanded.push(val);
          } else {
            queryParams[key] = val;
          }
        });
      setExpandedOrgs(expanded);
      if ('query' in queryParams) {
        setSearchQuery(queryParams.query);
      }
      if ('status' in queryParams) {
        setOrgStatus(queryParams.status);
      }
      if ('contrib' in queryParams) {
        setShowIndexContrib(!!Number(queryParams.contrib));
      }
      setFromLink(false);
    }
  }, [location.search]);

  useEffect(() => {
    setLoading(true);
    const affiliated = [];
    const unaffiliated = [];
    const input = searchQuery.toLowerCase().replace(/[%250\s]/g, '');
    for (const org of organizations) {
      const orgName = org.name.toLowerCase().replace(/[%250\s]/g, '');
      if (
        ((showIndexContrib && org.cti_contributor) || !showIndexContrib) &&
        orgName.includes(input)
      ) {
        if (org.affiliated) {
          affiliated.push(org);
        } else {
          unaffiliated.push(org);
        }
      }
    }
    const hasFilter = !!input || showIndexContrib;
    setFiltersActive(hasFilter);
    setAffiliatedCount(affiliated.length);
    setUnaffiliatedCount(unaffiliated.length);
    setAffiliatedOrganizations(affiliated);
    setUnaffiliatedOrganizations(unaffiliated);
    setLoading(false);
  }, [searchQuery, organizations, showIndexContrib]);

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
      'data-cy': `status-tab-${index}`,
    };
  };

  const getTabValue = (status) => {
    switch (status) {
    case 'any':
      return 0;
    case 'affiliated':
      return 2;
    case 'unaffiliated':
      return 1;
    default:
      return 0;
    }
  };

  const handleInputValueChange = (value) => {
    setSearchQuery(value);
    setQSearchQuery(value);
    setExpandedOrgs([]);
    setQExpandedOrgs([]);
  };

  const handleOrgClick = (org) => {
    const expanded = [...expandedOrgs];
    const idx = expanded.indexOf(org.id.toString());
    if (idx > -1) {
      expanded.splice(idx, 1);
    } else {
      expanded.push(org.id.toString());
    }
    setExpandedOrgs(expanded);
    setQExpandedOrgs(expanded);
  };

  const handleTabValueChange = (value) => {
    switch (value) {
    case 0:
      setOrgStatus('any');
      setQOrgStatus('any');
      break;
    case 1:
      setOrgStatus('unaffiliated');
      setQOrgStatus('unaffiliated');
      break;
    case 2:
      setOrgStatus('affiliated');
      setQOrgStatus('affiliated');
      break;
    default:
      setOrgStatus('any');
      setQOrgStatus('any');
    }
  };

  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Civic Tech Organizations', href: '/organizations' },
  ];
  
  return (
    <Box className='pageContainer'>
      <Box className='boxBackground'>
        <Container className='containerTeal'>
          <Box className='boxBackground' display='flex' alignContent='center'>
            <Grid container className={classes.firstSectionWrapper}>
              <Grid item xs={12}>
                <NavBreadcrumbs crumbs={breadCrumbLinks} />
              </Grid>
              <Grid item xs={12}>
                <TitleSection>Civic Tech Organizations</TitleSection>
                <Grid item xs={12}>
                  <Typography className='genSubheadTypo'>
                    View all Civic Tech Organizations with open-source
                    repositories.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <OrganizationSearch
                    inputValue={searchQuery}
                    options={organizationNames}
                    setInputValue={handleInputValueChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box className='containerGray'>
        {loading ? (
          <Box my={12} display='flex' justifyContent='center'>
            <CircularProgress color='secondary' />
          </Box>
        ) : (
          <Container>
            <AppBar position='static' color='default' elevation={0}>
              <Tabs
                value={getTabValue(orgStatus)}
                onChange={(e, val) => handleTabValueChange(val)}
                variant='fullWidth'
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
              >
                <Tab
                  icon='All'
                  label={` (${affiliatedCount + unaffiliatedCount})`}
                  {...a11yProps(0)}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                  }}
                />
                <Tab
                  icon='Unaffiliated'
                  label={` (${unaffiliatedCount})`}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                  }}
                  {...a11yProps(1)}
                />
                <Tab
                  icon='Affiliated'
                  label={` (${affiliatedCount})`}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                  }}
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
            <Grid index={getTabValue(orgStatus)}>
              <FormGroup className={classes.checkBox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showIndexContrib}
                      data-cy='index-contributors-checkbox'
                      onChange={(e) => {
                        setShowIndexContrib(e.target.checked);
                        setQShowIndexContrib(e.target.checked);
                      }}
                    />
                  }
                  label={
                    <Typography className={classes.formControlLabel}>
                      Index Contributor
                    </Typography>
                  }
                />
              </FormGroup>
              <TabPanel value={getTabValue(orgStatus)} index={0}>
                <UnaffiliatedOrganizations
                  organizations={unaffiliatedOrganizations}
                  filtersActive={filtersActive}
                  unaffiliatedCount={unaffiliatedCount}
                  totalUnaffiliatedCount={totalUnaffiliatedCount}
                />
                <Affiliated
                  affiliatedCount={affiliatedCount}
                  classes={classes}
                  expandedOrgs={expandedOrgs}
                  setExpandedOrgs={(expanded) => {
                    setExpandedOrgs(expanded);
                    setQExpandedOrgs(expanded);
                  }}
                  filtersActive={filtersActive}
                  inputValue={searchQuery}
                  onOrgClick={handleOrgClick}
                  organizationData={organizations}
                  organizations={affiliatedOrganizations}
                  showIndexContrib={showIndexContrib}
                  totalAffiliatedCount={totalAffiliatedCount}
                />
              </TabPanel>
              <TabPanel value={getTabValue(orgStatus)} index={1}>
                <UnaffiliatedOrganizations
                  organizations={unaffiliatedOrganizations}
                  filtersActive={filtersActive}
                  unaffiliatedCount={unaffiliatedCount}
                  totalUnaffiliatedCount={totalUnaffiliatedCount}
                />
              </TabPanel>
              <TabPanel value={getTabValue(orgStatus)} index={2}>
                <Affiliated
                  affiliatedCount={affiliatedCount}
                  classes={classes}
                  expandedOrgs={expandedOrgs}
                  setExpandedOrgs={(expanded) => {
                    setExpandedOrgs(expanded);
                    setQExpandedOrgs(expanded);
                  }}
                  filtersActive={filtersActive}
                  inputValue={searchQuery}
                  onOrgClick={handleOrgClick}
                  organizationData={organizations}
                  organizations={affiliatedOrganizations}
                  showIndexContrib={showIndexContrib}
                  totalAffiliatedCount={totalAffiliatedCount}
                />
              </TabPanel>
            </Grid>
          </Container>
        )}
      </Box>
      <Box className='containerWhite'>
        <Container>
          <GetStartedCard
            headerTitle='Want to add your organization?'
            buttonText='Add Your Organization'
            buttonHref='/join-index/tag-generator-wizard'
          />
        </Container>
      </Box>
    </Box>
  );
}
