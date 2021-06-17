/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable sort-keys */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import NavBreadcrumbs from "../../components/NavBreadcrumbs";
import { DropdownArrow } from "../../components/DropdownArrow.js";
import { AffiliatedOrganizations } from "./AffiliatedOrganizations";
import { UnaffiliatedOrganizations } from "./UnaffiliatedOrganizations";
import { useStyle } from "./styles.js";
import GetStartedCard from '../../components/GetStartedCard'
import { TitleSection } from '../../components'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


// eslint-disable-next-line
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </Grid>
  );
}



export default function Contributors({ match }) {

  const affiliation = match.params.affiliation;

  const classes = useStyle();

  const [organizations, setOrganizations] = useState([]);
  const [organizationNamesList, setOrganizationNamesList] = useState([]);

  const [affiliatedOrganizationsObject, setAffiliatedOrganizationsObject] = useState({});

  const [affiliatedOpen, setAffiliatedOpen] = useState(false);

  const [affiliatedSepOpen, setAfflnSepOpen] = useState(false);


  const [unaffiliatedOpen, setUnaffiliatedOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [unaffiliated, getAffiliatedNames] = useState([]);
  const [unaffiliatedCount, getunaffiliatedCount] = useState(0);
  const [affiliatedCount, getaffiliatedCount] = useState(0);

  let count1 =0, count2 =0;


  useEffect(() => {
    const fetchData = async () => {


      const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/`)

      const organization = result.data;

      const sorted = organization.sort((a, b) => a.id - b.id);
      setOrganizations(sorted);

    };

    fetchData();
  }, []);

  useEffect(() => {
    const createAffiliatedOrganizations = () =>
    {
      const input = inputValue.toLowerCase().replace(/\s/g, "");
      const affiliated = Object.create(null);
      // iterate through the json response
      const names = [];

      const addToAffiliated = (organization) => {

        if (!affiliated["Code for All"]) {
          affiliated["Code for All"] = [];
        }
        if (affiliated["Code for All"]) {
          affiliated["Code for All"].push(organizations[organization.id - 2]);
          affiliated[organization.name] = [organization];

        }

      };

      const addToUnaffiliated = (organization) => {

        if (affiliated["unaffiliated"]) {
          affiliated["unaffiliated"].push(organization);
        }
        else {
          affiliated["unaffiliated"] = [organization];
        }

        getAffiliatedNames(organization);

      };



      for (const org of organizations)
      {
        names.push(org.name);
        const orgName = org.name.toLowerCase().replace(/\s/g, "");



        if ((!inputValue || orgName.includes(input)))
        {
          if (org.affiliated === false)
          {

            count1++;
            addToUnaffiliated(org);

          }
          else
          {

            count2++;
            addToAffiliated(org);
          }
        }
      }

      if (count1 !== 0 || count2 !== 0)
      {

        getunaffiliatedCount(count1);
        getaffiliatedCount(count2);

      }

      setAffiliatedOrganizationsObject(affiliated);
      setOrganizationNamesList(names.sort());


    };
    createAffiliatedOrganizations();
  }, [organizations, inputValue, count1,count2]);



  useEffect(() => {
    if (affiliation === "unaffiliated") {
      setUnaffiliatedOpen(true);
      setAffiliatedOpen(false);
      setAfflnSepOpen(false);
    } else if (affiliation === "affiliated") {
      setAffiliatedOpen(true);
      setUnaffiliatedOpen(false);
      setAfflnSepOpen(true);
    } else {
      setAffiliatedOpen(false);
      setUnaffiliatedOpen(true);
      setAfflnSepOpen(false);
    }
  }, [affiliation]);

  // Tab Code

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  // eslint-disable-next-line
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const theme = createMuiTheme({

    overrides: {
      MuiTab: {
        "root": {
          color: 'theme​.palette.​text.disabled',
          fontSize: '32px',
          fontWeight: 'bold',
          textTransform: 'none',
          display: "flex",
          '&$selected': {
            color: '#006B95',
          },

        },
        wrapper: {
          flexDirection: "row",
          width: "auto",
        },

      },

    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };


  // CheckBox Code
  const [state, setState] = React.useState({
    indexContributor: true,

  });

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };



  return (

    <Box className='pageContainer'>
      <Box className='containerDefault'>
        <Container className={classes.firstSectionWrapper}>
          <NavBreadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Organizations", href: "/contributors" },
            ]}
          />
          <Grid container>
            <TitleSection>Organizations</TitleSection>
            <Grid item xs={12}>
              <Typography color='textSecondary' className={classes.textStyle}>Check out our partners who have contributed to the Civic Tech Index</Typography>
            </Grid>
            <Grid item xs={12}>

              <TopCallToAction
                options={organizationNamesList}
                inputValue={inputValue}
                setInputValue={setInputValue}
                inputPlaceholder="Search for an organization"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SearchRoundedIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='containerGray'>

        <Container>
          <MuiThemeProvider theme={theme}>
            <AppBar position="static" color="default" elevation={0}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
              >

                <Tab label={<><span  style={{ display:'flex',alignItems:'center', paddingLeft: '10px' }}>({unaffiliatedCount + affiliatedCount })</span></>} icon="All" {...a11yProps(0)} className={classes.tabVal} />
                <Tab  icon="Unaffiliated"  label={<><span  style={{ display:'flex',alignItems:'center', paddingLeft: '10px' }}>({affiliatedOrganizationsObject["unaffiliated"] ? affiliatedOrganizationsObject["unaffiliated"].length : 0})</span></>} className={classes.tabVal} {...a11yProps(1)} />
                <Tab  icon="Affiliated" label={<><span  style={{ display:'flex',alignItems:'center', paddingLeft: '10px' }}>({affiliatedCount})</span></>} className={classes.tabVal} {...a11yProps(2)} />
              </Tabs>
            </AppBar>
          </MuiThemeProvider>


          <Grid index={value}>
            <Grid>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleChangeCheckbox} name="indexcontributor" className={classes.chkBoxStyle}/>}
                  label={<Typography className={classes.formControlLabel}>Index Contributor</Typography>}

    <Box className='containerDefault'>
      <Container>
        <div className={classes.firstSectionWrapper}>
          <div className={classes.sectionContainer}>
            <NavBreadcrumbs
              crumbs={[
                { name: "Home", href: "/home" },
                { name: "Organizations", href: "/organizations/all" },
              ]}
            />
          </div>
          <div className={classes.sectionContainer}>
            <TopCallToAction
              heading="Index Contributors"
              tagline="Check out our partners who have contributed to the Civic Tech Index"
              options={organizationNamesList}
              inputValue={inputValue}
              setInputValue={setInputValue}
              inputPlaceholder="Search for an organization"
            />
          </div>
        </div>
        <div className={classes.unaffiliatedWrapper}>
          <div className={classes.sectionContainer}>
            <div className={classes.affiliation}>
              <Typography variant='h2' color='primary'>
              Unaffiliated Contributors
              </Typography>
              <DropdownArrow setOpenFunction={setUnaffiliatedOpen} />
            </div>
            <div>
              {unaffiliatedOpen && (
                <Affiliation
                  organizations={affiliatedOrganizationsObject["unaffiliated"]}
                  inputValue={inputValue}
                  classes={classes}
                  affiliation="unaffiliated"
                />
              )}
            </div>
          </div>
        </div>
        <div className={classes.affiliatedWrapper}>
          <div className={classes.sectionContainer}>
            <div className={classes.affiliation}>
              <Typography variant='h2' color='textPrimary'>
              Affiliated Contributors
              </Typography>
              <DropdownArrow setOpenFunction={setAffiliatedOpen} />
            </div>
            <div className={classes.affiliatedOrgsContainer}>
              {affiliatedOpen && (
                <Affiliation
                  organizations={affiliatedOrganizationsObject}
                  inputValue={inputValue}
                  classes={classes}
                  affiliation="affiliated"

                />
              </FormGroup>
            </Grid>
            <TabPanel value={value} index={0}>
              <Grid className={classes.unaffiliatedWrapper}>
                <Grid className={classes.sectionContainer}>
                  <Box component="div" className={classes.affiliation}>
                    <Typography variant='h2' color='primary' component={'span'} style={{ paddingLeft: '82px', fontSize: '28px' }}>
                        Unaffiliated Organizations  ({affiliatedOrganizationsObject["unaffiliated"] ? affiliatedOrganizationsObject["unaffiliated"].length : 0} / {affiliatedOrganizationsObject["unaffiliated"] ? affiliatedOrganizationsObject["unaffiliated"].length : 0} )
                    </Typography>
                  </Box>
                  <Box>
                    {unaffiliatedOpen && (
                      <Affiliation
                        organizations={affiliatedOrganizationsObject["unaffiliated"]}
                        inputValue={inputValue}
                        unaffiliated={unaffiliated}
                        classes={classes}
                        affiliation="unaffiliated"
                      />
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Grid className={classes.affiliatedWrapper}>
                <Grid className={classes.sectionContainer}>
                  <Box className={classes.affiliation}>
                    <Typography variant='h2' color='primary' component={'span'} style={{ paddingLeft: '166px', color: '#004364',fontSize: '28px' }}>
                        Affiliated Organizations ({affiliatedCount} / {affiliatedCount} )
                    </Typography>
                  </Box>

                  <Grid className={classes.affiliatedOrgsContainer}>
                    <Box className={affiliatedOpen ? `${classes.blueColor} ` : `${classes.codeForAllWrapper}`}>
                      <img
                        src="/images/Code_for_All.png"
                        alt="code for all logo"
                        style={{ marginRight: "10px" }}
                      />
                      <a style={{ textDecoration: "none" }}href={"https://codeforall.org"}  target="_blank"  rel="noreferrer noopener" >
                        <Typography variant='body2' className={classes.codeforAllText}>Code for All  ( {affiliatedCount} / {affiliatedCount} )</Typography>
                      </a>
                      <DropdownArrow  setOpenFunction={setAffiliatedOpen}  />


                    </Box>
                    <Box style={{ marginLeft: '-46px',width: '928px' }}>

                      {affiliatedOpen && (
                        <Affiliation
                          organizations={affiliatedOrganizationsObject}
                          inputValue={inputValue}
                          classes={classes}
                          affiliation="affiliated"

                        />
                      )}
                    </Box>


                  </Grid>


                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className={classes.unaffiliatedWrapper}>
                <div className={classes.sectionContainer}>
                  <div className={classes.affiliation}>
                    <Typography variant='h2' color='primary'>
                          Unaffiliated Organizations  ({unaffiliatedCount} / {unaffiliatedCount} )
                    </Typography>
                  </div>
                  <div>
                    {unaffiliatedOpen && (
                      <Affiliation
                        organizations={affiliatedOrganizationsObject["unaffiliated"]}
                        inputValue={inputValue}
                        classes={classes}
                        affiliation="unaffiliated"
                      />
                    )}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>


              <Grid className={classes.affiliatedWrapper}>
                <Grid className={classes.sectionContainer}>
                  <Box className={classes.affiliation}>
                    <Typography variant='h2' color='primary'>
                        Affiliated Organizations ({affiliatedCount} / {affiliatedCount})
                    </Typography>

                  </Box>
                  <Grid>
                    <Box className={affiliatedSepOpen ? `${classes.blueColor} ` : `${classes.codeForAllWrapper}`}>
                      <img
                        src="/images/Code_for_All.png"
                        alt="code for all logo"
                      />
                      <Typography variant='body2'>Code for All ( {affiliatedCount} / {affiliatedCount} )</Typography>
                      <DropdownArrow setOpenFunction={setAfflnSepOpen}  />
                    </Box>
                    <Box style={{ marginLeft: '-46px',width: '928px' }}>

                      {affiliatedSepOpen && (
                        <Affiliation
                          organizations={affiliatedOrganizationsObject}
                          inputValue={inputValue}
                          classes={classes}
                          affiliation="affiliated"
                        />
                      )}
                    </Box>

                  </Grid>


                </Grid>
              </Grid>

            </TabPanel>
          </Grid>
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
}

const Affiliation = ({ organizations, inputValue, classes, affiliation }) => {

  if (!organizations && !inputValue) {
    return <h3 className={classes.loaders}>Loading...</h3>;
  } else if (!organizations && inputValue) {
    return <h3 className={classes.loaders}>No Results</h3>;
  } else {
    if (affiliation === "unaffiliated") {
      return <UnaffiliatedOrganizations unAffiliatedOrgs={organizations} />;
    } else {
      return <AffiliatedOrganizations organizations={organizations} />;
    }
  }
};
const useStyles = makeStyles(theme => ({
  root:
  {

    "& .MuiAutocomplete-inputRoot": {
      paddingRight: '14px',

    },

  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
    borderBottomRightRadius: '4px',
    borderTopRightRadius: '4px',
    color: theme.palette.text.secondary,
    height: '56px',
    marginRight: '-14px',
    width: '51px',
  },
  input: {
    width: '945px',
    height: '64px',
    borderRadius: '7px',
    fontSize: '1.5rem',
    paddingBottom: '4em',
    paddingTop: '15px',
  },
  "& .MuiSvgIcon-root": {
    root: {
      width: 168,
      height: 168,
    },
  },


}));

const TopCallToAction = ({
  heading,
  tagline,
  input,
  options,
  inputPlaceholder,
  setInputValue,
}) => {
  const classes = useStyles();


  return (
    <Autocomplete
      id="free-solo"
      freeSolo
      inputValue={input}
      onInputChange={(e, newValue) => setInputValue(() => newValue)}
      options={options}
      className={classes.root}
      disableClearable
      forcePopupIcon={false}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={inputPlaceholder}
          className={classes.input}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: "search",
            endAdornment: (
              <InputAdornment position='end'>
                <SearchRoundedIcon className={classes.icon} />

              </InputAdornment>
            ),
          }}
        />
      )}
    />

  );
};
