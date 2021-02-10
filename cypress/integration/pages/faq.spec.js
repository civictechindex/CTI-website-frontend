describe('FAQ Page', () => {
  before(() => {
    cy.visit('/radicalcollaboration/faq')
  })

  it('title section loads', () => {
    cy.contains('How can we help?');
  })
})
