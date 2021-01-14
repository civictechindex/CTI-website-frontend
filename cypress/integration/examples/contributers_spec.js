/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/contributors/all')
    })
  
    it('.type() - type into a DOM element', () => {
        cy.get('.chevron-0-2-52')
        .click({ force: true, multiple: true })
        // .children('#dropdownIcon')

        cy.contains('Code for Anchorage');
    })
})
  