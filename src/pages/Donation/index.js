import BreadCrumbs from '../../components/NavBreadcrumbs.js';
import DesktopInfoSection from './DesktopInfoSection.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
import MobileInfoSection from './MobileInfoSection.js';
import React, { useEffect, useState } from 'react';
import useStyles from './styles.js';

const breadCrumbLinks = [
  {name: 'Home', href: '/'},
  {name: 'Radical Collaboration', href: '/donate#root'}, // Update when page is built
  {name: 'Support Us', href: '/donate'},
  {name: 'Donate', href: '/donate'},
];

const Donation = () => {
  const classes = useStyles();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', (event) => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <div className={classes.donateContainer}>
      <Header />
      <section className={classes.commonSection + ' ' + classes.titleSection}>
      <BreadCrumbs crumbs={breadCrumbLinks} /> {/* Change left & right padding to 0 */}
        <h2 className={classes.donateTitle}>Make a Donation</h2>
      </section>

      { windowSize > 700 ? <DesktopInfoSection /> : <MobileInfoSection /> }

      <section className={classes.contactSection}>
        <h2 className={classes.contactHeader}>
          Want to support in{ windowSize <= 700 ? <br /> : null } other ways?</h2>
        <a className={classes.contactLink} href="mailto:civictechindex@hackforla.org">
          <button className={classes.contactButton}>Contact us</button>
        </a>
      </section>
      <Footer />
    </div>
  )
}

export default Donation;
