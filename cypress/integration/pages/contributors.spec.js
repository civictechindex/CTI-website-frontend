describe('Contributors Page', () => {
  before(() => {
    cy.visit('/contributors/all')
  })

  it('wait for affiliated orgs to load', () => {
    cy.get('[class*=affiliatedOrgsContainer]').within(() => {
      cy.get('[class*=containerDropdown]', { timeout: 60000 }).should('have.length', 24);
    })
  })

  it('check Code for All', () => {
    cy.get('[class*=affiliatedOrgsContainer]').within(() => {
      cy.get('[class*=makeStyles-codeForAll]').should('have.length', 1)
      cy.get('[href*=codeforall]').within(() => {
        cy.contains('Code for All')
      })
    })
  })

  it('load thumbnail wrappers (whatever that is)', () => {
    cy.get('[class*=thumbnailWrapper]').should('have.length', 26)
  })

  it('expands Code for America', () => {
    cy.get('[href*=codeforamerica]').parents('[class*=containerDropdown]').within(() => {
      cy.get('#dropdownChevron').click()
    })
    cy.get('[href*=codeforamerica]').parents('[class*=containerDropdown]').within(() => {
      cy.contains('Code for Anchorage')
      cy.get('[class*=makeStyles-thumbnailWrapper]').should('have.length', 86)
    })
  })
})
