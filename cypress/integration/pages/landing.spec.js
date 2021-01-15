describe('Landing Page', () => {
  const TEST_EMAIL = 'test@test.test'

  before(() => {
    cy.visit('/')
  })

  it('verify header section loads', () => {
    cy.contains('Join a worldwide movement to catalog every open source civic tech project')
  })

  it('verify footer loads', () => {
    cy.contains('The Civic Tech Index is an open-source project.')
  })

  it('does not capture a registered email address', () => {
    cy.get('input').type(TEST_EMAIL)
    cy.get('[class^=notifyButton]').click()
    cy.contains('That email address has already been registered with us.')
  })
})
