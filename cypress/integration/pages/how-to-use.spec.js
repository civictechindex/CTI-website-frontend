describe('How To Use Page (Adding Projects to the Index)', () => {
  before(() => {
    cy.visit('/join-index/how-to-add')
  })

  it('header section loads', () => {
    cy.contains('Tag Generator')
  })

  it('footer section loads', () => {
    cy.contains('Add Another Project')
  })

})

