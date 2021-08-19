describe('How To Add Page', () => {
  before(() => {
    cy.visit('/join-index/how-to-add');
  });

  it('header section loads', () => {
    cy.contains('How to Add Your Project');
  });

  it('middle section loads', () => {
    cy.contains('After you have finished adding your tags, click Save Changes');
  });
});
