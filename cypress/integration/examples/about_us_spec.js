/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('.type() - type into a DOM element', () => {
    cy.contains('A movement to index every open source civic tech project on Github');
  })
})
