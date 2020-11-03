/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/contributors/all')
    })
  
    it('.type() - type into a DOM element', () => {
        cy.get('.affiliated-0-2-9')
        .children('.vectorIcon-0-2-11')
        .click({ force: true })

        cy.get('.dropdown-0-2-49').contains('Code for All');
    })
  })
  