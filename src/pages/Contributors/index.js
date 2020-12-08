import React, { useState, useEffect } from "react";
import { useStyle } from "./styles.js";
import axios from "axios";
import { Dropdown } from "../../components/Dropdown";
import { DropdownThumbnail } from "../../components/DropdownThumbnail";
import { BottomCallToAction } from "../../components/BottomCallToAction";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBreadcrumb from "../../components/NavBreadcrumbs";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
// import {makestyles} from '@material-ui/core/styles';
// import { ContributorThumbnail } from "../../components/ContributorThumbnail";

export default function Contributors({ match }) {
  const affiliation = match.params.affiliation;

  const classes = useStyle();

  const [orgs, setOrgs] = useState([]);
  const [orgsNames, setOrgsNames] = useState([]);
  const [affiliatedOrgs, setAffiliatedOrgs] = useState([]);
  const [unAffiliatedOrgs, setUnAffiliatedOrgs] = useState([]);
  const [affiliatedOpen, setAffiliatedOpen] = useState(false);
  const [unaffiliatedOpen, setUnaffiliatedOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_ORGANIZATIONS_API}/api/organizations/`
        );
        setOrgs(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const affiliated = {};
    let filteredOrgs = filterOrgs(orgs);
    createAffiliatedOrgs();
    createUnaffiliatedOrgs();
    setOrgNames();

    function setOrgNames() {
      const names = [];
      for (const org of orgs) {
        names.push(org.name);
      }
      setOrgsNames(names);
    }
    function filterOrgs(orgs) {
      return orgs.filter((org) =>
        org.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
      );
    }

    function createAffiliatedOrgs() {
      //iterate through the json response
      for (const org of filteredOrgs) {
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
      //if affiliated object has been made
      if (filteredOrgs.length > 0) {
        //grab the keys in the affiliated object
        const affiliatedKeys = Object.keys(affiliated);
        //iterate through the affiliated object
        for (const property in affiliated) {
          //iterate through each array (values) in the object
          affiliated[property].forEach((org) => {
            //if any of the affilliated are also in any of the value array, meaning an org has children, but is also a child
            if (affiliatedKeys.indexOf(org.name) !== -1) {
              //then org the org(and its children) as a subchild of an org
              org.subchildren = affiliated[org.name];
              delete affiliated[org.name];
            }
          });
        }
      }
      setAffiliatedOrgs(Object.entries(affiliated));
    }

    function createUnaffiliatedOrgs() {
      let unaffiliated = [];
      filteredOrgs.forEach((org) => {
        if (!affiliated[org.name] && !org.parent_organization) {
          unaffiliated.push(org);
        }
      });
      setUnAffiliatedOrgs(unaffiliated);
    }
  }, [orgs, inputValue]);

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

  const AffiliatedOrgs = ({ affiliatedArray }) =>
    affiliatedArray.map((ary, parentIndex) => (
      <Dropdown
        dropdownText={ary[0]}
        key={parentIndex}
        dropdownItems={ary[1]}
        hasInputValue={inputValue.length}
      >
        {ary[1].map((organization, index) => (
          <Dropdown
            dropdownText={organization.name}
            key={index}
            dropdownItems={organization.subchildren}
            hasInputValue={inputValue.length}
          >
            <DropdownThumbnail organizations={organization.subchildren} />
          </Dropdown>
        ))}
      </Dropdown>
    ));

//   const UnaffiliatedOrgs2 = ({ unAffiliatedOrgs }) => {
//     const styles = {
//       thumbnailsContainer: {
//         display: "flex",
//       },
//     };

//     return (
//       <div style={styles.thumbnailsContainer}>
//         {unAffiliatedOrgs.map((organization, index) => (
//           <ContributorThumbnail
//             organization={organization}
//             key={index}
//           ></ContributorThumbnail>
//         ))}
//       </div>
//     );
//   };

  const UnaffiliatedOrgs = ({ unAffiliatedOrgs }) => (
    <DropdownThumbnail organizations={unAffiliatedOrgs} />
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
            color='white'
          />
          <h1 className={classes.heading}>Index Contributors</h1>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              margin: "1rem 0 0 0",
            }}
          >
            Insert small blurb text about / purpose of Index Contributors
          </h3>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            inputValue={inputValue}
            onInputChange={(e, newValue) => setInputValue(newValue)}
            options={orgsNames}
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
          <div className={classes.thumbnailsContainer}>
            {unaffiliatedOpen &&
              (unAffiliatedOrgs.length ? (
                <UnaffiliatedOrgs unAffiliatedOrgs={unAffiliatedOrgs} />
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
              (affiliatedOrgs.length ? (
                <AffiliatedOrgs affiliatedArray={affiliatedOrgs} />
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
