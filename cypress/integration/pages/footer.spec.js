describe('Footer', () => {
  const TEST_EMAIL = 'test@test.test'

  before(() => {
    cy.visit('/home')
  })

  it('footer loads', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.contains('The Civic Tech Index is an open-source project, read more on our')
    })
  })

  it('navigates to about us', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.get('[href*=about]').click()
    })
    cy.contains('With your help')
  })

  it('navigates to donate', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.contains('Radical Collaboration').click()
      cy.get('[href*=donate]').click()
    })
    cy.get('h2').contains('Make a Donation')
  })

  it('does not capture a registered email address', () => {
    cy.get('[class*=containerFooter]').within(() => {
      cy.get('input').type(TEST_EMAIL)
      cy.get('button').click()
      cy.contains('That email address has already been registered with us.')
    })
  })
})
