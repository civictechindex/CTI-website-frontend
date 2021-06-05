/* eslint-disable sort-keys */

const TEST_EMAIL = 'me@example.com'

describe('CTI API', () => {
  before(() => {
    cy.log(`${Cypress.env('REACT_APP_API_URL')}`);
  });

  it('get Hack For LA', () => {
    cy.request(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/hack-for-la/`).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include({
          slug: 'hack-for-la',
          github_name: 'hackforla',
        });
        expect(response.body).to.have.property('id');
      }
    );
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
    }).then(
      (response) => {
        expect(response.status).to.eq(400);
        expect(response.body[0]).to.contain(`We already have a subscription for ${TEST_EMAIL}`);
      });
  });
});
