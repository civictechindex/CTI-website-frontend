import React from 'react';
import useStyles from './styles.js';

const DesktopInfoSection = () => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.commonSection + ' ' + classes.infoSection}>
        <div className={classes.infoText}>
          <p className={classes.infoDescription}>
            The Civic Tech Index is being developed by<br />{' '} Hack For LA,
            and is currently taking donations<br /> through Code For America.
          </p>

          <p className={classes.infoSteps}>
            1. Please follow this link to the Code For America <br />
            <a
              className={classes.styledLinkMobile + ' ' + classes.styledLink}
              href="https://www.codeforamerica.org/donate"
            >
              donation form.
            </a>
          </p>

          <p className={classes.infoSteps}>
            2. To make a donation to the Civic Tech Index, please <br />
            select <strong>Hack For LA</strong> under the brigades listed.
          </p>
        </div>

        <img 
          alt="A gif demonstrating the use of the donation form"
          className={classes.infoGif}
          src="./images/CTI-Donate-to-HfLA.gif"
        />

        <p className={classes.infoThank}>We appreciate your contribution.</p>
      </section>
    </div>
  )
}

export default DesktopInfoSection;
