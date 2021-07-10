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

import OrganizationSearch from './OrganizationSearch';
import { useStyles } from './styles.js';

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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/organizations/`
      );
      const organization = result.data;
      const sorted = organization.sort((a, b) => a.id - b.id);
      setOrganizations(sorted);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const names = organizations.map((org) => org.name);
    setOrganizationNamesList(names.sort());
  }, [organizations]);

  useEffect(() => {
    if (affiliation === 'unaffiliated') {
      setTabValue(1);
    } else if (affiliation === 'affiliated') {
      setTabValue(2);
    } else {
      setTabValue(0);
    }
  }, [affiliation]);

  // eslint-disable-next-line
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    const newUrlPart =
      newValue === 0 ? 'all' : newValue === 1 ? 'unaffiliated' : 'affiliated';
    setTabValue(newValue);
    history.push(`/organizations/${newUrlPart}`);
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
              <OrganizationSearch
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
                // label={`All (${totalunaffiliatedCount + totalaffiliatedCount})`}
                label={`All`}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected,
                }}
                {...a11yProps(0)}
              />
              <Tab
                // label={`Unaffiliated (${
                //   affiliatedOrganizationsObject['unaffiliated']?.length || 0
                // })`}
                label={`Unaffiliated`}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected,
                }}
                {...a11yProps(1)}
              />
              <Tab
                // label={`Affiliated (${totalaffiliatedCount})`}
                label={`Affiliated`}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected,
                }}
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0} className={classes.tabPanel}>
            All TBD / {affiliation}
          </TabPanel>
          <TabPanel value={tabValue} index={1} className={classes.tabPanel}>
            Unaffiliated TBD
          </TabPanel>
          <TabPanel value={tabValue} index={2} className={classes.tabPanel}>
            Affiliated TBD
          </TabPanel>
        </TabContext>
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
