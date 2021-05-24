describe('FAQ Page', () => {
  const SEARCH = 'what';
  const Q = 'What is Civic Tech';
  const A =
    'Civic technology, or civic tech, enhances the relationship between the people and government with software for communications, decision-making, service delivery, and political process. It includes information and communications technology supporting government with software built by community-led teams of volunteers, nonprofits, consultants, and private companies as well as embedded tech teams working within government';

  before(() => {
    cy.visit('/radicalcollaboration/faq')
  })

  it('title section loads', () => {
    cy.contains('How can we help?');
  })

  it('gets faq by search', () => {
    cy.get('[data-cy=search-faq]').click({ force: true }); // need two get's to avoid flaky test
    cy.get('[data-cy=search-faq]').click({ force: true }).type(SEARCH);
    cy.get('[data-cy=faq-question]')
      .first()
      .contains(Q)
      .click({ force: true });
    cy.get('[data-cy=faq-answer]')
      .first()
      .parent()
      .click()
      .contains(A);
  })
})
