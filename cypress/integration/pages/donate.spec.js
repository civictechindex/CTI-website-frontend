describe('Donate Page (Make a Donation)', () => {
  before(() => {
    cy.visit('/donate')
  })
  it('applies styles', () => {
    cy.get('[class*=makeStyles-infoThank]')
      .contains('We appreciate your contribution.')
  })
})

