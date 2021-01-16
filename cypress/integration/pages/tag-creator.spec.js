describe('Tag Creator (Tag Generator)', () => {
  const TEST_URL = 'civictechindex/CTI-website-frontend'
  const TEST_TAGS = [
    'civictechindex',
    'hack-for-la',
    'code-for-america',
    'code-for-all',
    'civic-tech',
    'open-source',
    'opensource',
  ]

  before(() => {
    cy.visit('/tag-generator')
  })

  beforeEach(() => {
    // cy.visit('/tag-generator')
  })

  it('loads', () => {
    cy.get('h2')
      .contains('Tag Generator')
  })

  it('loads correct tags for `civictechindex/CTI-website-frontend` repo - unaffiliated', () => {
    cy.get('[data-cy=radio-unaffiliated]').click()
    cy.get('#container-unaffiliated').within(() => {
      cy.get('#repository-url-unaffiliated').click().type(TEST_URL).type('{enter}')
      cy.get('[data-cy=current-tags]').within(() => {
        cy.get('[data-cy=topic-tag] span').each(($el, index, $list) => {
          const innerText = $el.text()
          expect(TEST_TAGS.indexOf(innerText)).to.be.eq(index)
          expect(TEST_TAGS.indexOf(innerText)).to.be.gt(-1)
        })
      })
    })
  })
})
