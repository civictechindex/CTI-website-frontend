describe('Header component', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('loads nav links', () => {
    cy.viewport(1280, 800);
    cy.findLink('Join the Index')
      .should('have.attr', 'href', '/home')
      .trigger('mouseover')
      .get('[data-cy=menuItem]')
      .within(() => {
        cy.contains('Tag Your Project');
        cy.contains('How to Add Your Project');
      });

    cy.findLink('Overview')
      .should('have.attr', 'href', '/home')
      .trigger('mouseover')
      .get('[data-cy=menuItem]')
      .within(() => {
        cy.contains('About');
        cy.contains('FAQ');
        cy.contains('Contact Us');
      });

    cy.findLink('Radical Collaboration')
      .should('have.attr', 'href', '/home')
      .trigger('mouseover')
      .get('[data-cy=menuItem]')
      .within(() => {
        cy.contains('Collaborate with Us');
        cy.contains('Donate');
        cy.contains('Share the CTI');
        cy.contains('Volunteer with Us');
      });

    cy.findLink('Civic Tech Partners')
      .should('have.attr', 'href', '/home')
      .trigger('mouseover')
      .get('[data-cy=menuItem]')
      .within(() => {
        cy.contains('View Organizations');
      });
  });

  it('mobile menu opens', () => {
    cy.viewport('iphone-8');
    cy.get('[class*=makeStyles-showMobileNav]').should('not.exist');
    cy.get('[data-cy=menuIcon]').click();
    cy.get('[class*=makeStyles-showMobileNav]').should('be.visible');
    cy.get('[class*=makeStyles-dropdownHeader]').first().should('have.text', 'Join the Index');
    cy.get('[class*=makeStyles-dropdownHeader]').eq(1).should('have.text', 'Overview');
    cy.get('[class*=makeStyles-dropdownHeader]').eq(2).should('have.text', 'Civic Tech Partners');
    cy.get('[class*=makeStyles-dropdownHeader]').last().should('have.text', 'Radical Collaboration');
  });
});
