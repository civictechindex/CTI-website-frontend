import axios from 'axios';
import Header from '../../components/Header/index.js';
import BreadCrumbs from '../../components/NavBreadcrumbs.js';
import React, { useState } from 'react';
import useStyles from './styles.js';

const Donation = () => {
  const classes = useStyles();
  const breadCrumbLinks = [{name: 'Home', href: '/'}];

  return (
    <div>
      <Header />
      <section className={classes.titleSection}>
        <BreadCrumbs crumbs={breadCrumbLinks} />
      </section>
    </div>
  )
}

export default Donation;
