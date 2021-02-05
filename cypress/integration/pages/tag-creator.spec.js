describe('Tag Creator (Tag Generator)', () => {
  
    before(() => {
      cy.visit('/tag-generator')
    })
  
    it('loads', () => {
      cy.get('h2')
        .contains('Tag Generator')
    })
  })