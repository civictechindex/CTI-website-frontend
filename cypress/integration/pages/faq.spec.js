const SEARCH = 'organization';
const Q1 = 'Can I add multiple projects';
const Q2 = "Our organization doesn't have a parent organization";
const A1 = 'Yes, Please follow the link to add multiple projects.';
const A2 =
  'You can still be a part of Civic tech index, even if your organization is unaffiliated';

describe('FAQ Page (using API)', () => {
  it('gets faq by search', () => {
    cy.visit('/about/faq');
    cy.get('[data-cy=search-faq]').click({ force: true }).type(SEARCH);
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/faqs/*`).as(
      'getFaqs'
    );
    cy.wait('@getFaqs');
    cy.get('[data-cy=faq-question]')
      .first()
      .contains(Q2)
      .click({ force: true });
    cy.get('[data-cy=faq-answer]').first().should('have.text', A2);
  });
});

describe('FAQ Page (using fixture)', () => {
  before(() => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/faqs/`, {
      fixture: 'faqs.json',
    });
    cy.visit('/about/faq');
  });

  it('title section loads', () => {
    cy.contains('How can we help?');
  });

  it('default faq list is loaded', () => {
    cy.get('[data-cy=faq-question]').should('have.length', 10);
    cy.get('[data-cy=faq-question]')
      .first()
      .contains(Q1)
      .click({ force: true });
    cy.get('[data-cy=faq-answer]').first().should('have.text', A1);
  });
});
