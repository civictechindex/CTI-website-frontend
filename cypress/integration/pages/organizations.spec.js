describe('Organizations Page (fka Contributors Page)', () => {
  const grandparentOrg = 'Code for All';
  const parentOrg = 'Code for America';
  const affiliatedOrg = 'Code for Las Vegas';

  beforeEach(() => {
    cy.intercept('https://api-stage.civictechindex.org/api/organizations/').as('getOrganizations');
    cy.visit('/organizations/all');
    cy.wait('@getOrganizations');
  });

  it('Loads with 2 Unaffiliated thumbs, Affiliated heading', () => {
    cy.get('h1').contains('Organizations');
    cy.get('[class*=unaffiliatedWrapper]').within(() => {
      cy.contains('Unaffiliated Organizations');
      cy.get('[class*=thumbnailWrapper]').should('have.length', 2);
    })
    cy.get('[class*=affiliated]').within(() => {
      cy.contains('Affiliated Organizations');
    });
  });

  it('Loads grandparentOrg with 8 children, finds parentOrg, affiliatedOrg', () => {
    cy.get('[data-cy=affiliated-wrapper]').within(() => {
      cy.get('[class*=makeStyles-codeForAll]').should('have.length', 1);
      cy.get('[href*=codeforall]').within(() => {
        cy.contains(grandparentOrg);
      });
      cy.get('#dropdownChevron').click();
      cy.get('[data-cy=contributor-thumbnail]').should('have.length', 8);
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

  it('Finds affiliatedOrg via search', () => {
    //
  })
});
