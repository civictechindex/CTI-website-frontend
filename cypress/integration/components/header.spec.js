describe('Header component', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('loads nav links', () => {
    cy.viewport(1280, 800);
    cy.findLink('Join the Index').should('have.attr', 'href', '/join-index');
    cy.findLink('About').should('have.attr', 'href', '/about');
    cy.findLink('Collaborate with Us')
      .should('have.attr', 'href', '/support')
      .trigger('mouseover')
      .get('[data-cy=menuItem]')
      .within(() => {
        cy.contains('Donate');
        cy.contains('Share the CTI');
        cy.contains('Volunteer with Us');
      });
    cy.findLink('Organizations').should('have.attr', 'href', '/organizations/all').trigger('mouseover');
  });

  it('mobile menu opens', () => {
    cy.viewport('iphone-8');
    cy.get('[class*=makeStyles-showMobileNav]').should('not.exist');
    cy.get('[data-cy=menuIcon]').click();
    cy.get('[class*=makeStyles-showMobileNav]').should('be.visible');
    cy.get('[class*=makeStyles-dropdownHeader]').first().should('have.text', 'Join the Index');
    cy.get('[class*=makeStyles-dropdownHeader]').eq(1).should('have.text', 'About');
    cy.get('[class*=makeStyles-dropdownHeader]').eq(2).should('have.text', 'Organizations');
    cy.get('[class*=makeStyles-dropdownHeader]').last().should('have.text', 'Collaborate with Us');
  });
});
