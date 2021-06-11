const faker = require('faker')

describe('Footer', () => {
  const BAD_FORMAT_EMAIL = 'test@'
  const DUPLICATE_EMAIL = 'test@test.test'
  const RANDOM_EMAIL = faker.internet.email();

  before(() => {
    cy.visit('/home')
  })

  it('footer loads', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.contains('The Civic Tech Index is an open-source project, read more on our')
    })
  })

  it('navigates to donate', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.contains('Collaborate with Us').click()
      cy.get('[href*=donate]').click()
    })
    cy.get('[class*=makeStyles-infoThank]')
      .contains('We appreciate your contribution.')
  })

  it('does not capture a poorly formatted email address', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.get('input').clear().type(BAD_FORMAT_EMAIL)
      cy.get('button').click()
      cy.contains('The email address you have submitted was invalid.')
    })
  })

  it('does not capture a registered email address', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.get('input').clear().type(DUPLICATE_EMAIL)
      cy.get('button').click()
      cy.contains('That email address has already been registered with us.')
    })
  })

  it('captures a new email address', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.get('input').clear().type(RANDOM_EMAIL)
      cy.get('button').click()
      cy.contains('Thanks for subscribing!')
    })
  })
})
