describe('Header component', () => {
  beforeEach(() => {
  })

  before(() => {
    cy.visit('/home')
  })

  it('loads nav links', () => {
    cy.get('[class^=makeStyles-nav]').within(() => {
      cy.get('a')
        .should('have.length', 12)
    })
  })

  it('burger works', () => {
    cy.viewport('iphone-8')
    cy.get('[class^=makeStyles-nav]').within(() => {
      cy.get('[class*=makeStyles-showMobileNav]')
        .should('not.exist')
    })
    cy.get('[class^=makeStyles-burger]').first().click()
    cy.get('[class^=makeStyles-nav]').within(() => {
      cy.get('[class*=makeStyles-showMobileNav]')
        .should('be.visible')
      cy.contains('Radical Collaboration')
    })
  })
})
