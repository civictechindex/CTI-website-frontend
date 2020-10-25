import axios from 'axios';
import Header from '../../components/Header/index.js';
import BreadCrumbs from '../../components/NavBreadcrumbs.js';
import React, { useState } from 'react';
import useStyles from './styles.js';

const Donation = () => {
  const classes = useStyles();
  const breadCrumbLinks = [
    {name: 'Home', href: '/'},
    {name: 'Radical Collaboration', href: '/donate#root'},
    {name: 'Support Us', href: '/donate'},
    {name: 'Donate', href: '/donate'},
  ];

  return (
    <>
      <Header />

      <section className={classes.commonSection + ' ' + classes.titleSection}>
      <BreadCrumbs crumbs={breadCrumbLinks} /> {/* Change left & right padding to 0 */}
        <h2 className={classes.donateTitle}>Make a Donation</h2>
      </section>

      <section className={classes.commonSection + ' ' + classes.infoSection}>
        <div className={classes.infoText}>

          <p className={classes.infoDescription}>
            The Civic Tech Index is being developed by<br />{' '}
            <a
              className={classes.styledLink}
              href="https://www.hackforla.org"
              target="_blank"
            >
              <span>Hack For LA,</span>
            </a> 
            {' '}and is currently taking donations<br /> through{' '}
            <a
              className={classes.styledLink}
              href="https://www.codeforamerica.org" 
              target="_blank"
            >
              <span>Code For America.</span>
            </a>
          </p>

          <p className={classes.infoSteps}>
            1. Please follow this link to the Code For America<br /> 
            <a
              className={classes.styledLink}
              href="https://www.codeforamerica.org/donate"
              target="_blank"
            >
              <span className={classes.styledLink}>donation form.</span>
            </a>
          </p>

          <p className={classes.infoSteps}>
            2. To make a donation to the Civic Tech Index, please<br />
            select <strong>Hack For LA</strong> under the brigades listed.
          </p>
        </div>

        {/* <div className={classes.infoGif}> */}
          <img 
            alt="A gif demonstrating the use of the donation form"
            className={classes.infoGif}
            src="./images/CTI-Donate-to-HfLA.gif"
          />
        {/* </div> */}
      </section>
    </>
  )
}

export default Donation;
