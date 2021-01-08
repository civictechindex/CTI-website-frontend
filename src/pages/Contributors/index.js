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
    createAffiliatedOrganizations();

    function createAffiliatedOrganizations() {
      const affiliated = Object.create(null);
      affiliated["Code for All"] = [];
      //iterate through the json response
      const names = [];
      for (let org of organizations) {
        names.push(org.name);
        let orgName = org.name.toLowerCase().replace(/\s/g, "");
        let input = inputValue.toLowerCase().replace(/\s/g, "");
        if (
          (!inputValue ||
          org.name.toLowerCase().includes(inputValue.toLowerCase()))
          && (org.id !== 2)
        ) {
            //find orgs that are affiliated
            if (org.parent_organization) {
              //check if the parent of the affiliated org is in the object
              if (affiliated[org.parent_organization.name]) {
                //if YES the parent is a key in the object, then add this current org to it's value array
                affiliated[org.parent_organization.name].push(org);
                if (org.parent_organization.name === "Code for All") {
                  affiliated[org.name] = [];
                }
              } else {
                affiliated["Code for All"].push(
                  organizations[org.parent_organization.id - 1]
                );
                //if NO, add the parent as a key, AND add this current org to the value array
                affiliated[org.parent_organization.name] = [org];
              }
            } else {
              if (affiliated["unaffiliated"]) {
                //if YES the parent is a key in the object, then add this current org to it's value array
                affiliated["unaffiliated"].push(org);
              } else {
                //if NO, add the parent as a key, AND add this current org to the value array
                affiliated["unaffiliated"] = [org];
              }
            }
          
        }
      }
      setAffiliatedOrganizationsObject(affiliated);
      setOrganizationNamesList(names.sort());
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
    return (
      <div className={classes.unaffiliatedThumbnailsWrapper}>
        {unAffiliatedOrgs.map((organization, index) => (
          <div className={classes.unaffiliatedThumbnails}>
            <ContributorThumbnail
              organization={organization}
              key={index}
            ></ContributorThumbnail>
          </div>
        ))}
      </div>
    );
  };

  const AffiliatedOrganizations = ({ affiliatedObject }) => {
    let numOfChildren = (organization) => {
      if (affiliatedObject[organization.name]) {
        return affiliatedObject[organization.name].length;
      } else {
        return 0;
      }
    };
    return (
        Object.keys(affiliatedObject)[0]?(
      <ParentContributor
        dropdownLength={affiliatedObject['Code for All'].length}
        isOpen={ true }
      >
        {affiliatedObject["Code for All"].map((organization, idx) => {
          return (
            <div>
              <Dropdown
                organization={organization}
                key={idx}
                hasInputValue={inputValue.length}
                dropdownLength={numOfChildren(organization)}
                isOpen={
                  affiliatedObject["Code for All"].length < 3 ? true : false
                }
              >
                {affiliatedObject[organization.name] ? (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      margin: "1rem 0",
                      justifyContent: "space-between",
                      gap: "0.4rem",
                    }}
                  >
                    {affiliatedObject[organization.name].map((child, idx) => (
                      <ContributorThumbnail organization={child} key={idx} />
                    ))}
                  </div>
                ) : null}
              </Dropdown>
            </div>
          );
        })}
      </ParentContributor>):null
    );
  };

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
          <div style={{ display: "grid", placeItems: "center" }}>
            <h1 style={{ marginBottom: 0 }}>Index Contributors</h1>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                margin: "3rem 0 ",
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
              className={classes.input}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search for a Contributing Organization"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className={classes.unaffiliatedWrapper}>
        <div className={classes.sectionContainer}>
          <div className={classes.affiliation}>
            <h2>Unaffiliated Contributors</h2>
          </div>
          <div className={classes.unaffiliatedWrapper}>
            {unaffiliatedOpen &&
              (affiliatedOrganizationsObject["unaffiliated"] ? (
                <UnaffiliatedOrganizations
                  unAffiliatedOrgs={
                    affiliatedOrganizationsObject["unaffiliated"]
                  }
                />
              ) : inputValue.length ? (
                <h3 className={classes.loaders}>No Results</h3>
              ) : (
                <h3 className={classes.loaders}>Loading...</h3>
              ))}
          </div>
        </div>
      </div>
      <div className={classes.affiliatedWrapper}>
        <div className={classes.sectionContainer}>
          <div className={classes.affiliation}>
            <h2>Affiliated Contributors</h2>
          </div>
          <div className={classes.affiliatedOrgsContainer}>
            {affiliatedOpen &&
              (affiliatedOrganizationsObject["Code for All"].length ? (
                <AffiliatedOrganizations
                  affiliatedObject={affiliatedOrganizationsObject}
                />
              ) : inputValue.length ? (
                <h3 className={classes.loader}>No Results</h3>
              ) : (
                <h3 className={classes.loader}>Loading...</h3>
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
