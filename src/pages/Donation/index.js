import BreadCrumbs from '../../components/NavBreadcrumbs.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
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

      <section className={classes.commonSection + ' ' + classes.infoSection}>
        <div className={classes.infoText}>
          <p className={classes.infoDescription}>
            The Civic Tech Index is being developed {windowSize <= 700 ? <br /> : null}
            by{windowSize > 700 ? <br /> : null}{' '}
            <span className={classes.styledLink}>Hack For LA,</span>
            {' '}and is currently taking {windowSize <= 700 ? <br /> : null}
            donations{windowSize > 700 ? <br /> : null} through{' '}
            <span className={classes.styledLink}>Code For America.</span>
          </p>

          <p className={classes.infoSteps}>
            1. Please follow this link to the {windowSize <= 700 ? <br /> : null}
             Code For America {windowSize > 700 ? <br /> : null}
            <a
              className={classes.styledLinkMobile + ' ' + classes.styledLink}
              href="https://www.codeforamerica.org/donate"
            >
              donation form.
            </a>
          </p>

          <p className={classes.infoSteps}>
            2. To make a donation to the Civic Tech {windowSize <= 700 ? <br /> : null} 
            Index, please {windowSize > 700 ? <br />  : null}
            select <strong>Hack For LA</strong> under the
            {windowSize <= 700 ? <br /> : null} brigades listed.
          </p>
        </div>

        <img 
          alt="A gif demonstrating the use of the donation form"
          className={classes.infoGif}
          src="./images/CTI-Donate-to-HfLA.gif"
        />

        <p className={classes.infoThank}>We appreciate your contribution.</p>
      </section>

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
