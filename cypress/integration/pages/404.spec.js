describe('Error 404 Page', () => {
  before(() => {
    cy.visit('/InvalidPageURLTest')
  })

  it('header loads on invalid page URL', () => {
    cy.contains('Join the Index');
  });

  it('footer loads on invalid page URL', () => {
    cy.contains('The Civic Tech Index is an open-source project, read more on our');
  });

  it('title section loads on invalid page URL', () => {
    cy.contains('404');
  });

  it('body loads on invalid page URL', () => {
    cy.contains('Oops! The page you are looking for has moved or does not exist.');
  });
})
