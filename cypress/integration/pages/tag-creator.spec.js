/* eslint-disable max-lines-per-function */
describe('Tag Generator Page (Tag Creator)', () => {
  const AFFILIATED_ORGANIZATION = 'Code for Boston';
  const CHANGE_AFFILIATED_ORGANIZATION = 'Hack for LA';
  const AFFILIATED_TEST_URL = 'codeforboston / voiceapp311';
  const AFFILIATED_TEST_TAGS = [
    'code-for-boston',
    'code-for-america',
    'alexa',
    'trash',
  ];
  const UNAFFILIATED_NEW_TAGS = ['new-tag', 'tag1', 'tag2', 'tag3', 'tag4'];
  const expectedAffiliatedNewTags = ['civictechindex', 'code-for-all', 'tag1'];
  const UNAFFILIATED_TEST_URL =
    'https://github.com/civictechindex/CTI-website-frontend.git';
  const UNAFFILIATED_TEST_TAGS = [
    'civictechindex',
    'hack-for-la',
    'code-for-america',
    'code-for-all',
    'civic-tech',
    'open-source',
    'opensource',
  ];

  beforeEach(() => {
    cy.intercept('https://api.civictechindex.org/api/organizations/').as(
      'getOrganizations'
    );
    cy.visit('/join-index');
    cy.wait('@getOrganizations');
  });

  it('loads', () => {
    cy.get('h1').contains('Tag Generator');
  });

  it('loads correct 4 tags and affliate new tags for `codeforboston/voiceapp311` - affiliated', () => {
    cy.get('[data-cy=radio-yes]').click();
    cy.get('#container-affiliated').within(() => {
      cy.get('#organization')
        .click()
        .type(AFFILIATED_ORGANIZATION)
        .type('{downarrow}{enter}');
    });
    cy.get('#submitButton').click();
    cy.get('p').contains(AFFILIATED_ORGANIZATION);
    cy.get('[data-cy=grid-repository]').within(() => {
      cy.get('#repository-url', { force: true })
        .click()
        .type(AFFILIATED_TEST_URL)
        .type('{enter}');
    });
    cy.get('[data-cy=current-tags]').within(() => {
      cy.get('[data-cy=generated-topic-tag] span').each(($el, index, $list) => {
        const innerText = $el.text();
        expect(AFFILIATED_TEST_TAGS.indexOf(innerText)).to.be.eq(index);
      });
    });
    cy.get('[data-cy=radio-yes]').click();
    cy.get('[data-cy=add-topic-tags').type('tag1').type('{enter}');
    cy.get('#addTagsButton').click();
    cy.get('p').contains('New tags to add to your repository');
    cy.get('[data-cy=new-tags]').within(() => {
      cy.get('[data-cy=deletable-topic-tag] span').contains('tag1');
    });
    cy.get('#add-tags-button').click();
    cy.get('[data-cy=copy-paste-tags]').within(() => {
      cy.get('[data-cy=copy-paste-topic-tag] span').each(
        ($el, index, $list) => {
          const innerText = $el.text();
          expect(expectedAffiliatedNewTags.indexOf(innerText)).to.be.eq(index);
        }
      );
    });
  });

  it('resets form in the middle of `codeforboston/voiceapp311` - affiliated', () => {
    cy.get('[data-cy=radio-yes]').click();
    cy.get('#container-affiliated').within(() => {
      cy.get('#organization')
        .click()
        .type(AFFILIATED_ORGANIZATION)
        .type('{downarrow}{enter}');
    });
    cy.get('#submitButton').click();
    cy.get('p').contains(AFFILIATED_ORGANIZATION);
    cy.get('[data-cy=grid-repository]').within(() => {
      cy.get('#repository-url', { force: true })
        .click()
        .type(AFFILIATED_TEST_URL)
        .type('{enter}');
    });
    cy.get('[data-cy=radio-no]').click();
    cy.get('#reset-form-button').click();
    cy.contains('Are you affiliated with an organization?');
    cy.get('[data-cy=radio-yes]');
    cy.get('[data-cy=radio-no]');
  });

  xit('change repository url from `codeforboston/voiceapp311` to `civictechindex/CTI-website-frontend` - affiliated', () => {
    cy.get('[data-cy=radio-yes]').click();
    cy.get('#container-affiliated').within(() => {
      cy.get('#organization')
        .click()
        .type(AFFILIATED_ORGANIZATION)
        .type('{downarrow}{enter}');
    });
    cy.get('#submitButton').click();
    cy.get('p').contains(AFFILIATED_ORGANIZATION);
    cy.get('[data-cy=grid-repository]').within(() => {
      cy.get('#repository-url', { force: true })
        .click()
        .type(AFFILIATED_TEST_URL)
        .type('{enter}');
    });
    cy.get('[data-cy=grid-repository-url]').within(() => {
      cy.get('a').contains(AFFILIATED_TEST_URL);
    });
    cy.get('#change-url').click({ force: true });
    cy.get('#repository-url')
      .clear()
      .type(UNAFFILIATED_TEST_URL)
      .type('{enter}');
    cy.get('a').contains(UNAFFILIATED_TEST_URL);
  });

  it('loads correct 7 tags and new tags for `civictechindex/CTI-website-frontend` - unaffiliated', () => {
    cy.get('[data-cy=radio-no]').click();
    cy.get('#submitButton').click();
    cy.get('p').contains('Unaffliated');
    cy.get('[data-cy=grid-repository]').within(() => {
      cy.get('#repository-url', { force: true })
        .click()
        .type(UNAFFILIATED_TEST_URL)
        .type('{enter}');
    });
    cy.get('[data-cy=current-tags]').within(() => {
      cy.get('[data-cy=generated-topic-tag] span').each(($el, index, $list) => {
        const innerText = $el.text();
        expect(UNAFFILIATED_TEST_TAGS.indexOf(innerText)).to.be.eq(index);
      });
    });
    cy.get('[data-cy=radio-yes]').click();
    cy.get('[data-cy=add-topic-tags').type('new-tag').type('{enter}');
    cy.get('[data-cy=add-topic-tags').type('tag1>').type('{enter}');
    cy.get('[data-cy=add-topic-tags').type('tag2 tag3').type('{enter}');
    cy.get('[data-cy=add-topic-tags').type('tag3,tag4').type('{enter}');
    cy.get('#addTagsButton').click();
    cy.get('p').contains('New tags to add to your repository');
    cy.get('[data-cy=new-tags]').within(() => {
      cy.get('[data-cy=deletable-topic-tag] span').contains('new-tag');
      cy.get('[data-cy=deletable-topic-tag] span').contains('tag1');
      cy.get('[data-cy=deletable-topic-tag] span').contains('tag2');
      cy.get('[data-cy=deletable-topic-tag] span').contains('tag3');
      cy.get('[data-cy=deletable-topic-tag] span').contains('tag4');
    });
    cy.get('#add-tags-button').click();
    cy.get('[data-cy=copy-paste-tags]').within(() => {
      cy.get('[data-cy=copy-paste-topic-tag] span').each(
        ($el, index, $list) => {
          const innerText = $el.text();
          expect(UNAFFILIATED_NEW_TAGS.indexOf(innerText)).to.be.eq(index);
        }
      );
    });
  });

  it('change the org form unaffiliated for `civictechindex/CTI-website-frontend` to affiliated', () => {
    cy.get('[data-cy=radio-no]').click();
    cy.get('#submitButton').click();
    cy.get('p').contains('Unaffliated');
    cy.get('#change-org').click();
    cy.contains('Are you affiliated with an organization?');
    cy.get('[data-cy=radio-yes]');
    cy.get('[data-cy=radio-no]');
    cy.get('[data-cy=radio-yes]').click();
    cy.get('#container-affiliated').within(() => {
      cy.get('#organization')
        .click()
        .type(CHANGE_AFFILIATED_ORGANIZATION)
        .type('{downarrow}{enter}');
    });
    cy.get('#submitButton').click();
    cy.get('p').contains(CHANGE_AFFILIATED_ORGANIZATION);
  });
});
