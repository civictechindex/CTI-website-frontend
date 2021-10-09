/* eslint-disable max-lines-per-function */
describe('Organizations Page (using API)', () => {
  const grandparentOrg = 'Code for All';
  const parentOrg = 'Code for America';
  const affiliatedOrg = 'Code for ABQ';
  const affiliatedOrgPartial = 'ABQ';
  const parentOrgCount1 = 24;
  const parentOrgCount2 = 1;

  it('should load default page state from /organizations', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.visit('/organizations');
    cy.wait('@getOrganizations');
    cy.get('[data-cy=index-contributors-checkbox]').within(() => {
      cy.get('[type="checkbox"]').should('not.be.checked');
    });
    cy.get('[data-cy=status-tab-0]')
      .invoke('attr', 'aria-selected')
      .should('eq', 'true');
  });

  it('should nav to orgs page with unaffiliated orgs shown', () => {
    cy.visit('/home');
    cy.findLink('Civic Tech Organizations')
      .trigger('mouseover')
      .get('[data-cy=menu-item]')
      .within(() => {
        cy.contains('Unaffiliated').click();
      });
    cy.get('[data-cy=index-contributors-checkbox]').within(() => {
      cy.get('[type="checkbox"]').should('not.be.checked');
    });
    cy.get('[data-cy=status-tab-1]')
      .invoke('attr', 'aria-selected')
      .should('eq', 'true');
  });

  it('should load grandparentOrg, parentOrg, affiliatedOrg', () => {
    cy.visit('/home');
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.visit('/organizations', { qs: { contrib: false, status: 'any' }});
    cy.wait('@getOrganizations');
    cy.get('[data-cy=index-contributors-checkbox] input:checkbox').uncheck();
    cy.contains(grandparentOrg).should('have.length', 1);
    cy.get('[data-cy=code-for-all-chevron]').click();
    cy.get('[data-cy=affiliated-organizations]').within(() => {
      cy.get('[data-cy=thumbnail-dropdown]').should('have.length', parentOrgCount1);
      cy.get('[data-cy=thumbnail-dropdown]')
        .contains(parentOrg)
        .parentsUntil('[data-cy=thumbnail-dropdown]')
        .within(() => {
          cy.get('[data-cy=dropdown-chevron]').click();
        });
      cy.contains(affiliatedOrg);
    });
  });

  it('should find affiliatedOrg via search', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.visit('/organizations', { qs: { contrib: false, status: 'affiliated' }});
    cy.wait('@getOrganizations');
    cy.get('[data-cy=organization-search]').type(affiliatedOrg).type('{enter}');
    cy.get('[data-cy=affiliated-organizations]').within(() => {
      cy.get('[data-cy=thumbnail-dropdown]').should('have.length', 1);
      cy.get('[data-cy=thumbnail-dropdown]').eq(0).click().within(() => {
        cy.get('[data-cy=contributor-thumbnail-text]').contains(affiliatedOrg);
      });
    });
    cy.get('[data-cy=affiliated-organizations]').within(() => {
      cy.get('[data-cy=thumbnail-dropdown]').should('have.length', parentOrgCount2);
    });
    cy.get('[data-cy=organization-search]').within(() => {
      cy.get('input').clear();
    });
  });

  it('should find affiliatedOrg via partial search', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as(
      'getOrganizations'
    );
    cy.visit('/organizations', { qs: { contrib: false, status: 'affiliated' }});
    cy.wait('@getOrganizations');
    cy.get('[data-cy=organization-search]').type(affiliatedOrgPartial);
    cy.get('[data-cy=organization-search-list]').should('have.length', 1);
    cy.get('[data-cy=organization-search-list]').click();
    cy.get('[data-cy=affiliated-organizations]').within(() => {
      cy.get('[data-cy=thumbnail-dropdown]').should('have.length', 1);
      cy.get('[data-cy=thumbnail-dropdown]').eq(0).click().within(() => {
        cy.get('[data-cy=contributor-thumbnail-text]').contains(affiliatedOrg);
      });
    });
    cy.get('[data-cy=organization-search]').within(() => {
      cy.get('input').clear();
    });
  });

  it('should visit organizations page from home page link', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as(
      'getOrganizations'
    );
    cy.visit('/');
    cy.contains('View contributors').click();
    cy.wait('@getOrganizations');
    cy.get('[class*=containerWhite]').should(
      'contain',
      'Want to add your organization'
    );
    cy.get('[data-cy=index-contributors-checkbox]').within(() => {
      cy.get('[type="checkbox"]').should('be.checked');
    });
  });
});

