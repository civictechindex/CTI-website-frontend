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
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import GetStartedCard from '../../components/GetStartedCard';
import NavBreadcrumbs from '../../components/NavBreadcrumbs';
import TitleSection from '../../components/TitleSection';

import OrganizationSearch from './OrganizationSearch';
// import { useStyles } from './styles.js';

const Organizations = (props) => {
  const {
    history,
    match: {
      params: { affiliation },
    },
  } = props;
  const [inputValue, setInputValue] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [organizationNamesList, setOrganizationNamesList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
      const organization = result.data;
      const sorted = organization.sort((a, b) => a.id - b.id);
      setOrganizations(sorted);
    };
    fetchData();
  }, []);
  return (
    <Box className='pageContainer'>
      <Box className='containerDefault'>
        <Container>
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
      <Box className='containerGray'>TBD {affiliation}</Box>
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
