describe('Individual Organization Page', () => {
  beforeEach(() => {
    cy.visit('/organization/openoakland');
  });

  it('header section loads', () => {
    cy.wait(10000);
    cy.get('nav').contains('Home');
    cy.get('nav').contains('View Organization');
    cy.get('nav').contains('OpenOakland');
  });

  it('project dropdown loads', () => {
    cy.wait(10000);
    cy.get('[data-cy=other-repo-dropdown]').click();
    cy.get('li').contains('caciviclab/odca-jekyll');
    cy.get('li').contains('caciviclab/disclosure-backend-static');
  });

  it('sort dropdown loads', () => {
    cy.wait(10000);
    cy.get('[data-cy=sort-dropdown]').click();
    cy.get('[data-value=updated]').contains('Last Updated');
    cy.get('[data-value=stars]').contains('Stargazer Count');
  });
});
