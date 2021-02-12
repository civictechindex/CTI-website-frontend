describe('Projects Page (Search Projects)', () => {
  const SEARCH = 'civic'
  const RESULTS = [
    'civictechindex/CTI-website-frontend',
    'civictechindex/CTI-website-backend',
    'hackforla/civic-opportunity',
    'hackforla/civic-tech-structure',
    'civictechindex/civictechindex-launch',
  ]

  before(() => {
    cy.visit('/projects')
  })

  it('loads', () => {
    cy.get('h1')
      .contains('Search Projects')
  })

  it('loads search results', () => {
    cy.get('[data-cy=search-projects]').click().type(SEARCH).type('{enter}')
    cy.get('[data-cy=project-card] [data-cy=project-url]').each(($el, index, $list) => {
      const innerText = $el.text()
      expect(RESULTS.indexOf(innerText)).to.be.eq(index)
    })
  })
})
