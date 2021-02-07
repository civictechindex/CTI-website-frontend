describe('Landing Page', () => {
  before(() => {
    cy.visit('/adding-projects-to-the-index')
  })

  it('verify header section loads', () => {
    cy.contains('Adding Projects to the Index')
  })

  it('verify footer loads', () => {
    cy.contains('Submitted a project or still need help?')
  })

  it('verify 6 steps load', () => {
    cy.get('li').should('have.length', 6)
  })
})
