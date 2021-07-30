describe('How To Add Page', () => {
  before(() => {
    cy.visit('/join-index/how-to-add');
  });

  it('header section loads', () => {
    cy.contains('How to Add Your Project');
  });

  it('middle section loads', () => {
    cy.contains('Repeat until you have finished adding all of your tags');
  });
});
