import React, { useState, useEffect } from 'react'
import { useStyle } from './styles.js';
import axios from 'axios'
import {Dropdown} from '../../components/Dropdown'
import {DropdownThumbnail} from '../../components/DropdownThumbnail'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Contributors({ match }) {
    const affiliation = match.params.affiliation

    const classes = useStyle();

    const [orgs, setOrgs] = useState([]);
    const [affiliatedOrgs, setAffiliatedOrgs] = useState([]);
    const [unAffiliatedOrgs, setUnAffiliatedOrgs] = useState([]);
    const [affiliatedOpen, setAffiliatedOpen] = useState(false);
    const [unaffiliatedOpen, setUnaffiliatedOpen] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://test-civictechindexadmin.herokuapp.com/api/organizations/');
                setOrgs(result.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [affiliation]);

    useEffect(() => {
        const affiliated = {};

        createAffiliatedOrgs();
        creatUnaffiliatedOrgs();

        function createAffiliatedOrgs() {
            //iterate through the json response
            for (const org of orgs) {
                //find orgs that are affiliated
                if (org.parent_organization) {
                    //check if the parent of the affiliated org is in the object
                    if (affiliated[org.parent_organization.name]) {
                        //if YES the parent is a key in the object, then add this current org to it's value array
                        affiliated[org.parent_organization.name].push(org)
                    } else {
                        //if NO, add the parent as a key, AND add this current org to the value array
                        affiliated[org.parent_organization.name] = [org]
                    }
                }
            }

            if (orgs.length > 0) {
                for (const property in affiliated) {
                    const affKeys = Object.keys(affiliated)
                    affiliated[property].forEach(org => {
                        if (affKeys.indexOf(org.name) !== -1) {
                            org.subchildren = affiliated[org.name];
                            delete affiliated[org.name];
                        }
                    })
                }
            }
            setAffiliatedOrgs(Object.entries(affiliated));
        }

        function creatUnaffiliatedOrgs() {
            let unaffiliated = [];
            orgs.forEach((org) => {
                if ((!affiliated[org.name]) && (!org.parent_organization)) {
                    unaffiliated.push(org)
                }
            });
            setUnAffiliatedOrgs(unaffiliated);
        }

        if (affiliation === 'unaffiliated') {
            setUnaffiliatedOpen(true);
        } else if (affiliation === 'affiliated') {
            setAffiliatedOpen(true);
        }
    }, [orgs, affiliation]);

    const AffiliatedOrgs = ({ affiliatedArray }) => (
        affiliatedArray.map((ary, parentIndex) => (

            <Dropdown
                dropdownText={ary[0]}
                key={parentIndex}
                dropdownItems={ary[1]}
            >{
                ary[1].map((organization, index)=>(
                <Dropdown 
                dropdownText={organization.name} 
                key={index}
                dropdownItems={organization.subchildren}
                >
                    <DropdownThumbnail organizations={organization.subchildren}/>
                </Dropdown>
                ))
            }
            </Dropdown>
        ))
    )

    const UnaffiliatedOpen = ({ unAffiliatedOrgs }) => (
        <DropdownThumbnail organizations={unAffiliatedOrgs}/>
    )


    return (
        <>
        <Header/>
            <div className={classes.firstSectionWrapper}>
                <div className={classes.sectionContainer}>
                    <p className={classes.projectsLink}>Home / Contributors</p>
                    <h1 className={classes.heading}>Index Contributors</h1>
                    <h3 style={{color: 'white', textAlign: 'center', margin: '1rem 0 0 0'}}>Insert small blurb text about / purpose of Index Contributors</h3>
                    <i className={classes.loop}></i>
                    <input className={classes.input} placeholder='Search for an organization'></input>
                </div>
            </div>
            <div className={classes.unaffiliatedWrapper}>
                <div className={classes.sectionContainer}>
                    <div id='unaffiliatedDropdown' className={classes.unaffiliated} tabIndex='0'>
                        <h2>Unaffiliated Contributors</h2>
                        <img id ="dropdownIcon" className={classes.vectorIcon} onClick={() => setUnaffiliatedOpen(!unaffiliatedOpen)} src='/images/Vector.png' alt='open for about link'  />
                    </div>
                    <div className={classes.thumbnailsContainer}>
                        {unaffiliatedOpen && (unAffiliatedOrgs.length ? <UnaffiliatedOpen unAffiliatedOrgs={unAffiliatedOrgs}/> : <h1>Loading...</h1>)}
                    </div>
                </div>
            </div>
            <div className={classes.affiliatedWrapper}>
                <div className={classes.sectionContainer}>
                    <div id='affiliatedDropdown' className={classes.affiliated} tabIndex='0'>
                        <h2>Affiliated Contributors</h2>
                        <img id = "dropdownIcon" className={classes.vectorIcon} onClick={() => setAffiliatedOpen(!affiliatedOpen)} src='/images/Vector.png' alt='open dropdown'  />
                    </div>
                    <div className={classes.thumbnailsContainer}>
                        {affiliatedOpen && (affiliatedOrgs.length ?
                            <AffiliatedOrgs
                                affiliatedArray={affiliatedOrgs}
                            /> : <h1 style={{textAlign: 'center'}}>Loading...</h1>)
                        }
                    </div>
                </div>
            </div>
            <div className={classes.callToAction2}>
                <h1 style={{color:'#042D5F'}}>Want to add your organization?</h1>
                <a href="/"><button className={classes.button}>Contact Us</button></a>
            </div>
            <Footer/>
        </>
    )
}
