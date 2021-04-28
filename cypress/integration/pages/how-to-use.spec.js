describe('How To Use Page (Adding Projects to the Index)', () => {
  before(() => {
    cy.visit('/adding-projects-to-the-index')
  })

  it('header section loads', () => {
    cy.contains('Tag Generator')
  })

  it('footer section loads', () => {
    cy.contains('This project is so new we are celebrating every win')
  })

})

