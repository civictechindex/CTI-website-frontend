describe('Projects Page (Search Projects)', () => {
  const SEARCH = 'civic';
  const RESULTS = [
    'civictechindex/CTI-website-frontend',
    'civictechindex/CTI-website-backend',
    'hackforla/civic-opportunity',
    'hackforla/civic-tech-structure',
    'civictechindex/civictechindex-launch',
    'cnk/civictechindexadmin',
    'cnk/CivicTechIndex',
    'cnk/civic-tech-index',
  ];

  beforeEach(() => {
    cy.visit('/projects');
  });

  it('loads', () => {
    cy.get('h1').contains('Search Projects');
  });

  it('loads search tips', () => {
    cy.get('[data-cy=search-projects]').click().type(SEARCH).type('{enter}');
    cy.get('[data-cy=how-to-improve-your-search-results]').click();
    cy.get('[data-cy=search-tips').within(() => {
      cy.get('p').first().contains('Need more search results?');
      cy.get('a').last().click();
      cy.url().should('include', '/join-index');
    });
  });

  it('loads search results', () => {
    cy.get('[data-cy=search-projects]').click().type(SEARCH).type('{enter}');
    cy.get('[data-cy=project-card] [data-cy=project-url]').each(($el, index, $list) => {
      const innerText = $el.text();
      expect(RESULTS.indexOf(innerText)).to.be.at.least(0);
      expect(RESULTS.indexOf(innerText)).to.be.lessThan(RESULTS.length);
    });
  });

  it('loads more when you click View More', () => {
    cy.viewport(1280, 768);
    cy.get('[data-cy=search-projects]').click().type(SEARCH).type('{enter}');
    cy.get('[data-cy=view-Languages').click();
    cy.contains('C++');
    cy.get('[data-cy=view-Affiliations', { timeout: 60000 }).click();
    cy.contains('Code for Baltimore');
  });
});
