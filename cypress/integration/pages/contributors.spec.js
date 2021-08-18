// eslint-disable-next-line max-lines-per-function
describe('Contributors Page', () => {
  // Commenting out these test cases since the organizations page is still in progress
  /*
   * before(() => {
   *   cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
   *   cy.visit('/organizations/all');
   *   cy.wait('@getOrganizations');
   * });
   */

  /*
   * it('check that affiliated orgs have loaded', () => {
   *   cy.get('[class*=affiliatedOrgsContainer]').within(() => {
   *     cy.get('[class*=containerDropdown]').should('have.length', 24);
   *   })
   * })
   */

  /*
   * it('check Code for All', () => {
   *   cy.get('[class*=affiliatedOrgsContainer]').within(() => {
   *     cy.get('[class*=makeStyles-codeForAll]').should('have.length', 1)
   *     cy.get('[href*=codeforall]').within(() => {
   *       cy.contains('Code for All')
   *     })
   *   })
   * })
   */

  /*
   * it('load thumbnail wrappers', () => {
   *   cy.get('[class*=thumbnailWrapper]').should('have.length', 27);
   * });
   */

  /*
   * it('expands Code for America, find Code for Anchorage', () => {
   *   cy.get('[href*=codeforamerica]')
   *     .parents('[class*=containerDropdown]')
   *     .within(() => {
   *       cy.get('#dropdownChevron').click();
   *     });
   *   cy.get('[href*=codeforamerica]')
   *     .parents('[class*=containerDropdown]')
   *     .within(() => {
   *       cy.contains('Code for Anchorage');
   *       cy.get('[class*=makeStyles-thumbnailWrapper]').should('have.length', 86);
   *     });
   * });
   */

  before(() => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.visit('/organizations/');
    cy.wait('@getOrganizations');
  });

  it('should show all orgs tab selected', () => {
    cy.get('[class*=MuiTabs-flexContainer]').within(() => {
      cy.get('button').eq(0).invoke('attr', 'aria-selected').should('eq', 'true');
      cy.get('button').eq(1).invoke('attr', 'aria-selected').should('eq', 'false');
      cy.get('button').eq(2).invoke('attr', 'aria-selected').should('eq', 'false');
    });
  });

  it('should navigate to unaffiliated and show unaffiliated orgs tab selected', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.visit('/organizations/unaffiliated');
    cy.wait('@getOrganizations');
    cy.get('[class*=MuiTabs-flexContainer]').within(() => {
      cy.get('button').eq(0).invoke('attr', 'aria-selected').should('eq', 'false');
      cy.get('button').eq(1).invoke('attr', 'aria-selected').should('eq', 'true');
      cy.get('button').eq(2).invoke('attr', 'aria-selected').should('eq', 'false');
    });
  });

  it('should navigate to affiliated and show affiliated orgs tab selected', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.visit('/organizations/affiliated');
    cy.wait('@getOrganizations');
    cy.get('[class*=MuiTabs-flexContainer]').within(() => {
      cy.get('button').eq(0).invoke('attr', 'aria-selected').should('eq', 'false');
      cy.get('button').eq(1).invoke('attr', 'aria-selected').should('eq', 'false');
      cy.get('button').eq(2).invoke('attr', 'aria-selected').should('eq', 'true');
    });
  });

  it('should show grandparent org in closed state', () => {
    cy.get('[class*=makeStyles-gpGrid]').invoke('attr', 'class').should('not.contain','makeStyles-open');
    cy.get('[class*=makeStyles-dropDownGrid]').should('not.exist');
  });

  it('should open grandparent org and show parent orgs', () => {
    cy.get('[class*=makeStyles-gpGrid]').click();
    cy.get('[class*=makeStyles-gpGrid]').invoke('attr', 'class').should('contain','makeStyles-open');
    cy.get('[class*=makeStyles-dropDownGrid]').should('exist');
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.contains('Code for America').should('exist');
    });
  });

  it('should show parent orgs in closed state', () => {
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.contains('Code for America')
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .invoke('attr', 'class')
        .should('not.contain','makeStyles-open');
    });
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.get('[class*=affiliatedThumbnailsWrapper]').should('not.exist')
    });
  });

  it('should open parent org and show child orgs', () => {
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.contains('Code for America')
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .click();
      cy.contains('Code for America')
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .invoke('attr', 'class')
        .should('contain','makeStyles-open');
    });
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.get('[class*=affiliatedThumbnailsWrapper]').should('exist')
    });
  });

  it('should show collapsed child orgs view', () => {
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.get('[class*=MuiGrid-align-items-xs-center]').within(() => {
        cy.get('button').should('contain', 'View All');
      });
      cy.get('[class*=affiliatedThumbnailsWrapper]')
        .find('[class*=afflnThumbnails]')
        .should('have.length', 8);
    });
  });

  it('should expand the child orgs view', () => {
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.get('[class*=MuiGrid-align-items-xs-center]').within(() => {
        cy.get('button').click();
        cy.get('button').should('contain', 'View Less');
      });
      cy.get('[class*=affiliatedThumbnailsWrapper]')
        .find('[class*=afflnThumbnails]')
        .should('have.length.greaterThan', 8);
    });
  });

  it('should not show index contributor indicators', () => {
    cy.get('[class*=makeStyles-chkBoxStyle]').within(() => {
      cy.get('[type="checkbox"]').should('not.be.checked');
    });
    cy.get('[class*=makeStyles-gpGrid]').within(() => {
      cy.get('[class*=contributorIcon]').should('not.exist');
    });
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.contains('Code for America').parent().parent().parent().within(() => {
        cy.get('[class*=makeStyles-grandparentIcon]').should('not.exist');
      });
    });
  });

  it('should visit organizations page from home page link', () => {
    cy.visit('/home');
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.contains('View contributors').click();
    cy.wait('@getOrganizations');
    cy.get('[class*=pageContainer]').should('contain', 'Want to add your organization');
  });

  it('should show index contributor indicators', () => {
    cy.get('[class*=makeStyles-chkBoxStyle]').within(() => {
      cy.get('[type="checkbox"]').should('be.checked');
    });
    cy.get('[class*=makeStyles-gpGrid]').within(() => {
      cy.get('[class*=contributorIcon]').should('exist');
    });
    cy.get('[class*=makeStyles-gpGrid]').within(() => {
      cy.get('[class*=makeStyles-flexGrid]').click();
    });
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.contains('Code for America').parent().parent().parent().within(() => {
        cy.get('[class*=makeStyles-grandparentIcon]').should('exist');
      });
    });
  });
});
