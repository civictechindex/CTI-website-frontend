describe('Contributors Page', () => {
  before(() => {
    cy.visit('/contributors/all')
  })

  it('wait for affiliated orgs to load', () => {
    cy.get('[class*=affiliatedOrgsContainer]').within(() => {
      cy.get('[class*=container]').should('have.length', 24)
    })
  })

  it('load thumbnail wrappers (whatever that is)', () => {
    cy.get('[class*=thumbnailWrapper]').should('have.length', 26)
  })

  it('expands Code for America', () => {
    cy.get('[href*=codeforamerica]').parents('[class*=dropdown]').within(() => {
      cy.get('#dropdownChevron').click()
    })
    cy.get('[href*=codeforamerica]').parents('[class^=makeStyles-container]').within(() => {
      cy.contains('Code for Anchorage');
      cy.get('[class^=makeStyles-thumbnailWrapper]').should('have.length', 86)
    })
  })
})

