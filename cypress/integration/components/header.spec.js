describe('Header component', () => {
  const menuItems = {
    'Join the Index': ['Tag Generator Wizard', 'How to Add Your Project'],
    'About': ['What is CTI?', 'FAQ', 'Contact Us'],
    'Civic Tech Organizations': [
      'All',
      'Affiliated',
      'Unaffiliated',
      'Index Contributors',
    ],
    'Radical Collaboration': [
      'Collaborate with Us',
      'Donate',
      'Share the CTI',
      'Volunteer with Us',
    ],
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('loads nav links', () => {
    cy.viewport(1280, 800);
    for (const headerItem in menuItems) {
      cy.findLink(headerItem)
        .should('have.attr', 'href', '/')
        .trigger('mouseover')
        .get('[data-cy=menu-item]')
        .within(() => {
          menuItems[headerItem].forEach((menuItem) => {
            cy.contains(menuItem).should('be.visible');
          });
        });
      cy.findLink(headerItem).trigger('mouseout');
    }
  });

  it('mobile menu opens', () => {
    cy.viewport('iphone-8');
    cy.get('[class*=makeStyles-showMobileNav]').should('not.exist');
    cy.get('[data-cy=menuIcon]').click();
    cy.get('[class*=makeStyles-showMobileNav]').should('be.visible');
    cy.get('[class*=makeStyles-dropdownHeader]')
      .first()
      .should('have.text', 'Join the Index');
    cy.get('[class*=makeStyles-dropdownHeader]')
      .eq(1)
      .should('have.text', 'About');
    cy.get('[class*=makeStyles-dropdownHeader]')
      .eq(2)
      .should('have.text', 'Civic Tech Organizations');
    cy.get('[class*=makeStyles-dropdownHeader]')
      .last()
      .should('have.text', 'Radical Collaboration');
  });
});
