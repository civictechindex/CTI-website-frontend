/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('.type() - type into a DOM element', () => {
    cy.get('.heading-0-2-4').contains('A movement to index every open source civic tech project on Github');
  })
})
