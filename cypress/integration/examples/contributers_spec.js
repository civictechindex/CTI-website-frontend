/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/contributors/all')
    })
  
    it('.type() - type into a DOM element', () => {
        // cy.get('.dropdown')
    //     // .children('#dropdownIcon')
    //     // .click({ force: true })

        cy.contains('Code for America');
    })
})
  