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
    <div>
      <Header />
      <section className={classes.titleSection}>
        <BreadCrumbs crumbs={breadCrumbLinks} />
        <h2 className={classes.donateTitle}>Make a Donation</h2>
      </section>
    </div>
  )
}

export default Donation;
