const faker = require('faker');

// eslint-disable-next-line max-lines-per-function
describe('Add Organization Workflow', () => {
  const AUTOCOMPLETE_COUNTRY = 'united';
  const AUTOCOMPLETE_ORG = 'hack';
  const VALID_EMAIL = 'test@test.test';
  const VALID_NAME = faker.company.companyName();
  const VALID_TAG = 'test-tag';
  const VALID_CITY = 'Los Angeles';
  const VALID_STATE = 'CA';
  const VALID_FACEBOOK_URL = 'https://www.facebook.com/hackforla';
  const VALID_MEETUP_URL = 'https://www.meetup.com/hackforla';
  const VALID_TWITTER_URL = 'https://www.twitter.com/hackforla';
  const VALID_GITHUB_URL = 'https://github.com/civictechindex/CTI-website-frontend';
  const VALID_WEBSITE_URL = 'https://github.com/civictechindex/CTI-website-frontend';

  const DUPLICATE_NAME = 'Code for All';
  const INVALID_URL = 'invalidurl!@#$';
  const INVALID_FACEBOOK_URL = 'https://facebook.com/asdf';

  before(() => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations')
    cy.visit('/join-index');
    cy.wait('@getOrganizations')
    cy.get('[data-cy=radio-yes]').click();
    cy.wait(100);
  });

  it('loads first step and returns to tag generator', () => {
    cy.get('#container-affiliated').within(() => {
      cy.get('#add-org-link').click();
    });
    cy.wait(100);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('[class*=makeStyles-progress]').contains('Project Information');
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '50');
      cy.get('button').eq(2).click();
    });
    cy.wait(100);
    cy.get('h1').contains('Tag Generator');
    cy.wait(100);
  });

  it('loads first step and enables the next step button', () => {
    cy.get('#container-affiliated').within(() => {
      cy.get('#add-org-link').click();
    });
    cy.wait(100)
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('button').eq(3).should('be.disabled');
      cy.get('input').eq(0).type(VALID_EMAIL);
      cy.get('input').eq(1).type(DUPLICATE_NAME);
      cy.get('input').eq(3).type(INVALID_URL);
      cy.get('input').eq(4).type(VALID_GITHUB_URL);
      cy.get('input').eq(5).type(VALID_TAG);
      cy.get('button').eq(3).should('not.be.disabled');
    });
  });

  it('loads next step and returns to first step', () => {
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('button').eq(3).click();
    });
    cy.wait(100);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '100');
      cy.get('button').eq(2).click();
    });
    cy.wait(100);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '50');
    });
  });

  it('loads next step and submits org with invalid first step data', () => {
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('button').eq(3).click();
    });
    cy.wait(100);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('button').eq(3).click();
    });
    cy.wait(500);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '50');
      cy.get('[class*=MuiFormHelperText]').eq(0).contains('We already have an organization');
      cy.get('[class*=MuiFormHelperText]').eq(1).contains('Enter a valid URL');
    });
  });

  it('corrects data in the first step and loads next step', () => {
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('input').eq(1).clear().type(VALID_NAME);
      cy.get('input').eq(2).type(AUTOCOMPLETE_ORG);
      cy.wait(100);
      cy.get('input').eq(2).type('{downarrow}{downarrow}{enter}');
      cy.get('input').eq(3).clear().type(VALID_WEBSITE_URL);
      cy.get('[class*=MuiFormHelperText]').should('not.exist');
      cy.get('button').eq(3).click();
    });
    cy.wait(100);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '100');
    });
  });

  it('submits org with invalid data in next step', () => {
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('input').eq(0).type(INVALID_FACEBOOK_URL);
      cy.get('input').eq(1).type(VALID_TWITTER_URL);
      cy.get('input').eq(2).type(INVALID_URL);
      cy.get('input').eq(3).type(VALID_CITY);
      cy.get('input').eq(4).type(VALID_STATE);
      cy.get('input').eq(5).type(AUTOCOMPLETE_COUNTRY);
      cy.wait(100);
      cy.get('input').eq(5).type('{downarrow}{downarrow}{enter}');
      cy.get('button').eq(3).click();
    });
    cy.wait(500);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('[class*=MuiFormHelperText]').eq(0).contains('Not a valid Facebook URL');
      cy.get('[class*=MuiFormHelperText]').eq(1).contains('Enter a valid URL');
    });
  });

  it('corrects data in the next step and submits the org', () => {
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('input').eq(0).clear().type(VALID_FACEBOOK_URL);
      cy.get('input').eq(2).clear().type(VALID_MEETUP_URL);
      cy.get('[class*=MuiFormHelperText]').should('not.exist');
      cy.get('button').eq(3).click();
    });
    cy.wait(500);
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('[class*=makeStyles-complete]').contains('Complete');
    });
  });

  it('should return to tag generator', () => {
    cy.get('[class*=makeStyles-dialogContainer]').within(() => {
      cy.get('button').click();
    });
    cy.wait(100);
    cy.get('h1').contains('Tag Generator');
    cy.get('#organization').should('have.value', VALID_NAME);
  });
});
