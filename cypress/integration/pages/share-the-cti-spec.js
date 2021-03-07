describe('Share the CTI Page', () => {

  before(() => {
    cy.visit('/sharethecti')
  })

  it('header loads', () => {
    cy.contains('Join the Index')
  })

  it('footer loads', () => {
    cy.contains('The Civic Tech Index is an open-source project.')
  })

  it('title section loads', () => {
    cy.contains('Share the CTI');
  })

  it('heading section loads', () => {
    cy.contains('Follow us on Social Media')
  })

  it('media info loads', () => {
    cy.contains('Brand Assets & Graphics')
  })


})
