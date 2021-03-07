describe('Donate Page (Make a Donation)', () => {
  before(() => {
    cy.visit('/donate')
  })

  it('loads', () => {
    cy.get('h2')
      .contains('Make a Donation')
  })

  it('applies styles', () => {
    cy.get('[class*=makeStyles-infoThank]')
      .contains('We appreciate your contribution.')
  })
})

