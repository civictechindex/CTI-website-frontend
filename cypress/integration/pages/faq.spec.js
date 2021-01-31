describe('About Page', () => {
  before(() => {
    cy.visit('/radicalcollaboration/faq')
  })

  it('verify header loads', () => {
    cy.contains("Join the Index")
  })

  it('verify footer loads', () => {
    cy.contains('The Civic Tech Index is an open-source project.')
  })

  it('verify title section loads', () => {
    cy.contains('How can we help?');
  })


})