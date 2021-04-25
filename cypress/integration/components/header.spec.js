describe('Header component', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('loads nav links', () => {
    cy.viewport(1280, 800);
    cy.findLink('Join').should('have.attr', 'href', '/tag-generator');
    cy.findLink('About').should('have.attr', 'href', '/about');
    cy.findLink('Radical Collaboration')
      .should('have.attr', 'href', '/adding-projects-to-the-index')
      .trigger('mouseover')
      .get('[data-cy=menuItem]')
      .within(() => {
        cy.contains('How to Do It');
        cy.contains('Donate');
        cy.contains('Volunteer with us');
        cy.contains('FAQ');
      });
    cy.findLink('Organizations').should('have.attr', 'href', '/contributors/all').trigger('mouseover');
    cy.get('[data-cy=menuItem]').contains('Index Contributors');
    cy.get('[data-cy=menuItem]').contains('Unaffiliated');
    cy.get('[data-cy=menuItem]').contains('Affiliated');
  });

  it('mobile menu opens', () => {
    cy.viewport('iphone-8');
    cy.get('[class*=makeStyles-showMobileNav]').should('not.exist');
    cy.get('[data-cy=menuIcon]').click();
    cy.get('[class*=makeStyles-showMobileNav]').should('be.visible');
    cy.get('[class*=makeStyles-dropdownHeader]').first().should('have.text', 'Join');
    cy.get('[class*=makeStyles-dropdownHeader]').eq(1).should('have.text', 'About');
    cy.get('[class*=makeStyles-dropdownHeader]').eq(2).should('have.text', 'Organizations');
    cy.get('[class*=makeStyles-dropdownHeader]').last().should('have.text', 'Radical Collaboration');
  });
});
