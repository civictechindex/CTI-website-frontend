describe('About Page', () => {
  before(() => {
    cy.visit('/about')
  })

  beforeEach(() => {
    // cy.visit('/about')
  })

  it('header loads', () => {
    cy.contains('Join the Index')
  })

  it('footer loads', () => {
    cy.contains('The Civic Tech Index is an open-source project, read more on our')
  })

  it('title section loads', () => {
    cy.contains('A movement to index');
  })

  it('marketing section loads', () => {
    cy.contains('With your help')
  })

  it('picture card loads', () => {
    cy.contains('No coding experience needed to submit your project!')
  })

  it('get started card loads', () => {
    cy.contains('Ready to get started?')
  })
})
