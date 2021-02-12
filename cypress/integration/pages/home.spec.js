describe('Home Page', () => {
  before(() => {
    cy.visit('/home')
  })

  beforeEach(() => {
    // cy.visit('/home')
  })

  it('header loads', () => {
    cy.contains('Join the Index')
  })

  it('footer loads', () => {
    cy.contains('The Civic Tech Index is an open-source project.')
  })

  it('title section loads', () => {
    cy.contains('Join a worldwide movement to catalog every open source civic tech project.')
  })

  it ('marketing section loads', () => {
    cy.contains('Requires no coding')
  })

  it ('notable users section loads', () => {
    cy.contains('See how the Civic Tech Index is used by')
  })

  it ('trending topics loads', () => {
    cy.contains('How are people using the CTI?')
  })

  it('get started card loads', () => {
    cy.contains('Ready to get started?')
  })
})
