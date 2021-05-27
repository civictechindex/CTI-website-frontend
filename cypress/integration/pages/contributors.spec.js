
describe('Contributors Page', () => {
  const AFFILIATED_ORGANIZATION1 = 'Code for Las Vegas';
 
describe('Contributors Page', () => {
  before(() => {
    cy.visit('/contributors/all')
  })

  it('loads', () => {
    cy.get('h1').contains('Organizations');

  });

  it('wait for affiliated orgs to load', () => {

    cy.get('[class*=affiliation]').within(() => {
      cy.contains('Affiliated Organizations')
    })
  })

  it('check Code for All', () => {
      cy.get('[class*=affiliatedOrgsContainer]').within(() => {
      cy.get('[class*=makeStyles-codeForAll]').should('have.length', 1)
      cy.get('[href*=codeforall]').within(() => {
        cy.contains('Code for All')
      })
    })
  })

  it('load thumbnail wrappers', () => {
    cy.get('[class*=thumbnailWrapper]').should('have.length', 2);
  });

  it('expands Code for America, find AFFILIATED_ORGANIZATION', () => {

       cy.get('#dropdownChevron').click();

       cy.get('[class*=thumbnailText]').contains('Code for America');

        cy.get('[class*=thumbnailText]').contains('Code for America').get('[class*=afflDropdown]').within(() => {

        cy.get('#dropdownChevron').first().click();

        it('Validating Name', () => {
           cy.get('[data-cy=affthumbnailTextWrapper]').get('[data-cy="affthumbnailText"]').within(() => {

            cy.get('[data-cy=thumbnailTextInfn]').contains(AFFILIATED_ORGANIZATION1);

            cy.get('[data-cy=viewBtnClick]').click();
  
           });
        });
 
    
       });

         
      });  

     
     
  });
})