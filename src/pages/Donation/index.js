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
          <p>The Civic Tech Index is being developed by <span>Hack For LA,</span> and
            is currently taking donations through <span>Code For America.</span>
          </p>
          <p>1. Please follow this link to the Code For America <span>donation form</span></p>
          <p>2. To make a donation to the Civic Tech Index, please
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
