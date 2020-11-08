import BreadCrumbs from '../../components/NavBreadcrumbs.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
import React from 'react';
import useStyles from './styles.js';

const breadCrumbLinks = [
  { href: '/home', name: 'Home' },
  { href: '/donate#root', name: 'Radical Collaboration' }, // Update when page is built
  { href: '/donate', name: 'Support Us' },
  { href: '/donate', name: 'Donate' },
];

const Donation = () => {
  const classes = useStyles();

  return (
    <div className={classes.donateContainer}>
      <Header />
      <section className={classes.commonSection + ' ' + classes.titleSection}>
        <BreadCrumbs crumbs={breadCrumbLinks} />
        <h2 className={classes.donateTitle}>Make a Donation</h2>
      </section>

      <section className={classes.commonSection + ' ' + classes.infoSection}>
        <div className={classes.infoText}>
          <p className={classes.infoDescription}>
            The Civic Tech Index is being developed by Hack For LA,
            and is currently taking donations through Code For America.
          </p>

          <p className={classes.infoSteps}>
            1. Please follow this link to the Code For America{' '}
            <a
              className={classes.styledLinkMobile + ' ' + classes.styledLink}
              href="https://www.codeforamerica.org/donate">
              donation form.
            </a>
          </p>

          <p className={classes.infoSteps}>
            2. To make a donation to the Civic Tech Index, please
            select <strong>Hack For LA</strong> under the brigades listed.
          </p>
        </div>

        <img
          alt="A gif demonstrating the use of the donation form"
          className={classes.infoGif}
          src="./images/CTI-Donate-to-HfLA.gif"/>
        <p className={classes.infoThank}>We appreciate your contribution.</p>
      </section>

      <section className={classes.contactSection}>
        <h2 className={classes.contactHeader}>Want to support in other ways?</h2>
        <a className={classes.contactLink} href="mailto:civictechindex@hackforla.org">
          <button className={classes.contactButton}>Contact us</button>
        </a>
      </section>
      <Footer />
    </div>
  )
}

export default Donation;
