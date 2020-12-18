import React, { useState, useEffect } from "react";
import { useStyle } from "./styles.js";
import axios from "axios";
import { Dropdown } from "../../components/Dropdown";
// import { DropdownThumbnail } from "../../components/DropdownThumbnail";
import { BottomCallToAction } from "../../components/BottomCallToAction";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBreadcrumb from "../../components/NavBreadcrumbs";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { ParentContributor } from "../../components/ParentContributor";

export default function Contributors({ match }) {
  const affiliation = match.params.affiliation;

  const classes = useStyle();

  const [organizations, setOrganizations] = useState([]);
  const [organizationNamesList, setOrganizationNamesList] = useState([]);
  const [
    affiliatedOrganizationsObject,
    setAffiliatedOrganizationsObject,
  ] = useState({});
  const [unaffiliatedOrganizations, setUnaffiliatedOrganizations] = useState(
    []
  );
  const [affiliatedOpen, setAffiliatedOpen] = useState(false);
  const [unaffiliatedOpen, setUnaffiliatedOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/organizations/`
        );
        setOrganizations(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setOrgNames();

    function setOrgNames() {
      const names = [];
      for (const org of organizations) {
        names.push(org.name);
      }
      setOrganizationNamesList(names.sort());
    }

    const affiliated = {};
    let filteredOrganizationNames = filterOrganizations(organizations);
    createAffiliatedOrganizations();
    createUnaffiliatedOrganizations();

    function filterOrganizations(organizations) {
      return organizations.filter((org) =>
        org.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
      );
    }

    function createAffiliatedOrganizations() {
      //iterate through the json response
      for (const org of filteredOrganizationNames) {
        //find orgs that are affiliated
        if (org.parent_organization) {
          //check if the parent of the affiliated org is in the object
          if (affiliated[org.parent_organization.name]) {
            //if YES the parent is a key in the object, then add this current org to it's value array
            affiliated[org.parent_organization.name].push(org);
          } else {
            //if NO, add the parent as a key, AND add this current org to the value array
            affiliated[org.parent_organization.name] = [org];
          }
        }
      }
      setAffiliatedOrganizationsObject(affiliated);
    }

    function createUnaffiliatedOrganizations() {
      let unaffiliated = [];
      filteredOrganizationNames.forEach((org) => {
        if (!affiliated[org.name] && !org.parent_organization) {
          unaffiliated.push(org);
        }
      });
      setUnaffiliatedOrganizations(unaffiliated);
    }
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

  const UnaffiliatedOrganizations = ({ unAffiliatedOrgs }) => {
    const styles = {
      unaffiliatedContributor: {
        display: "flex",
        flexDirection: "row",
        margin: "0 0.5rem",
        width: "100%",
        gap: "0.5rem",
      },
      unaffiliatedContributorThumbnails: {
        border: "1px solid #BCBCBC",
        borderRadius: "4px",
      },
    };
    return (
      <div style={styles.unaffiliatedContributor}>
        {unAffiliatedOrgs.map((organization, index) => (
          <div style={styles.unaffiliatedContributorThumbnails}>
            <ContributorThumbnail
              organization={organization}
              key={index}
            ></ContributorThumbnail>
          </div>
        ))}
      </div>
    );
  };

  const AffiliatedOrganizations = ({ affiliatedObject }) => (
    <ParentContributor dropdownLength={affiliatedObject["Code for All"].length}>
      {affiliatedObject["Code for All"].map((organization, idx, ary) => {
        let numOfChildren = (organization) => {
          if (affiliatedObject[organization.name]) {
            return affiliatedObject[organization.name].length;
          } else {
            return 0;
          }
        };
        return (
          <Dropdown
            organization={organization}
            key={idx}
            hasInputValue={inputValue.length}
            dropdownLength={numOfChildren(organization)}
          >
            {affiliatedObject[organization.name] ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {affiliatedObject[organization.name].map((child, idx) => (
                  <ContributorThumbnail organization={child} key={idx} />
                ))}
              </div>
            ) : null}
          </Dropdown>
        );
      })}
    </ParentContributor>
  );

  return (
    <>
      <Header />
      <div className={classes.firstSectionWrapper}>
        <div className={classes.sectionContainer}>
          <NavBreadcrumb
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Contributors", href: "/contributors" },
            ]}
            color="white"
          />
        </div>
        <div className={classes.sectionContainer}>
          <div style={{ margin: "auto 0" }}>
            <h1 className={classes.heading}>Index Contributors</h1>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                margin: "1rem 0 0 0",
              }}
            >
              Check out our partners who have contributed to the Civic Tech
              Index
            </h3>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              inputValue={inputValue}
              onInputChange={(e, newValue) => setInputValue(() => newValue)}
              options={organizationNamesList}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search for a Contributing Organization"
                  margin="normal"
                  variant="outlined"
                  type="search"
                  size="normal"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  className={classes.input}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className={classes.unaffiliatedWrapper}>
        <div className={classes.sectionContainer}>
          <div className={classes.affiliation} tabIndex="0">
            <h2>Unaffiliated Contributors</h2>
            <img
              className={classes.chevron}
              onClick={() => setUnaffiliatedOpen(!unaffiliatedOpen)}
              src="/images/Chevron.png"
              alt="open for about link"
            />
          </div>
          <div className={classes.unaffiliatedWrapper}>
            {unaffiliatedOpen &&
              (unaffiliatedOrganizations.length ? (
                <UnaffiliatedOrganizations
                  unAffiliatedOrgs={unaffiliatedOrganizations}
                />
              ) : inputValue.length ? (
                <h1>No Results</h1>
              ) : (
                <h1>Loading...</h1>
              ))}
          </div>
        </div>
      </div>
      <div className={classes.affiliatedWrapper}>
        <div className={classes.sectionContainer}>
          <div className={classes.affiliation} tabIndex="0">
            <h2>Affiliated Contributors</h2>
            <img
              className={classes.chevron}
              onClick={() => setAffiliatedOpen(!affiliatedOpen)}
              src="/images/Chevron.png"
              alt="open for about link"
            />
          </div>
          <div className={classes.thumbnailsContainer}>
            {affiliatedOpen &&
              (affiliatedOrganizationsObject["Code for All"] ? (
                <AffiliatedOrganizations
                  affiliatedObject={affiliatedOrganizationsObject}
                />
              ) : inputValue.length ? (
                <h1>No Results</h1>
              ) : (
                <h1>Loading...</h1>
              ))}
          </div>
        </div>
      </div>
      <BottomCallToAction
        heading={"Want to add your organization?"}
        buttonText={"Contact Us"}
      />
      <Footer />
    </>
  );
}
