/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('verify header loading', () => {
    cy.contains("Join the Index")
  })

  it('verify footer loading', () => {
    cy.contains('The Civic Tech Index is an open-source project.')
  })

  it('verify title section loads', () => {
    cy.contains('A movement to index');
  })


  it('verify marketing section loads', () => {
    cy.contains('With your help')
  })

  it('verify picture card loads', () => {
    cy.contains('No coding experience needed to submit your project!')
  })

  it('verify get started card loads', () => {
    cy.contains('Ready to get started?')
  })
})
