/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/home')
    })

    it('verify header loading', () => {
        cy.contains("Join the Index")
    })

    it('verify footer loading', () => {
        cy.contains('The Civic Tech Index is an open-source project.')
    })
  
    it('verify title section loads', () => {
        cy.contains('Join a worldwide movement to catalog every open source civic tech project.')
    })

    it ('verify marketing section loads', () => {
        cy.contains('Requires no coding')
    })

    it ('verify notable users section loads', () => {
        cy.contains('See how the Civic Tech Index is used by')
    })

    it ('verify trending topics loads', () => {
        cy.contains('How are people using the CTI?')
    })
})
  