describe('Organizations Page (using fixture)', () => {
  before(() => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`, {
      fixture: 'orgs.json',
    }).as('getOrganizations');
    cy.visit('/organizations', { qs: { contrib: false, status: 'any' }});
    cy.wait('@getOrganizations');
  });

  it('should load 24 affiliated orgs', () => {
    cy.get('[class*=makeStyles-gpGrid]').click();
    cy.get('[data-cy=affiliated-organizations]').within(() => {
      cy.get('[data-cy=thumbnail-dropdown]').should('have.length', 24);
    });
  });

  it('should show all orgs tab selected', () => {
    cy.get('[class*=MuiTabs-flexContainer]').within(() => {
      cy.get('button')
        .eq(0)
        .invoke('attr', 'aria-selected')
        .should('eq', 'true');
      cy.get('button')
        .eq(1)
        .invoke('attr', 'aria-selected')
        .should('eq', 'false');
      cy.get('button')
        .eq(2)
        .invoke('attr', 'aria-selected')
        .should('eq', 'false');
    });
  });

  it('should navigate to unaffiliated and show unaffiliated orgs tab selected', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`, {
      fixture: 'orgs.json',
    }).as('getOrganizations');
    cy.visit('/organizations', { qs: { contrib: false, status: 'unaffiliated' }});
    cy.wait('@getOrganizations');
    cy.get('[class*=MuiTabs-flexContainer]').within(() => {
      cy.get('button')
        .eq(0)
        .invoke('attr', 'aria-selected')
        .should('eq', 'false');
      cy.get('button')
        .eq(1)
        .invoke('attr', 'aria-selected')
        .should('eq', 'true');
      cy.get('button')
        .eq(2)
        .invoke('attr', 'aria-selected')
        .should('eq', 'false');
    });
  });

  it('should navigate to affiliated and show affiliated orgs tab selected', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`, {
      fixture: 'orgs.json',
    }).as('getOrganizations');
    cy.visit('/organizations', { qs: { contrib: false, status: 'affiliated' }});
    cy.wait('@getOrganizations');
    cy.get('[class*=MuiTabs-flexContainer]').within(() => {
      cy.get('button')
        .eq(0)
        .invoke('attr', 'aria-selected')
        .should('eq', 'false');
      cy.get('button')
        .eq(1)
        .invoke('attr', 'aria-selected')
        .should('eq', 'false');
      cy.get('button')
        .eq(2)
        .invoke('attr', 'aria-selected')
        .should('eq', 'true');
    });
  });

  it('should show grandparent org in closed state', () => {
    cy.get('[class*=makeStyles-gpGrid]')
      .invoke('attr', 'class')
      .should('not.contain', 'makeStyles-open');
    cy.get('[class*=makeStyles-dropDownGrid]').should('not.exist');
  });

  it('should open grandparent org and show parent orgs', () => {
    cy.get('[class*=makeStyles-gpGrid]').click();
    cy.get('[class*=makeStyles-gpGrid]')
      .invoke('attr', 'class')
      .should('contain', 'makeStyles-open');
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
        .should('not.contain', 'makeStyles-open');
    });
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.get('[class*=affiliatedThumbnailsWrapper]').should('not.exist');
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
        .should('contain', 'makeStyles-open');
    });
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.get('[class*=affiliatedThumbnailsWrapper]').should('exist');
    });
  });

  it('should show collapsed child orgs view', () => {
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.get('[class*=MuiGrid-align-items-xs-center]').within(() => {
        cy.get('button').should('contain', 'View All');
      });
      cy.get('[class*=affiliatedThumbnailsWrapper]')
        .find('[class*=afflnThumbnails]')
        .should('have.length', 6);
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
        .should('have.length.greaterThan', 6);
    });
  });

  it('should not show index contributor indicators', () => {
    cy.get('[data-cy=index-contributors-checkbox]').within(() => {
      cy.get('[type="checkbox"]').should('not.be.checked');
    });
    cy.get('[class*=makeStyles-gpGrid]').within(() => {
      cy.get('[class*=contributorIcon]').should('not.exist');
    });
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.contains('Code for America')
        .parent()
        .parent()
        .parent()
        .within(() => {
          cy.get('[class*=makeStyles-grandparentIcon]').should('not.exist');
        });
    });
  });

  // TODO: click open Code for America. need to adjust 25 number to 7 (?)
  it('should show index contributor indicators', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`, {
      fixture: 'orgs.json',
    }).as('getOrganizations');
    cy.visit('/organizations', { qs: { contrib: false, status: 'affiliated' }});
    cy.wait('@getOrganizations');
    cy.get('[data-cy=index-contributors-checkbox] input:checkbox').check();
    cy.get('[class*=makeStyles-gpGrid]').within(() => {
      cy.get('[class*=contributorIcon]').should('exist');
    });
    // cy.get('[data-cy=contributor-icon]').should('have.length', 25);
    cy.get('[class*=makeStyles-dropDownGrid]').within(() => {
      cy.contains('Code for America').parent().parent().parent().within(() => {
        cy.get('[class*=makeStyles-grandparentIcon]').should('exist');
      });
    });
  });
});
