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
import BottomCallToAction from "../../components/BottomCallToAction";
import NavBreadcrumbs from "../../components/NavBreadcrumbs";
import { DropdownArrow } from "../../components/DropdownArrow.js";
import { AffiliatedOrganizations } from "./AffiliatedOrganizations";
import { UnaffiliatedOrganizations } from "./UnaffiliatedOrganizations";
import { useStyle } from "./styles.js";

export default function Contributors({ match }) {
  const affiliation = match.params.affiliation;

  const classes = useStyle();

  const [organizations, setOrganizations] = useState([]);
  const [organizationNamesList, setOrganizationNamesList] = useState([]);
  const [
    affiliatedOrganizationsObject,
    setAffiliatedOrganizationsObject,
  ] = useState({});
  const [affiliatedOpen, setAffiliatedOpen] = useState(false);
  const [unaffiliatedOpen, setUnaffiliatedOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/organizations/`
      );
      const sorted = result.data.sort((a, b) => a.id - b.id);
      setOrganizations(sorted);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const createAffiliatedOrganizations = () => {
      const input = inputValue.toLowerCase().replace(/\s/g, "");
      const affiliated = Object.create(null);
      // iterate through the json response
      const names = [];
      const addToAffiliated = (organization) => {
        if (!affiliated["Code for All"]) {
          affiliated["Code for All"] = [];
        }
        // check if the parent of the affiliated org is in the object
        if (!affiliated[organization.parent_organization.name]) {
          // if YES the parent is a key in the object, then add this current org to it's value array
          affiliated["Code for All"].push(
            organizations[organization.parent_organization.id - 1]
          );
          // if NO, add the parent as a key, AND add this current org to the value array
          affiliated[organization.parent_organization.name] = [organization];
        } else {
          affiliated[organization.parent_organization.name].push(organization);
          if (organization.parent_organization.name === "Code for All") {
            affiliated[organization.name] = [];
          }
        }
      };
      const addToUnaffiliated = (organization) => {
        if (affiliated["unaffiliated"]) {
          // if YES the parent is a key in the object, then add this current org to it's value array
          affiliated["unaffiliated"].push(organization);
        } else {
          // if NO, add the parent as a key, AND add this current org to the value array
          affiliated["unaffiliated"] = [organization];
        }
      };
      for (const org of organizations) {
        names.push(org.name);
        const orgName = org.name.toLowerCase().replace(/\s/g, "");
        if ((!inputValue || orgName.includes(input)) && org.id !== 2) {
          // find orgs that are affiliated
          if (org.parent_organization) {
            addToAffiliated(org);
          } else {
            addToUnaffiliated(org);
          }
        }
      }

      setAffiliatedOrganizationsObject(affiliated);
      setOrganizationNamesList(names.sort());
    };
    createAffiliatedOrganizations();
  }, [organizations, inputValue]);

  useEffect(() => {
    if (affiliation === "unaffiliated") {
      setUnaffiliatedOpen(true);
      setAffiliatedOpen(false);
    } else if (affiliation === "affiliated") {
      setAffiliatedOpen(true);
      setUnaffiliatedOpen(false);
    } else {
      setAffiliatedOpen(true);
      setUnaffiliatedOpen(true);
    }
  }, [affiliation]);

  return (
    <Box className='containerDefault'>
      <Container>
        <div className={classes.firstSectionWrapper}>
          <div className={classes.sectionContainer}>
            <NavBreadcrumbs
              crumbs={[
                { name: "Home", href: "/" },
                { name: "Contributors", href: "/contributors" },
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
              )}
            </div>
          </div>
        </div>
        <BottomCallToAction heading="Want to add your organization?" color="primary" />
      </Container>
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
      return <AffiliatedOrganizations affiliatedObject={organizations} />;
    }
  }
};

const TopCallToAction = ({
  heading,
  tagline,
  input,
  options,
  inputPlaceholder,
  setInputValue,
}) => {
  const classes = useStyle();
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1 style={{ marginBottom: 0 }}>{heading}</h1>
      <p
        style={{
          color: "white",
          textAlign: "center",
          margin: "3rem 0 ",
          fontSize: "1.5rem",
        }}
      >
        {tagline}
      </p>
      <Autocomplete
        id="free-solo"
        freeSolo
        inputValue={input}
        onInputChange={(e, newValue) => setInputValue(() => newValue)}
        options={options}
        className={classes.input}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={inputPlaceholder}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};
