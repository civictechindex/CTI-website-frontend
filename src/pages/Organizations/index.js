import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import GetStartedCard from '../../components/GetStartedCard';
import NavBreadcrumbs from '../../components/NavBreadcrumbs';
import TitleSection from '../../components/TitleSection';

import OrgSearch from './OrgSearch';
import UnaffiliatedOrganizations from './UnaffiliatedOrganizations';
import { useStyles } from './styles.js';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Organizations = (props) => {
  const {
    history,
    match: {
      params: { affiliation },
    },
  } = props;
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');
  const [organizations, setOrganizations] = useState([]);
  const [organizationNamesList, setOrganizationNamesList] = useState([]);
  const [filteredAffiliatedOrgs, setFilteredAffiliatedOrgs] = useState([]);
  const [filteredUnaffiliatedOrgs, setFilteredUnaffiliatedOrgs] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
      .then((response) => {
        const organizations = response.data;
        setOrganizations(organizations);
        const names = organizations.map((org) => org.name);
        setOrganizationNamesList(names.sort());
        let affiliated = [];
        let unaffiliated = [];
        organizations.forEach((org) => {
          if (org.affiliated) {
            affiliated.push(org);
          } else {
            unaffiliated.push(org);
          }
        });
        setFilteredAffiliatedOrgs(affiliated);
        setFilteredUnaffiliatedOrgs(unaffiliated);
      })
      .catch((error) => {
        console.log('Error fetching organizations');
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (affiliation) {
      setTabValue(affiliation);
    } else {
      setTabValue("all");
    }
  }, [affiliation]);

  useEffect(() => {
    const filterText = inputValue.toLowerCase().replace(/\s/g, '');
    let affiliated = [];
    let unaffiliated = [];
    organizations.forEach((org) => {
      if (
        inputValue.length === 0 ||
        org.name.toLowerCase().replace(/\s/g, '').includes(filterText)
      ) {
        if (org.affiliated) {
          affiliated.push(org);
        } else {
          unaffiliated.push(org);
        }
      }
    });
    setFilteredAffiliatedOrgs(affiliated);
    setFilteredUnaffiliatedOrgs(unaffiliated);
  }, [inputValue, organizations]);

  const [tabValue, setTabValue] = useState("all");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    history.push(`/organizations/${newValue}`);
  };

  return (
    <Box className='pageContainer'>
      <Box className='containerDefault'>
        <Container className={classes.firstSection}>
          <NavBreadcrumbs
            crumbs={[
              { name: 'Home', href: '/' },
              { name: 'Organizations', href: '/contributors' },
            ]}
          />
          <Grid container>
            <TitleSection>Organizations</TitleSection>
            <Grid item xs={12}>
              <Typography
                color='textSecondary'
                className={classes.subheading}
                gutterBottom
              >
                Check out our partners who have contributed to the Civic Tech
                Index
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <OrgSearch
                options={organizationNamesList}
                inputValue={inputValue}
                setInputValue={setInputValue}
                inputPlaceholder='Search for an organization'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container>
          <TabContext value={tabValue}>
            <AppBar position='static' color='default' elevation={0}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant='fullWidth'
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
              >
                <Tab
                  label={`All (${
                    filteredAffiliatedOrgs.length +
                    filteredUnaffiliatedOrgs.length
                  })`}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                  }}
                  value="all"
                  {...a11yProps("all")}
                />
                <Tab
                  label={`Unaffiliated (${filteredUnaffiliatedOrgs.length})`}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                  }}
                  value="unaffiliated"
                  {...a11yProps("unaffiliated")}
                />
                <Tab
                  label={`Affiliated (${filteredAffiliatedOrgs.length})`}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                  }}
                  value="affiliated"
                  {...a11yProps("affiliated")}
                />
              </Tabs>
            </AppBar>
            <TabPanel value='all' className={classes.tabPanel}>
              All TBD / {affiliation}
              <UnaffiliatedOrganizations organizations={filteredUnaffiliatedOrgs} />
            </TabPanel>
            <TabPanel value='unaffiliated' className={classes.tabPanel}>
              <UnaffiliatedOrganizations organizations={filteredUnaffiliatedOrgs} />
            </TabPanel>
            <TabPanel value='affiliated' className={classes.tabPanel}>
              Affiliated TBD
            </TabPanel>
          </TabContext>
        </Container>
      </Box>
      <Box className='containerWhite'>
        <Container>
          <GetStartedCard
            headerTitle='Want to add your organization?'
            buttonText='Tag your project'
            buttonHref='/taggenerator'
          />
        </Container>
      </Box>
    </Box>
  );
};

export default withRouter(Organizations);
