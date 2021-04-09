describe('Tag Generator Page (Tag Creator)', () => {
  const AFFILIATED_ORGANIZATION = 'Code for Boston'
  const AFFILIATED_TEST_URL = 'codeforboston / voiceapp311'
  const AFFILIATED_TEST_TAGS = [
    'code-for-boston',
    'code-for-america',
    'alexa',
    'trash',
  ]

  const UNAFFILIATED_TEST_URL = 'https://github.com/civictechindex/CTI-website-frontend.git'
  const UNAFFILIATED_TEST_TAGS = [
    'civictechindex',
    'hack-for-la',
    'code-for-america',
    'code-for-all',
    'civic-tech',
    'open-source',
    'opensource',
  ]

  beforeEach(() => {
    cy.visit('/tag-generator')
  })

  it('loads', () => {
    cy.get('h1')
      .contains('Tag Generator')
  })

  it('loads correct 4 tags for `codeforboston/voiceapp311` - affiliated', () => {
    cy.get('[data-cy=radio-yes]').click()
    cy.get('#container-affiliated').within(() => {
      cy.get('#organization').click().type(AFFILIATED_ORGANIZATION).type('{downarrow}{enter}')
    })
    cy.get('#submitButton').click()
    cy.get('h3').contains(AFFILIATED_ORGANIZATION)
    cy.get('[data-cy=grid-repository]').within(() => {
      cy.get('#repository-url', { force: true }).click().type(AFFILIATED_TEST_URL).type('{enter}')
    })
    cy.get('[data-cy=current-tags]').within(() => {
      cy.get('[data-cy=topic-tag] span').each(($el, index, $list) => {
        const innerText = $el.text()
        expect(AFFILIATED_TEST_TAGS.indexOf(innerText)).to.be.eq(index)
      // expect(AFFILIATED_TEST_TAGS.indexOf(innerText)).to.be.gt(-1)
      })
    })
  })

  it('loads correct 7 tags for `civictechindex/CTI-website-frontend` - unaffiliated', () => {
    cy.get('[data-cy=radio-no]').click()
    cy.get('#submitButton').click()
    cy.get('h3').contains('Unaffliated')
    cy.get('[data-cy=grid-repository]').within(() => {
      cy.get('#repository-url', { force: true }).click().type(UNAFFILIATED_TEST_URL).type('{enter}')
    })
    cy.get('[data-cy=current-tags]').within(() => {
      cy.get('[data-cy=topic-tag] span').each(($el, index, $list) => {
        const innerText = $el.text()
        expect(UNAFFILIATED_TEST_TAGS.indexOf(innerText)).to.be.eq(index)
      })
    })
  })
})

