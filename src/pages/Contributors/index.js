import React, { useState, useEffect, useRef } from 'react'
import { useStyle } from './styles.js';

export default function Contributors({ match }) {
    const affiliation = match.params.affiliation

    const classes = useStyle();

    const [orgs, setOrgs] = useState([]);
    const [affiliatedOrgs, setAffiliatedOrgs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('/api/organizations/');
                const data = await result.json();
                setOrgs(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const affiliated = {};
        const createAffiliatedOrgs = () => {
            for (const org of orgs) {
                if (org.parent_organization) {
                    if (affiliated[org.parent_organization.name]) {
                        affiliated[org.parent_organization.name].push(org)
                    } else {
                        affiliated[org.parent_organization.name] = [org]
                    }
                }
            }

            setAffiliatedOrgs(Object.entries(affiliated));
        }
        createAffiliatedOrgs();
        console.log(affiliatedOrgs);

        // const creatUnaffiliatedOrgs = () => {
        //     orgs.forEach((org) => {
        //         if ((!affiliated[org.name]) && (!org.parent_organization)) {
        //             setUnaffiliatedOrgs(c => c.concat(org))
        //         }
        //     });
        // }
        // creatUnaffiliatedOrgs();

    }, [orgs]);

    return (
        <>
            <div className={classes.firstSectionWrapper}>
                <div className={classes.sectionContainer}>
                    <p className={classes.projectsLink}>Home / Contributors</p>
                    <h1 className={classes.heading}>Index Contributors</h1>
                </div>
            </div>
            <div className={classes.unaffiliatedWrapper}>
                <div className={classes.sectionContainer}>
                    <div className={classes.unaffiliated}>
                        <h2>Unaffiliated Contributors</h2>
                        <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0' onClick={() => { }} />
                    </div>
                    {/* <div>
                        {unaffiliatedOrgs.map((org) => (
                            <h1>{org}</h1>
                        ))}
                    </div> */}
                </div>
            </div>
            <div className={classes.affiliatedWrapper}>
                <div className={classes.sectionContainer}>
                    <div className={classes.affiliated}>
                        <h2>Affiliated Contributors</h2>
                        <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0' />
                    </div>
                    {affiliatedOrgs.map(ary => {
                        return (
                            <>
                                <div className={classes.affiliated}>
                                    <h3>{ary[0]}</h3>
                                    <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0' />
                                </div>
                                <>
                                    {ary[1].map((organization, index) => {
                                        return (
                                            //yellow divs
                                            <div className={classes.affiliatedChild}>
                                                <h4 key={index}>{organization.name}</h4>
                                                <img className={classes.linksArrows} src='/images/link-arrow.png' alt='arrow for about link' tabIndex='0' />
                                            </div>

                                        )
                                    })}
                                </>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
