describe('How To Use Page (Adding Projects to the Index)', () => {
  before(() => {
    cy.visit('/adding-projects-to-the-index')
  })

  it('header section loads', () => {
    cy.get('h1')
      .contains('Adding Projects to the Index')
  })

  it('footer section loads', () => {
    cy.contains('Submitted a project or still need help?')
  })

  it('6 steps load', () => {
    cy.get('li').should('have.length', 6)
  })
})
