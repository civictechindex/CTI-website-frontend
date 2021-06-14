describe('Organizations Page', () => {
  const grandparentOrg = 'Code for All';
  const parentOrg = 'Code for America';
  const affiliatedOrg = 'Code for Las Vegas';

  beforeEach(() => {
    cy.intercept('https://api-stage.civictechindex.org/api/organizations/').as('getOrganizations');
    cy.visit('/organizations/all');
    cy.wait('@getOrganizations');
  });

  it('loads page with affiliated & unaffiliated orgs', () => {
    cy.get('h1').contains('Organizations');
    cy.get('[class*=affiliation]').within(() => {
      cy.contains('Unaffiliated Organizations');
      cy.contains('Affiliated Organizations');
    });
  });

  it('loads grandparentOrg', () => {
    cy.get('[class*=affiliatedOrgsContainer]').within(() => {
      cy.get('[class*=makeStyles-codeForAll]').should('have.length', 1);
      cy.get('[href*=codeforall]').within(() => {
        cy.contains(grandparentOrg);
      });
      cy.get('#dropdownChevron').click();
      cy.get('[data-cy=contributor-thumbnail]').should('have.length', 8);
    });
  });

  it('loads thumbnail wrappers', () => {
    cy.get('[class*=thumbnailWrapper]').should('have.length', 2);
  });

  it('expands parentOrg, finds affiliatedOrg', () => {
    cy.get('#dropdownChevron').click();

    cy.get('[class*=thumbnailText]')
      .contains(parentOrg)
      .get('[class*=afflDropdown]')
      .within(() => {
        cy.get('#dropdownChevron').first().click();
      });
    cy.get('[data-cy=affthumbnailTextWrapper]')
      .get('[data-cy=affthumbnailText]')
      .within(() => {
        cy.get('[data-cy=thumbnailTextInfn]').contains(affiliatedOrg);
      });
  });
});
