/* eslint-disable sort-keys */

const TEST_EMAIL = 'me@example.com'

describe('CTI API', () => {
  beforeEach(() => {
    // cy.request('POST', '/reset')
  })

  before(() => {
    cy.log(`${Cypress.env('REACT_APP_API_URL')}`);
  })

  xit('gets all contributors', () => {
    cy.request(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`)
      .its('body')
      .should('have.length', 263)
      .its('0')
      .should('include', {
        github_name: 'sfbrigade',
      })
      .and('have.property', 'id')
      .should('match', /^[0-9]*$/);
  });

  it('fails to subscribe existing email', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('REACT_APP_API_URL')}/api/subscribe/`,
      failOnStatusCode: false,
      body: {
        email_address: TEST_EMAIL,
        notification_type: 'test',
      },
    }).should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body[0]).to.contain(`We already have a subscription for ${TEST_EMAIL}`);
    });
  });
})
