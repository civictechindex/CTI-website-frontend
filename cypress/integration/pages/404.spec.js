describe('Error 404 Page', () => {
  before(() => {
    cy.visit('/InvalidPageURLTest')
  })

  it('header loads on invalid page URL', () => {
    cy.contains('Join the Index')
  })

  it('footer loads on invalid page URL', () => {
<<<<<<< HEAD
    cy.contains('The Civic Tech Index is an open-source project.')
=======
    cy.contains('The Civic Tech Index is an open-source project, read more on our')
>>>>>>> 05e6005ed4ac28b90fa745b8b949cb02e4bdf10e
  })

  it('title section loads on invalid page URL', () => {
    cy.contains('404');
  })

  it('body loads on invalid page URL', () => {
    cy.contains('Oops! The page you are looking for has moved or does not exist.');
  })
})
